import React, { useContext, useState } from "react";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
import shopeeLogo from "../assets/ShoopeeLogo.png";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
	const cartContext = useContext(CartContext);
	const userProgressContext = useContext(UserProgressContext);
	const [searchedItem, setSearchedItem] = useState("");

	const totalCartItems = cartContext.items.reduce((total, item) => {
		return total + item.quantity;
	}, 0);

	const handleShowCart = () => {
		userProgressContext.showCart();
	};

	const handleChangeSearch = (e) => {
		setSearchedItem(e.target.value);
	};

	return (
		<header className="flex text-xl text-white font-montserrat font-semibold justify-between items-center py-6 px-32 bg-slate-900 fixed top-0 left-0	w-full h-[7%] z-30 shadow-md">
			<div className="flex justify-between w-[1000px] items-center mx-auto">
				{" "}
				<div className="flex items-center">
					<img src={shopeeLogo} className="w-48" />
				</div>
				<div className="flex w-[60rem] items-center space-x-2">
					<Input
						type="text"
						placeholder="Search an item"
						value={searchedItem}
						className="text-[1.8rem] text-slate-100 font-normal bg-slate-800 border border-slate-800 h-[4rem] px-8 py-4 w-[80%] rounded-full focus:w-full transition-all duration-500 focus:outline-none"
						onChange={handleChangeSearch}
					/>
					<Button
						className="text-[1.4rem]"
						onClick={() => userProgressContext.searchItems(searchedItem)}
					>
						Search
					</Button>
				</div>
				<nav className="flex">
					<Button
						variant="ghost"
						onClick={handleShowCart}
						className="text-3xl hover:bg-transparent hover:text-slate-300"
					>
						Cart ({totalCartItems})
					</Button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
