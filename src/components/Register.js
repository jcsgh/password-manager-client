import { Link } from 'react-router-dom';
import { useState } from "react"
import axios from 'axios'

const Register = () => {

    const [formData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    })

    const [form, setForm] = useState(formData)

    const handleSubmit = (e) => {
        e.preventDefault()
       
            axios
            .post("http://localhost:5000/auth/register", form)
            .then(data => console.log(data))
            .catch(error => console.log(error))
        }

    const handleChange = (e) => {
        e.preventDefault()
        setForm({...form, [e.target.name]:e.target.value})
    }

    return (
      <div className="auth-container">
       <h3>Register</h3>
       <form name="form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstname">First name</label>

                        <input type="text" name="firstname" value={form.firstname} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" name="lastname" value={form.lastname} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={form.username} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={form.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" className="btn btn-link">Login</Link>
                    </div>
                </form>
      </div>
    );
  }
  
  export default Register;