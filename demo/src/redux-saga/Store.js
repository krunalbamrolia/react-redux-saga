import { applyMiddleware, createStore } from "redux";
import createsagaMiddleware from "redux-saga";
import RootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from "./saga/Index";


let sagaMiddleware = createsagaMiddleware()

const Store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default Store;