import { useState } from 'react'
import { connect } from 'react-redux'
import { removePwd, updatePwd } from './actions/actions'

function PwdItem(props){
    const [completed, setCompleted] = useState(props.Pwd.completed)
    async function handleUpdate(e){
        e.preventDefault()
        
       await props.updatePwd(props.Pwd._id, {completed: !completed})
        setCompleted(!completed)
    }

    function handleClick(e){
        e.preventDefault()
        props.removePwd(e.target.id,
            props.Pwd)
    }
    return(
        <>
        <h2>{props.Pwd.title}</h2>
        <p>{props.Pwd.textContent}</p>
        <h6>{props.Pwd.created_at}</h6>
        <h3 onClick={handleUpdate}>{completed? "DONE" : "NOT DONE"}</h3>
        <button id = {props.Pwd._id} onClick={handleClick}>DELETE</button>
        </>
    )
}

export default connect(null, {removePwd, updatePwd})(PwdItem)