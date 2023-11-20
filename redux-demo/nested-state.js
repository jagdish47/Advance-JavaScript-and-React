const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;
const produce = require("immer").produce;

const initialSatate = {
  name: "Jagdish",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialSatate, action) => {
  switch (action.type) {
    case "STREET_UPDATED":
      //   return {
      //     ...state,
      //     // state.address.street = state.address.street = action.payload,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      //Immer makes it simple (Under the hood it works as above code)
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial State : ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Pahale state", store.getState())
);

const actions = bindActionCreator({ updateStreet }, store.dispatch);

//bindActionCreator is not necessary but if bind it into an actions object

actions.updateStreet("Sarniya khera");
actions.updateStreet("Mahadev Street");

unsubscribe();
