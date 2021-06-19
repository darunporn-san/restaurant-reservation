import * as React from "react";
import ListR from "../components/home/ListR";
import { useState, useEffect, useMemo } from "react";
import { connect, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import RestaurantAction from "./../data/action";
import Modal from "../components/Modal";
import Reservation from "./../components/Modal/Reservation";
import { SearchList, Icon, Input } from "./../container/style";
import Confirm from "./../components/Modal/Confirm";
import data from "../data.json";

const Homepage = (props: any) => {
	const [nextConfirm, setNextConfirm] = useState(false);	
	const dispatch = useDispatch<Dispatch<RestaurantAction.TRestaurantReduce>>();
	React.useMemo(() => {
		if (props.restaurant.modalReservation) {
			setNextConfirm(false);
		}
	}, [props]);

	const changePage = (data: string) => {
		setNextConfirm(data === "next" ? true : false);
	};
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
			<Modal show={props.restaurant.modalReservation} size="modal-lg">
				<div className="modal-content p-5">
					{!nextConfirm ? (
						<Reservation
							data={props.restaurant.reservetion}
							changePage={changePage}
						/>
					) : (
						<>
							<Confirm
								changePage={changePage}
								data={props.restaurant.reservetion}
							/>
						</>
					)}
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
