import { createStore } from "./store.js";
import { counterReducer } from "./reducer.js";
import { ADD, SUBTRACT, RESET } from "./actions.js";

// Create Store
const store = createStore(counterReducer);

// Subscribe to State Changes
store.subscribe(() => console.log("State Updated:", store.getState()));

// Scenario Testing
console.log("Initial State:", store.getState()); // Scenario 1: Expect { count: 0 }

store.dispatch({ type: ADD });
store.dispatch({ type: ADD }); // Scenario 2: Expect { count: 2 }

store.dispatch({ type: SUBTRACT }); // Scenario 3: Expect { count: 1 }

store.dispatch({ type: RESET }); // Scenario 4: Expect { count: 0 }
