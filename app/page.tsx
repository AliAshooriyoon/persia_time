import CurrentEvents from "./component/currentEvents/CurrentEvents";

export default function Home() {
  return (
    <>
      <div className="">
        <p className='text-center mt-12'>You can see now current events</p>
        <CurrentEvents />
      </div>
    </>
  );
}
