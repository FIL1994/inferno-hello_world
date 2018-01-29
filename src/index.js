import Inferno from "inferno";
import MyComponent from "./MyComponent";

const message = "hello world";

Inferno.render(
    <div>{message}<MyComponent/></div>, 
    document.getElementById("root")
);
