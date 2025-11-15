import { Header } from "./components";
import { HomePage } from "./pages/HomePage";
import { I18nProvider } from "./contexts/I18nContext";
import "./styles/global.css";

function App() {
  return (
    <I18nProvider>
      <Header />
      <HomePage />
    </I18nProvider>
  );
}

export default App;

