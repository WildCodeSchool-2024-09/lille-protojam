import "./App.css";
import { Outlet } from "react-router-dom";
import { MoodProvider } from "./services/MoodContext";
function App() {
  return (
    <>
      <MoodProvider>
        <Outlet />
      </MoodProvider>
    </>
  );
}

export default App;
