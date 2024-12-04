import { useState } from "react";
import { createContext } from "react";

export const MoodContext = createContext(null);

export function MoodProvider({ children }) {
  const [mood, setMood] = useState("neutre");
  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );
}
