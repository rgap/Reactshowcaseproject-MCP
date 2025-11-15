import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      <Header />
      <HomePage />
    </div>
  );
}

export { App };


