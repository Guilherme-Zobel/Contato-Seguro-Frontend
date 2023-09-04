import { createContext, ReactNode, useState, useEffect } from "react";
import userData from "../data/user.json";

interface ICompanies {
  id: number;
  name: string;
}

export interface IUserValue {
  id: number;
  name: string;
  companies: number[];
  email: string;
  phone: string;
  birthdate: string;
  city: string;
  icons: string;
}

type ContextProps = {
  children: ReactNode;
};

export type ContextData = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  columnFilter: keyof IUserValue;
  setColumnFilter: React.Dispatch<React.SetStateAction<keyof IUserValue>>;
  userValue: IUserValue[];
  setUserValue: React.Dispatch<React.SetStateAction<IUserValue[]>>;
  idRegistration: number;
  setIdRegistration: React.Dispatch<React.SetStateAction<number>>;
};

export const UserContext = createContext<ContextData>({} as ContextData);

export const UserProvider = (props: ContextProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [columnFilter, setColumnFilter] = useState("name" as keyof IUserValue);
  const [userValue, setUserValue] = useState(userData.rows);
  const [idRegistration, setIdRegistration] = useState(0);

  const providerValue: ContextData = {
    searchValue,
    setSearchValue,
    columnFilter,
    setColumnFilter,
    userValue,
    setUserValue,
    idRegistration,
    setIdRegistration,
  };

  return <UserContext.Provider value={providerValue} {...props} />;
};
