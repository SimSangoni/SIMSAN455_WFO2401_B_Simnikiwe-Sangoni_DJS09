import { UserLoyalty, Permissions } from "./enums";
import { Review } from "./interface";
import { you } from "./You";
import { PropertyInterface } from "./interface";

const reviewContainer = document.querySelector('.reviews') as HTMLElement;
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement;
const userNameDisplay = document.querySelector('#user') as HTMLElement;
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;
const propertyDisplay = document.querySelector('.properties') as HTMLElement;
const container = document.querySelector('.container') as HTMLElement;
const button = document.querySelector('button') as HTMLElement;
const footer = document.querySelector('.footer') as HTMLElement;




export function totalReviews(review: number, viewer: string, loyal: UserLoyalty ){
    let loyaltyIcon = ''
    if (loyal === UserLoyalty.GOLD){
        loyaltyIcon = '🥇'
    } else if (loyal === UserLoyalty.BRONZE){
        loyaltyIcon = '🥉'
    } else {
        loyaltyIcon = '🥈'
    }
    reviewTotalDisplay.innerHTML = `${review.toString()} Review${makeMultiple(review)}
    | last reviewed by ${viewer} ${loyaltyIcon}`
}

export function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function populateProperty(properties: PropertyInterface[]){
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


export function updateTime() {
    const time = new Date().toLocaleTimeString()
    // console.log(time)
    return time
}


export function makeMultiple(value: number):string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}


function getTopTwoReviews(reviews : Review[]) : Review[]  {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0,2)
}


let count = 0
export function addReviews(array: Review []) : void {
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

export async function getLocationAndWeather(): Promise<void> {
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
    
}
