import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { useMenu } from "../../ConfigsData/navbar";
import { NavbarMenuType } from "../../Enums/navbar";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    const [mode, setMode] = useState("home");
    const navMenu: any = useMenu();
    const [expanded, setExpanded] = React.useState(true);
    const [hide, setHide] = React.useState(false);
    const [profilePages, setProfilePages] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (link: string) => navigate(link);
    const createMenu = (menuItems: { name: string; value: string }[]) => {
        const items: MenuProps["items"] = [];
        menuItems.map((el, index: number) => {
            items.push({
                key: index,
                label: <NavLink to={el.value}>{el.name}</NavLink>,
            });
        });
        return { items };
    };
    React.useEffect(() => {
        if (location.pathname !== "/") {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
        const handleScroll = () => {
            console.log(window.pageYOffset);
            if (location.pathname === "/") {
                if (window.pageYOffset > 0) {
                    setExpanded(false);
                } else {
                    setExpanded(true);
                }
            }
            if (location.pathname === "/about") {
                if (window.pageYOffset > 0) {
                    setHide(true);
                } else {
                    setHide(false);
                }
            }
        };

        console.log(
            location.pathname.split("/"),
            location.pathname.split("/")[1] === "view-profile"
        );
        if (
            location.pathname.split("/").length > 2 &&
            (location.pathname.split("/")[1] === "view-profile" ||
                location.pathname.split("/")[1] === "chat")
        ) {
            setMode("dashboard");
            console.log("Dashboard");
        } else {
            console.log("Home");
            setMode("home");
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location]);

    return (
        <div
            className={
                !expanded && !hide
                    ? " py-2 bg-white text-bluePrimary navbar fixed w-full border-b border-grey"
                    : !hide
                    ? "py-2 bg-transparent text-navbar navbar fixed w-full "
                    : "py-0"
            }
        >
            <div className={!expanded && hide ? "h-0" : "h-auto"}>
                {!hide && location.pathname !== "view-profile" && (
                    <div className="flex items-center justify-between navbar-width mx-auto">
                        <img
                            className="navbar-logo cursor-pointer"
                            src={
                                expanded
                                    ? "/img/white-logo.png"
                                    : "/img/blue-logo1.png"
                            }
                            style={{ height: expanded ? "6rem" : "4rem" }}
                            onClick={() => navigate("/")}
                        />
                        <div
                            className={`${
                                mode === "home"
                                    ? "w-4/5 justify-end"
                                    : "w-3/5 justify-center"
                            } flex  items-center`}
                        >
                            {navMenu[mode].map((el: any) => {
                                return (
                                    <>
                                        {el.type === NavbarMenuType.link && (
                                            <NavLink
                                                to={el.link || "/"}
                                                className={({
                                                    isActive,
                                                    isPending,
                                                }) =>
                                                    isPending
                                                        ? "mr-6 pending"
                                                        : isActive &&
                                                          el.name !== "Home"
                                                        ? "mr-6 active"
                                                        : "mr-6"
                                                }
                                            >
                                                {el.name}
                                            </NavLink>
                                        )}
                                        {el.type === NavbarMenuType.button && (
                                            <button
                                                onClick={() =>
                                                    handleClick(el.link || "/")
                                                }
                                                className=""
                                            >
                                                {el.name}
                                            </button>
                                        )}
                                        {/* {el.type === NavbarMenuType.icon &&
                                            mode === "dashboard" && (
                                                <div className="mr-4 text-2xl">
                                                    <span
                                                        className={
                                                            el.icon +
                                                            " cursor-pointer"
                                                        }
                                                        onClick={() =>
                                                            handleClick(
                                                                el.link || "/"
                                                            )
                                                        }
                                                    ></span>
                                                </div>
                                            )} */}
                                        {el.type ===
                                            NavbarMenuType.dropdown && (
                                            <Dropdown
                                                //@ts-ignore
                                                menu={createMenu(
                                                    el.options || []
                                                )}
                                                className="dropdown mr-6"
                                            >
                                                <a
                                                    onClick={(e) =>
                                                        e.preventDefault()
                                                    }
                                                >
                                                    <Space className="dropdown-item">
                                                        {el.name ? (
                                                            <div>{el.name}</div>
                                                        ) : (
                                                            <div>
                                                                <img
                                                                    src={
                                                                        el.icon
                                                                    }
                                                                    className={`w-10 h-10 rounded-full mr-2 img-nav`}
                                                                />
                                                            </div>
                                                        )}
                                                        {/* <DownOutlined
                                                    style={{
                                                        fontSize: "0.6rem",
                                                    }}
                                                /> */}
                                                    </Space>
                                                </a>
                                            </Dropdown>
                                        )}
                                    </>
                                );
                            })}
                        </div>
                        {mode === "dashboard" && (
                            <div className="w-1/5 justify-end flex items-center">
                                {navMenu[mode].map((el: any) => {
                                    return (
                                        <>
                                            {el.type === NavbarMenuType.icon &&
                                                mode === "dashboard" && (
                                                    <div className="mr-4 text-2xl">
                                                        <span
                                                            className={
                                                                el.icon +
                                                                " cursor-pointer"
                                                            }
                                                            onClick={() =>
                                                                handleClick(
                                                                    el.link ||
                                                                        "/"
                                                                )
                                                            }
                                                        ></span>
                                                    </div>
                                                )}
                                            {el.type ===
                                                NavbarMenuType[
                                                    "icon-dropdown"
                                                ] && (
                                                <Dropdown
                                                    //@ts-ignore
                                                    menu={createMenu(
                                                        el.options || []
                                                    )}
                                                    className="dropdown"
                                                >
                                                    <a
                                                        onClick={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <Space className="dropdown-item">
                                                            {el.name ? (
                                                                <div>
                                                                    {el.name}
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <img
                                                                        src={
                                                                            el.icon
                                                                        }
                                                                        className={`w-10 h-10 rounded-full mr-2 img-nav`}
                                                                    />
                                                                </div>
                                                            )}
                                                            {/* <DownOutlined
                                                    style={{
                                                        fontSize: "0.6rem",
                                                    }}
                                                /> */}
                                                        </Space>
                                                    </a>
                                                </Dropdown>
                                            )}
                                        </>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
