import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import rootReducer from './reducers'

function saveToLocalStorage(state){
    try{
        const seralizedState = JSON.stringify(state)
        localStorage.setItem("state", seralizedState)
    } catch(e){
        console.log(e)
    }
}

export function loadFromLocalStorage(){
    try{
        const seralizedState = localStorage.getItem("state")
        if (seralizedState === null) return undefined
        console.log(JSON.parse(seralizedState))
        return JSON.parse(seralizedState)
    } catch(e){
        console.log(e)
        return undefined
    }
}

const initialState = {}

const middleware = [thunk]

export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

//On successful API calls, save to localstorage
//Do not save to state if no articles, on error or loading state
store.subscribe(() => {
    let state = store.getState()
    if (state.fetch.error || state.fetch.loading) {
        //console.log("Error or loading. Do not save to store")
        return
    }
    try{
        if (state.fetch["data"].length >= 1){
            saveToLocalStorage(store.getState())
        }
    } catch(e){
        console.log(e)
    }
    

})