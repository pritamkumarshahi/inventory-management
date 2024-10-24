import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Header from "./components/Header";
import Stats from "./components/Stats";
import ProductTable from "./components/ProductTable";
import EditProductPopup from "./components/EditProductPopup";
import PageLayout from "./components/PageLayout";

import { fetchInventory, editProduct, deleteProduct, disableProduct } from './redux/actions/inventoryActions';

import "./styles/Global.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  
  const dispatch = useDispatch();
  const { loading, inventory, error } = useSelector((state) => state.inventory);

  console.log(error, "error")
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  const toggleRole = () => setIsAdmin(!isAdmin);

  const openEditPopup = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closeEditPopup = () => setShowPopup(false);

  const handleProductUpdate = (updatedProduct) => {
    dispatch(editProduct(updatedProduct));
    setShowPopup(false);
  };

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleDisable = (productId) => {
    dispatch(disableProduct(productId));
  };

  return (
    <div className="app">
      <Header isAdmin={isAdmin} toggleRole={toggleRole} />
      <PageLayout isLoading={loading} error={error}>
        <Stats products={inventory} />
        <ProductTable
          products={inventory}
          isAdmin={isAdmin}
          openEditPopup={openEditPopup}
          handleDelete={handleDelete}
          handleDisable={handleDisable}
        />
        {showPopup && (
          <EditProductPopup
            product={selectedProduct}
            onClose={closeEditPopup}
            onSave={handleProductUpdate}
          />
        )}
      </PageLayout>
    </div>
  );
}

export default App;
