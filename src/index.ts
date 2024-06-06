import './styles.css';
import { totalReviews, populateUser, populateProperty, addReviews, getLocationAndWeather } from './utils';
import { properties, yourMainProperty } from './Properties';
import { reviews } from './Reviews';
import { you } from './You';

// HTML Elements
const button = document.querySelector('button') as HTMLElement;
const mainImageContainer = document.querySelector('.main-image') as HTMLElement;


// Functions Call

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

populateProperty(properties)

getLocationAndWeather()

button.addEventListener('click', () => addReviews(reviews))


// Create Main Image Object

const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)

