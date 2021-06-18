import { createStore } from "redux";
import RestaurantType from "./../typing/data";
import RestaurantAction from '../data/action'

export const initialState: RestaurantType.IRestaurantInitial = {
	user: {
		name: "",
		username: "",
		history: [
			{
				restaurantName: "",
				date: "",
				time: "",
				people: 0,
			},
		],
	},
	restaurant: {
		name: "",
		totalQueue: 0,
		freeQueue: 0,
		image: [],
	},
	restaurantList:  []
};
export function RestaurantReducer(state = initialState, action: RestaurantAction.TRestaurantReduce) {
	switch (action.type) {
		case "FETCH_RESTAURANT":
			return {...state,restaurantList:action.payload};
		default:
			return state;
	}
}

const store = createStore(RestaurantReducer);
export default store;
