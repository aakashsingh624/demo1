import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing/Landing";
import "antd/dist/reset.css";
import "react-slideshow-image/dist/styles.css";
import Layout from "./Components/Layout/Layout";
import Register from "./Components/Register/Register";
import { ConfigProvider } from "antd";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import Services from "./Pages/Services/Services";
import ScrollToTop from "./scrollToTop";
import PostLogin from "./Pages/PostLogin/PostLogin";
import Payment from "./Pages/Payment/Payment";
import React, { Suspense } from "react";
import ChatApp from "./Components/Chat/chat/Chat";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import Orders from "./Components/Orders/Orders";
import AttorneySide from "./Components/Orders/Components/AttorneySide/AttorneySide";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#2b345d",
                    },
                }}
            >
                <Layout>
                    <Routes>
                        <Route index element={<Landing />}></Route>
                        <Route path="register" element={<Register />}></Route>
                        <Route path="about" element={<AboutUs />}></Route>
                        <Route path="contact" element={<Contact />}></Route>
                        <Route path="services/*" element={<Services />}></Route>
                        <Route
                            path="view-profile/profile/:userId"
                            element={<Profile />}
                        ></Route>
                        <Route
                            path="view-profile/orders/:userId"
                            element={<Orders />}
                        ></Route>
                        <Route
                            path="view-profile/orders/:userId/:orderId"
                            element={<AttorneySide />}
                        ></Route>
                        <Route
                            path="view-profile/:userId"
                            element={<Dashboard />}
                        ></Route>
                        {/* <Route
                            path="view-profile/*"
                            element={<PostLogin />}
                        ></Route> */}
                        <Route path="payments" element={<Payment />}></Route>
                        <Route
                            path="chat/:userId"
                            element={<ChatApp />}
                        ></Route>
                    </Routes>
                </Layout>
            </ConfigProvider>
        </BrowserRouter>
    );
}

export default App;
