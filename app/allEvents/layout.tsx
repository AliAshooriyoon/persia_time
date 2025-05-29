import { DateProvider } from "../component/lib/DateContext";
import { events } from "@/data";
const LayoutAllEvents = ({ children }) => {
  return (
    <>
      <DateProvider value={events}>
        {children}
      </DateProvider>
    </>
  )
}
export default LayoutAllEvents;
