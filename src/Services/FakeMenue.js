const menues = [
  {
    id: "1",
    page: "Dashboard",
    link: "/dashboard",
    icon: <i className="fa-solid fa-gauge-high"></i>,
  },
  {
    id: "2",
    page: "Emails",
    link: "/emails",
    icon: <i className="fa-solid fa-envelope"></i>,
  },
  {
    id: "3",
    page: "Bookings",
    link: "/bookings",
    icon: <i className="fa-solid fa-calendar"></i>,
  },
  {
    id: "4",
    page: "Properties",
    link: "/properties",
    icon: <i className="fa-solid fa-suitcase"></i>,
  },
  {
    id: "5",
    page: "Offers",
    link: "/offers",
    icon: <i className="fa-solid fa-file-invoice"></i>,
  },
  {
    id: "6",
    page: "Settings",
    link: "/settings",
    icon: <i className="fa-solid fa-gear"></i>,
  },
];

export function getMenues() {
  return menues;
}
