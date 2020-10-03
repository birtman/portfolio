const initialState = {
  project: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "SELECT_PROJECT":
      return { ...state, project: action.project };

    default:
      return state;
  }
}
