require 'colorize'

class NumberService
  def number
    12
  end
end

class Describe
  attr_reader :context_name, :examples

  def initialize(context_name, &block)
    @context_name = context_name
    @describes = []
    @examples = []
    instance_eval &block
  end

  def describe(context_name, &block)
    describes << Describe.new(context_name, &block)
  end

  def it(context_name, &block)
    puts "context_name = #{context_name}"
    examples << Example.new(context_name, &block)
  end

  def test
    puts context_name
    describes.each do |describe_node|
      puts "  " + describe_node.context_name
      describe_node.examples.each do |example_node|
        color = example_node.test_result ? :blue : :red
        puts "uiuiu - #{example_node.test_result}"
        if example_node.test_result
          puts "   " + example_node.context_name.colorize(color)
        else
          puts "Error"
        end
      end
    end
  end

  private
  attr_accessor :describes
end

def describe(context_name, &block)
  Describe.new(context_name, &block)
end

class Example
  attr_reader :context_name, :test_result

  def initialize(context_name, &block)
    @context_name = context_name
    instance_eval &block
  end

  def expect(result)
    @result = result
    self
  end

  def to(expectation)
    puts "result = #{result}"
    @test_result = expectation.call(result)
  end

  def to_not(expectation)
    @test_result = expectation.call(result)
  end

  def eq(expectation)
    # Proc.new { |n| n.eql?(expectation) }
    Proc.new do |n|
      puts "#{[n, expectation, n.eql?(expectation)]}"
      n.eql?(expectation)
    end
  end

  private
  attr_reader :result
end


rspec = describe NumberService do
  describe '#number' do
    it 'returns 12' do
      expect(NumberService.new.number).to eq(12)
    end
  end
end

rspec_not = describe NumberService do
  describe '#number' do
    it 'returns 12' do
      expect(NumberService.new.number).to_not eq(13)
    end
  end
end

puts "#{File.dirname(__FILE__)}"

rspec.test

rspec_not.test
