import * as ActionType from "./../typing/data";

export const FETCH_RESTAURANT = "FETCH_RESTAURANT";
export const SEARCHING_NAME = "SEARCHING_NAME";
export const MODAL_RESERVATION = "MODAL_RESERVATION";
export const RESERVATION = "RESERVATION";
export interface DataRestaurant {
	type: typeof FETCH_RESTAURANT;
	payload: ActionType.IRestaurant[];
}

export interface SearchingName {
	type: typeof SEARCHING_NAME;
	payload: string;
}

export interface SetBoolean {
	type: typeof MODAL_RESERVATION;
	payload: boolean;
}

export interface Reservation {
	type: typeof RESERVATION;
	payload: {
		name: string;
		totalQueue: number;
	};
}
export type TRestaurantReduce =
	| DataRestaurant
	| SearchingName
	| SetBoolean
	| Reservation;
