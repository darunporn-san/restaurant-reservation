export interface RestaurantState {
	name: string;
	totalQueue: number;
	image: string[];
}

export interface IRestaurantInitial {
	user: IUser;
	restaurant: IRestaurant;
	reservetion:  IRestaurant;
	restaurantList: IRestaurant[];
	searchingList: IRestaurant[];
	modalReservation: boolean;
}

interface IUser {
	name: string;
	username: string;
	history: IHistory[];
}

interface IHistory {
	restaurantName: string;
	date?: string;
	time?: string;
	people?: number;
}
interface IRestaurant {
	name: string;
	totalQueue?: number;
	freeQueue?: number;
	image?: string[];
	people?: number;
	date?:  string;
	time?:  string
	dateTime?: Date | null 
}
