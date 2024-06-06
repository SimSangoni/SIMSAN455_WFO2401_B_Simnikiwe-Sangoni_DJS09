// Reviews
import { Review } from "./interface"
import { UserLoyalty } from "./enums"

export const reviews:  Review[]  = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: UserLoyalty.GOLD,
        date: '01-04-2021',
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: UserLoyalty.BRONZE,
        date: '28-03-2021',
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: UserLoyalty.SILVER,
        date: '27-03-2021',
    },
]