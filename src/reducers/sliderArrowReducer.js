const initialState = {
  index: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LEFT_ARROW":
      return { ...state, index: action.index };
    case "RIGHT_ARROW":
      return { ...state, index: action.index };

    default:
      return state;
  }
}
