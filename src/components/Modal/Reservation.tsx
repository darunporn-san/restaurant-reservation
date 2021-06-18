import * as React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import RestaurantAction from "./../../data/action";
import { IRestaurant } from "../../typing/data";
interface IReservation {
	data: IRestaurant;
}
const Reservation: React.FC<IReservation> = (props) => {
	const dispatch = useDispatch<Dispatch<RestaurantAction.TRestaurantReduce>>();
	console.log("data", props.data);

	return (
		<>
			<p>{props.data.name}</p>
			<p>Free Queue {props.data.totalQueue}</p>
			<button
				onClick={(e) =>
					dispatch({
						type: "MODAL_RESERVATION",
						payload: false,
					})
				}>
				Cancel
			</button>
			<button>Reserve</button>
		</>
	);
};
export default Reservation;
