import { Link } from 'react-router-dom';
import { useState } from "react"
import axios from 'axios'

const Login = () => {

    const [formData] = useState({
        username: '',
        password: ''
    })

    const [form, setForm] = useState(formData)

    const onSubmitHandler = (e) => {
        e.preventDefault()
       
            axios
            .post("http://localhost:5000/auth/login", form)
            .then(data => console.log(data))
            .catch(error => console.log(error))
        }

    const onChangeHandler = (e) => {
        e.preventDefault()
        setForm({...form, [e.target.name]:e.target.value})
    }

    return (
      <div className="container">
       <h3>Login</h3>
       <form name="form" onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={form.username} onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={form.password} onChange={onChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
      </div>
    );
  }
  
  export default Login;