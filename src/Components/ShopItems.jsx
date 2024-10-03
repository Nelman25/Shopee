import axios from "axios";
import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";

const ShopItems = () => {
	const [loadedItems, setLoadedItems] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/meals")
			.then((response) => setLoadedItems(response.data));
	}, []);

	return (
		<div className="w-[1000px] mx-auto">
			<ul className="flex w-[100%] flex-wrap gap-3">
				{loadedItems.map((item) => (
					<ShopItem key={item.id} item={item} />
				))}
			</ul>
		</div>
	);
};

export default ShopItems;
