import React from "react";
import Header from "./Components/Header";
import ShopItems from "./Components/ShopItems";

const App = () => {
	return (
		<> 
			<Header />
			<main className="my-28">
				<ShopItems />
			</main>
		</>
	);
};

export default App;
