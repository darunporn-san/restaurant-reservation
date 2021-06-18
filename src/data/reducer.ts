import RestaurantType from "../typing/data";
import RestaurantAction from "./action";
import _ from "lodash";
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
	reservetion:  {
		name:  "",
		totalQueue: 0,
	},
	restaurantList: [],
	searchingList: [],
	modalReservation: false,
};
export function RestaurantReducer(
	state = initialState,
	action: RestaurantAction.TRestaurantReduce
) {
	switch (action.type) {
		case "FETCH_RESTAURANT":
			return {
				...state,
				restaurantList: action.payload,
				searchingList: action.payload,
			};
		case "SEARCHING_NAME":
			state.searchingList = _.filter(state.restaurantList, (elm) =>
				elm.name.includes(action.payload)
			);
			return { ...state };
		case "MODAL_RESERVATION":
			return { ...state, modalReservation: action.payload };
		case "RESERVATION":
			state.reservetion.name = action.payload.name
			state.reservetion.totalQueue = action.payload.totalQueue
			return { ...state}
		default:
			return state;
	}
}
