import { createContext, useReducer } from "react";

const CartContext = createContext({
	items: [],
	addItem: (item) => {},
	removeItem: (id) => {},
});

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingItem = state.items[existingItemIndex];
		const updatedItems = [...state.items];

		if (existingItemIndex > -1) {
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity + 1,
			};
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems.push({ ...action.item, quantity: 1 });
		}

		return { ...state, items: updatedItems };
	}

	if (action.type === "REMOVE_ITEM") {
		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.id
		);
		const existingItem = state.items[existingItemIndex];
		const updatedItems = [...state.items];

		if (existingItem.quantity === 1) {
			updatedItems.splice(existingItemIndex, 1);
		} else {
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity - 1,
			};

			updatedItems[existingItemIndex] = updatedItem;
		}

		return { ...state, items: updatedItems };
	}

	return state;
};

export const CartContextProvider = ({ children }) => {
	const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

	const addItem = (item) => {
		dispatchCartAction({ type: "ADD_ITEM", item });
	};

	const removeItem = (id) => {
		dispatchCartAction({ type: "REMOVE_ITEM", id });
	};

	const cartContext = {
		items: cart.items,
		addItem,
		removeItem,
	};

	console.info(cartContext);

	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
};

export default CartContext;
