const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement;
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;
const propertyDisplay = document.querySelector('.properties') as HTMLElement;




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
    })
}

export function updateTime() {
    const time = new Date().toLocaleTimeString()
    // console.log(time)
    return time
}