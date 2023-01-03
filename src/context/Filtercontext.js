import { createContext, useContext, useEffect, useReducer } from "react";
import { UseGlobalContext } from "./Productcontext";
import reducer from '../reducer/filterreducer';

const filtercontext = createContext();
const intialstate = {
    filterproducts: [],
    allproducts: [],
    gridview: false,
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

    return (
        <filtercontext.Provider value={{ ...state, setgrid, setlist }}>
            {children}
        </filtercontext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(filtercontext);
}
export { filtercontext, FilterContextProvider, useFilterContext };