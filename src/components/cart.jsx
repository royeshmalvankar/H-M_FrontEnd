import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getCart();
    }, []);

    // Fetch cart from API
    const getCart = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://h-m-backend.onrender.com/cart', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setCart(response.data.carts);
        } catch (error) {
            console.error(error);
            setError('Failed to fetch cart');
        } finally {
            setLoading(false);
        }
    };

    // Delete cart item
    const deleteCart = async (id) => {
        try {
            await axios.delete(`https://h-m-backend.onrender.com/cart/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            getCart(); // Refresh cart after deletion
        } catch (error) {
            console.error(error);
            setError('Failed to remove item from cart');
        }
    };

    // Handle loading and error states
    if (loading) {
        return <div>Loading cart...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const cartlength = cart.length
    if(cartlength === 0){
        console.log(cartlength);
        
        try {
            return <h1>Your cart is empty</h1>
        } catch (error) {
            console.log(error);  
        }
    }

    // Check if cart is empty
    if (cart.length === 0) {
        return <h1>Your cart is empty</h1>;
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' , marginTop: '60px', fontSize: '30px', fontWeight: 'bold'}}>Your cart</h2>
            {cart.map((product) => (
                <div key={product._id} className='products'>
                    {product.products.length === 0 ? (
                        <p>No products in this cart</p>
                    ) : (
                        product.products.map((item) => (
                            <Link key={item._id} to={`/products/${item._id}`}><div key={item._id} className='product'>
                                <img style={{ width: '200px' }} src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.description}</p>
                                <Button variant="solid" margin={'20px'} colorScheme="red" onClick={() => deleteCart(item._id)}>Remove from cart</Button>
                            </div></Link>
                        ))
                    )}
                </div>
            ))}
        </div>
    );
};

export default Cart;
