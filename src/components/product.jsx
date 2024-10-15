import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../authcontext/authcontext'
import axios from 'axios'
import Loading from "../loading&error/loading"
import Error from "../loading&error/error"
import { Link } from 'react-router-dom'





const Products = () => {

    const {isLoding,setLoding,isError,setError,searchdata} = useContext(AuthContext)
    const [data,setData] = useState([]) 

    useEffect(() => {
        getdata()
    },[searchdata])

    if (isLoding) {
        return <Loading />
    }
    if (isError) {
        return <Error />
    }

    const getdata = async () => {
        try {
            setLoding(true)
            const response = await axios.get(`https://h-m-backend.onrender.com/product/search?name=${searchdata}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setData(response.data.products)
            setLoding(false)
        } catch (error) {
            console.log('product page',error);
            setError(true)
            setLoding(false)
        }
    }

    return (
        <>
        <div className='products'>
            {data.map((item) => {
                return (
                    <Link key={item._id} to={`/products/${item._id}`} style={{ textDecoration: "none", color: "black" }}><div  className='product'>
                        <img  src={item.image} alt={item.name} />
                        <h1>Product Name: {item.name}</h1>
                        <h1>Description: {item.description}</h1>
                        <h1>Price: {item.price}</h1>
                    </div></Link>
                )
            })}
        </div>
        </>
    )
}

export default Products