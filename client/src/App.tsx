import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { MoodProvider } from "./services/MoodContext";
import { UserProvider } from "./services/UserContext";
import { CounterProvider } from "./services/CounterContext";

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
