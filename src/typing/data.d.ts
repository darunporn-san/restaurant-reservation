export interface RestaurantState {
	name: string;
	totalQueue: number;
	image: string[];
}

export interface IRestaurantInitial {
	user: IUser;
	restaurant: IRestaurant;
	restaurantList: IRestaurant[];
}

interface IUser {
	name: string;
	username: string;
	history: IHistory[];
}

interface IHistory {
	restaurantName: string;
	date: string;
	time: string;
	people: number;
}
interface IRestaurant {
	name: string;
	totalQueue: number;
	freeQueue?: number;
	image: string[];
}
