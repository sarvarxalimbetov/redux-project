export const requestReducer = (state = [], action) => {
console.log(action.data);
    switch (action.type) {
        case "PUT_DATA":
            return state = action.data
        default:
            return state
    }
}