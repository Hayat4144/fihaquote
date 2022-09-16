import { combineReducers } from "redux";
import Sign_In_Reducer from "./Sign_In_Reducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist' ;
const All_My_Reducres = combineReducers({
    Sign_In_Reducer,
   
})


const persistConfig = {
    key: 'counter',
    storage,
};
const PersistReducer = persistReducer(persistConfig, All_My_Reducres);
export default PersistReducer ;
