export const __DEV__ = process.env.NODE_ENV !== "production";

export const randomColor = ()=> Math.floor(Math.random() * 16777215).toString(16);
