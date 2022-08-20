
export const initialState = {
    basket: []
} 

const Reducer = (state, action) => { 
    switch (action.type) {
        case 'add-to-basket':
            return {
                ...state,
                basket: [...state, basket, action.item]
            };
    }
};

export default Reducer;