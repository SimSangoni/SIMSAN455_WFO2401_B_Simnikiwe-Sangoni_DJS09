import { UserLoyalty } from "./enums";

const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement;
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;
const propertyDisplay = document.querySelector('.properties') as HTMLElement;




export function totalReviews(review: number, viewer: string, loyal: UserLoyalty ){
    let loyaltyIcon = ''
    if (loyal === UserLoyalty.GOLD){
        loyaltyIcon = '🥇'
    } else if (loyal === UserLoyalty.BRONZE){
        loyaltyIcon = '🥉'
    } else {
        loyaltyIcon = '🥈'
    }
    reviewTotalDisplay.innerHTML = `review total  ${review.toString()} 
    | last reviewed by ${viewer} ${loyaltyIcon}`
}

export function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function populateProperty(properties: {
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
        showDetails(isLoggedIn, card, property.pricePerNight)
    })
}

export function updateTime() {
    const time = new Date().toLocaleTimeString()
    // console.log(time)
    return time
}


let isLoggedIn: boolean
isLoggedIn = false


export function showDetails(authorityStatus: boolean | Permissions, cardElement : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       cardElement.appendChild(priceDisplay)
       
   }
}