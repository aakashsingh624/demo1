import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../store";
import styles from "./SecondaryNavigation.module.css";

export default function SecondaryNavbar(props: {
    selected: number;
    change: any;
    menu: { name: string; url: string }[];
}) {
    const context = useAppContext();
    const navigate = useNavigate();

    return (
        <div className="w-full ">
            <div className="w-4/5 border-b flex items-center justify-between m-auto py-2">
                <div>
                    {props.menu.map((el, index) => (
                        <a
                            className={
                                index === props.selected
                                    ? `${styles["active"]} mr-4 pb-2`
                                    : "mr-4 pb-2"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                props.change(index);
                            }}
                        >
                            {el.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
