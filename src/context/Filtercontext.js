import { createContext, useContext, useEffect, useReducer } from "react";
import { UseGlobalContext } from "./Productcontext";
import reducer from '../reducer/filterreducer';

const filtercontext = createContext();
const intialstate = {
    filterproducts: [],
    allproducts: [],
    gridview: true,
    sortingvalue: "lowest",
    filter: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
    },
}
const FilterContextProvider = ({ children }) => {
    const { products } = UseGlobalContext();
    const [state, dispatch] = useReducer(reducer, intialstate);

    useEffect(() => {
        dispatch({
            type: "loadfilterproduct",
            payload: products,
        })
    }, [products])

    const setgrid = () => {
        return (
            dispatch({
                type: "setgridview",
            })
        )
    }

    const setlist = () => {
        return (
            dispatch({
                type: "setlistview",
            })
        )
    }

    const sorting = (value) => {
        return (
            dispatch({
                type: "setsorting",
                payload: value,
            })
        )
    }

    const updatefiltervalue = (event) => {
        const { name, value } = event;
        dispatch({
            type: "updatefilter",
            payload: {
                names: name,
                values: value,
            }
        })
    }

    useEffect(() => {
        dispatch({
            type: "sortingproducts",
        })
    }, [state.sortingvalue])

    useEffect(() => {
        dispatch({
            type: "filterproducts",
        })
    }, [state.filter])

    return (
        <filtercontext.Provider value={{ ...state, setgrid, setlist, sorting, updatefiltervalue }}>
            {children}
        </filtercontext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(filtercontext);
}
export { filtercontext, FilterContextProvider, useFilterContext };