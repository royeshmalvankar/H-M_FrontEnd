import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../authcontext/authcontext'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from "../loading&error/loading"
import Error from "../loading&error/error"
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const Productid = () => {
    let authtoken = localStorage.getItem("token")
    const navigate = useNavigate()
    const {id} = useParams()
    const {isLoding,setLoding,isError,setError} = useContext(AuthContext)
    const [update,setUpdate] = useState(false)
    const [data,setData] = useState({})
    const [formstate,setFormstate] = useState({
        name:"",
        price:"",
        description:"",
        quantity:""
    })
    const [imageFile,setImageFile] = useState(null)
    let role = localStorage.getItem("role")
    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        try {
            setLoding(true)
            const response = await axios.get(`https://h-m-backend.onrender.com/product/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log("product",response.data.product);
            
            setData(response.data.product)
            setLoding(false)
            setFormstate({
                name:response.data.product.name,
                price:response.data.product.price,
                description:response.data.product.description,
                quantity:response.data.product.quantity
            })
        } catch (error) {
            console.log(error);
            setError(true)
            setLoding(false)
        }
    }
    

    const updatedata = async () => {     
        try { 
            setLoding(true)
             await axios.patch(`https://h-m-backend.onrender.com/product/update/${id}`, {
                image:imageFile,
                name:formstate.name,
                price:formstate.price,
                description:formstate.description,
                quantity:formstate.quantity
            },
                {
                    headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data"
                    }
            })
            setLoding(false)
            getdata()
            
        } catch (error) {
            console.log(error);
            setError(true)
            setLoding(false)
        }
    }

    const handlechange = (e) => {
       try {
         setFormstate({
             ...formstate,
             [e.target.name]: e.target.value
         })
       } catch (error) {
        console.log(error);
        
       }
    }

    const submitdata = (e) => {
        try {
            e.preventDefault()
            updatedata(formstate)
        } catch (error) {
            setError(true)
            console.log(error);
            
        }
    }

    const deleteproduct = async () => {
        try {
            setLoding(true)
            await axios.delete(`https://h-m-backend.onrender.com/product/delete/${id}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setLoding(false)
            navigate("/products")
        } catch (error) {
            console.log(error);
            setError(true)
            setLoding(false)
        }
    }

    const addtowishlist = async() => {
        try {
            setLoding(true)
            await axios.post(`https://h-m-backend.onrender.com/wishlist/add/${id}`,{}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            
            
            setLoding(false)
        } catch (error) {
            console.log(error);
            setError(true)
            setLoding(false)
        }
    }

    const addtocart = async() => {
        try {
            setLoding(true)
            console.log(authtoken);
            const response = await axios.post(`https://h-m-backend.onrender.com/cart/add/${id}`,{}, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setLoding(false)
        } catch (error) {
            console.log(error);
            setError(true)
            setLoding(false)
        }
    }
    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    }

    if(isLoding){
        return <Loading/>
    }

    if(isError){
        return <Error/>
    }
    console.log(data);
    
    return (
        <div style={{textAlign:"center",padding:"50px"}}>
            <img src={data.image} style={{width:"400px",height:"500px",margin:"auto"}} alt="" />
            <h1> Name: <span style={{color:"red"}}>{data.name}</span></h1>
            <h1>Price: <span style={{color:"red"}}>Rs.{data.price}</span></h1>
            <h1> {data.description}</h1>
            <h1>Product Avaliblity: <span style={data.quantity>=0?{color:"green"}:{color:"red"}} >{data.quantity>=0?"In Stock":"Out of Stock"}</span></h1>
            <div style={{display:"flex",justifyContent:"center",gap:"10px",marginTop:"20px"}}>
               {role=="admin" && <Button colorScheme='teal' variant='solid' onClick={() => setUpdate(!update)} >Edit</Button>}
               {role=="admin" && <Button colorScheme='red' variant='solid' onClick={deleteproduct}>Delete</Button>}
               {(role=="admin"||role=="buyer")&& <Button colorScheme='blue' variant='solid' onClick={addtowishlist}>Add to wishlist</Button>}
               {(role=="admin"||role=="buyer")&& <Button colorScheme='green' variant='solid' onClick={addtocart}>Add to cart</Button>}
            </div>
           {update && <div style={{textAlign:"center"}}>
                <h1>Update Product</h1>
                <br />
                <label>Upload Image</label>
                <input type="file" id="image" name="image" onChange={handleImageChange} />
                <br />
                <label htmlFor="">Name: </label>
                <input name='name' type="text" value={formstate.name} placeholder='name' onChange={handlechange} />
                <br />
                <label htmlFor="">Price: </label>
                <input name='price' type="number" value={formstate.price} placeholder='price' onChange={handlechange} />
                <br />
                <label htmlFor="">Description: </label>
                <input name='description' type="text" value={formstate.description} placeholder='description' onChange={handlechange}  />
                <br />
                <label htmlFor="">Quantity: </label>
                <input name='quantity' type="number" value={formstate.quantity} placeholder='quantity' onChange={handlechange}  />
                <br />
                <button onClick={submitdata}>Update</button>
            </div>}
        </div>

    )
}

export default Productid