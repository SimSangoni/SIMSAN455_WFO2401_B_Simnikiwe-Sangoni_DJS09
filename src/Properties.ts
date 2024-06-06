// Import images
import colombiaProperty from './images/colombia-property.jpg';
import polandProperty from './images/poland-property.jpg';
import londonProperty from './images/london-property.jpg';


import { PropertyInterface } from './interface';



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
    }
]

