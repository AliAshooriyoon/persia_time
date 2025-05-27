"use client"
import SearchBar from "../component/searchBar/SearchBar";
import styles from "./allEvents.module.css"
import { events } from "@/data";
const AllEvents = () => {
  const getSelectedDate = (inp) => {
    console.log(inp);
  }
  return (<>
    <SearchBar styles={styles} getSelectedData={getSelectedDate} />
    <div>

    </div>
  </>)
}
export default AllEvents;
