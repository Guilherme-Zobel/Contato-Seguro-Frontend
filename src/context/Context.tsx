import { createContext, ReactNode, useState } from 'react';
import jsonData from '../data/data.json';

interface IDataValue {
  id: number;
  Nome: string;
  Email: string;
  Telefone: number;
  Nascimento: string;
  Cidade: string;
  "": null;
}

type ContextProps = {
  children: ReactNode;
};

export type ContextData = {
  dataValue: IDataValue[];
  setDataValue: React.Dispatch<React.SetStateAction<IDataValue[]>>;
};

export const Context = createContext<ContextData>({} as ContextData);

export const Provider = (props: ContextProps) => {
  const [dataValue, setDataValue] = useState(jsonData.rows);

  const providerValue: ContextData = {
    dataValue,
    setDataValue,
  };

  return <Context.Provider value={providerValue} {...props} />;
};
