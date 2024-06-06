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
    isAvailable: boolean;
}[]=[
    {
    image:'images/colombia-property.jpg', 
    title: 'Colombian Shack',
    pricePerNight: 45,
    location: {
        lineAddres: 'Shack 37',
        townCity: 'Bogota',
        postCode: 45632,
        country: 'Colombia',
    },
    contact: 'marywinkle@gmail.com',
    isAvailable: true,
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        pricePerNight: 34,
        location: {
            lineAddres: 'no 23',
            townCity: 'Gdansk',
            postCode: 343903,
            country: 'Poland'
        },
        contact: 'garydavis@hotmail.com',
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        pricePerNight: 23,
        location: {
            lineAddres: 'flat 15',
            townCity: 'London',
            postCode: 35433,
            country: 'United Kingdom',
        },
        contact: 'andyluger@aol.com',
        isAvailable: true
    }
]


// Functions Call

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)