import { useState } from 'react'
import { connect } from 'react-redux'
import { removePassword, updatePassword } from './actions/actions'

function PasswordItem(props){
    const [completed, setCompleted] = useState(props.password.completed)
    async function handleUpdate(e){
        e.preventDefault()
        
       await props.updatePassword(props.password._id, {completed: !completed})
        setCompleted(!completed)
    }

    function handleClick(e){
        e.preventDefault()
        props.removePassword(e.target.id,
            props.password)
    }
    return(
        <>
        <h2>{props.password.title}</h2>
        <p>{props.password.textContent}</p>
        <h6>{props.password.created_at}</h6>
        <h3 onClick={handleUpdate}>{completed? "DONE" : "NOT DONE"}</h3>
        <button id = {props.password._id} onClick={handleClick}>DELETE</button>
        </>
    )
}

export default connect(null, {removePassword, updatePassword})(PasswordItem)