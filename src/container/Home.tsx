import * as React from "react";
import Searching from "../components/home/Search";
import ListR from "../components/home/ListR";
import { RestaurantReducer, initialState } from "../data/reducer";
import { useEffect } from "react";
import data from "../data.json";
import { connect } from "react-redux";

const Homepage = (props: any) => {
	console.log("props", props);

	useEffect(() => {
		props.dispatch({
			type: "FETCH_RESTAURANT",
			payload: data.restaurant,
		});
	}, []);
	return (
		<>
			<Searching />
			<ListR data={props.restaurant.searchingList} />
		</>
	);
};

const mapStateToProps = (state: any) => {
	return {
		restaurant: state,
	};
};
export default connect(mapStateToProps)(Homepage);
