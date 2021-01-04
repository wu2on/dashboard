const defaultState = {
  products: [
    {
      title: "banana",
      desc: "yellow fruit",
      img:
        "https://www.chiquita.com/wp-content/uploads/2019/12/Chiquita_Banana_Class_Extra_Yellow.jpg",
    },
    {
      title: "banana",
      desc: "yellow fruit",
      img:
        "https://www.chiquita.com/wp-content/uploads/2019/12/Chiquita_Banana_Class_Extra_Yellow.jpg",
    },
    {
      title: "banana",
      desc: "yellow fruit",
      img:
        "https://www.chiquita.com/wp-content/uploads/2019/12/Chiquita_Banana_Class_Extra_Yellow.jpg",
    },
    {
      title: "banana",
      desc: "yellow fruit",
      img:
        "https://www.chiquita.com/wp-content/uploads/2019/12/Chiquita_Banana_Class_Extra_Yellow.jpg",
    },
  ],
};

export default function itemReducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
