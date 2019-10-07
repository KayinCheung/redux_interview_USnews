 
import constant from '../Constant'
import { LOADING_API, NEW_FETCH_API, FETCH_API_PAGINATION, API_ERROR, CLEAR_DATA, LOAD_FROM_STORE } from './types'
import { loadFromLocalStorage } from '../store'

export const fetchAPI = (search = '', page = 1 ) => dispatch =>{

    if (page === 1){
        dispatch({
            type: CLEAR_DATA,
            loading: true,
            payload: {},
            page: page
        })
    } else {
        dispatch({
            type: LOADING_API,
            loading: true,
            page: page
        })
    }

    fetch(`https://newsapi.org/v2/everything?`+
            `domains=${constant.domain}` +
            `&apiKey=${constant.APIKey}` +
            `&pageSize=${constant.page_size}` +
            `&page=${page}` +
            `&q=${search}`)
    .then(response => response.json())
    .then(data => {

        if (data.status === "error"){
            dispatch({
                type: API_ERROR,
                payload: data,
                search: search,
                page: page,
                loading: false
            })

        } else if (page === 1){
            dispatch({
                type: NEW_FETCH_API,
                payload: data,
                search: search,
                page: page,
                loading: false
            })
        } else { 
            dispatch({
                type: FETCH_API_PAGINATION,
                payload: data,
                search: search,
                page: page,
                loading: false
            })
        }
    }).catch( err => {
        //Error from server, load from local storage

        console.log(err)
        
        let savedData = loadFromLocalStorage()
        dispatch({
            type: LOAD_FROM_STORE,
            payload: savedData.fetch.data,
            search: savedData.fetch.search,
            page: savedData.fetch.page,
            loading: false,
            error: true
        })
      })
}
