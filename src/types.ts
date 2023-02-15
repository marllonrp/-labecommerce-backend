
export type TUser = {
    id:string
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
    id:string
    name:string
    price:number | undefined
    category:ECategorys
}

export type TPurchase = {
    userId:string
    productId:string
    quantity:number
    totalPrice:number
}