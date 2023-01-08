const cartreducer = (state, action) => {
    switch (action.type) {
        case "addtocart": {
            let { id, color, amount, product } = action.payload;
            let existingproduct = state.cart.find(element => {
                return element.id === id + color;
            })
            if (existingproduct) {
                let updatedproduct = state.cart.map(element => {
                    if (element.id === id + color) {
                        let newamount = amount + element.amount;
                        if (newamount >= element.max) {
                            newamount = element.max;
                        }
                        return {
                            ...element,
                            amount: newamount,
                        }
                    }
                    else {
                        return element;
                    }
                })
                return {
                    ...state,
                    cart: updatedproduct,
                }
            }
            else {
                let cartproduct = {
                    id: id + color,
                    color,
                    amount,
                    image: product.image[0].url,
                    max: product.stock,
                    name: product.name,
                    price: product.price,
                }
                return {
                    ...state,
                    cart: [...state.cart, cartproduct],
                }
            }
        }
        case "removeproduct": {
            let item = action.payload;
            let data = state.cart.filter(element => {
                return element.id !== item;
            })
            return {
                ...state,
                cart: data,
            }
        }
        case "increase": {
            let updatedproduct = state.cart.map(element => {
                if (element.id == action.payload) {
                    let incamount = element.amount + 1;
                    if (incamount >= element.max) {
                        incamount = element.max;
                    }
                    return {
                        ...element,
                        amount: incamount,
                    }
                }
                else {
                    return element;
                }
            })
            return {
                ...state,
                cart: updatedproduct,
            }
        }
        case "decrease": {
            let updatedproduct = state.cart.map(element => {
                if (element.id == action.payload) {
                    let decamount = element.amount - 1;
                    if (decamount <= 1) {
                        decamount = 1;
                    }
                    return {
                        ...element,
                        amount: decamount,
                    }
                }
                else {
                    return element;
                }
            })
            return {
                ...state,
                cart: updatedproduct,
            }
        }
        case "cartclear": {
            return {
                ...state,
                cart: [],
            }
        }
        case "carttotalitem": {
            let updateditem = state.cart.reduce((initialVal, element) => {
                let { amount } = element;
                initialVal = initialVal + amount;
                return initialVal;
            }, 0);
            return {
                ...state,
                totalitem: updateditem,
            };
        }
        default:
            return state;
    }
}
export default cartreducer;