import React from "react";
import { useTranslation } from "react-i18next";

import { MapAlt } from "@styled-icons/boxicons-solid/MapAlt";
import { Map } from "@styled-icons/boxicons-regular/Map";
import { City } from "@styled-icons/boxicons-solid/City";
import { HelpCircle } from "@styled-icons/boxicons-solid/HelpCircle";
import { News } from "@styled-icons/boxicons-solid/News";
import { PlusMedical } from "@styled-icons/boxicons-regular/PlusMedical";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const [t] = useTranslation();

  const routes = [
    {
      title: "menu.map",
      path: "/",
      icon: <MapAlt />
    },
    {
      title: "menu.cities",
      path: "/cities",
      icon: <City />
    },
    {
      title: "menu.area",
      path: "/area",
      icon: <Map />
    },
    {
      title: "menu.help",
      path: "/help",
      icon: <HelpCircle />
    },
    {
      title: "menu.news",
      path: "/news",
      icon: <News />
    }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="/">
            <a href="#" className="nav-link">
              <span className="link-text logo-text">CovidZero</span>
              <PlusMedical />
            </a>
          </Link>
        </li>

        {routes.map(route => (
          <li key={route.title} className="nav-item">
            <Link to={route.path}>
              <a href="#" className="nav-link">
                {route.icon}
                <span className="link-text">{t(route.title)}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
