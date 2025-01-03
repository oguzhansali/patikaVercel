export const phoneBookReducer = (state,action) => {
    switch (action.type){
      case "ADD_PERSON":
        return [action.payload,...state];
      case "REMOVE_PERSON":
        const newState = [...state]
        newState.splice(action.index, 1);
        return newState;
    }
};
  