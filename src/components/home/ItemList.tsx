import * as React from "react";
import { RestaurantState } from "./../../typing/data";
import {
	ALlDetail,
	TextDetail,
	Button,
	PlainText,
} from "../../container/style";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import RestaurantAction from "../../data/action";

interface IItemLIst {
	data: RestaurantState;
}

const ItemList: React.FC<IItemLIst> = (props) => {
	const dispatch = useDispatch<Dispatch<RestaurantAction.TRestaurantReduce>>();

	var settings = {
		dots: true,
		infinite:true,
		arrows: false,
	};

	const booking = (e: any) => {
		const objData = {
			name: e.name,
			totalQueue: e.totalQueue,
			freeQueue: e.freeQueue,
		};
		dispatch({
			type: "RESERVATION",
			payload: objData,
		});
		dispatch({
			type: "MODAL_RESERVATION",
			payload: true,
		});
	};
	return (
		<>
			<ALlDetail>
				<Slider {...settings}>
					{props.data.image.map((img: string, i: number) => (
						<div key={i}>
							<img
								src={img}
								width="230"
								alt={props.data.name}
								style={{ margin: "auto" }}
							/>
						</div>
					))}
				</Slider>
				<p className="mt-4">
					
					<b>{props.data.name}</b>
				
				</p>

				<TextDetail>
					<PlainText>Total Queue</PlainText>
					<PlainText>{props.data.totalQueue}</PlainText>
				</TextDetail>
				<TextDetail>
					<PlainText>Free Queue</PlainText>
					<PlainText>{props.data.freeQueue}</PlainText>
				</TextDetail>
				<Button onClick={() => booking(props.data)}>Booking</Button>
			</ALlDetail>
		</>
	);
};
export default ItemList;
