import RegisterForm from "./Components/RegisterForm";
import styles from "./Register.module.css";
export default function Register() {
    return (
        <div className={styles["container"]}>
            <RegisterForm></RegisterForm>
        </div>
    );
}
