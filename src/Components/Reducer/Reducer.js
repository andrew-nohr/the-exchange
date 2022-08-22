
export const initialState = {
    basket: []
} 

// Selector
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);


const Reducer = (state, action) => { 
    console.log(action);
    switch (action.type) {
        case 'ADD-TO-BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
    }
};

export default Reducer;