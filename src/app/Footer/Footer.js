import React from 'react';
import CSSMoudles from 'react-css-modules'
import styles from './footer.scss'

class Footer extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div styleName="footer--wrap">
                <p>
                    <span><a href="http://www.miitbeian.gov.cn" target="_blank">沪ICP备16029944号</a></span>
                </p>
                <p>
                    <span>Copyright©2016 liuyangbao.com All Rights Reserved</span>
                </p>
            </div>
        )
    }
}


export default CSSMoudles(Footer, styles)
