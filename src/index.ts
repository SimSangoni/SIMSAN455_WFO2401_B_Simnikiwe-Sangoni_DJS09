import './styles.css';
import { totalReviews, populateUser, updateTime, populateProperty, addReviews } from './utils';
import { UserLoyalty } from './enums'
import { MainProperty } from './Class';
import { properties } from './Properties';
import { reviews } from './Reviews';
import { you } from './You';

// HTML Elements
const footer = document.querySelector('.footer') as HTMLElement
const button = document.querySelector('button') as HTMLElement;
const mainImageContainer = document.querySelector('.main-image') as HTMLElement;

// Import images
import italianProperty from './images/italian-property.jpg';


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


button.addEventListener('click', () => addReviews(reviews))


// Create Main Image Object

let yourMainProperty = new MainProperty('Italian House', [{
    name: 'Olive',
    stars: 5,
    loyaltyUser: UserLoyalty.GOLD,
    date: '12-04-2021'
}], italianProperty, )

const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)

