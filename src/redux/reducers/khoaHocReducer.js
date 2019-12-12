import * as ActionType from "../constants/actionType";

let initialState = {
  listCourseAdmin: [],
  listCourse: [],
  cart: [],
  filterListCourse: [],
  course: {},
  danhmuckhoahoc: [],
  tab: {},
  courseCard: "courseCard",
  courseSoft: "Best Courses",
  editCourse: {},
  catalogCourse: []
};

const khoaHocReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_COURSE:
      state.listCourseAdmin = action.listCourseAdmin;
      state.listCourse = action.listCourse;
      state.filterListCourse = action.listCourse;
      return { ...state };
    case ActionType.ADD_TO_CART:
      if (state.cart.length === 0) {
        state.cart = [...state.cart, action.khoaHoc];
      } else if (state.cart.length) {
        let id = state.cart.findIndex(item => {
          return action.khoaHoc.maKhoaHoc === item.maKhoaHoc;
        });
        if (id === -1) {
          state.cart = [...state.cart, action.khoaHoc];
        }
      }
      return { ...state };
    case ActionType.DELETE_COURSE:
      let cart = [...state.cart];
      let index = state.cart.findIndex(item => {
        return action.khoaHoc.maKhoaHoc === item.maKhoaHoc;
      });
      cart.splice(index, 1);
      state.cart = cart;
      return { ...state };
    case ActionType.GET_DETAIL_COURSE:
      state.course = action.course;
      return { ...state };
    case ActionType.FILTER_COURSE:
      state.filterListCourse = action.filterListCourse;
      return { ...state };
    case ActionType.TAB_LIST_COUSRSE:
      state.tab = action.data;
      return { ...state };
    case ActionType.COURSE_CARD:
      state.courseCard = action.data;
      return { ...state };
    case ActionType.COURSE_SOFT:
      state.courseSoft = action.data;
      return { ...state };
    case ActionType.RESET_CART:
      state.cart = action.cart;
      return { ...state };
    case ActionType.ON_PAYCART:
      state.cart = [];
      return { ...state };
    case ActionType.ADD_COURSE:
      state.listCourseAdmin = [...state.listCourseAdmin, action.course];
      return { ...state };
    case ActionType.DELETE_COURSE_API:
      let listCourseAdmin = state.listCourseAdmin.filter(
        course => action.id !== course.maKhoaHoc
      );
      if (localStorage.getItem("deleteCourses")) {
        let coursesUpdate = JSON.parse(localStorage.getItem("deleteCourses"));
        let vitri = coursesUpdate.findIndex(
          item => item.maKhoaHoc === action.id
        );
        coursesUpdate.splice(vitri, 1);
        localStorage.setItem("deleteCourses", JSON.stringify(coursesUpdate));
      }
      state.listCourseAdmin = [...listCourseAdmin];
      return { ...state };
    case ActionType.EDIT_COURSE:
      state.editCourse = action.editCourse;
      return { ...state };
    case ActionType.EDIT_COURSE_API:
      let stt = state.listCourseAdmin.findIndex(
        item => item.maKhoaHoc === action.course.maKhoaHoc
      );
      let listCourseUpdate = state.listCourseAdmin;
      if (stt !== -1) {
        listCourseUpdate[stt] = action.course;
      }

      state.listCourseAdmin = [...listCourseUpdate];
      return { ...state };
    case ActionType.GET_CATALOG_COURSE:
      state.catalogCourse = action.catalogCourse;
      return { ...state };
    default:
      return { ...state };
  }
};
export default khoaHocReducer;
