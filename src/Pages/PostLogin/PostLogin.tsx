import React from "react";
import SecondaryNavbar from "../../Components/SecondaryNavbar/SecondaryNavbar";
import Dashboard from "../../Components/Dashboard/Dashboard";
import Profile from "../../Components/Profile/Profile";

export default function PostLogin() {
    const [selected, setSelected] = React.useState(0);
    const menu = [
        { name: "Dashboard", url: "/" },
        {
            name: "Profile",
            url: "/",
        },
        {
            name: "Orders",
            url: "/",
        },
        // {
        //     name: "Projects",
        //     url: "/",
        // },
        // {
        //     name: "Earnings",
        //     url: "/",
        // },
        // {
        //     name: "Ratings",
        //     url: "/",
        // },
        {
            name: "Profile Verification (Pending)",
            url: "/",
        },
    ];
    const RenderPage = (props: { selection: number }) => {
        switch (props.selection) {
            case 0:
                return <Dashboard />;
            case 1:
                return <Profile />;
            default:
                return <></>;
        }
    };
    return (
        <div>
            <SecondaryNavbar
                menu={menu}
                selected={selected}
                change={setSelected}
            />
            <RenderPage selection={selected} />
        </div>
    );
}
