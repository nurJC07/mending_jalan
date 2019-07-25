// reducer
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SelectProdukReducer from './SelectProdukReducer';
import SelectedArticleReducer from './SelectedArticleReducer'



export default combineReducers({ 
    auth: AuthReducer,
    selectedProduk: SelectProdukReducer,
    selectedArticle: SelectedArticleReducer
});