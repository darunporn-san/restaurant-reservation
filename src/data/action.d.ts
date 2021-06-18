import * as ActionType from "./../typing/data";

export const FETCH_RESTAURANT = "FETCH_RESTAURANT";
export const SEARCHING_NAME = "SEARCHING_NAME";
export interface DataRestaurant {
	type: typeof FETCH_RESTAURANT;
	payload: ActionType.IRestaurant[];
}

export interface SearchingName {
	type: typeof SEARCHING_NAME;
	payload: string;
}

export type TRestaurantReduce = DataRestaurant | SearchingName;
