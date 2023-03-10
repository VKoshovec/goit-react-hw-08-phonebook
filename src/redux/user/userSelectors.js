export const isLogedIn = store => store.auth.isLogin;

export const isAuth = store => store.auth;
export const isUser = store => store.auth.user.name;