import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components";
import { HomePage } from "./pages/HomePage";
import { TicTacToePage } from "./pages/TicTacToePage";
import { I18nProvider } from "./contexts/I18nContext";
import { useI18n } from "./hooks/useI18n";
import "./styles/global.css";

function AppContent() {
  const location = useLocation();
  const { t } = useI18n();

  let badge: string | undefined;
  if (location.pathname === "/tic-tac-toe") {
    badge = t("project-tictactoe-title");
  }

  return (
    <>
      <Header badge={badge} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tic-tac-toe" element={<TicTacToePage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;

