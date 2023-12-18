export const addItemToLocalStorage = (product) => {
    const cartItems = getCartItemsFromLocalStorage();
    const updatedCart = [...cartItems, product];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
};

export const getCartItemsFromLocalStorage = (cartKey) => {
    const storedCartItems = localStorage.getItem(cartKey);
    return JSON.parse(storedCartItems) || [];
};