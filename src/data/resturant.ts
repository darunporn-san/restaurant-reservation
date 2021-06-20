import { takeEvery, call, put, select } from "redux-saga/effects";
import data from "../data.json";

// internal
import * as ResturantAction from "./../data/action.d";

function* fetchLists() {
	try {
		yield put<ResturantAction.DataRestaurant>({
			type: "SET_RESTAURANT",
			payload: data.restaurant,
		});
	} catch (error) {
		console.log(error);
	}
}

export default function* rootRestaurant() {
	yield takeEvery(ResturantAction.FETCH_RESTAURANT, fetchLists);
}
