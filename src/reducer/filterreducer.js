const filterreducer = (state, action) => {
    switch (action.type) {
        case "loadfilterproduct": {
            let priceall = action.payload.map(element => {
                return element.price;
            })
            let maximumprice = Math.max.apply(null, priceall);
            return {
                ...state,
                filterproducts: [...action.payload],
                allproducts: [...action.payload],
                filter: {
                    ...state.filter,
                    maxprice: maximumprice,
                    price: maximumprice,
                }
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
            let temp = [...state.filterproducts];
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
        case "updatefilter": {
            const { names, values } = action.payload;
            return {
                ...state,
                filter: {
                    ...state.filter,
                    [names]: [values],
                },
            }
        }
        case "filterproducts": {
            // let { allproducts } = state;
            let tempfilter = [...state.allproducts];
            const { text, category, company, color, price } = state.filter;
            if (text) {
                tempfilter = tempfilter.filter((element) => {
                    return element.name.toLowerCase().includes(text);
                });
            }
            if (category != "all") {
                tempfilter = tempfilter.filter(element => element.category == category);
            }
            if (company != "all") {
                tempfilter = tempfilter.filter(element => {
                    return element.company == company;
                })
            }
            if (color != "all") {
                tempfilter = tempfilter.filter((element) => {
                    return element.colors.includes(color[0]);
                })
            }
            if (price == 0) {
                tempfilter = tempfilter.filter(element => {
                    return element.price == price;
                })
            }
            else {
                tempfilter = tempfilter.filter(element => {
                    return element.price <= price;
                })
            }
            return {
                ...state,
                filterproducts: tempfilter,
            }
        }
        case "filterclear": {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxprice: state.filter.maxprice,
                    price: state.filter.maxprice,
                    minprice: state.filter.minprice,
                }
            }
        }
        default:
            return state;
    }
}
export default filterreducer;