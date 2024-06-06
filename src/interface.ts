import { UserLoyalty } from "./enums";
import { Country, Price } from "./types";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: UserLoyalty;
    date: string;
}

export interface PropertyInterface {
    image: string;
    title: string;
    pricePerNight: Price;
    location: {
        lineAddres: string;
        townCity: string;
        postCode: number | string;
        country: Country;
    };
    contact: [number, string];
    isAvailable: boolean;

}