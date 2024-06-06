import { UserLoyalty } from "./enums";

const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement;
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;




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


export function updateTime() {
    const time = new Date().toLocaleTimeString()
    // console.log(time)
    return time
}


// Function Return Types + Void Types mini-challenge
// Instead of having a long 'review total 3', can you make the line say '3 reviews', or '1 review'
// if there is only one? Use a function to do this and assing a type to the functions return.

export function makeMultiple(value: number):string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}

