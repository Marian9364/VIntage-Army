import { createContext, useReducer, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as itemsService from "../services/itemsService";

export const ItemContext = createContext();

const ADD_ITEMS = "ADD_ITEMS";
const ADD_ITEM = "ADD_ITEM";
const FETCH_ITEM_DETAILS = "FETCH_ITEM_DETAILS";
const EDIT_ITEM = "EDIT_ITEM";
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_ITEM = "REMOVE_ITEM";
//comment line 16 and 17 if problems appears by starting the project
const itemReducer = (state, action) => {
  switch (action.type) {
    // case ADD_ITEMS:
    //   return action.payload.map(x => ({ ...x, comments: [] }));
    case ADD_ITEM:
      return [...state, action.payload];
    case FETCH_ITEM_DETAILS:
    case EDIT_ITEM:
      return state.map((x) => (x._id === action.itemId ? action.payload : x));
    case ADD_COMMENT:
      return state.map((x) =>
        x._id === action.itemId
          ? { ...x, comments: [...x.comments, action.payload] }
          : x
      );
    case REMOVE_ITEM:
      return state.filter((x) => x._id !== action.itemId);
    default:
      return state;
  }
};

export const ItemProvider = ({ children }) => {
  const navigate = useNavigate();
  const [items, dispatch] = useReducer(itemReducer, []);

  useEffect(() => {
    itemsService.getAll().then(result => {
      dispatch({        
        type: ADD_ITEMS,
        payload: result,
      });
    });
  }, []);

  const selectItem = (itemId) => {
    return items.find(x => x._id === itemId) || {};
  };

  const fetchItemDetails = (itemId, itemDetails) => {
    dispatch({
      type: FETCH_ITEM_DETAILS,
      payload: itemDetails,
      itemId,
    });
  };

  const addComment = (itemId, comment) => {
    dispatch({
      type: ADD_COMMENT,
      payload: comment,
      itemId,
    });
  };

  const addItem = (itemData) => {
    dispatch({
      type: ADD_ITEM,
      payload: itemData,
    });

    navigate("/items");
  };

  const editItem = (itemId, itemData) => {
    dispatch({
      type: EDIT_ITEM,
      payload: itemData,
      itemId,
    });
  };

  const removeItem = (itemId) => {
    dispatch({
      type: REMOVE_ITEM,
      itemId,
    });
  };
  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        editItem,
        addComment,
        fetchItemDetails,
        selectItem,
        removeItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItemContext = () => {
    const context = useContext(ItemContext);

    return context;
};
