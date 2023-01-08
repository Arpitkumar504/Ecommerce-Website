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
        case "cartclear": {
            return {
                ...state,
                cart: [],
            }
        }
        default:
            return state;
    }
}
export default cartreducer;