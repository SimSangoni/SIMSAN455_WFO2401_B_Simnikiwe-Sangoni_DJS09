import './styles.css';
import { totalReviews, populateUser } from './utils';


let isOpen: boolean;


// Reviews
const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

const you: {
    firstName : string;
    lastName: string;
    age: number
    isReturning: boolean;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    age: 35,
    isReturning: true,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}



// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?


// Properties
const properties: {
    image: string;
    title: string;
    pricePerNight: number;
    location: {
        lineAddres: string;
        townCity: string;
        postCode: number;
        country: string;
    };
    contact: string;
    availabilityToRent: boolean;
}[]=[
    {
    image:'png', 
    title: 'Simnikiwe',
    pricePerNight: 350,
    location: {
        lineAddres: 'Fortgale',
        townCity: 'Mthatha',
        postCode: 5104,
        country: 'South Africa',
    },
    contact: 'email address',
    availabilityToRent: false,
    },
]


// Functions Call

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)