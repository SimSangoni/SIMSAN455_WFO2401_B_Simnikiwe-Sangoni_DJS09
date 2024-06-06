// Import images
import colombiaProperty from './images/colombia-property.jpg';
import polandProperty from './images/poland-property.jpg';
import londonProperty from './images/london-property.jpg';
import malaysiaProperty from './images/malaysian-property.jpg'
import italianProperty from './images/italian-property.jpg';


import { PropertyInterface } from './interface';
import { UserLoyalty } from './enums'
import { MainProperty } from './Class';


// Properties

export const properties: PropertyInterface[]=[
    {
        image: colombiaProperty, 
        title: 'Colombian Shack',
        pricePerNight: 45,
        location: {
            lineAddres: 'Shack 37',
            townCity: 'Bogota',
            postCode: 45632,
            country: 'Colombia',
        },
        contact: [ +1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true,
    },
    {
        image: polandProperty,
        title: 'Polish Cottage',
        pricePerNight: 30,
        location: {
            lineAddres: 'no 23',
            townCity: 'Gdansk',
            postCode: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: londonProperty,
        title: 'London Flat',
        pricePerNight: 25,
        location: {
            lineAddres: 'flat 15',
            townCity: 'London',
            postCode: 35433,
            country: 'United Kingdom',
        },
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: malaysiaProperty, 
        title: 'Malia Hotel',
        pricePerNight: 35,
        location: {
            lineAddres: 'Room 4',
            townCity: 'Malia',
            postCode: 45632,
            country: 'Malaysia',
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false,}
]


// Main Propery Object

export let yourMainProperty = new MainProperty('Italian House', [{
    name: 'Olive',
    stars: 5,
    loyaltyUser: UserLoyalty.GOLD,
    date: '12-04-2021'
}], italianProperty, )
