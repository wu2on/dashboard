const calcDate = (date) => {
  let timeend = new Date(date * 1000);
  let today = new Date();
  today = Math.floor((timeend - today) / 1000 / 60 / 60);
  let thour = today % 24;
  today = Math.floor(today / 24);

  return `${
    today +
    (today > 1 ? " days " : " day ") +
    thour +
    (thour > 1 ? " hours " : " hour ")
  }`;
};

export default calcDate;
