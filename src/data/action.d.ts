import * as ActionType from "./../typing/data";

export const FETCH_RESTAURANT = "FETCH_RESTAURANT";

export interface DataRestaurant {
	type: typeof FETCH_RESTAURANT;
	payload: ActionType.IRestaurant[];
}

export type TRestaurantReduce = DataRestaurant;
