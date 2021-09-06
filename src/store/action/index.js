const set_data =(data)=>{

    return (dispatch)=>{
        console.log(data)
        dispatch({type: "SETDATA",data :data})
    

    console.log("chal raha hai ....")
}
}

export {set_data};