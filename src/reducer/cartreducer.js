const cartreducer = (state, action) => {
    switch (action.type) {
        case "addtocart": {
            let { id, color, amount, product } = action.payload;
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
        default:
            return state;
    }
}
export default cartreducer;