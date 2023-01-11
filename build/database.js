"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [{
        id: 1,
        email: "fulano@teste.com",
        passwor: "fulano123",
    },
    {
        id: 2,
        email: "ciclano@teste.com",
        passwor: "ciclano123",
    }];
exports.products = [{
        id: 1,
        name: "Morango",
        price: 12,
        category: "frutas"
    }, {
        id: 2,
        name: "Manga",
        price: 15,
        category: "frutas"
    }
];
exports.purchases = [
    {
        userId: 1,
        productId: 1,
        quantity: 2,
        totalPrice: 24
    }, {
        userId: 2,
        productId: 2,
        quantity: 3,
        totalPrice: 45
    }
];
//# sourceMappingURL=database.js.map