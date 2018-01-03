export default {
    path: 'home',

    getComponent(nextState, cb) {
        cb(null, require('./Home').default)
    }
}