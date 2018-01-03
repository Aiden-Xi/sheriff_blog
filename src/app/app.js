import CSSMoudles from 'react-css-modules'
import styles from './app.scss'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { createHistory } from 'history'
import { Icon, Button } from 'antd'

const history = createHistory()

class App extends React.Component {

    constructor(props) {
        super(props)

        this.left = () => {
            history.go(-1)
        }

        this.right = () => {

        }
    }

    componentWillMount() {
        this.redirect()
    }

    componentDidUpdate() {
        this.redirect()
    }

    redirect() {
        if (!this.props.children) {
            const user_session_key = Cookies.get('user_session_key')
            if (user_session_key) {
                this.context.router.push('/student_list')
            } else {
                this.context.router.push(`/login`)
            }
            console.log('cookies =========', Cookies.get('user_session_key'))
        }
    }

    render() {
        return (
                <div styleName="app--wrap">
                    <Header/>
                    <div styleName="main--wrap">
                        {this.props.children}
                    </div>
                    <Button onClick={this.left}
                            large
                            shape="circle">
                    <Icon type="left-circle"/>
                    </Button>
                    <Footer/>
                </div>
        )
    }
}

App.contextTypes = {
    router: React.PropTypes.object
};

export default CSSMoudles(App, styles)
