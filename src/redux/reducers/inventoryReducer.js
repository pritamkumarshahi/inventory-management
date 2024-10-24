import {
  FETCH_INVENTORY_REQUEST,
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_FAILURE,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  DISABLE_PRODUCT,
} from "../actions/types";

const initialState = {
  loading: false,
  inventory: [],
  error: "",
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INVENTORY_SUCCESS:
      return {
        loading: false,
        inventory: action.payload,
        error: "",
      };
    case FETCH_INVENTORY_FAILURE:
      return {
        loading: false,
        inventory: [],
        error: action.payload,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        inventory: state.inventory.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        inventory: state.inventory.filter((item) => item.id !== action.payload),
      };
    case DISABLE_PRODUCT:
      return {
        ...state,
        inventory: state.inventory.map((item) =>
          item.id === action.payload ? { ...item, disabled: !item.disabled } : item
        ),
      };

    default:
      return state;
  }
};

export default inventoryReducer;
