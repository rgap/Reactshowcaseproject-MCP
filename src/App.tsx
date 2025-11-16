import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nProvider } from "./contexts/I18nContext";
import { HomePage } from "./pages/HomePage";
import { TicTacToePage } from "./pages/TicTacToePage";
import { PokeCollectionPage } from "./pages/PokeCollectionPage";

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tic-tac-toe" element={<TicTacToePage />} />
          <Route path="/poke-collection" element={<PokeCollectionPage />} />
          <Route path="/wordle" element={<div>Wordle</div>} />
          <Route path="/video-feed" element={<div>Video Feed</div>} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;
