"use client"
import { FaInfoCircle } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

import { useEffect, useState } from "react";
import SearchBar from "../component/searchBar/SearchBar";
import styles from "./allEvents.module.css";
import { events } from "@/data";

const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
const AllEvents = () => {
  const [getedSelectedDate, setGetedSelectedDate] = useState();
  const [dataBase, setDataBase] = useState();

  const getSelectedDate = (inp) => {
    console.log(inp);
    setGetedSelectedDate(inp);
  }
  useEffect(() => {
    const convertArrayToObject = () => {

      console.log("-------------111newObj111----------------");
      //
      // const ddate = events.map((i) => i.eventDate).forEach(l => {
      //   console.log({ ...l });
      //   objData.push({ ...l });
      //   // return { ...l }
      // })


      console.log("-------------newObj----------------");

    }
    convertArrayToObject()
    setDataBase(prev => events.map(i => i));
  }, [getedSelectedDate])
  useEffect(() => {
    console.log("1111111111111111111111111111111111");
    console.log(dataBase)
    console.log(getedSelectedDate)
    // dataBase.find(f => f[2] == getedSelectedDate.year)
    dataBase?.forEach((f) => {
      console.log(f.eventDate);
      console.log(f.eventDate[0] == getedSelectedDate.day && f.eventDate[1] == getedSelectedDate.month && f.eventDate[2] == getedSelectedDate.year);
    })


  }, [dataBase])

  return (<>
    <SearchBar styles={styles} getSelectedData={getSelectedDate} />
    <div>
      {dataBase?.filter(f => f.eventDate[0] == getedSelectedDate.day
        && f.eventDate[1] == getedSelectedDate.month &&
        f.eventDate[2] == getedSelectedDate.year).map(p => <div key={p} className="rounded-2xl flex justify-between text-center w-[44rem] h-80 bg-stone-600 mx-auto">
          <div className='w-[50%] h-full rounded-l-2xl'>
            <img className="w-full h-full rounded-l-2xl" src={'https://imgs.search.brave.com/-3-7GcyWMLK4cqHRxnuVq-otl9WSNKPfGb8XPg-tqJE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vSnNmMERk/bDRBWHJqQzJ4QmZq/Z3dsN1lyTmJFMzFl/RXp5QzFwcDQ5UDEw/dy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/YldjdS9abkpsWlhC/cGF5NWpiMjB2L1pt/OTBiM010Y0hKbGJX/bDEvYlM5dGRXcGxj/aTF6YjNOMC9hV1Z1/WlMxallXMWhjbUV0/L2RHOXRZUzFtYjNS/dlh6ZzUvT1RnM01D/MDFNak01TVM1cS9j/R2NfYzJWdGREMWhh/WE5mL2FIbGljbWxr/Sm5jOU56UXc.jpeg'} />

          </div>
          <div className="w-[47%] text-left">
            <p className=" text-3xl mt-4"> {p.eventName} </p>
            <div className="flex gap-4 items-center">
              <CiCalendarDate className="fill-stone-900 w-8 h-8" />
              <p>{p.eventDate[0]}.</p>
              <p> {months[p.eventDate[1] - 1]} </p>

              <p>   {p.eventDate[2]}
              </p>
            </div>
            <p className="flex items-center fill-black gap-3 "> <FaInfoCircle className="text-black" /> {p.eventDetails}</p>


          </div>
        </div>)}
    </div>
  </>)
}
export default AllEvents;
