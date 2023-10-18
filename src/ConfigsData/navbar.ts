import { NavbarMenuType } from "../Enums/navbar";
import { useAppContext } from "../store";

export function useMenu() {
    const context = useAppContext();
    return {
        dashboard: [
            {
                name: "Dashboard",
                type: NavbarMenuType.link,
                link: "/view-profile/" + context.loggedInUserId,
            },
            {
                name: "Earnings",
                type: NavbarMenuType.link,
                link: "/view-profile/earnings/" + context.loggedInUserId,
            },
            {
                name: "Orders",
                type: NavbarMenuType.link,
                link: "/view-profile/orders/" + context.loggedInUserId,
            },
            {
                name: "",
                icon: "bx bx-envelope",
                type: NavbarMenuType.icon,
                link: "/chat/" + context.loggedInUserId,
            },
            {
                name: "",
                icon: "bx bx-question-mark",
                type: NavbarMenuType.icon,
                link: "/faq",
            },
            {
                name: "",
                icon: "/img/profiles/MaxVerstappen.png",
                type: NavbarMenuType["icon-dropdown"],
                options: [
                    {
                        name: "Dashboard",
                        value: "view-profile/" + context.loggedInUserId,
                    },
                    {
                        name: "Profile Details",
                        value: "view-profile/profile/" + context.loggedInUserId,
                    },
                    {
                        name: "Orders",
                        value: "view-profile/orders/" + context.loggedInUserId,
                    },
                ],
            },
        ],
        home: [
            { name: "Home", type: NavbarMenuType.link, link: "/" },
            {
                name: "Services",
                type: NavbarMenuType.dropdown,
                options: [
                    {
                        name: "Trademarks Registration",
                        value: "/services/trademarks_registration",
                    },
                    {
                        name: "Patent Filing",
                        value: "/services/patent_filing",
                    },
                    {
                        name: "Legal Agreements",
                        value: "/services/legal_agreements",
                    },
                    {
                        name: "Business Registrations",
                        value: "/services/business_registrations",
                    },
                ],
            },
            // { name: "Blog", type: NavbarMenuType.link, link: "/" },
            { name: "About", type: NavbarMenuType.link, link: "/about" },
            { name: "Contact Us", type: NavbarMenuType.link, link: "/contact" },
            // { name: "Sign In", type: NavbarMenuType.link, link: "/register" },
            {
                name: context.loggedInUserId === "" ? "Register" : "Profile",
                type:
                    context.loggedInUserId === ""
                        ? NavbarMenuType.button
                        : NavbarMenuType.link,
                link:
                    context.loggedInUserId === ""
                        ? "/register"
                        : "/view-profile/" + context.loggedInUserId,
            },
        ],
    };
}
