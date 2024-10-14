import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Cart = () => {
    const [cart, setcart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getcart();
    }, []);

    // Fetch wishlist from API
    const getcart = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://h-m-backend.onrender.com/cart', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            console.log(response);
            setcart(response.data.carts);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Failed to fetch cart');
            setLoading(false);
        }
    };

    // Delete cart item
    const deletecart = async (id) => {
        try {
            await axios.delete(`https://h-m-backend.onrender.com/cart/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            // Remove the deleted item from the state
            getcart();
        } catch (error) {
            console.error(error);
            setError('Failed to remove item from cart');
        }
    };

    // Check for loading state
    if (loading) {
        return <div>Loading cart...</div>;
    }

    // Check for errors
    if (error) {
        return <div>{error}</div>;
    }

    // Check if cart is empty
    if (cart.length === 0) {
        return <h1>cart is empty</h1>;
    }

    return (
        <div>
        {cart.map((product) => (
            <div key={product._id}>
                <h2>Your cart</h2>
                {product.products.length === 0 ? (
                    <p>No products in this cart</p>
                ) : (
                    product.products.map((item) => (
                        <div key={item._id}>
                            <img style={{ width: '200px' }} src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                            <button onClick={() => deletecart(item._id)}>Remove from cart</button>
                        </div>
                    ))
                )}
            </div>
        ))}
    </div>
)

}

export default Cart