import {
  HiOutlineAnnotation,
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineViewGrid,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "students",
    label: "Students",
    path: "/students",
    icon: <HiOutlineCube />,
  },
  {
    key: "courses",
    label: "Courses",
    path: "/courses",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "instructors",
    label: "Instructors",
    path: "/instructors",
    icon: <HiOutlineUsers />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
