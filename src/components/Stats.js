import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiExchangeDollarFill } from "react-icons/ri";
import { MdRemoveShoppingCart, MdCategory } from "react-icons/md";
import PropTypes from "prop-types";

import "../styles/Stats.css";

const Stats = ({ products = [] }) => {
  const filterDisabled = products?.filter(item => !item.disabled);

  const totalProducts = filterDisabled.length;
  const totalStoreValue = filterDisabled.reduce((sum, product) => {
    const numericValue = parseFloat(filterDisabled?.value?.replace("$", "").trim());
    return sum + (isNaN(numericValue) ? 0 : numericValue);
  }, 0);

  const outOfStock = filterDisabled.filter(
    (product) => product.quantity === 0
  ).length;

  const categories = [...new Set(filterDisabled.map((product) => product.category))]
    .length;

  return (
    <div className="inventory-stats">
      <div className="stat-card">
        <div className="stat-header">
          <FaShoppingCart className="stat-icon" />
          <span>Total Products</span>
        </div>
        <div className="stat-value">{totalProducts}</div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          <RiExchangeDollarFill className="stat-icon" />
          <span>Total Store Value</span>
        </div>

        <div className="stat-value">${totalStoreValue.toFixed(2)}</div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          <MdRemoveShoppingCart className="stat-icon" />
          <span>Out of Stock</span>
        </div>

        <div className="stat-value">{outOfStock}</div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          <MdCategory className="stat-icon" />
          <span>Number of Categories</span>
        </div>

        <div className="stat-value">{categories}</div>
      </div>
    </div>
  );
};

// Stats.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.string.isRequired,
//       quantity: PropTypes.number.isRequired,
//       category: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default Stats;
