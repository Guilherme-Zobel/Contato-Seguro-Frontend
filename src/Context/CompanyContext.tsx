import { createContext, ReactNode, useState, useEffect } from "react";
import companyData from "../data/company.json";

export interface ICompanyValue {
  id: number;
  name: string;
  phone: string;
  cnpj: string;
  address: string;
}

type ContextProps = {
  children: ReactNode;
};

export type ContextData = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  columnFilter: keyof ICompanyValue;
  setColumnFilter: React.Dispatch<React.SetStateAction<keyof ICompanyValue>>;
  companyValue: ICompanyValue[];
  setCompanyValue: React.Dispatch<React.SetStateAction<ICompanyValue[]>>;
  idRegistration: number;
  setIdRegistration: React.Dispatch<React.SetStateAction<number>>;
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CompanyContext = createContext<ContextData>({} as ContextData);

export const CompanyProvider = (props: ContextProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [columnFilter, setColumnFilter] = useState("name" as keyof ICompanyValue);
  const [companyValue, setCompanyValue] = useState(companyData.rows);
  const [idRegistration, setIdRegistration] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const providerValue: ContextData = {
    searchValue,
    setSearchValue,
    columnFilter,
    setColumnFilter,
    companyValue,
    setCompanyValue,
    idRegistration,
    setIdRegistration,
    isOpenModal,
    setIsOpenModal,
  };

  return <CompanyContext.Provider value={providerValue} {...props} />;
};
