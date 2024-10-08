import { useContext } from "react";
import Modal from "./ui/Modal";
import CustomInput from "./ui/CustomInput";
import { Button } from "./ui/button";
import CartContext from "@/Store/CartContext";
import UserProgressContext from "@/Store/UserProgressContext";
import { currencyFormatter } from "@/util/currencyFormat";

const Checkout = () => {
	const cartContext = useContext(CartContext);
	const userProgressContext = useContext(UserProgressContext);

	const totalAmount = cartContext.items.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const handleCloseCheckout = () => {
		userProgressContext.hideCheckout();
	};

	const handleFinishCheckout = () => {
		userProgressContext.hideCheckout();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const itemsCopy = [];
		const fd = new FormData(e.target);
		const customerData = Object.fromEntries(fd.entries());
		console.log({ ...customerData, orders: cartContext.items });
		cartContext.items = itemsCopy;
	};

	return (
		<Modal
			open={userProgressContext.progress === "checkout"}
			className="w-[70rem] h-[60rem] rounded-xl border bg-[#DDE6ED] border-slate-500 shadow-2xl px-16 py-16 font-montserrat"
			onClose={handleCloseCheckout}
		>
			<form className="text-[2rem]" onSubmit={handleSubmit}>
				<h2 className="text-[3.5rem] font-semibold mb-8">Checkout</h2>
				<p className="text-[2.5rem] mb-4">
					Total amount: {currencyFormatter.format(totalAmount)}
				</p>
				<CustomInput label="Full-name" type="text" id="full-name" />
				<CustomInput label="Email-Adrress" type="email" id="email-address" />
				<CustomInput label="Street" type="text" id="street" />
				<div>
					<CustomInput label="Postal code" type="number" id="postal-code" />
					<CustomInput label="City" type="text" id="city" />
				</div>

				<div className="flex justify-end gap-4 mt-16">
					<Button
						type="button"
						onClick={handleCloseCheckout}
						className="text-[1.4rem] h-[5rem] w-[8rem]"
						variant="destructive"
					>
						Close
					</Button>
					<Button
						className="text-[1.4rem] h-[5rem] w-[12.5rem]"
						onClick={handleFinishCheckout}
					>
						Submit order
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default Checkout;
