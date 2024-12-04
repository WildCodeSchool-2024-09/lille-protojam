import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { MoodProvider } from "./services/MoodContext";
import { UserProvider } from "./services/UserContext";

function App() {
	return (
		<>
			<UserProvider>
				<MoodProvider>
					<Navbar />
					<Outlet />
				</MoodProvider>
			</UserProvider>
		</>
	);
}

export default App;
