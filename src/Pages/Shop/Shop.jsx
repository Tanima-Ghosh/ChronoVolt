import React, { useEffect, useState } from 'react';
import productsData from '../../data/products.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import InnerBanner from '../../components/InnerBanner/InnerBanner';
import InnerBannerBg from "../../assets/images/banners/innerBannerBg.png"

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const allCategories = [...new Set(productsData.map(p => p.category))];
  const allBrands = [...new Set(productsData.map(p => p.brand))];

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  useEffect(() => {
    let result = productsData;

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    setFilteredProducts(result);
  }, [selectedCategories, selectedBrands]);

  return (
    <>
    <InnerBanner title={"Shop"} subTitle={"Explore our exclusive collections"} backgroundImage={InnerBannerBg}/>
    <div className="container my-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <h4 className="fw-bold mb-3">Categories</h4>
          {allCategories.map((category, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`cat-${category}`}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <label className="form-check-label" htmlFor={`cat-${category}`}>
                {category} ({category.length})
              </label>
            </div>
          ))}

          <hr className="my-4" />

          <h4 className="fw-bold mb-3">Brands</h4>
          {allBrands.map((brand, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <label className="form-check-label" htmlFor={`brand-${brand}`}>
                {brand}
              </label>
            </div>
          ))}

          {/* clear category */}

          {/* Filter Header with Clear Button */}
  <div className="d-flex justify-content-between align-items-center mt-3">

    <button
      className="btn btn-sm btn-outline-secondary"
      onClick={() => {
        setSelectedCategories([]);
        setSelectedBrands([]);
      }}
    >
      Clear All
    </button>
  </div>
        </div>

        {/* Product Grid */}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-12">
                <p className="text-center">No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Shop;
