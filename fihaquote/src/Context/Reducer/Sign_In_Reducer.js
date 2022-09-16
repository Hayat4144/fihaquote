

const initialstate = {
    IsLogdin: false,
    IsError:false,
    IsSuccess:false,
    
}
const Sign_In_Reducer = (state= initialstate,action)=>{
    switch (action.type) {
        case 'SIGNIN':
            return { ...state,IsLogdin:true,IsSuccess:true};
            
        case 'SIGIN_ERROR':
            return {...state,IsError:true};

	case 'IsLogout':
		    return {...state,IsLogdin:false};
	    
        default:
            return state;
    }

}

export default Sign_In_Reducer ;
