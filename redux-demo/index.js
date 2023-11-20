const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCK,
    payload: qty,
  };
}

// (previousState, action) => newState

const initialCakeState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

const initialIcecreamState = {
  numOfIcecream: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case "ICECREAM_ORDERED":
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };

    case "ICECREAM_RESTOCK":
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };

    default:
      return state;
  }
};

//for multiple reducer we have one combineReducer() to combine multiple reducers
//because we have created two reducer here

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(rootReducer);

console.log("Initial State : ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Pdate state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(10));

const actions = bindActionCreator(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

//bindActionCreator is not necessary but if bind it into an actions object

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(5);

actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(10);

unsubscribe();
