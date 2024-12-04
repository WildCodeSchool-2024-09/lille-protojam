import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { MoodProvider } from "./services/MoodContext";

function App() {
  return (
    <>
      <MoodProvider>
        <Navbar />
        <Outlet />
      </MoodProvider>
    </>
  );
}

export default App;
