import Modal from "./ui/Modal";
import { useContext } from "react";
import Button from "./ui/Button";
import CartContext from "../Store/CartContext";
import { currencyFormatter } from "../util/currencyFormat";
import UserProgressContext from "../Store/UserProgressContext";

const Cart = () => {
	const cartContext = useContext(CartContext);
	const userProgressContext = useContext(UserProgressContext);
	const totalCartPrice = cartContext.items.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	const handleIncrementQuantity = (item) => {
		cartContext.addItem(item);
	};

	const handleDecrementQuantity = (id) => {
		cartContext.removeItem(id);
	};

	const handleCloseCart = () => {
		userProgressContext.hideCart();
	};

	const handleShowCheckout = () => {
		userProgressContext.showCheckout();
	};

	return (
		<Modal
			className="w-[700px] h-[600px] rounded-xl border bg-[#DDE6ED] border-slate-500 shadow-2xl px-10 py-8 font-montserrat"
			open={userProgressContext.progress === "cart"}
		>
			<h2 className="text-3xl font-medium mb-4">Your Cart</h2>
			<ul className="max-h-[73%] overflow-y-auto overflow-hidden font-light text-xl">
				{cartContext.items.map((item) => (
					<li key={item.id} className="mb-4">
						<div className="flex gap-3 w-full pr-4">
							<div className="flex gap-10 items-center">
								<p className="block min-w-[60%]">{item.name}</p>
								<p className="block text-end mr-4">
									{currencyFormatter.format(item.price)}
								</p>
							</div>
							<div className="flex items-center gap-2">
								<button
									onClick={() => handleIncrementQuantity(item)}
									className="bg-yellow-300 size-8 rounded-full font-bold flex items-center justify-center"
								>
									{" "}
									+{" "}
								</button>
								<p className="block w-6 text-center">{item.quantity}</p>
								<button
									onClick={() => handleDecrementQuantity(item.id)}
									className="bg-yellow-300 size-8 rounded-full font-bold flex items-center justify-center"
								>
									{" "}
									-{" "}
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className="flex flex-col items-end ">
				<p className="text-2xl font-light text-red-700">
					Total price: {currencyFormatter.format(totalCartPrice)}
				</p>
				<p className="mt-4">
					<Button textOnly onClick={handleCloseCart} className="text-[#7ba2bb]">
						Close
					</Button>
					<Button className="px-6 py-3 ml-4" onClick={handleShowCheckout}>
						Go to Checkout
					</Button>
				</p>
			</div>
		</Modal>
	);
};

export default Cart;
