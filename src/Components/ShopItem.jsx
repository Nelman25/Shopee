import { currencyFormatter } from "../util/currencyFormat.js";

const ShopItem = ({ item }) => {
	return (
		<li className="bg-white grow-0 shrink-0 basis-[18%] border border-slate-300 font-montserrat hover:border-orange-500 hover:border-2 hover:translate-y-[-2px] mb-6">
			<article>
				<img src={item.image} alt={item.name} />
				<div className="py-2 px-1">
					<div className="line-clamp-2 break-words min-h-[2.5rem] font-medium">
						<h3>{item.name}</h3>
					</div>
					<p className="uppercase text-orange-500 font-semibold my-2">
						{currencyFormatter.format(item.price)}
					</p>
					<div className="line-clamp-2 break-words text-[0.8rem]">
						<p>{item.description}</p>
					</div>
				</div>
				<p className="flex justify-center my-2">
					<button className="bg-yellow-200 px-3 py-1 rounded-xl shadow-sm">
						Add to Cart
					</button>
				</p>
			</article>
		</li>
	);
};

export default ShopItem;
