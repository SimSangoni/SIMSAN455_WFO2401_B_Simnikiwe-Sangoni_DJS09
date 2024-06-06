import './styles.css';
import { totalReviews, populateUser, populateProperty } from './utils';


// Import images
import colombiaProperty from './images/colombia-property.jpg';
import polandProperty from './images/poland-property.jpg';
import londonProperty from './images/london-property.jpg';


const footer = document.querySelector('.footer') as HTMLElement

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

// Tuples challenge
// 1. Add an array to the variable of currentLocation I have added. This array
// must have your current location, time, and degrees celcius of your location
// NOTE: make sure to make this a Tuple, to only allow those types in that
// structure.
// 2. Add this visually to a footer on your site

// use your location, your current time, and the current temperature of your
// location


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }


try {
navigator.geolocation.getCurrentPosition(async position => {
    // console.log(position)
    const weatherRes = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`) 
        if (!weatherRes.ok) {
            throw Error("Weather data not available")
        }
    const data2 = await weatherRes.json()
    const time = new Date().toLocaleTimeString()

    let currentLocation:[string, string, number] = [data2.name, time, Math.round(data2.main.temp)]
    footer.innerHTML = `${currentLocation[0]}  ${currentLocation[1]}  ${currentLocation[2]}°`
    });
} catch(error2){
console.error(error2)
}




