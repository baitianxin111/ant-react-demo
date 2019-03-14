//redux.js
import {createStore} from 'redux'


const reducer = (initialState = {
    name: 'mayun',
    pass: 'abc'
}, actions) => {
    switch (actions.type) {
        case 'CHANGE':
            return {
                name: actions.name,
                pass: actions.pass
            }
        default:
            return initialState
    }
}

function actionsCreator(obj) {
    return {
        type: 'CHANGE',
        name: obj.name,
        pass: obj.pass
    }
}
const store = createStore(reducer)
export { actionsCreator , store}

 



