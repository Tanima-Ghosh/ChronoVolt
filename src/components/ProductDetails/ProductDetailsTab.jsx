import React, { useState } from "react";

const ProductDetailsTab = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-5">
      <ul className="nav nav-tabs border-0 justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link border-0 fw-bold fs-4 text-capitalize ${
              activeTab === "description" ? "active" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link border-0 fw-bold fs-4 text-capitalize ${
              activeTab === "specs" ? "active" : ""
            }`}
            onClick={() => setActiveTab("specs")}
          >
            Technical Specs
          </button>
        </li>
      </ul>

      <div className="tab-content p-3 border border-top-0">
        {activeTab === "description" && <p>{product.tabDescription}</p>}

        {activeTab === "specs" && (
          <div className="table-responsive">
            <table className="table table-bordered table-responsive table-striped">
              <tbody>
                <tr>
                  <th scope="row">Dial</th>
                  <td>{product.dial}</td>
                </tr>
                <tr>
                  <th scope="row">Strap</th>
                  <td>{product.strap}</td>
                </tr>
                <tr>
                  <th scope="row">Water Resistance</th>
                  <td>{product.waterResistance}</td>
                </tr>
                <tr>
                  <th scope="row">Movement</th>
                  <td>{product.movement}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTab;
