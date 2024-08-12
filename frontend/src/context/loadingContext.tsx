import { createContext, SetStateAction, useState, Dispatch } from "react";

export const LoadingContext = createContext({
  loading: true,
  setLoading: (value: boolean) => {},
});

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
