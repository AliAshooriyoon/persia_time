"use client"
import { FaInfoCircle } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";

import { useEffect, useState } from "react";
import SearchBar from "../component/searchBar/SearchBar";
import styles from "./allEvents.module.css";
import { events } from "@/data";
import Link from "next/link";

const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
const AllEvents = () => {
  const [getedSelectedDate, setGetedSelectedDate] = useState();
  const [dataBase, setDataBase] = useState();
  const [findResult, setFindResult] = useState([]);

  const getSelectedDate = (inp) => {
    console.log(inp);
    setGetedSelectedDate(inp);
  }
  useEffect(() => {
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

    const finder = dataBase?.filter(f => f.eventDate[0] == getedSelectedDate.day
      && f.eventDate[1] == getedSelectedDate.month &&
      f.eventDate[2] == getedSelectedDate.year);

    setFindResult(dataBase?.filter(f => f.eventDate[0] == getedSelectedDate.day
      && f.eventDate[1] == getedSelectedDate.month &&
      f.eventDate[2] == getedSelectedDate.year))

    console.log(finder)
    console.log(typeof finder)
    // console.log(finder.length)
  }, [dataBase])

  return (<>
    <SearchBar styles={styles} getSelectedData={getSelectedDate} />
    <div className="flex flex-col gap-6">
      {findResult?.length ? findResult.map(p => <div key={p.id} className="rounded-2xl flex justify-between text-center w-[44rem] h-80 bg-stone-600 mx-auto">
        <div className='w-[50%] h-full rounded-l-2xl'>
          <img className="w-full h-full rounded-l-2xl" src={`${p.eventPic}`} />

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
          <div className="text-right">
            <button className="bg-cyan-800 cursor-pointer w-36 h-10 rounded-2xl mt-12 mr-4 ">
              <Link href={`/allEvents/event${p.id}`}>Mehre Angaben</Link>
            </button>
          </div>
        </div>
      </div>) : <div className="text-white text-center mt-16 text-3xl">Heute gibt es vielleicht kein Ereignis!🤔🤔</div>}
    </div>
  </>)
}
export default AllEvents;
