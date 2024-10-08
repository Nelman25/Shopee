import Modal from "./ui/Modal";
import { useContext } from "react";
import UserProgressContext from "../Store/UserProgressContext";
import CartContext from "../Store/CartContext";
import { Button } from "./ui/button";
import { currencyFormatter } from "../util/currencyFormat";
import { Table, TableBody, TableCell, TableRow } from "./ui/table";

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
			className="w-[80rem] h-[70rem] rounded-xl border bg-slate-100  shadow-2xl px-16 py-16 font-montserrat text-slate-600"
			open={userProgressContext.progress === "cart"}
			onClose={
				userProgressContext.progress === "cart" ? handleCloseCart : undefined
			}
		>
			<h2 className="text-5xl font-medium mb-4 text-slate-800">Your Cart</h2>
			<div className="max-h-[80%] overflow-y-auto">
				<div className="text-[1.8rem] flex text-center text-slate-700">
					<p className="flex-[2] text-start">Item name</p>
					<p className="flex-1">Quantity</p>
					<p className="flex-1">Method</p>
					<p className="flex-1">Amount</p>
				</div>
				<Table className="text-[1.4rem] ">
					<TableBody>
						{cartContext.items.map((item) => (
							<TableRow key={item.id} className="">
								<TableCell className="font-medium w-[40%]">
									{item.name}
								</TableCell>
								<TableCell className="text-center text-[1.6rem] text-red-500 font-semibold">
									<Button
										variant="ghost"
										onClick={() => handleIncrementQuantity(item)}
										className="text-[1.5rem]"
									>
										+
									</Button>
									{item.quantity}
									<Button
										variant="ghost"
										onClick={() => handleDecrementQuantity(item.id)}
										className="text-[1.5rem]"
									>
										{" "}
										-{" "}
									</Button>
								</TableCell>
								<TableCell className="text-center">Credit Card</TableCell>
								<TableCell className="text-center">
									{currencyFormatter.format(item.price * item.quantity)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className="absolute bottom-8 right-8 text-end">
				<p className="text-4xl font-light text-red-700">
					Total price: {currencyFormatter.format(totalCartPrice)}
				</p>
				<p className="mt-4">
					<Button
						variant="destructive"
						onClick={handleCloseCart}
						className="w-24 h-12 text-[1.2rem]"
					>
						Close
					</Button>
					{cartContext.items.length > 0 && (
						<Button
							className="w-48 px-8 py-3 ml-4 h-12 text-[1.2rem]"
							onClick={handleShowCheckout}
						>
							Go to Checkout
						</Button>
					)}
				</p>
			</div>
		</Modal>
	);
};

export default Cart;
