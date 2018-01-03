import React from 'react';
import CSSMoudles from 'react-css-modules'
import styles from './header.scss'
import { Button } from 'antd'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.user = Cookies.get('user') && JSON.parse(Cookies.get('user'))
        this.signout = this.signout.bind(this)
    }

    signout() {
        // 清空Cookies
        Cookies.remove('user_id')
        Cookies.remove('user_session_key')
        Cookies.remove('user')
        this.context.router.push('/login')
    }

    render() {
        return (
            <div styleName="header--wrap">
               <button>
                   <img src={require('../../assets/img/AALogo.png')}/>
               </button>

                <h1>自动化网申</h1>
                <div styleName="signout--wrap">
                    <span>{this.user && this.user.real_name}</span>
                    <Button onClick={() => this.signout()}>注销</Button>
                </div>
            </div>
        )
    }
}

Header.contextTypes = {
    router: React.PropTypes.object
}


export default CSSMoudles(Header, styles)
