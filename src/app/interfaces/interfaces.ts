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
