//libraries
import React,{ useEffect, useState} from "react";
import { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { AuthContext } from "../authcontext/authcontext";
import { a } from "framer-motion/client";

const Login = () => {
    const navigate = useNavigate();
    const {logemail, setlogemail,logpassword,setlogpassword}=useContext(AuthContext)

    const reset = () => {
        setlogemail("");
        setlogpassword("");
    }

    const authrole=async(userid)=>{
        console.log(userid);
        
        const ath = await axios.get(`https://h-m-backend.onrender.com/user/${userid}`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        localStorage.setItem("role",ath.data.role)
        localStorage.setItem("name",ath.data.name)
        localStorage.setItem("userid",ath.data._id) 
    }

    const fetchlogin = async()=>{
        try {
            let response = await axios.post(`https://h-m-backend.onrender.com/user/login`,{email:logemail,password:logpassword})
            let token=response.data.acessToken
            let userid=response.data.userid
                localStorage.setItem("token",token)
                alert("login success");
                reset()
                navigate("/")
                authrole(userid)  
            
        } catch (error) {
            alert("login failed \n Check Email and Password or if you are new Register first");
            console.log(error);
        }
        
        
    }

    return (
        <>
        <div>
            
            <div className="details" style={{marginTop:"200px"}}>
            <h1 style={{textAlign:"center",margin:"10px"}}>Login</h1>
                <div className="form">
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" placeholder="Email" value={logemail} onChange={(e)=>setlogemail(e.target.value)}/>
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" placeholder="Password" value={logpassword} onChange={(e)=>setlogpassword(e.target.value)}/>
                    <br />
                    <br />
                    <button onClick={fetchlogin}>Login</button>
                </div>
            </div>
            <div className="register">
                <p>Don't have an account?</p>
                <button onClick={()=>navigate("/signup")}>Register</button>
            </div>
        </div>
        </>
    );
};

export default Login;