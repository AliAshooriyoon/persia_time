"use client"
import { useEffect, useState } from "react";
import SearchBar from "../component/searchBar/SearchBar";
import styles from "./allEvents.module.css";
import { events } from "@/data";
const AllEvents = () => {
  const [getedSelectedDate, setGetedSelectedDate] = useState();
  const [dataBase, setDataBase] = useState();

  const getSelectedDate = (inp) => {
    console.log(inp);
    setGetedSelectedDate(inp);
    console.log(getedSelectedDate);
  }
  useEffect(() => {
    const convertArrayToObject = () => {

      console.log("-------------111newObj111----------------");

      const objData: { number }[] = []
      const ddate = events.map((i) => i.eventDate).forEach(l => {
        console.log({ ...l });
        objData.push({ ...l });
        return { ...l }
      })


      // const newDdate = ddate.forEach(i => {
      //   console.log({ ...i })
      //   objData.push({ ...i })
      //   return { ...i }
      // })
      console.log(ddate);
      console.log(objData);

      console.log("-------------newObj----------------");

    }
    convertArrayToObject()

  }, [getSelectedDate])
  return (<>
    <SearchBar styles={styles} getSelectedData={getSelectedDate} />
    <div>
    </div>
  </>)
}
export default AllEvents;
