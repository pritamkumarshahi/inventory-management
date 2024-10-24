import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import PropTypes from "prop-types";

import "../styles/EditProductPopup.css";

const EditProductPopup = ({ product, onClose, onSave }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSave = () => {
    onSave(updatedProduct);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 style={{ margin: "unset", marginBottom: "0.8rem" }}>
          Edit Product
        </h2>
        <button className="cross-icon" onClick={onClose}>
          <MdOutlineClose />
        </button>
        <div style={{ marginBottom: "6px" }}>{updatedProduct.name}</div>
        <div className="popup-body">
          <div className="input-group">
            <label>
              Category
              <input
                type="text"
                name="category"
                value={updatedProduct.category || ""}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Price
              <input
                type="number"
                name="price"
                value={updatedProduct?.price?.replace("$", "").trim()}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Quantity
              <input
                type="number"
                name="quantity"
                value={updatedProduct.quantity}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Value
              <input
                type="number"
                name="value"
                value={updatedProduct?.value?.replace("$", "").trim()}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
        <div className="popup-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}


EditProductPopup.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  };

export default EditProductPopup;
