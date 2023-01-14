
export type TUser = {
    id:number
    email:string
    password:string
}

export enum ECategorys{
    ACCESSORIES="Acessórios",
    CLOTHES = "Roupas",
    SHOES="Calçados",
    ELETRONICS="Eletrônicos"
}

export type TProduct = {
    id:number
    name:string
    price:number
    category:ECategorys
}

export type TPurchase = {
    userId:number
    productId:number
    quantity:number
    totalPrice:number
}