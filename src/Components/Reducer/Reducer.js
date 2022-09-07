export const initialState = {
    basket: [],
    user: null
} 

// Selector
// initial amount and iterate for each item
//everytime it loops through, the item price will add to the total amount and the initial amount will be zero.

export const getBasketTotal = (basket) => 
basket?.reduce ((amount, item) => item.price + amount, 0);


function Reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD-TO-BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        
        case 'REMOVE-FROM-BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0){
                    newBasket.splice(index, 1)
            } else {
                console.warn(
                    'Cannot delete product as it is not in the basket'
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        
        case 'SET-USER':
            return {
                ...state,
                user: action.user
            };
            default:
                return state;
        
    }
}

export default Reducer;