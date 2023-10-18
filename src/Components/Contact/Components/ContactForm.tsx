import { Button, Form, Input, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import styles from "./ContactForm.module.css";
export default function ContactForm() {
    return (
        <div>
            <Form layout="vertical">
                <Form.Item
                    label={<div className="text-lg">Name:</div>}
                    // validateStatus={usernameError ? "error" : ""}
                    // help={usernameError || ""}
                >
                    <Input
                        // placeholder="Email"
                        className="py-2 text-xl bg-form-field-bg rounded-md"
                        type="text"
                    />
                </Form.Item>
                <Form.Item
                    label={<div className="text-lg">Email:</div>}
                    // validateStatus={usernameError ? "error" : ""}
                    // help={usernameError || ""}
                >
                    <Input
                        // placeholder="Email"
                        className="py-2 text-xl bg-form-field-bg"
                        type="email"
                    />
                </Form.Item>
                <Form.Item
                    label={<div className="text-lg">Subject:</div>}
                    // validateStatus={usernameError ? "error" : ""}
                    // help={usernameError || ""}
                >
                    <Input
                        // placeholder="Password"
                        className="py-2 text-xl bg-form-field-bg"
                        type="text"
                    />
                </Form.Item>
                <Form.Item label={<div className="text-lg">Message:</div>}>
                    <TextArea className="py-2 text-xl bg-form-field-bg"></TextArea>
                </Form.Item>
            </Form>
            <button className="text-lg font-bold bg-button-blue text-white text-center px-16 py-2 rounded-md">
                Send
            </button>
        </div>
    );
}
