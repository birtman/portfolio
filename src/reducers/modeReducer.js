const initialState = {
    bread: sessionStorage.getItem("bread_mode") === "false" ? true : false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case "CHANGE_MODE":
        return { ...state, bread: action.bread };
  
      default:
        return state;
    }
  }