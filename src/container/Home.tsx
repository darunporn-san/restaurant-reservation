import * as React from "react";
import Searching from "../components/home/Search";
import ListR from "../components/home/ListR";
import { RestaurantReducer, initialState } from "./../data/store";

const Homepage = () => {
	const [state, dispatch] = React.useReducer(RestaurantReducer, initialState);

	console.log("state", state);

	return (
		<>
			<Searching />
			<ListR />
		</>
	);
};
export default Homepage;
