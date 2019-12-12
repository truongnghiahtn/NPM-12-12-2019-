import Home from "./pages/home/TrangChu/Home";
import GioHang from "./pages/home/TrangGioHang/GioHang";
import ThanhToan from "./pages/home/TrangThanhToan/ThanhToan";
import ChiTietKhoaHoc from "./pages/home/TrangChiTietKhoaHoc/ChiTietKhoaHoc";
import TrangKhoaHoc from "./pages/home/TrangKhoaHoc/khoahoc";
import TrangBlog from "./pages/home/TrangBlog/TrangBlog";
import Events from "./pages/home/TrangEvents/Events";
import TrangAbout from "./pages/home/TrangAbout/About";
import Profile from "./pages/home/Profile/Profile";

import Dashboard from "./layout/dashboard/dashboard";
import UserManagement from "./pages/admin/UserManagement/UserManagement";
import CoursesManagement from "./pages/admin/CoursesManagement/CoursesManagement";
import Dashboard2 from "./pages/admin/dashhboard_2/dashboard_2";
import AdminDelay from "./pages/admin/admin_delay/adminDelay";
import BackGround from "./components/BackGround/BackGround";
const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/home",
    exact: false,
    component: Home
  },
  {
    path: "/gio-hang",
    exact: false,
    component: GioHang
  },
  {
    path: "/thanh-toan",
    exact: false,
    component: ThanhToan
  },
  {
    path: "/chi-tiet-khoa-hoc/:id",
    exact: false,
    component: ChiTietKhoaHoc
  },
  {
    path: "/khoa-hoc",
    exact: false,
    component: TrangKhoaHoc
  },
  {
    path: "/blog",
    exact: false,
    component: TrangBlog
  },
  {
    path: "/events",
    exact: false,
    component: Events
  },
  {
    path: "/about",
    exact: false,
    component: TrangAbout
  },
  {
    path: "/profile",
    exact: false,
    component: Profile
  },
  {
    path: "/background",
    exact: false,
    component: BackGround
  }
];

export { routesHome };

const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: Dashboard
  },
  {
    path: "/admin/users-management",
    exact: false,
    component: UserManagement
  },
  {
    path: "/admin/dashboard2",
    exact: false,
    component: Dashboard2
  },
  {
    path: "/admin/delay",
    exact: false,
    component: AdminDelay
  },
  {
    path: "/admin/courses",
    exact: false,
    component: CoursesManagement
  }
];

export { routesAdmin };
