export function createStore(reducer) {
  let state = reducer(undefined, {}); // Initialize State
  let listners = [];

  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      listners.forEach((listner) => listner());
    },

    subscribe: (listner) => {
      listners.push(listner);
      return () => {
        listners = listners.filter((l) => l !== "listener");
      };
    },
  };
}
