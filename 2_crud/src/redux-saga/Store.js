import { applyMiddleware, createStore } from "redux"
import rootSaga from "./saga/Index";
import createsagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";


let sagaMiddleware = createsagaMiddleware()

const Store= createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default Store