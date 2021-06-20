import * as React from "react";
import {
	ALlDetail,
	TextDetail,
	ButtonModal,
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
			<div className="text-center">
				<h1><b>Confirm</b></h1>
			</div>
			<TextDetail>
				<p>Restaurant</p>
				<p><b>{props.data.name}</b></p>
			</TextDetail>
			<TextDetail>
				<p>Date</p>
				<p><b>{props.data.date}</b></p>
			</TextDetail>
			<TextDetail>
				<p>Time</p>
				<p><b>{props.data.time}</b></p>
			</TextDetail>
			<TextDetail>
				<p>People</p>
				<p><b>{props.data.people}</b></p>
			</TextDetail>

			<TextDetail className="mt-3">
				<ButtonModal color= "#b2b2b2" onClick={(e) => props.changePage("cancel")}>Pervious</ButtonModal>
				<ButtonModal 
				color= "#57CC99" 
					onClick={(e) =>
						dispatch({
							type: "SAVE_RESERVATION",
							payload: undefined,
						})
					}>
					Confirm
				</ButtonModal>
			</TextDetail>
		</>
	);
};
export default Confirm;
