import './styles.css';
import { totalReviews, populateUser, updateTime, getTopTwoReviews } from './utils';
import { Permissions, UserLoyalty } from './enums'
import { Country, Price } from './types';
import { Review } from './interface';

// HTML Elements
const footer = document.querySelector('.footer') as HTMLElement
const propertyDisplay = document.querySelector('.properties') as HTMLElement;
const button = document.querySelector('button') as HTMLElement;
const reviewContainer = document.querySelector('.reviews') as HTMLElement;
const container = document.querySelector('.container') as HTMLElement;


// Import images
import colombiaProperty from './images/colombia-property.jpg';
import polandProperty from './images/poland-property.jpg';
import londonProperty from './images/london-property.jpg';


// Reviews
const reviews:  Review[]  = [
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
    pricePerNight: Price;
    location: {
        lineAddres: string;
        townCity: string;
        postCode: number;
        country: Country;
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
        pricePerNight: 30,
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
        pricePerNight: 25,
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


// Functions

function populateProperty(properties: {
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
}[]){
    properties.map(property => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerText = property.title;
        const image = document.createElement('img');
        image.setAttribute('src', property.image);
        card.appendChild(image)
        propertyDisplay.appendChild(card)
        showDetails(you.permissions, card, property.pricePerNight)
    })
}

let isLoggedIn: boolean
isLoggedIn = false

function showDetails(authorityStatus: boolean | Permissions, cardElement : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       cardElement.appendChild(priceDisplay)
       
   }
}



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


// Functions Call

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

populateProperty(properties)

let count = 0
function addReviews(array: {
    name: string;
    stars: number;
    loyaltyUser: UserLoyalty;
    date: string;
}[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))

