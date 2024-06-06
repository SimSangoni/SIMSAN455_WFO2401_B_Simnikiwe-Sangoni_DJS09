import { UserLoyalty } from "./enums";
import { Permissions } from "./enums";

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
    reviewTotalDisplay.innerHTML = `review total  ${review.toString()} 
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


