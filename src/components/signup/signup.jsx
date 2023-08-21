import { useRef, useState } from "react"
import "./signup.css"
import { Link } from "react-router-dom";
import {auth} from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();

    const handleSubmit = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth ,email,password).then((userCredential)=>{
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <>
        <div className="signup">
            <h4 className="signup-header">
                Signup
            </h4>
            <div>
                <label htmlFor="email">Email</label>
                <input required type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input required type="text" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input required type="text" name="confirmPassword" id="confirmPassword" onChange={(e)=>setconfirmPassword(e.target.value)}/>
                
            </div>
            <button onClick={handleSubmit}>Sign Up</button>
        </div>
        </>
    )
}