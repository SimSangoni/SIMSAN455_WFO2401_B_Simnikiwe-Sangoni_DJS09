import './styles.css';


// Boolean Types mini-challenge
// if the last reviewer is a loyalty User, can you add a star to the end of their name?
// please do so in the existing function, and make sure to declare what type of 
// parameters the function takes.
// : boolean



const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement;
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;


const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]


function totalReviews(review: number, viewer: string, loyal: boolean ){
    const loyaltyStar = loyal? "⭐": ""
    reviewTotalDisplay.innerHTML = `review total  ${review.toString()} 
    | last reviewed by ${viewer} ${loyaltyStar}`
}

totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: false,
}

function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName.firstName)