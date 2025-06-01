import CurrentEvents from "./component/currentEvents/CurrentEvents";

export default function Home() {
  return (
    <>
      <div className="">
        <p className='text-center mt-12'> Sie können alle heutige Ereignisse hier sehen! </p>
        <CurrentEvents />
      </div>
    </>
  );
}
