const INITIAL_STATE ={
    users:[
        {
        name: "Hasnain Raza",
        email: "razasoomro994@gmail.com"
      },
      {
          name: "Sameer" ,
          email : "Sameer@gmail.com",
      }
  ]  
  }
  
  export default (state = INITIAL_STATE , action )=>{
             switch(action.type){
                 case "SETDATA" :
                     return({
                         ...state ,
                         users:[...state.users, action.data ],
                         name: "raza",
                     })
                     
                   default : return state ;
             }
  }
  
  