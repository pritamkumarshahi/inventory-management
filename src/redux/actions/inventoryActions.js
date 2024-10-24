import { v4 as uuidv4 } from "uuid";
// This is too generate the unique ID for the data fetched, it doesn't have an id.

import {
  FETCH_INVENTORY_REQUEST,
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_FAILURE,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  DISABLE_PRODUCT,
} from "./types";

import { fetchInventoryData } from "../../api/inventoryApi";

export const fetchInventoryRequest = () => ({
  type: FETCH_INVENTORY_REQUEST,
});

export const fetchInventorySuccess = (inventory) => ({
  type: FETCH_INVENTORY_SUCCESS,
  payload: inventory,
});

export const fetchInventoryFailure = (error) => ({
  type: FETCH_INVENTORY_FAILURE,
  payload: error,
});

export const editProduct = (product) => ({
    type: EDIT_PRODUCT,
    payload: product,
});

export const deleteProduct = (productId) => ({
    type: DELETE_PRODUCT,
    payload: productId,
});

export const disableProduct = (productId) => ({
    type: DISABLE_PRODUCT,
    payload: productId,
});


export const fetchInventory = () => {
  return async (dispatch) => {
    dispatch(fetchInventoryRequest());
    try {
      const inventory = await fetchInventoryData();
      const productsWithId = inventory.map((product) => ({
        ...product,
        id: uuidv4(), // This is required due to the data fetched doesn't have an ID dealing with index can create problem.
        disabled: false
      }));

      dispatch(fetchInventorySuccess(productsWithId));
    } catch (error) {
        console.log(error, "errdededededeor")
      dispatch(fetchInventoryFailure(error.message));
    }
  };
};
