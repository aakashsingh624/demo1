import { Button, Form, Input, Radio, Upload } from "antd";
import Icon from "@ant-design/icons";
import styles from "./RegisterForm.module.css";
import React from "react";
import { useAppContext } from "../../../store";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
    const context = useAppContext();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        form.validateFields()
            .then((values) => {
                // Submit values
                // submitValues(values);
            })
            .catch((errorInfo) => {});
    };
    const toggleShowPassword = (e: any) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (e: any) => {
        e.preventDefault();
    };
    const normFile = (e: any) => {
        console.log("Upload event:", e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const signInWithGoogle = () => {
        context.setLoggedInUserId("TestUser1");
        navigate("/view-profile/" + "TestUser1");
    };
    return (
        <>
            <div className="text-4xl font-bold text-bluePrimary text-center mb-4">
                Register Now
            </div>

            <Form>
                <Form.Item
                    name="userType"
                    rules={[{ required: true }]}
                    className="flex justify-center"
                >
                    <Radio.Group defaultValue={1} buttonStyle="solid">
                        <Radio.Button value={1} className="text-xl">
                            Client
                        </Radio.Button>
                        <Radio.Button value={2} className="text-xl">
                            Attorney
                        </Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                // validateStatus={usernameError ? "error" : ""}
                // help={usernameError || ""}
                >
                    <Input
                        prefix={<i className="bx bx-user"></i>}
                        placeholder="Full Name"
                        className="py-2 text-xl"
                    />
                    {/* {getFieldDecorator("username", {
                        rules: [
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ],
                    })(
                        <Input
                            prefix={
                                <Icon
                                    type="user"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                />
                            }
                            placeholder="Username"
                        />
                        )}*/}
                </Form.Item>
                <Form.Item
                // validateStatus={usernameError ? "error" : ""}
                // help={usernameError || ""}
                >
                    <Input
                        prefix={<i className="bx bx-envelope"></i>}
                        placeholder="Email"
                        className="py-2 text-xl"
                        type="email"
                    />
                </Form.Item>
                <Form.Item
                // validateStatus={usernameError ? "error" : ""}
                // help={usernameError || ""}
                >
                    <Input
                        prefix={<i className="bx bx-lock"></i>}
                        suffix={
                            !showPassword ? (
                                <i
                                    className="bx bx-show cursor-pointer"
                                    // onClick={toggleShowPassword}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        toggleShowPassword(e);
                                    }}
                                ></i>
                            ) : (
                                <i
                                    className="bx bx-hide cursor-pointer"
                                    // onClick={toggleShowPassword}
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        toggleShowPassword(e);
                                    }}
                                ></i>
                            )
                        }
                        placeholder="Password"
                        className="py-2 text-xl"
                        type={showPassword ? "text" : "password"}
                    />
                </Form.Item>
                <Form.Item label="Select Image">
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button>
                            <i className="bx bx-upload mr-2"></i> Click to
                            upload
                        </Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <button className="bg-button-blue text-white text-lg w-full px-4 py-3 rounded-lg flex justify-center items-center hover:opacity-95">
                        <i className="bx bx-user-plus mr-2 text-2xl"></i>Sign Up
                    </button>
                    <div className="text-center my-1">
                        Already have an account?{" "}
                        <a className="font-semibold cursor-pointer hover:text-gold">
                            Login
                        </a>
                    </div>
                </Form.Item>
            </Form>
            <div className={styles["line"]}></div>
            <button className="bg-button-facebook text-white text-lg w-full px-4 py-3 rounded-lg flex justify-center items-center hover:opacity-95 mb-4">
                <i className="bx bxl-facebook mr-2 text-2xl"></i>Login with
                Facebook
            </button>
            <button
                className=" border text-lg w-full px-4 py-3 rounded-lg flex justify-center items-center hover:opacity-95"
                onClick={signInWithGoogle}
            >
                {/* <i className="bx bx-user-plus mr-2 text-2xl"></i> */}
                <img
                    src="/svg/google.svg"
                    className="mr-2"
                    style={{ height: "20px" }}
                />
                Login with Google
            </button>
        </>
    );
}
