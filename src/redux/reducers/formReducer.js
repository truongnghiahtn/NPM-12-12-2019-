import * as ActionType from "./../constants/actionType";
let initialState = {
  status: false,
  login: false,
  signup: false,
  ok: false,
  error: "",
  user: {},
  profile: {},
  listUser: [],
  userInfo: {},
  historyListCourse: [],
  ADMIN_LOGIN: "",
  component: "",
  userProfile: {}
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      state.login = action.login;
      return { ...state };
    case ActionType.SIGNUP:
      state.signup = action.signup;
      return { ...state };
    case ActionType.UPDATE_USER:
      state.user = action.user;
      return { ...state };
    case ActionType.ON_LOGOUT:
      state.user = action.user;
      state.historyListCourse = [];
      return { ...state };
    case ActionType.UPDATE_PROFILE:
      state.profile = action.profile;
      return { ...state };
    case ActionType.GET_USER_INFO:
      state.userInfo = action.userInfo;
      return { ...state };
    case ActionType.GET_LIST_USER:
      state.listUser = action.listUser;
      return { ...state };
    case ActionType.GET_HISTORY_COURSE:
      state.historyListCourse = action.historyListCourse;
      state.userProfile = action.userProfile;
      return { ...state };
    case ActionType.DELETE_USER:
      let listUser = [...state.listUser];
      let index = state.listUser.findIndex(item => {
        return item.taiKhoan === action.user.taiKhoan;
      });
      listUser.splice(index, 1);
      state.listUser = listUser;
      return { ...state };
    case ActionType.ADMIN_LOGIN:
      state.ADMIN_LOGIN = action.ADMIN_LOGIN;
      console.log(state.ADMIN_LOGIN);
      return {...state};
    case ActionType.GET_COMPONENT:
      state.component = action.component;
      return { ...state };
    default:
      return { ...state };
  }
};
export default formReducer;
