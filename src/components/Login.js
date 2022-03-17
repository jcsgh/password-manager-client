import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="container">
       <h3>Login</h3>
       <form name="form">
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
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