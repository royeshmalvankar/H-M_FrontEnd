import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateProduct = () => {
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [quantity, setquantity] = useState("")
    const [price, setprice] = useState("")
    const [Category, setcategory] = useState("")
    const [imageFile, setImageFile] = useState(null)

    const navigate = useNavigate()

    const isError = name === "" || description === "" || quantity === "" || price === ""

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isError) {
            return alert("Please fill all the fields");
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("Category", Category);
        formData.append("image", imageFile);

        try {
            await axios.post(`https://h-m-backend.onrender.com/product/add`, formData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data"
                }
            })
            alert("Product Added");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    }

    return (
        <div className="form">
            <h1 style={{ textAlign: "center", margin: "10px" }}>Add Product</h1>
            <form action="/" method="POST" encType="multipart/form-data" style={{ border: "1px dotted red", padding: "10px", width: "30%", margin: "auto", textAlign: "center", borderRadius: "10px" }} onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" placeholder="name" value={name} onChange={(e) => setname(e.target.value)} />
                <br />
                <label>Upload Image</label>
                <input type="file" id="image" name="image" onChange={handleImageChange} />
                {/* <br />
                <label>Image link:</label>
                <input type="text" placeholder="image link" value={imageFile} onChange={(e) => setImageFile(e.target.value)} name="image" /> */}
                <br />
                <label>Description:</label>
                <input type="text" placeholder="description" value={description} onChange={(e) => setdescription(e.target.value)} />
                <br />
                <label>Category:</label>
                <input type="text" placeholder="category" value={Category} onChange={(e) => setcategory(e.target.value)} />
                <br />
                <label>Price:</label>
                <input type="number" placeholder="price" value={price} onChange={(e) => setprice(e.target.value)} />
                <br />
                <label>Quantity:</label>
                <input type="number" placeholder="quantity" value={quantity} onChange={(e) => setquantity(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateProduct
