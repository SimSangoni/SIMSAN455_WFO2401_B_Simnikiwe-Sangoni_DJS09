import './styles.css';
import { totalReviews, populateUser, updateTime, populateProperty, addReviews, getLocationAndWeather } from './utils';
import { UserLoyalty } from './enums'
import { MainProperty } from './Class';
import { properties } from './Properties';
import { reviews } from './Reviews';
import { you } from './You';

// HTML Elements
const button = document.querySelector('button') as HTMLElement;
const mainImageContainer = document.querySelector('.main-image') as HTMLElement;

// Import images
import italianProperty from './images/italian-property.jpg';


// Functions Call

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

populateProperty(properties)

getLocationAndWeather()

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

