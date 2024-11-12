import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import Loading from "../loading&error/loading"
import Error from "../loading&error/error"
const HMhome = () => {
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        gethome()
    }, [])

    const gethome = async () => {
        setLoding(true)
        try {
            const response = await axios.get("https://h-m-backend.onrender.com/product/search?Category=Home", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            })
            setData(response.data.products)
            setLoding(false)
        } catch (error) {
            console.log(error)
            setError(true)
            setLoding(false)
        }
    }

    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }

    return (
        <>
        <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"bold"}}>H&M Home</h1>
        <div className="cards">
            {data==undefined ? null : data.map((item) => (
                 <Link key={item._id} to={`/products/${item._id}`}><div className="card" key={item._id}>
                    <img style={{width:"400px"}} src={item.image} alt={item.name} />
                    <h1>Name: <span> {item.name}   </span></h1>
                    <p>Price: <span>{item.price}</span></p>
                </div></Link>
            ))}
        </div>
        </>
    );
}

export default HMhome