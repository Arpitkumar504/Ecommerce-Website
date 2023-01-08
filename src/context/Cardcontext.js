import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartreducer";

const cartcontext = createContext();
const getlocalstorage = () => {
    let list = localStorage.getItem("cartdata");
    if (list) {
        return JSON.parse(localStorage.getItem("cartdata"))
    }
    else {
        return [];
    }
}
const intialstate = {
    cart: getlocalstorage(),
    totalitem: "",
    totalamount: "",
    shippingfee: 5000,
}
const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialstate);
    const addtocart = (id, color, amount, product) => {
        return (
            dispatch({
                type: 'addtocart',
                payload: {
                    id, color, amount, product,
                }
            })
        )
    }

    const removeitem = (id) => {
        return (
            dispatch({
                type: "removeproduct",
                payload: id,
            })
        )
    }

    const clearcart = () => {
        return (
            dispatch({
                type: "cartclear",
            })
        )
    }

    const setDecrease = (id) => {
        return (
            dispatch({
                type: "decrease",
                payload: id,
            })
        )
    }

    const setIncrease = (id) => {
        return (
            dispatch({
                type: "increase",
                payload: id,
            })
        )
    }
    useEffect(() => {
        dispatch({
            type: "carttotalitem",
        })
        localStorage.setItem("cartdata", JSON.stringify(state.cart));
    }, [state.cart])

    return (
        <cartcontext.Provider value={{ ...state, addtocart, removeitem, clearcart, setDecrease, setIncrease }}>
            {children}
        </cartcontext.Provider>
    )
}
const useCartContext = () => {
    return useContext(cartcontext);
}
export { cartcontext, CartContextProvider, useCartContext };