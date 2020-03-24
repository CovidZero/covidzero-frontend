import React from "react";
import { useTranslation } from "react-i18next";

import { Link, withRouter } from "react-router-dom";

import Logo from "~assets/images/logo.svg";
import { ReactComponent as NewsIcon } from "~assets/icons/newspaper.svg";
import { ReactComponent as NewsIconActive } from "~assets/icons/newspaper-active.svg";
import { ReactComponent as Map } from "~assets/icons/map.svg";
import { ReactComponent as MapActive } from "~assets/icons/map-active.svg";
import { ReactComponent as City } from "~assets/icons/city.svg";
import { ReactComponent as CityActive } from "~assets/icons/city-active.svg";
import { ReactComponent as Area } from "~assets/icons/area.svg";
import { ReactComponent as AreaActive } from "~assets/icons/area-active.svg";
import { ReactComponent as Help } from "~assets/icons/help.svg";
import { ReactComponent as HelpActive } from "~assets/icons/help-active.svg";
import { ReactComponent as SmallLogo } from "~/assets/icons/small-log.svg";

const Sidebar = props => {
  const { pathname } = props.location;
  const [t] = useTranslation();

  const routes = [
    {
      title: "menu.map",
      path: "/",
      icon: pathname === "/" ? <MapActive /> : <Map />
    },
    {
      title: "menu.cities",
      path: "/cities",
      icon: pathname === "/cities" ? <CityActive /> : <City />
    },
    {
      title: "menu.area",
      path: "/area",
      icon: pathname === "/area" ? <AreaActive /> : <Area />
    },
    {
      title: "menu.help",
      path: "/help",
      icon: pathname === "/help" ? <HelpActive /> : <Help />
    },
    {
      title: "menu.news",
      path: "/news",
      icon: pathname === "/news" ? <NewsIconActive /> : <NewsIcon />
    }
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="/" className="nav-link">
            <span className="link-text logo-text">
              <img src={Logo} alt="logo" />
            </span>
            <SmallLogo />
          </Link>
        </li>

        {routes.map(route => (
          <li key={route.title} className="nav-item">
            <Link
              to={route.path}
              className={`nav-link ${route.path === pathname && "-active"}`}
            >
              {route.icon}
              <span className="link-text">{t(route.title)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(Sidebar);
