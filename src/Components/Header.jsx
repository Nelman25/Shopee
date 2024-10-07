import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
import shopeeLogo from "../assets/ShoopeeLogo.png";
import { Button } from "./ui/button";

const Header = () => {
	const cartContext = useContext(CartContext);
	const userProgressContext = useContext(UserProgressContext);

	const totalCartItems = cartContext.items.reduce((total, item) => {
		return total + item.quantity;
	}, 0);

	const handleShowCart = () => {
		userProgressContext.showCart();
	};

	return (
		<header className="flex text-xl text-white font-montserrat font-semibold justify-between items-center py-6 px-32 bg-slate-900 fixed top-0 left-0	w-full h-[7%] z-30 shadow-md">
			<div className="flex justify-between w-[1000px] items-center mx-auto">
				{" "}
				<div className="flex items-center">
					<img src={shopeeLogo} className="w-48" />
				</div>
				<input
					type="text"
					placeholder="Search product"
					className="text-[1.8rem] text-slate-600 font-normal px-5 py-3 w-[40%] rounded-md focus:w-[50%] transition-all duration-500 focus:outline-none"
				/>
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
