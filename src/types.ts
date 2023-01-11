
export type TUser = {
    id:number
    email:string
    password:string
}

export type TProduct = {
    id:number
    name:string
    price:number
    category:string 
}

export type TPurchase = {
    userId:number
    productId:number
    quantity:number
    totalPrice:number
}