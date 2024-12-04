import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
	const [isUserConnected, setUserConnected] = useState(false);
	return (
		<UserContext.Provider value={{ isUserConnected, setUserConnected }}>
			{children}
		</UserContext.Provider>
	);
}
