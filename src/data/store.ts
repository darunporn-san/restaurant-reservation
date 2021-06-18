import { createStore } from "redux";
import RestaurantType from "./../typing/data";
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
		image: "",
	},
};
export function RestaurantReducer(state = initialState, action: any) {
	switch (action.type) {
		default:
			return state;
	}
}

const store = createStore(RestaurantReducer);
export default store;
