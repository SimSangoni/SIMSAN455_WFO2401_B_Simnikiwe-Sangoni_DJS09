import './styles.css';
import { totalReviews, populateUser, updateTime, getTopTwoReviews } from './utils';
import { Permissions, UserLoyalty } from './enums'
import { PropertyInterface, Review } from './interface';
import { MainProperty } from './Class';
import { properties } from './Properties';
import { reviews } from './Reviews';

// HTML Elements
const footer = document.querySelector('.footer') as HTMLElement
const propertyDisplay = document.querySelector('.properties') as HTMLElement;
const button = document.querySelector('button') as HTMLElement;
const reviewContainer = document.querySelector('.reviews') as HTMLElement;
const container = document.querySelector('.container') as HTMLElement;
const mainImageContainer = document.querySelector('.main-image') as HTMLElement;

// Import images
import italianProperty from './images/italian-property.jpg';


const you = {
    firstName: 'Simnikiwe',
    lastName: 'Sangoni',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


// Functions

function populateProperty(properties: PropertyInterface[]){
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

// let isLoggedIn: boolean
// isLoggedIn = false

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
function addReviews(array: Review []) : void {
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


let yourMainProperty = new MainProperty('Italian House', [{
    name: 'Olive',
    stars: 5,
    loyaltyUser: UserLoyalty.GOLD,
    date: '12-04-2021'
}], italianProperty, )

const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)

