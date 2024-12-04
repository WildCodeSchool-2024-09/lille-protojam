import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { MoodProvider } from "./services/MoodContext";
import { CounterProvider } from "./services/CounterContext";

function App() {
  return (
    <>
      <MoodProvider>
        <CounterProvider>
          <Navbar />
          <Outlet />
        </CounterProvider>
      </MoodProvider>
    </>
  );
}

export default App;
