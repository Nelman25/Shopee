import React from "react";
import Header from "./Components/Header";
import ShopItems from "./Components/ShopItems";
import { CartContextProvider } from "./Store/CartContext";
import { UserProgressContextProvider } from "./Store/UserProgressContext";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

const App = () => {
	return (
		<UserProgressContextProvider>
			<CartContextProvider>
				<Header />
				<main className="my-28">
					<ShopItems />
				</main>
				<Cart />
				<Checkout />
			</CartContextProvider>
		</UserProgressContextProvider>
	);
};

export default App;
