import React from 'react'

const ProductImageGallery = ({images, mainImage, setMainImage}) => {
  return (
    <div className="d-flex flex-column-reverse flex-md-row mb-4">
              <div className="d-flex flex-column me-3 thumbnail-images">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={`/${img}`}
                    alt=""
                    onClick={() => setMainImage(img)}
                    className={`img-thumbnail ${mainImage === img ? "border-dark" : ""
                      }`}
                  />
                ))}
              </div>
              <img
                src={`/${mainImage}`}
                alt="Main product"
                className="img-fluid"
                style={{ maxHeight: "650px", objectFit: "contain" }}
              />
            </div>
  )
}

export default ProductImageGallery