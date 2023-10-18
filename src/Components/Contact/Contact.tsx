import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "./Components/ContactForm";
export default function Contact() {
    return (
        <div className={styles["container"]}>
            <div className="grid grid-cols-2 items-center py-2">
                <div>
                    <div
                        className={`${styles["customHeader"]} text-4xl font-bold text-bluePrimary py-4`}
                    >
                        Let's get in touch!
                    </div>
                    <div className="text-lg font-normal py-4">
                        In case of any feedback or queries, please fill out the
                        form.
                    </div>
                    <div className="flex items-center py-4">
                        <i className="bx bxs-envelope pr-2 text-xl"></i>
                        contact@mtlegalteam.com
                    </div>
                    <div>
                        <img src="/img/contact.png"></img>
                    </div>
                </div>
                <div className="px-16">
                    <div
                        className={`text-xl tracking-widest font-semibold ${styles["send"]}`}
                    >
                        Send us a message
                    </div>
                    <div className="py-2 -ml-4">
                        <img src="/img/downArrow.png"></img>
                    </div>
                    <div className="py-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
