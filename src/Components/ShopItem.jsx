import { useContext } from "react";
import CartContext from "../Store/CartContext.jsx";
import { currencyFormatter } from "../util/currencyFormat.js";
import { Button } from "./ui/button.jsx";
const ShopItem = ({ item }) => {
	const cartContext = useContext(CartContext);

	const handleAddItemToCart = () => {
		cartContext.addItem(item);
	};

	return (
		<li className="bg-[#e5ebee] rounded-md overflow-hidden grow-0 shrink-0 basis-[18%] border border-slate-300 font-montserrat transition-all duration-100 hover:border-[#526D82] hover:border-2 hover:translate-y-[-2px] mb-6">
			<article>
				<img src={item.image} alt={item.name} />
				<div className="py-2 px-1">
					<div className="line-clamp-2 break-words min-h-[2.5rem] font-medium">
						<h3 className="text-xl">{item.name}</h3>
					</div>
					<p className="uppercase text-2xl text-[#27374D] font-semibold my-2 ml-1">
						{currencyFormatter.format(item.price)}
					</p>
					<div className="line-clamp-2 break-words text-[1.2rem]">
						<p>{item.description}</p>
					</div>
				</div>
				<p className="flex justify-center my-2">
					<Button size='lg' className='text-xl bg-yellow-600 my-4' onClick={handleAddItemToCart}>Add to Cart</Button>
				</p>
			</article>
		</li>
	);
};

export default ShopItem;
