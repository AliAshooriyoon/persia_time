"use client"
import { createContext, useContext } from "react";
const dateData = createContext(null)
export const DateProvider = ({ data, children }) => {

  return <dateData.Provider value={data}>{children}</dateData.Provider>

}
export const useData = () => {
  const data = useContext(dateData);
  if (!data) {
    throw new Error("Error in Context for data");
  }
  return data
}

