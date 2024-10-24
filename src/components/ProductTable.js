import React from "react";
import PropTypes from "prop-types";
import { FaPencilAlt, FaTrashAlt, FaEye, FaEyeSlash } from "react-icons/fa";

import "../styles/ProductTable.css";

function ProductTable({
  products,
  isAdmin,
  openEditPopup,
  handleDelete,
  handleDisable,
}) {
  return (
    <div className="product-list">
      <table>
        <thead>
          <tr>
            <th>
              <span className="text-background">Name</span>
            </th>
            <th>
              <span className="text-background">Category</span>
            </th>
            <th>
              <span className="text-background">Price</span>
            </th>
            <th>
              <span className="text-background">Quantity</span>
            </th>
            <th>
              <span className="text-background">Value</span>
            </th>
            <th>
              <span className="text-background">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.value}</td>
              <td className="action-buttons">
                <button
                  className="edit-icon"
                  disabled={!isAdmin || product.disabled}
                  onClick={() => openEditPopup(product)}
                >
                  <FaPencilAlt />
                </button>
                <button
                  className="delete-icon"
                  disabled={!isAdmin || product.disabled}
                  onClick={() => handleDelete(product.id)}
                >
                  <FaTrashAlt />
                </button>
                <button
                  className="disable-icon"
                  disabled={!isAdmin}
                  onClick={() => handleDisable(product.id)}
                >
                  {product.disabled ? <FaEyeSlash /> : <FaEye />}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ProductTable.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.string,
        quantity: PropTypes.number,
        value: PropTypes.string,
        disabled: PropTypes.bool,
      })
    ).isRequired,
    isAdmin: PropTypes.bool.isRequired,
    openEditPopup: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleDisable: PropTypes.func.isRequired,
  };

export default ProductTable;
