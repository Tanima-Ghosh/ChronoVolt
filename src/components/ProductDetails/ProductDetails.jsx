import React, { useEffect, useState } from "react";
import ProductData from "../../data/products.json";
import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ProductImageGallery from "./ProductImageGallery";
import { ProductInfo } from "./ProductInfo";
import ProductDetailsTab from "./ProductDetailsTab";



const ProductDetails = () => {
  const { id } = useParams();
  const product = ProductData.find((p) => String(p.id) === id);

  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // ✅ Fix dependency and initial image setup
  useEffect(() => {
    if (product) {
      setMainImage(product.image);
      setImages([product.image, product.secondImage].filter(Boolean));
      setQuantity(1);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="container py-5">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}

      <Breadcrumb productName={product.productName} productCategoty={product.category} />

      {/* Product Info */}

      <div className="container py-5">
        <div className="row">

          {/* Images */}
          <div className="col-xl-6">

            {/* product images */}
            <ProductImageGallery images={images} mainImage={mainImage} setMainImage={setMainImage} />

          </div>

          {/* Details */}
          <div className="col-xl-6">

            {/* product info */}
            <ProductInfo
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
            />

          </div>
        </div>
      </div>

      {/* Tab Section */}


      <div className="container my-5">
        <ProductDetailsTab product={product} />
      </div>


    </>
  );
};

export default ProductDetails;
