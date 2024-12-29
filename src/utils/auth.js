export const isLoggedIn = () => {
    return !!localStorage.getItem('jwt');
};