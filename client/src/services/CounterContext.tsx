import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export function CounterProvider({ children }) {
  const [moodCount, setMoodcount] = useState(0);

  return (
    <CounterContext.Provider value={{ moodCount, setMoodcount }}>
      {children}
    </CounterContext.Provider>
  );
}
