declare interface Exercise {
    id: number
    name: string
    
    weight: CurrentWeight
}

declare interface CurrentWeight extends Weight {
    history: Weight[]
}

declare interface Weight {
    text: string
    date: number
}