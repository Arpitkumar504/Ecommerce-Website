import { createContext, useContext, useEffect, useReducer } from "react";
import { UseGlobalContext } from "./Productcontext";
import reducer from '../reducer/filterreducer';

const filtercontext = createContext();
const intialstate = {
    filterproducts: [],
    allproducts: [],
    gridview: true,
    sortingvalue: "lowest",
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

    useEffect(() => {
        dispatch({
            type: "sortingproducts",
            payload: products,
        })
    }, [state.sortingvalue])

    return (
        <filtercontext.Provider value={{ ...state, setgrid, setlist, sorting }}>
            {children}
        </filtercontext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(filtercontext);
}
export { filtercontext, FilterContextProvider, useFilterContext };