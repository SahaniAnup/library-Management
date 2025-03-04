import React,{useState,useContext} from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import { AuthContext } from '../context/AuthProvider'



export default function Register() {
  const {ErrorMessage,setErorMessage} = useState('')
  const {signUpWithGmail,createUser} = useContext(AuthContext)
 console.log(signUpWithGmail)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/'

  const handleRegister =() => {
    signUpWithGmail().then((result)=>{
      const user = result.user
      navigate(from,{replace:true})
    }).catch((error) => console.log(error)) 
  }

  const handleSignUp = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    createUser(email, password).then((userCredentials) => {
      const user = userCredentials.user
  }).catch((error) =>{console.log(error)
    })
}


  return (
    <>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 mx-auto shadow">
          <h1 className="mb-4">User Registration</h1>
          <form onSubmit={handleSignUp}>
            <div className="mb-4">
              <label  className="form-label">Email</label>
              <input name="email" type="text" className="form-control" />
            </div>
            
            <div className="mb-4">
              <label className="form-label">Set Password</label>
              <input name="password" type="password" className="form-control" />
            </div>


            <div className="mb-4">
            
              
              <input type="Submit" value="Register" className="btn btn-primary" />
             Already a user?  <Link to="/login">Login</Link>
            </div>
            

          </form>
          <div className="mb-4">
            <GoogleButton onClick={handleRegister}/>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}
