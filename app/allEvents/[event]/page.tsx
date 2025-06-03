import { events } from "@/data";

import Link from "next/link";
import { notFound } from "next/navigation";
import { IoChevronBackCircleSharp } from "react-icons/io5";
const PageEvent = ({ params }) => {
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
  const paramArray = params.event.split("");
  // const paramID = paramArray[paramArray.length - 1];
  const whereSearch = paramArray.slice(5, paramArray.length).join("");
  // const finder = events.filter(i => i.id == paramID)[0];
  const finder = events.filter(i => i.id == Number(whereSearch))[0];
  console.log(whereSearch)
  console.log(finder)
  return (
    <>
      {finder ? <div>
        <div className="w-[95%] md:w-[63%] min-h-[30rem] md:min-h-[30rem] mx-auto mt-16 p-4 bg-[#222831] rounded-3xl">
          <Link href={'/allEvents'}>
            <IoChevronBackCircleSharp className="w-12 h-12 absolute" />
          </Link>
          <div className="main flex flex-col gap-4"> <h1 className="h-[4rem] text-center text-3xl">  {finder.eventName}</h1>
            <div className="main flex justify-between flex-col md:flex-row-reverse md:min-h-[20rem]"> <img className="h-[50%] w-full md:h-full md:w-96 rounded-3xl" src={finder.eventPic} alt='pic' />
              <div className="information pt-4 md:pt-8 w-full md:w-[50%] pl-4 md:pl-8 text-base md:text-xl flex  flex-row md:flex-col gap-4 flex-wrap md:flex-nowrap">
                <h2 className="">Datum : {finder.eventDate[0]}. {months[finder.eventDate[1]]} im jahr {finder.eventDate[2]}</h2>
                <p className="">{finder.eventDetails}</p>
                <p className='text-sm text-[#9DB2BF] '>{finder.eventMoreInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div> : notFound()}
    </>
  )
}
export default PageEvent;
