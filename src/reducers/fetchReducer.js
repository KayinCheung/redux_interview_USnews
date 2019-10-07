import { FETCH_API_PAGINATION, NEW_FETCH_API, API_ERROR, CLEAR_DATA, LOADING_API, LOAD_FROM_STORE } from '../actions/types'

const initialState = {
    data: [],
    loading: true,
    page: 1,
    search: '',
    error: false,
    totalResults: 9999
}

export default function(state = initialState, action){
    
    switch(action.type){

        //When performing search, clear articles, reset page to non-scrolled position.
        case CLEAR_DATA:
            return{
                ...state,
                data: [],
                loading: true,
                page: action.page,
                search: action.search,
                error: false,
            }

        case NEW_FETCH_API:
            return{
                ...state,
                data: action.payload.articles,
                loading: false,
                page: action.page,
                search: action.search,
                error: false,
                totalResults: action.payload.totalResults
            }

        //For pagination, concat existing articles with new ones
        case FETCH_API_PAGINATION:
            return{
                ...state,
                data: (state.data).concat(action.payload.articles),
                loading: false,
                page: action.page,
                search: action.search,
                error: false,
                totalResults: action.payload.totalResults
            }

        case LOAD_FROM_STORE:
        return{
            ...state,
            data: action.payload,
            loading: false,
            page: action.page,
            search: action.search,
            error: true,
            totalResults: action.payload.totalResults
        }
        case LOADING_API:
        return{
            ...state,
            loading: true
        }

        case API_ERROR:
            return{
                ...state,
                error: true,
            }
        default:
            return state;
    }
}