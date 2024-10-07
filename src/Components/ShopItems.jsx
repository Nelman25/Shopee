import axios from "axios";
import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "./ui/pagination";

const ShopItems = () => {
	const [loadedItems, setLoadedItems] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/meals")
			.then((response) => setLoadedItems(response.data));
	}, []);

	return (
		<div className="w-[1000px] mt-40 mx-auto text-[4rem]">
			<ul className="flex justify-evenly mx-auto w-[100%] flex-wrap gap-3">
				{loadedItems.map((item) => (
					<ShopItem key={item.id} item={item} />
				))}
			</ul>
			<div className="text-[4rem]">
				<Pagination className='mt-4'>
					<PaginationContent>
						<PaginationItem className="flex items-center">
							<PaginationPrevious
								href="#"
								className="text-[2rem] font-normal"
							/>
						</PaginationItem>
						<PaginationItem className="flex items-center">
							<PaginationLink href="#" className="text-[2rem] font-normal">
								1
							</PaginationLink>
							<PaginationLink href="#" className="text-[2rem] font-normal">
								2
							</PaginationLink>
							<PaginationLink href="#" className="text-[2rem] font-normal">
								3
							</PaginationLink>
							<PaginationLink href="#" className="text-[2rem] font-normal">
								4
							</PaginationLink>
							<PaginationLink href="#" className="text-[2rem] font-normal">
								5
							</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis className='text-[2rem]'/>
						</PaginationItem>
						<PaginationItem className="flex items-center">
							<PaginationNext href="#" className="text-[2rem] font-normal" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
};

export default ShopItems;
