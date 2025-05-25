import { events } from "../../../data.js";
const CurrentEvents = () => {
  const today = new Date()
  // console.log(today.getDate());
  const allDate = [today.getDate(), today.getMonth(), today.getFullYear()].join(" ");
  console.log(allDate);
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
  events.forEach(i => console.log(i.eventDate.join(' ')))
  return (
    <>
      <div className='mt-12 text-center'>
        {/* {events.map(i => <p key={i.id}>{i.eventName}</p>)} */}
        {events.filter(i => i.eventDate.join(' ') == allDate).map(i => <p key={i.id}> {i.eventName} {allDate.split("")} </p>)}

      </div>
    </>
  )
}
export default CurrentEvents;
