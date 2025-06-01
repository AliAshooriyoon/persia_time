"use client"
import { FaInfoCircle } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { events } from "../../../data.js";
const CurrentEvents = () => {
  const today = new Date();
  const allDate = [today.getDate(), today.getMonth(), today.getFullYear()].join(" ");
  // console.log(today.getDate());
  // const thisMonth = allDate.split(" ")[1];
  console.log("---------- allDate -----------");
  console.log(allDate.split(" ")[1]);
  console.log(allDate.split(" ")[0]);
  console.log(allDate.split(" ")[2]);
  console.log(typeof allDate);
  console.log("---------- allDate2 -----------");
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]

  return (
    <>
      <div className='mt-12 text-center'>
        {/* {events.map(i => <p key={i.id}>{i.eventName}</p>)} */}
        {events.filter(i => i.eventDate.join(' ') == allDate).map(i => {
          return <div key={i.id} className="rounded-2xl flex justify-between text-center w-[44rem] h-80 bg-stone-600 mx-auto">
            <div className='w-[50%] h-full rounded-l-2xl'>
              <img className="w-full h-full rounded-l-2xl" src={i.eventPic} />

            </div>
            <div className="w-[47%] text-left">
              <p className=" text-3xl mt-4"> {i.eventName} </p>
              <div className="flex gap-4 items-center">
                <CiCalendarDate className="fill-stone-900 w-8 h-8" />
                <p>{allDate.split(" ")[0]}</p>
                <p> {months[allDate.split(" ")[1]]} </p>

                <p>   {allDate.split(" ")[2]}
                </p>
              </div>
              <p className="flex items-center fill-black gap-3 "> <FaInfoCircle className="text-black" /> {i.eventDetails}</p>


            </div>
          </div>
        })}

      </div>
    </>
  )
}
export default CurrentEvents;
