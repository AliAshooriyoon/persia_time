import Image from "next/image";
import azadiLogo from "@/public/azadi_1354297.png"
const Header = () => {
  return (
    <>
      <div className="text-center bg-[#9DB2BF] text-black h-16 flex items-center justify-between text-2xl px-6">
        <div className="flex items-center justify-center gap-4 cursor-pointer">
          <Image className="w-12 h-12" src={azadiLogo} alt='adazi logo' />
          Persian Calender
        </div>
        <div className="list flex gap-16 pr-12 justify-center">
          <p className="cursor-pointer">See all events</p>
          <p className="cursor-pointer text-stone-800">more about us</p>
        </div>
        <div className="w-16 h-full"></div>
      </div>
    </>
  )
}
export default Header;
