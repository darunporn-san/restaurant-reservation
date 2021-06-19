import * as React from "react";
import {
	ALlDetail,
	TextDetail,
	Button,
	PlainText,
} from "../../container/style";
import { IRestaurant } from "../../typing/data";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import RestaurantAction from "./../../data/action";

interface IConfirm {
	changePage: (action: string) => void;
	data: IRestaurant;
}
const Confirm: React.FC<IConfirm> = (props) => {
	const dispatch = useDispatch<Dispatch<RestaurantAction.TRestaurantReduce>>();

	return (
		<>
			<TextDetail>
				<p>Restaurant</p>
				<p>{props.data.name}</p>
			</TextDetail>
			<TextDetail>
				<p>Date</p>
				<p>{props.data.date}</p>
			</TextDetail>
			<TextDetail>
				<p>Time</p>
				<p>{props.data.time}</p>
			</TextDetail>
			<TextDetail>
				<p>People</p>
				<p>{props.data.people}</p>
			</TextDetail>

			<TextDetail className="mt-3">
				<button onClick={(e) => props.changePage("cancel")}>Pervious</button>
				<button
					onClick={(e) =>
						dispatch({
							type: "SAVE_RESERVATION",
							payload: undefined,
						})
					}>
					Confirm
				</button>
			</TextDetail>
		</>
	);
};
export default Confirm;
