
export const initialState = {
    basket: [],
    user: null
} 

// Selector
// initial amount and iterate for each item
//everytime it loops through, the item price will add to the total amount and the initial amount will be zero.

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);


const Reducer = (state, action) => { 
    console.log(action);
    switch (action.type) {
        case 'ADD-TO-BASKET':
            default:
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
    }
};

export default Reducer;