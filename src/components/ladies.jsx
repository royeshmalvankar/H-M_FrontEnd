import { useContext, useEffect, useState } from "react";
import Loading from "../loading&error/loading"
import Error from "../loading&error/error"
import { Link } from "react-router-dom";
import { AuthContext } from "../authcontext/authcontext"
import axios from "axios"

const Ladies = () => {
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        getladies()
    }, [])

    const getladies = async () => {
        setLoding(true)
        try {
            const response = await axios.get("https://h-m-backend.onrender.com/product/search?Category=Ladies", {
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
        <h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"bold"}}>Ladies</h1>
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

};
export default Ladies