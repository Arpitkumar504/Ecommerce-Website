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
        case "setsorting": {
            return {
                ...state,
                sortingvalue: action.payload,
            }
        }
        case "sortingproducts": {
            let newdata;
            let temp = [...action.payload];
            if (state.sortingvalue === "a-z") {
                newdata = temp.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
            }
            if (state.sortingvalue === "z-a") {
                newdata = temp.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
            }
            if (state.sortingvalue === "lowest") {
                newdata = temp.sort((a, b) =>
                    a.price - b.price
                );
            }
            if (state.sortingvalue === "highest") {
                newdata = temp.sort((a, b) =>
                    b.price - a.price
                );
            }
            return {
                ...state,
                filterproducts: newdata,
            }
        }
        default:
            return state;
    }
}
export default filterreducer;