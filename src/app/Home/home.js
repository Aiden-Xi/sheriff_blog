import React from 'react';


class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>This is home page!!!</h1>
            </div>
        )
    }
}

Home.contextTypes = {
    router: React.PropTypes.object
};

export default Home
