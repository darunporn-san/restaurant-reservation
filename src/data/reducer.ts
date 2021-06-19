import RestaurantType from "../typing/data";
import RestaurantAction from "./action";
import moment from "moment";
import _ from "lodash";
export const initialState: RestaurantType.IRestaurantInitial = {
	user: {
		name: "",
		username: "",
		history: [],
	},
	restaurant: {
		name: "",
		totalQueue: 0,
		freeQueue: 0,
		image: [],
	},
	reservetion: {
		name: "",
		totalQueue: 0,
		freeQueue: 0,
		people: 0,
		date: "",
		time: "",
		dateTime: null,
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
				elm.name?.includes(action.payload)
			);
			return { ...state };
		case "MODAL_RESERVATION":
			return { ...state, modalReservation: action.payload };
		case "RESERVATION":
			state.reservetion.name = action.payload.name;
			state.reservetion.totalQueue = action.payload.totalQueue;
			state.reservetion.freeQueue = action.payload.freeQueue;
			return { ...state };
		case "INPUT_PEOPLE":
			state.reservetion.people = +action.payload;
			return { ...state };
		case "INPUT_DATETIME":
			console.log('action',moment(new Date(action.payload)).format("L"));
			
			state.reservetion.dateTime = new Date(action.payload)
			state.reservetion.date = moment(new Date(action.payload)).format("L");
			state.reservetion.time = moment(new Date(action.payload)).format("LT");
			
			return { ...state };
		case "SAVE_RESERVATION":
			const objData = {
				restaurantName: state.reservetion.name,
				date: state.reservetion.date,
				time: state.reservetion.time,
				people: state.reservetion.people,
			};
			state.user.history.push(objData);
			state.modalReservation = false;
			state.reservetion = {
				name: "",
				totalQueue: 0,
				freeQueue: 0,
				people: 0,
				date: "",
				time: "",
				dateTime: null,
			}

			return { ...state };
		case "RESET_RESERVATION":
			state.reservetion = {
				name: "",
				totalQueue: 0,
				freeQueue: 0,
				people: 0,
				date: "",
				time: "",
				dateTime: null,
			};
			return { ...state };
		default:
			return state;
	}
}
