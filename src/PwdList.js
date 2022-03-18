import Pwd from './Pwd'
import { connect } from 'react-redux'

const mapStateToProps = (state) =>({
    pwdData: state.pwdData
})


function PwdList(props){
    console.log(props.pwdData)
    return(
        <>
        {props.pwdData.map(pwd =>{
           return( 
            <>
                <Pwd pwd={pwd} key={pwd._id}/>
            </>
           )
        })}
        </>
    )
}

export default connect(mapStateToProps, {})(PwdList)