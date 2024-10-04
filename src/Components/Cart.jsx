import Modal from "./ui/Modal";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { currencyFormatter } from "../util/currencyFormat";

const Cart = () => {
	const cartContext = useContext(CartContext);
	const totalCartPrice = cartContext.items.reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	return (
		<Modal>
			<h2>Your Cart</h2>
			<ul>
				{cartContext.items.map((item) => (
					<li key={item.id}>
						{item.name} - {item.quantity}
					</li>
				))}
			</ul>
			<p>Total price: {currencyFormatter.format(totalCartPrice)}</p>
		</Modal>
	);
};

export default Cart;
