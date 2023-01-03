const filterreducer = (state, action) => {
    switch (action.type) {
        case "loadfilterproduct": {
            return {
                ...state,
                filterproducts: [...action.payload],
                allprouducts: action.payload,
            };
        }
        case "setgridview": {
            return {
                ...state,
                gridview: true,
            };
        }
        case "setlistview": {
            return {
                ...state,
                gridview: false,
            }
        }
        default:
            return state;
    }
}
export default filterreducer;