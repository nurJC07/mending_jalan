import {
    SELECTED_PRODUCT
} from '../actions/types';

// const INITIAL_STATE = '';
const INITIAL_STATE = {productId: 0, judul: '', highlight: '', image: '', description: ''};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        
        case SELECTED_PRODUCT :
            return action.payload;

        
        default :
            return state;
    }
}