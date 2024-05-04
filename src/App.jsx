import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";

function App() {
  return (
    <main>
      <Navbar />
      <div className="m-8">
        <BrowserRouter>
          <AppRouter></AppRouter>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
