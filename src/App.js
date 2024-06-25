import logo from "./logo.svg";
import "./App.css";
import { UserRoutes } from "./router/userRoutes";
import LayoutComponent from "./component/layout/layout";

function App() {
  return (
    <LayoutComponent>
      <UserRoutes />
    </LayoutComponent>
  );
}

export default App;
