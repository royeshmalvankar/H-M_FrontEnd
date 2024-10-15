import { Button } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import Loading from "../loading&error/loading"
import Error from "../loading&error/error"
import { useNavigate } from "react-router-dom"

const Myaccount = () => {
    const [data,setData]=useState([])
    const [update,setUpdate]=useState(false)
    const [oldpassword,setoldPassword]=useState("")
    const [newpassword,setnewPassword]=useState("")
    const [confirmPassword,setconfirmPassword]=useState("")

    const navigate=useNavigate()

    const id = localStorage.getItem("userid") || "";
    const token = localStorage.getItem("token") || ""
        if (!id) {
        setError(true);
        return;
        }


    const [loading,setLoding]=useState(false)
    const [error,setError]=useState(false)

    useEffect(()=>{
        if (id) {
            getdata()
        } else {
            setError(true)
            console.error("No user ID found in localStorage.")
        }
    },[])
    const getdata=async()=>{
        setLoding(true)
       try {
         const response=await axios.get(`https://h-m-backend.onrender.com/user/${id}`,{
             headers:{
                 "Authorization": `Bearer ${token}`
             }
         })
         if (!response.data) {
            setError(true);
            return;
          }
         setData(response.data)
         console.log(response)
         setLoding(false)
       } catch (error) {
           setError(true)
           console.log(error)
           setLoding(false)
       }
    }
    const updatepass=async()=>{
        
        if(newpassword!==confirmPassword){
            alert("Confirm password does not match")
            return
        }
           try {   
             const response=await axios.patch(`https://h-m-backend.onrender.com/user/resetpassword`,{
                 oldpassword,
                 newpassword
             },{
                 headers:{
                     "Authorization": `Bearer ${token}`
                 }
             })
             alert("Password changed successfully")
             setoldPassword("")
             setnewPassword("")
             setconfirmPassword("")
             localStorage.removeItem("token")
             localStorage.removeItem("role")
             localStorage.removeItem("name")
             localStorage.removeItem("userid")
             navigate("/login")
             setUpdate(false)
           } catch (error) {
               alert("Wrong Current Password")
               console.log(error)
           }
    }

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }

    return (
        <div>
            <h1 style={{textAlign:"center",margin:"10px",fontSize:"30px"}}>My Account</h1>
            <br />
            <br />
            <div style={{textAlign:"center"}}>
                <h3>Name: <span style={{fontStyle:"italic",fontWeight:"bold"}}>{data.name}</span></h3>
                <h3>Email: <span style={{fontStyle:"italic",fontWeight:"bold"}}>{data.email}</span></h3>
                <br />
                <Button style={{margin:"10px"}} onClick={() => setUpdate(!update)}>Change Password</Button>
            </div>
            <div style={{textAlign:"center"}}>
                {update && <div className="form">
                    <h3>Current Password</h3>
                    <input type="password" value={oldpassword} onChange={(e)=>setoldPassword(e.target.value)}/>
                    <h3>New Password</h3>
                    <input type="password" value={newpassword} onChange={(e)=>setnewPassword(e.target.value)} />
                    <h3>Confirm Password</h3>
                    <input type="password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} />
                    <br />
                    <Button onClick={updatepass}>Change</Button>
                </div>}
            </div>
        </div>
    )
}

export default Myaccount