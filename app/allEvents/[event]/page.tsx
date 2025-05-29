import { events } from "@/data";
import Link from "next/link";
import { IoChevronBackCircleSharp } from "react-icons/io5";
const PageEvent = ({ params }) => {
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
  const paramArray = params.event.split("");
  const paramID = paramArray[paramArray.length - 1];
  console.log(paramID)
  const finder = events.filter(i => i.id == paramID)[0];
  console.log(finder)
  return (
    <>
      <div>
        Page Event {params?.event}
        <div className="w-[63%] h-[30rem] mx-auto mt-16 p-4 bg-[#222831] rounded-3xl">
          <Link href={'/allEvents'}>
            <IoChevronBackCircleSharp className="w-12 h-12 absolute" />
          </Link>
          <div className="header"> <h1 className="h-[4rem] text-center text-3xl">  {finder.eventName}</h1>
            <div className="main flex justify-between flex-row-reverse h-[20rem]"> <img className="h-full w-96 rounded-3xl" src={finder.eventPic} alt='pic' />
              <div className="information pt-8 w-[50%] pl-8 text-xl flex flex-col gap-4">
                <h2 className="">Datum : {finder.eventDate[0]}. {months[finder.eventDate[1]]} im jahr {finder.eventDate[2]}</h2>
                <p className="">{finder.eventDetails}</p>
                <p className='text-sm text-[#9DB2BF]'>{finder.eventMoreInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PageEvent;
