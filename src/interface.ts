import { UserLoyalty } from "./enums";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: UserLoyalty;
    date: string;
}