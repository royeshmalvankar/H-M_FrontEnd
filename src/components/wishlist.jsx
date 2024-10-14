import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getwishlist();
    }, []);

    // Fetch wishlist from API
    const getwishlist = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/wishlist', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            console.log(response);
            setWishlist(response.data.wishList);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setError('Failed to fetch wishlist');
            setLoading(false);
        }
    };

    // Delete wishlist item
    const deletewishlist = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/wishlist/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            // Remove the deleted item from the state
            getwishlist();
        } catch (error) {
            console.error(error);
            setError('Failed to remove item from wishlist');
        }
    };

    // Check for loading state
    if (loading) {
        return <div>Loading wishlist...</div>;
    }

    // Check for errors
    if (error) {
        return <div>{error}</div>;
    }

    // Check if wishlist is empty
    if (wishlist.length === 0) {
        return <h1>Wishlist is empty</h1>;
    }

    return (
        <div>
        {wishlist.map((wish) => (
            <div key={wish._id}>
                <h2>Your Wishlist</h2>
                {wish.products.length === 0 ? (
                    <p>No products in this wishlist</p>
                ) : (
                    wish.products.map((item) => (
                        <div key={item._id}>
                            <img style={{ width: '200px' }} src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                            <button onClick={() => deletewishlist(item._id)}>Remove from wishlist</button>
                        </div>
                    ))
                )}
            </div>
        ))}
    </div>
)

}

export default Wishlist;
