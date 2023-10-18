import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);
