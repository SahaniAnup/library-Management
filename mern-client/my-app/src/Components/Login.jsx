import React ,{useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredentials) => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="container login-container">
        <div className="row mt-5">
          <div className="col-md-6 mx-auto shadow">
            <h1 className="mb-4">User Login</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="form-label">Email</label>
                <input name="email" type="email" className="form-control" required />
              </div>
              <div className="mb-4">
                <label className="form-label">Password</label>
                <input name="password" type="password" className="form-control" required />
              </div>
              <div className="mb-4">
                <button type="submit" className="btn btn-danger">
                  Login
                </button>
                New User? <Link to="/register">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
