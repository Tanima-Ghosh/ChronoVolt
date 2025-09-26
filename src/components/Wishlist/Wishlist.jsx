import React from "react";
import { useEffect, useState } from "react";

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlistItems(storedWishlist);
    }, []);

    const removeFromWishlist = (id) => {
        const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
        setWishlistItems(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        window.dispatchEvent(new Event("storageUpdate"));
    };

    return (
        <div className="container py-5">
            <h2 className="mb-4">Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="row">
                    {wishlistItems.map((product) => (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="product-item text-center position-relative">
                                <div className="product-image w-100 position-relative overflow-hidden">
                                    <img src={product.image} alt={product.productName} className="img-fluid" />
                                    <img src={product.secondImage} alt={product.productName} className="img-fluid" />

                                    <div className="product-icons gap-3">
                                        <div className="product-icon" onClick={() => removeFromWishlist(product.id)}>
                                            <i class="bi bi-trash"></i>
                                        </div>
                                        
                                    </div>

                                    <span className={`tag badge text-white ${product.tag === "New" ? "bg-danger" : "bg-success"}`}>
                                        {product.tag}
                                    </span>
                                </div>
                                <div className="product-content pt-3">
                                    <div className="product-content pt-3">
                                        <span className="price">{product.price}</span>
                                        <h3 className="title pt-1">{product.productName}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
