"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchaseFromUserID = exports.createPurshase = exports.queryProductByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [{
        id: "a001",
        email: "fulano@teste.com",
        password: "fulano123",
    },
    {
        id: "a002",
        email: "ciclano@teste.com",
        password: "ciclano123",
    }];
exports.products = [{
        id: "p001",
        name: "Chinelo",
        price: 45,
        category: types_1.ECategorys.SHOES
    }, {
        id: "p002",
        name: "Regata",
        price: 80,
        category: types_1.ECategorys.CLOTHES
    }
];
exports.purchases = [
    {
        userId: "u001",
        productId: "p001",
        quantity: 2,
        totalPrice: 24
    }, {
        userId: "u002",
        productId: "p002",
        quantity: 3,
        totalPrice: 45
    }
];
const createUser = (idIn, emailIn, passwordIn) => {
    const newUser = {
        id: idIn,
        email: emailIn,
        password: passwordIn
    };
    exports.users.push(newUser);
    console.log(`Novo usuário cadastrado com sucesso! Você tem um total de ${exports.users.length} usuário(s) cadastrado(s).`);
};
exports.createUser = createUser;
const getAllUsers = () => {
    console.table(exports.users);
};
exports.getAllUsers = getAllUsers;
const createProduct = (idIn, nameIn, priceIN, categoryIn) => {
    const result = [];
    if (categoryIn === types_1.ECategorys.ACCESSORIES) {
        const newProduct = {
            id: idIn,
            name: nameIn,
            price: priceIN,
            category: types_1.ECategorys.ACCESSORIES
        };
        result.push(newProduct);
    }
    else if (categoryIn === types_1.ECategorys.CLOTHES) {
        const newProduct = {
            id: idIn,
            name: nameIn,
            price: priceIN,
            category: types_1.ECategorys.CLOTHES
        };
        result.push(newProduct);
    }
    else if (categoryIn === types_1.ECategorys.ELETRONICS) {
        const newProduct = {
            id: idIn,
            name: nameIn,
            price: priceIN,
            category: types_1.ECategorys.ELETRONICS
        };
        result.push(newProduct);
    }
    else if (categoryIn === types_1.ECategorys.SHOES) {
        const newProduct = {
            id: idIn,
            name: nameIn,
            price: priceIN,
            category: types_1.ECategorys.SHOES
        };
        result.push(newProduct);
    }
    if (result !== undefined) {
        exports.products.push(result[0]);
        console.log(`Novo produto cadastrado com sucesso! Você tem um total de ${exports.products.length} produto(s) cadastrado(s).`);
    }
    else {
        console.log("Erro ao cadastrar produto, por favor, revise os parâmetros!");
    }
};
exports.createProduct = createProduct;
const getAllProducts = () => {
    console.table(exports.products);
};
exports.getAllProducts = getAllProducts;
const getProductById = (idToSearch) => {
    const filtred = exports.products.filter(item => item.id === idToSearch);
    filtred.length !== 0 ? console.table(filtred) : console.log("Nenhum produto encontrado!");
};
exports.getProductById = getProductById;
const queryProductByName = (q) => {
    const nameToSearch = q.toLowerCase();
    const result = exports.products.filter(item => item.name.toLocaleLowerCase() === nameToSearch);
    result.length !== 0 ? console.table(result) : console.log("Nenhum produto encontrado!");
};
exports.queryProductByName = queryProductByName;
const createPurshase = (userIdIn, productIdIn, quantityIn, totalPriceIN) => {
    const newPurshase = {
        userId: userIdIn,
        productId: productIdIn,
        quantity: quantityIn,
        totalPrice: totalPriceIN
    };
    exports.purchases.push(newPurshase);
    console.log(`Compra realizada com sucesso!`);
};
exports.createPurshase = createPurshase;
const getAllPurchaseFromUserID = (idIn) => {
    const result = exports.purchases.filter(item => item.userId === idIn);
    result.length !== 0 ? console.table(result) : console.log("Nenhuma compra encontada para este ID de Usuário.");
};
exports.getAllPurchaseFromUserID = getAllPurchaseFromUserID;
//# sourceMappingURL=database.js.map