import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { MoodProvider } from "./services/MoodContext";
import { CounterProvider } from "./services/CounterContext";
import { UserProvider } from "./services/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <MoodProvider>
          <CounterProvider>
            <Navbar />
            <Outlet />
          </CounterProvider>
        </MoodProvider>
      </UserProvider>
    </>
  );
}

export default App;
