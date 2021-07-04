export const AUTH_SUCCESS = (state, token) => {
  state.token = token;
};

export const ISPA = (state, ispa) => {
  state.ispa = ispa;
};

export const AUTH_LOGOUT = (state) => {
  state.token = "Remove";
};

export const SET_SCTrack = (state, playload) => {
  state.sctrack = playload;
};
