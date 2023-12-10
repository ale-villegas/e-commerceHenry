export const addItemToLocalStorage = (product) => {
    const cartItems = getCartItemsFromLocalStorage();
    const updatedCart = [...cartItems, product];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
};

export const getCartItemsFromLocalStorage = () => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
};