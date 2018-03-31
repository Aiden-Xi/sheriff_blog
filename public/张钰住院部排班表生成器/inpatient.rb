# frozen_string_literal: true
require 'rest-client'
require 'roo'
require 'spreadsheet'
require 'rails'

class Inpatient

  class << self
    # 服务提供方： http://tool.bitefu.net/jiari/  对应服务URL: "http://tool.bitefu.net/jiari/?d=#{date_string}"  - 完全免费
    # 检查具体日期是否为节假日，工作日对应结果为 0, 休息日对应结果为 1, 节假日对应的结果为 2；
    # date_string 格式要求
    # 单个时间   "20170527"
    # 返回结果： {"20170527": 0}
    # 多个时间： "20130101,20130103,20130105,20130201,20180404,20180405,20180406,20180407,20180408"
    # 返回结果：
    # {
    #     20180404: "0",
    #     20180405: "2",
    #     20180406: "1",
    #     20180407: "1",
    #     20180408: "0"
    # }
    # 判断节假日数据接口
    def is_holiday?(date_string)
      return nil unless date_string.present?
      url = "http://tool.bitefu.net/jiari/?d=#{date_string}"
      result = RestClient.get url
      date_string.include?(',') ? JSON.parse(result) : {date_string => result}
    end

    # 拼接当前月份
    def get_current_date(date)
      date_string = []
      start_date = Date.parse(date.beginning_of_month.strftime('%F'))
      end_date = Date.parse(date.end_of_month.strftime('%F'))
      days = (end_date.mjd - start_date.mjd) + 1
      days.times do |i|
        current_data = start_date + i.days
        date_string << [current_data.strftime('%Y%m%d'), current_data.strftime('%A')]
      end
      date_string
    end

    # 构建假期数据
    def construct_holiday_dates(date, date_string)
      holiday_dates = is_holiday?(date_string.map(&:first).join(','))

      empty_arr = ['', '', '', '', '', '', '', '']

      # 开始构建虚拟数据 - 二维数据
      virtual_data_1 = [
          ["#{date.strftime('%m')}月", '', '', '', '', '', '', ''],
          ["门诊排班", '', '', '', '', '', '', ''],
          %w(星期 一 二 三 四 五 六 日)
      ]

      virtual_data_2 = [
          empty_arr,
          empty_arr,
          [{time: '住院部', holiday: 3}, '', '', '', '', '', '', '']
      ]

      temp_arr_1 = empty_arr.deep_dup
      temp_arr_2 = empty_arr.deep_dup

      date_string.each_with_index do |date_string_arr, index|
        time_index = index + 1
        case date_string_arr[1]
          when 'Monday' then count = 1
          when 'Tuesday' then count = 2
          when 'Wednesday' then count = 3
          when 'Thursday' then count = 4
          when 'Friday' then count = 5
          when 'Saturday' then count = 6
          when 'Sunday' then count = 7
          else raise ArgumentError, "No parameters"
        end

        temp_arr_1[count] = {time: time_index, holiday: holiday_dates[date_string_arr[0]]}

        if holiday_dates[date_string_arr[0]].to_i > 0
          temp_arr_2[count] = {time: time_index, holiday: holiday_dates[date_string_arr[0]]}
        end

        if count == 7 || time_index == date_string.length
          virtual_data_1.push temp_arr_1
          virtual_data_1.push empty_arr
          virtual_data_2.push temp_arr_2
          virtual_data_2.push empty_arr

          temp_arr_1 = empty_arr.deep_dup
          temp_arr_2 = empty_arr.deep_dup
        end
      end

      return (virtual_data_1 + virtual_data_2)
    end

    # 获取数据 - 解析并且生成XLSX表
    def download(date = nil)
      date ||= Time.now + 1.months
      virtual_data = construct_holiday_dates(date, get_current_date(date))
      title = "#{date.strftime('%Y年%m月')}住院部排班"
      filename = "#{title}.xls"

      # 导出表格
      xls_report = "/Users/xixiaoyu/Desktop/#{filename}"

      book = Spreadsheet::Workbook.new
      sheet = book.create_worksheet name: title
      body_format = init_body_format

      virtual_data.each_with_index do |array, column_index|
        format_check(sheet, column_index, array, 0)
        format_check(sheet, column_index, array, 1)
        format_check(sheet, column_index, array, 2)
        format_check(sheet, column_index, array, 3)
        format_check(sheet, column_index, array, 4)
        format_check(sheet, column_index, array, 5)
        format_check(sheet, column_index, array, 6)
        format_check(sheet, column_index, array, 7)
        sheet.row(column_index).default_format = body_format
      end

      book.write xls_report
    end

    def format_check(sheet, column_index, array, index)
      if array[index].is_a?(Hash) && array[index].dig(:holiday).to_i > 0
        sheet.row(column_index).set_format index, init_date_format
      end
      sheet[column_index, index] = array[index].is_a?(String) ? array[index] : array[index].dig(:time)
    end

    def init_date_format(options = {})
      Spreadsheet::Format.new({
                                  color: :red,
                                  align: :center,
                                  vertical_align: :center,
                                  text_wrap: true
                              }.merge!(options))
    end

    # 定义主体格式
    def init_body_format(options = {})
      Spreadsheet::Format.new({
                                  color: :black,
                                  size: 10,
                                  vertical_align: :center,
                                  align: 'center'
                              }.merge!(options))
    end

    # 设置单元格大小
    def set_cells_size(sheet, headers)
      header_format = init_header_format

      sheet.row(0).concat headers
      0.upto(headers.length - 1) {|column| sheet.row(0).set_format(column, header_format)}

      # 设置高度
      sheet.row(0).height = 25

      # 设置宽度
      0.upto(headers.length - 1) {|column| sheet.column(column).width = 18}
    end

    # 定义表头格式
    def init_header_format(options = {})
      Spreadsheet::Format.new({
                                  color: :white,
                                  weight: :bold,
                                  size: 10,
                                  align: :left,
                                  vertical_align: :center,
                                  diagonal_color: :builtin_black,
                                  pattern: 1,
                                  pattern_fg_color: :green,
                                  pattern_bg_color: :white
                              }.merge!(options))
    end

  end
end

Inpatient.download
