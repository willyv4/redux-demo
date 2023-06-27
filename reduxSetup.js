const INTITIAL_STATE = { mood: "⁽˙³˙⁾" };

const rootReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type) {
    case "HAPPY":
      return { ...state, mood: (state.mood = "^ㅂ^") };

    case "KISSY":
      return { ...state, mood: (state.mood = "༼♥ل͜♥༽") };

    case "PEACE":
      return { ...state, mood: (state.mood = "(^_^)v") };

    case "CONFUSED":
      return { ...state, mood: (state.mood = "(@_@)") };

    default:
      return state;
  }
};

const store = Redux.createStore(rootReducer);

window.onload = function () {
  const moodElement = document.querySelector("h1");
  moodElement.innerText = store.getState().mood;

  const happyBttn = document.querySelector("#happy");
  happyBttn.addEventListener("click", function () {
    store.dispatch({ type: "HAPPY" });
    const currMood = store.getState().mood;
    moodElement.innerText = currMood;
  });

  const kissyBttn = document.querySelector("#kissy");
  kissyBttn.addEventListener("click", function () {
    store.dispatch({ type: "KISSY" });
    const currMood = store.getState().mood;
    moodElement.innerText = currMood;
  });

  const peaceBttn = document.querySelector("#peace");
  peaceBttn.addEventListener("click", function () {
    store.dispatch({ type: "PEACE" });
    const currMood = store.getState().mood;
    moodElement.innerText = currMood;
  });

  const confusedBttn = document.querySelector("#confused");
  confusedBttn.addEventListener("click", function () {
    store.dispatch({ type: "CONFUSED" });
    const currMood = store.getState().mood;
    moodElement.innerText = currMood;
  });
};
