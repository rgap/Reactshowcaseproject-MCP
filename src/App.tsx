import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./contexts";
import { HomePage } from "./pages/HomePage";
import { PokeCollectionPage } from "./pages/PokeCollectionPage";
import { TicTacToePage } from "./pages/TicTacToePage";
import { ComponentPlayground } from "./pages/ComponentPlayground";

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tic-tac-toe" element={<TicTacToePage />} />
          <Route path="/poke-collection" element={<PokeCollectionPage />} />
          <Route path="/playground" element={<ComponentPlayground />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
