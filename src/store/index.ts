//se necessario o uso do thunk importa o método applyMiddleware do redux
import { createStore} from "redux";
//importe o redux-thunk
// import thunk from "redux-thunk";
// applyMiddleware(thunk)
import rootReducer from "./ducks/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
