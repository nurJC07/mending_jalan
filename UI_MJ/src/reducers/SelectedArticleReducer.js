import {
    SELECT_ARTICLE,
    RECENT_ARTICLE
} from '../actions/types';

// const INITIAL_STATE = '';
const INITIAL_STATE = {articleId: 0, judul: '', image: '', description: ''};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        
        case SELECT_ARTICLE:
            return action.payload;
        
        case RECENT_ARTICLE:
            return {...INITIAL_STATE };

        default :
            return state;
    }
}