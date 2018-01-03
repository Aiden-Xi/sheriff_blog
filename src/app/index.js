export default {
    path: '/',

    getChildRoutes(partialNextState, cb) {
            cb(null, [
                // require('./Login').default,
                // require('./StudentList').default,
                // require('./ApplyList').default,
            ])
    },

    getIndexRoute(location, cb) {
            cb(null, require('./Home').default)
    },

    getComponent(nextState, cb) {
            cb(null, require('./app').default)
    }
}