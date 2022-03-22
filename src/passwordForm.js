import {useState} from 'react'
import { connect } from 'react-redux'
import { addPassword } from './actions/actions'

function PasswordForm(props){
    const [initialForm] = useState({
        title: "",
        password: "",
        created_at:"",
        completed: false
    })

    //universal form handler
    const [form, setForm] = useState(initialForm)

    //universal change handler
    function handleChange(e){
        console.log(e.target.name, e.target.value)
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addPassword(form)
        setForm(initialForm)

    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Password for: </label>
            <input type="text" name="title" onChange={handleChange}/>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" onChange={handleChange}/>
            <label htmlFor="created_at">Date Created:</label>
            <input type="date" name="created_at" onChange={handleChange}/>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default connect(null, {addPassword})(PasswordForm)