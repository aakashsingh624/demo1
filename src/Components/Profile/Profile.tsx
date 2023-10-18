import styles from "./Profile.module.css";
export default function Profile() {
    const data = [
        {
            section: "Basic Details",
            icon: "bx bx-info-circle",
            details: [
                {
                    label: "Full Name",
                    value: "Max Verstappen",
                },
                {
                    label: "Username",
                    value: "mv33",
                },
                {
                    label: "Gender",
                    value: "Male",
                },
                {
                    label: "Date of Birth",
                    value: "01 Jan 1995",
                },
            ],
        },
        {
            section: "Contact Details",
            icon: "bx bxs-contact",
            details: [
                { label: "Phone", value: "1234567890" },
                { label: "E Mail", value: "mv33@redbull.com" },
            ],
        },
        {
            section: "Address Information",
            icon: "bx bx-home",
            details: [
                {
                    label: "Address",
                    value: "Some wierd random place in The Netherlands.",
                },
            ],
        },
        {
            section: "Professional Details",
            icon: "bx bxs-briefcase-alt",
            details: [
                { label: "Qualification", value: "LLB" },
                {
                    label: "Field of Expertise",
                    value: "Criminal Lawyer/Legal Adviser",
                },
                { label: "Years of Experience", value: "10" },
            ],
        },
    ];
    return (
        <div className={styles["container"]}>
            <div className="w-full text-center text-2xl font-bold my-4">
                Profile Information
            </div>
            <div className="grid grid-cols-4">
                <div className="col-span-2 h-full">
                    <div className="flex justify-center items-center h-full">
                        <div className="h-48 w-48">
                            <img
                                src="/img/profiles/MaxVerstappen.png"
                                className={`w-full h-auto rounded-full mr-2 ${styles["img"]}`}
                            />
                            <div className="w-full flex justify-center mt-">
                                <a>Change photo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    {data.map((el) => (
                        <section className="my-8">
                            <div className="flex items-center text-xl font-medium text-gold border-b mb-1">
                                <div className={el.icon}></div>
                                <div>{el.section}</div>
                            </div>

                            <div className="px-8">
                                {el.details.map((e) => (
                                    <div className="py-1 text-bluePrimary">
                                        <span className="font-normal">
                                            {e.label} :&nbsp;
                                        </span>
                                        <span className="font-medium">
                                            {e.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
