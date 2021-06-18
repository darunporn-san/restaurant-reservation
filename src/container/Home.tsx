import * as React from "react";
import ListR from "../components/home/ListR";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import RestaurantAction from "./../data/action";
import Modal from "../components/Modal";
import Reservation from "./../components/Modal/Reservation";
import { SearchList, Icon, Input } from "./../container/style";

import data from "../data.json";

const Homepage = (props: any) => {
	const dispatch = useDispatch<Dispatch<RestaurantAction.TRestaurantReduce>>();

	useEffect(() => {
		dispatch({
			type: "FETCH_RESTAURANT",
			payload: data.restaurant,
		});
	}, []);

	return (
		<>
			<SearchList>
				<Input
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						dispatch({
							type: "SEARCHING_NAME",
							payload: e.target.value,
						})
					}
				/>
				<Icon>search</Icon>
			</SearchList>{" "}
			<ListR data={props.restaurant.searchingList} />
			<Modal show={props.restaurant.modalReservation} size="modal-md">
				<div className="modal-content">
					<Reservation data = {props.restaurant.reservetion}/>
				</div>
			</Modal>
		</>
	);
};

const mapStateToProps = (state: any) => {
	return {
		restaurant: state,
	};
};
export default connect(mapStateToProps)(Homepage);
