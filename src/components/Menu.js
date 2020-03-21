import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Menu(props) {
    const [t] = useTranslation();

    const { routes = [] } = props;

    return (
        <div>
            {routes.map(item => <NavLink to={item.router} key={item.router}>{t(item.title)}</NavLink>)}
        </div>
    );
}

export default Menu;
