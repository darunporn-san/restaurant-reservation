import * as React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import RestaurantAction from "./../../data/action";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { IRestaurant } from "../../typing/data";
import {
	ALlDetail,
	TextDetail,
	Button,
	PlainText,
} from "../../container/style";

interface IReservation {
	data: IRestaurant;
	changePage: (action: string) => void;
	// submitReserve:()=>void
}
const Reservation: React.FC<IReservation> = (props) => {
	const dispatch = useDispatch<Dispatch<RestaurantAction.TRestaurantReduce>>();
	const regex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const [valueQueue, setValueQueue] = React.useState(false);

	const cancelQueue = (e: any) => {
		dispatch({
			type: "RESET_RESERVATION",
			payload: undefined,
		});
		dispatch({
			type: "MODAL_RESERVATION",
			payload: false,
		});
	};
	React.useEffect(() => {
		if (props.data.freeQueue !== undefined && props.data.people !== undefined) {
			let queue: number = props.data.freeQueue - props.data.people;
			if (queue < 0) {
				setValueQueue(true);
			} else {
				setValueQueue(false);
			}
		}
	}, [props]);
	return (
		<>
			<p className="text-center">{props.data.name}</p>
			<TextDetail>
				<p>Name</p>
				<p>Darunporn</p>
			</TextDetail>
			{valueQueue ? (
				<div className="alert alert-danger" role="alert">
					Number of People is more than free queue
				</div>
			) : (
				""
			)}

			<TextDetail>
				<p>How people to book</p>
				<p>
					<input
						type="text"
						value={props.data.people}
						onChange={(e) => {
							dispatch({
								type: "INPUT_PEOPLE",
								payload: e.target.value,
							});
						}}
						onKeyDown={(e) => {
							if (e.key !== "Backspace") {
								!regex.includes(e.key) && e.preventDefault();
							}
						}}
					/>
				</p>
			</TextDetail>
			<TextDetail>
				<p>Free Queue</p>
				<p>{props.data.freeQueue}</p>
			</TextDetail>
			<TextDetail>
				<div>Time</div>
				<div>
					<DatePicker
						selected={props.data.dateTime}
						onChange={(e:  any) => {
							dispatch({
								type: "INPUT_DATETIME",
								payload: e,
							});
						}}
						minDate={new Date()}
						showTimeSelect
						timeFormat="HH:mm"
						timeIntervals={15}
						timeCaption="time"
						dateFormat="MMMM d, yyyy h:mm aa"
					/>
				</div>
			</TextDetail>

			<TextDetail className="mt-3">
				<button onClick={cancelQueue}>Cancel</button>
				<button onClick={(e) => props.changePage("next")}
					disabled={props.data.people === 0 || props.data.dateTime === null || valueQueue?true:false}
				>Reserve</button>
			</TextDetail>
		</>
	);
};
export default Reservation;
