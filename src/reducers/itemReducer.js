const defaultState = {
  products: [{ title: "banana", desc: "yellow fruit" }],
};

export default function itemReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
