const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement;
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;

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