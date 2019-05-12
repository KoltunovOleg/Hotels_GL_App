export interface Hotel {
	id: number;
	key: number;
	title: string;
	address: string;
	description: string;
	phone: string;
	picture: string;
	photos: [
		string, string
	];
	weather: IWeather;
	profile: IProfile;
	stars: number;
	comments?: IComment[]
}


export interface IWeather {
	temperature: number,
	wind: number,
	icon: string
}

export interface IProfile {
	followers: number,
	following: number,
	photo: string
}

export interface IFavHotel {
	id: number;
	key: number;
	title: string;
}

export interface IPagination {
	first?: string;
	last?: string;
	prev?: string;
	next?: string;
}

export interface IComment {
	author: string;
	date: string;
	comment: string
}
