import React from "react";
import Header from "./Components/Header";
import ShopItems from "./Components/ShopItems";
import { CartContextProvider } from "./Store/CartContext";

const App = () => {
	return (
		<CartContextProvider>
			<Header />
			<main className="my-28">
				<ShopItems />
			</main>
		</CartContextProvider>
	);
};

export default App;
