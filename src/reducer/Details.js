const initialState={
    items:{
        "phnOfUser":null
    }
    
}

 const loginState =(state=initialState,action)=>{
   
    if(action.type=='New_items'){
       
        
        const newLoginState={
            phnOfUser:action.value
        }
        return{
            ...state,
            items: newLoginState
    
        }
    }
    

    return state;
  
  }

  export default loginState;

