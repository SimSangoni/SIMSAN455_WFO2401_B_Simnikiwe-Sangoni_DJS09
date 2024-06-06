const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement;
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;
const propertyDisplay = document.querySelector('#properties') as HTMLElement;

export function totalReviews(review: number, viewer: string, loyal: boolean ){
    const loyaltyStar = loyal? "⭐": ""
    reviewTotalDisplay.innerHTML = `review total  ${review.toString()} 
    | last reviewed by ${viewer} ${loyaltyStar}`
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
    contact: string;
    isAvailable: boolean;
}[]){
    // propertyDisplay.appendChild(cardDisplay) = "Is it working first?"
    properties.map(property => {
        propertyDisplay.innerHTML +=
        `<div class="card" id="card">
            <h2>${property.title}<h2>
            <img src=${property.image} />
        </div>
        `
    })
}

// ()=>{
//     return {
//         card.innerHTML = 
//     }
// }