import { createContext, ReactNode, useState } from "react";

export interface AppContext {
  title: string;
  handleChangeTitle: (value: string) => void;
}

const defaultContextValues: AppContext = {
  title: "",
  handleChangeTitle: (_value) => {},
};

export const AppContext = createContext(defaultContextValues);

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [title, setTitle] = useState(
    "Title for component C consumed from context"
  );

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  // children is going to be the rest of the app (components)
  return (
    <AppContext.Provider
      value={{
        title: title,
        handleChangeTitle: handleChangeTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
