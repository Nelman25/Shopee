import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
import shopeeLogo from "../assets/ShoopeeLogo.png";
import Button from "./ui/Button";
const Header = () => {
	const cartContext = useContext(CartContext);
	const userProgressContext = useContext(UserProgressContext);

	const totalCartItems = cartContext.items.reduce((total, item) => {
		return total + item.quantity;
	}, 0);

	const handleShowCart = () => {
		userProgressContext.showCart();
	}

	return (
		<header className="flex text-xl text-white font-montserrat font-semibold justify-between items-center py-6 px-32 headerBackground fixed top-0 left-0	w-full h-[7%] z-30 shadow-md">
			<div className="flex items-center">
				<img src={shopeeLogo} className="w-32" />
			</div>
			<input
				type="text"
				placeholder="Search product"
				className="text-xl text-slate-600 font-normal px-3 py-1 w-[30%] rounded-md focus:w-[40%] transition-all duration-400 focus:outline-none"
			/>
			<nav className="">
				<Button textOnly={true} onClick={handleShowCart}>Cart ({totalCartItems})</Button>
			</nav>
		</header>
	);
};

export default Header;
