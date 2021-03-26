import { HIDE_LOADER, SHOW_LOADER } from "../types";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export const func = (id: string) => {
  return async (dispatch: any) => {
    let repository: any;
    try {
      dispatch(showLoader());
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
};
