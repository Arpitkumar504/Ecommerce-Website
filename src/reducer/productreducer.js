const reducer = (state, action) => {
    switch (action.type) {
        case "setproducts": {
            const feature = action.payload.filter(element => {
                return element.featured === true;
            })
            return {
                ...state,
                products: action.payload,
                featureproducts: feature,
            }
        }
        case "setsingleproduct": {
            return {
                ...state,
                singleproduct: action.payload,
            }
        }
        default:
            return state;
    }
}
export default reducer;