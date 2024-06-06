import './styles.css';
import { totalReviews, populateUser, populateProperty, updateTime } from './utils';
const footer = document.querySelector('.footer') as HTMLElement
import { Permissions, UserLoyalty } from './enums'


// Import images
import colombiaProperty from './images/colombia-property.jpg';
import polandProperty from './images/poland-property.jpg';
import londonProperty from './images/london-property.jpg';




let isOpen: boolean;


// Reviews
const reviews: {
    name: string;
    stars: number;
    loyaltyUser: UserLoyalty;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: UserLoyalty.GOLD,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: UserLoyalty.BRONZE,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: UserLoyalty.SILVER,
        date: '27-03-2021'
    },
]

// const you: {
//     firstName : string;
//     lastName: string;
//     age: number
//     isReturning: boolean;
//     stayedAt: string[]
// } = {
//     firstName: 'Bobby',
//     lastName: 'Brown',
//     age: 35,
//     isReturning: true,
//     stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }

const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
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
    contact: [number, string];
    isAvailable: boolean;
}[]=[
    {
        image: colombiaProperty, 
        title: 'Colombian Shack',
        pricePerNight: 45,
        location: {
            lineAddres: 'Shack 37',
            townCity: 'Bogota',
            postCode: 45632,
            country: 'Colombia',
        },
        contact: [ +1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true,
    },
    {
        image: polandProperty,
        title: 'Polish Cottage',
        pricePerNight: 34,
        location: {
            lineAddres: 'no 23',
            townCity: 'Gdansk',
            postCode: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: londonProperty,
        title: 'London Flat',
        pricePerNight: 23,
        location: {
            lineAddres: 'flat 15',
            townCity: 'London',
            postCode: 35433,
            country: 'United Kingdom',
        },
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    }
]


// Functions Call

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

populateProperty(properties)



try {
navigator.geolocation.getCurrentPosition(async position => {
    const weatherRes = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`) 
        if (!weatherRes.ok) {
            throw Error("Weather data not available")
        }
    const data2 = await weatherRes.json()
    let time = updateTime();
        
    let currentLocation: [string, string, number] = [data2.name, time, Math.round(data2.main.temp)];
    
    footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`;
    
    setInterval(() => {
        time = updateTime();
        currentLocation[1] = time;
        footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`;
    }, 1000); 
});
} catch(error2){
console.error(error2)
}







