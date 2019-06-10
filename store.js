import { createStore } from "redux";
import reducers from "./reducers.js";
// ----- imports -------------------------------

// ------ create the store ----------------------
const store = createStore(reducers);

// ------- add listener -------------------------
const unsuscribe = store.suscribe(() => console.log(store.getState()));

unsuscribe();

// -------- example of dispatch ------------------
store.dispatch(addComment("komentarz nr 1"));
store.dispatch(addComment("komentarz nr 2"));
