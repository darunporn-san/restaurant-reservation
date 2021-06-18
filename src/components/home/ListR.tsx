import * as React from "react";
import { RestaurantState } from "./../../typing/data";
import { AllListRes, Item } from "../../container/style";

import _ from "lodash";
import ItemList from "./ItemList";
interface IListRestaurant {
	data:  any;
}
const ListRestaurant: React.FC<IListRestaurant> = (props) => {
	return (
		<>
			<AllListRes>
				{_.map(props.data, (res: RestaurantState, i: number) => {
					return (
						<Item key={i}>
							<ItemList data={res} />
						</Item>
					);
				})}
			</AllListRes>{" "}
		</>
	);
};
export default ListRestaurant;
