"use client"

import { useEffect, useState } from "react";

// import styles from "@/app/allEvents/allEvents.module.css"

const SearchBar = ({ styles, getSelectedData }) => {
  const [selectedDate, setSelecetedDate] = useState({ year: 2026, month: 1, day: 1 });
  const [finalSelectedDate, setFinalSelecetedDate] = useState({});
  //const [selectedDate, setSelecetedDate] = useState({ year: 2026, month: 1, day: 1 });
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
  const years = [];
  const days = [];
  for (let i = 2000; i <= 2026; i++) {
    years.push(i);
  }
  for (let i = 1; i <= 30; i++) {
    days.push(i);
  }
  const changeSelected = (event) => {
    console.log(event.target.value, event.target.id);
    const valueDate = event.target.value;
    const typeDate = event.target.id;
    setSelecetedDate(prev => {
      return { ...prev, [typeDate]: valueDate }
    })
  }
  const changeSelectedData = () => {
    setFinalSelecetedDate(selectedDate);
  }
  useEffect(() => {
    // getSelectedData(selectedDate);
    getSelectedData(finalSelectedDate);
    // console.log(selectedDate);
    // console.log(finalSelectedDate)
  }, [finalSelectedDate])
  return (
    <>
      <div className="">
        <div>
          <div className="mx-auto min-w-[50%] min-h-16 text-center mt-8 text-white">
            <div className="flex justify-center gap-4 md:gap-6  p-2 flex-wrap">
              <p className={styles.titleSelect}>Year</p>
              <select onChange={changeSelected} id={'year'} className="w-56 border-2 bg-stone-800  rounded-2xl outline-0">
                {years.reverse().map(i => <option value={i} className="" key={i}> {i} </option>)}
              </select>

              <p className={styles.titleSelect}>Month</p>
              <select id={'month'} onChange={changeSelected} className="w-56 border-2 bg-stone-800 text-white rounded-2xl outline-0">
                {months.map((i, index) => <option value={index + 1} key={i} className="">{i}</option>)}

              </select>

              <p className={styles.titleSelect}>day</p>
              <select id={'day'} onChange={changeSelected} className="w-56 border-2 bg-stone-800 text-white rounded-2xl outline-0">
                {days.map(i => <option value={i} key={i} className="text-center">{i}.</option>)}

              </select>
              <button onClick={changeSelectedData} className="bg-[#9DB2BF] w-32 rounded-2xl border-white border-2 cursor-pointer" type="button">Search </button>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
export default SearchBar;
