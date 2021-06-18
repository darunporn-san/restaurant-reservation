import * as React from "react";
import styled from "styled-components";
import data from "../../data.json";
import { RestaurantState } from "./../../typing/data";

import _ from "lodash";
import ItemList from "./ItemList";
interface IListRestaurant {}
const ListRestaurant: React.FC<IListRestaurant> = (props) => {
	return (
		<>
			<AllListRes>
				{_.map(data.restaurant, (res: RestaurantState, i: number) => {
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

const AllListRes = styled.div`
	flex-flow: wrap;
	display: flex;
	justify-content: space-around;
	padding: 0;
	margin: 0;
	list-style: none;
	/* padding-bottom: 10px; */
`;

const Item = styled.div`
	background: white;
	border-radius: 10px;
	padding: 5px;
	width: 250px;
	height: 400px;
	margin-top: 10px;
	/* line-height: 150px; */
	color: white;
	/* font-weight: bold; */
	/* font-size: 3em; */
	text-align: center;
`;
