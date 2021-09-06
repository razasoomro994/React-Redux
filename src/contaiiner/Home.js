import React from 'react' ;
import "./style.css" ;
import {connect} from "react-redux"
import {set_data} from "../../store/action"

class Home extends React.Component {


    static getDerivedStateFromProps(props, state){
        console.log("props==>",props)
    }

    render() {
        // console.log ("props==>", this.props )
       
        let user ={
            name: "hasnain",
            email: "hasnain@gmail.com"
        }
        console.log("userss===>",this.props.users)
        return (

            <div>
                <h1>Home </h1>
                <button onClick={()=> this.props.set_data(user)}>SETDATA</button>
            </div>
        )
    }
}
const mapStateToProps= (state)=>({
    users: state.users
})

const mapDispatchToProps =(dispatch)=> ({

    set_data : (data)=>  dispatch(set_data(data))

    })



export default connect(mapStateToProps,mapDispatchToProps ) (Home) ;
