
import moment from 'moment'

function offsetDateTime(current, offset){
    return (moment(current).add(offset, 'hours').format('YYYY-MM-DD hh:mma'))
}


export {offsetDateTime}

