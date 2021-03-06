import { HIDE_LOADER, SHOW_LOADER } from "../../types";

const initialState = {
  loading: true,
};

export const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
