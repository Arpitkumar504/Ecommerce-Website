import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from '../reducer/productreducer'

const Appcontext = createContext();
const api = "https://api.pujakaitem.com/api/products";
const intialstate = {
    products: [],
    featureproducts: [],
    isLoading: false,
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialstate);
    const getproducts = async (url) => {
        try {
            const data = await axios.get(url);
            dispatch({
                type: "setproducts",
                payload: data.data,
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getproducts(api);
    }, [])

    return (
        <Appcontext.Provider value={{ ...state }}>
            {children}
        </Appcontext.Provider>
    )
}

const UseGlobalContext = () => {
    return useContext(Appcontext);
}
export { AppProvider, Appcontext, UseGlobalContext }