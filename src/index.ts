import './styles.css';
import { totalReviews, populateUser } from './utils';


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


totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

const you = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: false,
}

populateUser(you.isReturning, you.userName.firstName)