import PasswordItem from './passwordItem'
import { connect } from 'react-redux'

const mapStateToProps = (state) =>({
    passwordData: state.passwordData
})


function PasswordList(props){
    return(
        <>
        {props.passwordData.map(password =>{
           return( 
            <>
                <PasswordItem password={password} key={password._id}/>
            </>
           )
        })}
        </>
    )
}

export default connect(mapStateToProps, {})(PasswordList)