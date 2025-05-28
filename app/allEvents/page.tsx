"use client"
import { useState } from "react";
import SearchBar from "../component/searchBar/SearchBar";
import styles from "./allEvents.module.css";
import { events } from "@/data";
const AllEvents = () => {
  const [getedSelectedDate, setGetedSelectedDate] = useState();
  const getSelectedDate = (inp) => {
    console.log(inp);
    setGetedSelectedDate(inp);
    console.log(getedSelectedDate);

  }
  return (<>
    <SearchBar styles={styles} getSelectedData={getSelectedDate} />
    <div>
    </div>
  </>)
}
export default AllEvents;
