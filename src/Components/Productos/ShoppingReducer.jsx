import { TYPES } from "./ShoppingAccion";

export const shoppingInitialState = {
    Products: [
        {
            id: 1,
            name: "Tamal Tolimence Sencillo",
            price: 5000,
            Image: "https://github.com/alejitha15/Tamales-Zuco/blob/main/src/assets/Sencillos.png?raw=true"
        },
        {
            id: 2,
            name: "Tamal Tolimence Especial",
            price: 6000,
            Image: "https://github.com/alejitha15/Tamales-Zuco/blob/main/src/assets/Especiales.png?raw=true",
        },
        {
            id: 3,
            name: "Combo Tamal sencillo + Chocolate y Pan",
            price: 7500,
            Image: "https://github.com/alejitha15/Tamales-Zuco/blob/main/src/assets/ComboUno.png?raw=true"
        },
        {
            id: 4,
            name: "Combo Tamal Especial + Chocolate y Pan",
            price: 8500,
            Image: "https://github.com/alejitha15/Tamales-Zuco/blob/main/src/assets/ComboUno.png?raw=true"
        },
        {
            id: 5,
            name: "Combo Tamal sencillo + Pan Gaseosa o Jugo",
            price: 7500,
            Image: "https://github.com/alejitha15/Tamales-Zuco/blob/main/src/assets/ComboUno.png?raw=true"
        },
        {
            id: 6,
            name: "Combo Tamal Especial + Pan Gaseosa o Jugo",
            price: 8500,
            Image: "https://github.com/alejitha15/Tamales-Zuco/blob/main/src/assets/ComboUno.png?raw=true"
        },
    ],
    cart: []
};

//Funcion de las acciones de un estado
export function ShoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.Products.find(product => product.id === action.payload);
            // console.log(newItem)

            let itemInCart = state.cart.find(item => item.id === newItem.id)

            return itemInCart ?
                {
                    ...state,
                    cart: state.cart.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)
                } :
                {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                }
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(item=> item.id === action.payload);

            return itemToDelete.quantity > 1 ? {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload ? {...item, quantity: item.quantity - 1}:item)
            }:{
                ...state,
                cart: state.cart.filter((item) =>item.id !== action.payload),
            };
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            }
        }
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
        default:
            return state;
    }
}