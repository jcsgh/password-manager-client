import { Link } from 'react-router-dom';
import { useState } from "react"
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Message from './Message';

const Login = () => {

    let history = useHistory()

    const [formData] = useState({
        username: '',
        password: ''
    })

    const [form, setForm] = useState(formData)

    const handleSubmit = (e) => {
        e.preventDefault()
       
            axios
            .post("https://josh-password-manager.herokuapp.com/auth/login", form)
            .then(data => {
                console.log(data.data)
                localStorage.setItem('user', data.data.user.username)
                history.push("/passwords");
            })
            .catch(error => console.log(error))
        }

    const handleChange = (e) => {
        e.preventDefault()
        setForm({...form, [e.target.name]:e.target.value})
    }

    return (
      <div className="auth-container">
       <h3>Login</h3>
       <form name="form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={form.username} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        <Link to="/auth/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
      </div>
    );
  }
  
  export default Login;