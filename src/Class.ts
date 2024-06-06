import { Review } from "./interface"

export class MainProperty {
    title: string
    reviews: Review[]
    src: string
    constructor( title: string, reviews: Review[], src: string) {
        this.title = title
        this.reviews = reviews
        this.src = src
    }
}