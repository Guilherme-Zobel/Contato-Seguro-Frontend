import { createContext, ReactNode, useState } from 'react';
import jsonData from '../data/data.json';

interface IDataValue {
  id: string;
  name: string;
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
  dataValue: IDataValue[];
  setDataValue: React.Dispatch<React.SetStateAction<IDataValue[]>>;
  columnFilter: string;
  setColumnFilter: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;

};

export const Context = createContext<ContextData>({} as ContextData);

export const Provider = (props: ContextProps) => {
  const [dataValue, setDataValue] = useState(jsonData.rows);
  const [columnFilter, setColumnFilter] = useState('name')
  const [searchValue, setSearchValue] = useState('');

  const providerValue: ContextData = {
    dataValue,
    setDataValue,
    columnFilter,
    setColumnFilter,
    searchValue,
    setSearchValue
  };

  return <Context.Provider value={providerValue} {...props} />;
};
