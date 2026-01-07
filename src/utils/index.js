export const createPageUrl = (pageName) => {
  const routes = {
    Home: "/",
    Evenements: "/evenements",
    Contact: "/contact",
    About: "/about",
    Ministries: "/ministries",
    Donate: "/donate",
    Don: "/don",
    Messages: "/messages",
    Galerie: "/galerie",
    Admin: "/admin",
    PolitiqueConfidentialite: "/politique-confidentialite",
  };

  const macaronRoutes = {
    Home: "/macaron",
    Menu: "/macaron/menu",
    About: "/macaron/about",
    Gallery: "/macaron/gallery",
    Reservation: "/macaron/reservation",
    Contact: "/macaron/contact",
    Payment: "/macaron/payment",
    PolitiqueConfidentialite: "/macaron/politique-confidentialite",
  };

  const pathname = typeof window !== 'undefined' ? window.location?.pathname : '';
  const isMacaronSection = typeof pathname === 'string' && pathname.startsWith('/macaron');

  if (isMacaronSection && macaronRoutes[pageName]) {
    return macaronRoutes[pageName];
  }

  return routes[pageName] || "/";
};
