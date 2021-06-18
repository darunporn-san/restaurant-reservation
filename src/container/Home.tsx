import * as React from "react";
import Searching from "../components/home/Search";
import ListR from "../components/home/ListR";
import { RestaurantReducer, initialState } from "./../data/store";
import { useEffect } from "react";
import data from "../data.json";

const Homepage = () => {
	const [state, dispatch] = React.useReducer(RestaurantReducer, initialState);	

	useEffect(() => {
		dispatch({
			type: "FETCH_RESTAURANT",
			payload: data.restaurant,
		});
	}, []);
	return (
		<>
			<Searching />
			<ListR data={state.restaurantList} />
		</>
	);
};
export default Homepage;
