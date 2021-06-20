import * as ActionType from "./../typing/data";

export const FETCH_RESTAURANT = "FETCH_RESTAURANT";
export const SET_RESTAURANT = "SET_RESTAURANT";
export const SEARCHING_NAME = "SEARCHING_NAME";
export const MODAL_RESERVATION = "MODAL_RESERVATION";
export const RESERVATION = "RESERVATION";
export const INPUT_PEOPLE = "INPUT_PEOPLE";
export const INPUT_DATETIME = "INPUT_DATETIME";
export const SAVE_RESERVATION = "SAVE_RESERVATION";
export const RESET_RESERVATION = "RESET_RESERVATION";
export interface DataRestaurant {
	type: typeof SET_RESTAURANT;
	payload: ActionType.IRestaurant[];
}

export interface SearchingName {
	type: typeof SEARCHING_NAME | typeof INPUT_PEOPLE | typeof INPUT_DATETIME;
	payload: string;
}

export interface SetBoolean {
	type: typeof MODAL_RESERVATION;
	payload: boolean;
}

export interface Reservation {
	type: typeof RESERVATION;
	payload: ActionType.IRestaurant;
}

export interface SetUndefined {
	type:
		| typeof SAVE_RESERVATION
		| typeof RESET_RESERVATION
		| typeof FETCH_RESTAURANT;
	payload: undefined;
}

export type TRestaurantReduce =
	| DataRestaurant
	| SearchingName
	| SetBoolean
	| Reservation
	| SetUndefined;
