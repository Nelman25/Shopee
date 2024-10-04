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

	const handleCloseCart = () => {
		userProgressContext.hideCart();
	};

	const handleShowCheckout = () => {
		userProgressContext.showCheckout();
	};

	return (
		<Modal
			className="w-[600px] h-[500px] rounded-xl border border-slate-500 shadow-2xl px-10 py-8"
			open={userProgressContext.progress === "cart"}
		>
			<h2 className="text-3xl">Your Cart</h2>
			<ul>
				{cartContext.items.map((item) => (
					<li key={item.id}>
						{item.name} - {item.quantity}
					</li>
				))}
			</ul>
			<p>Total price: {currencyFormatter.format(totalCartPrice)}</p>
			<p>
				<Button textOnly onClick={handleCloseCart} className='text-yellow-500'>
					Close
				</Button>
				<Button onClick={handleShowCheckout}>Go to Checkout</Button>
			</p>
		</Modal>
	);
};

export default Cart;
