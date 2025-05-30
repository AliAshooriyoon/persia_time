import Image from "next/image";
import myPic from "@/public/mypic.jpg"
const About = () => {
  return (
    <>
      <div className="w-[60%] h-[30rem] bg-[#9DB2BF] text-black mx-auto mt-32 rounded-2xl relative ">
        <div className="pictureBox">
          <Image className="w-32 h-32 mx-auto rounded-full absolute right-[50%] left-[50%] -translate-1/2" src={myPic} alt="pic" />
        </div>
        <div className="main text-center pt-20 w-full h-[80%]"> <h3 className="text-xl text-center">Wer bin ich wirklich ?</h3>
          <p className="description max-w-[80%] mx-auto pt-8 text-left">
            <p className="gruss m-0">
              Hallo Leute,

            </p>
            ich bin Ali und nun 17 Jhare alt. Ich lerne Front-End Entwicklung und interessiere mich für Teknologie, Programmierung, Linux und zwiefellos Deutsch, was sie nun in diesen Erklärungen sehen.
            Dieses Projekt habe ich erstellt, um nur etwa next js zu üben.
            <br />
            <div className="space w-[98%] mx-auto h-1 my-4 border-dashed border-t-2"></div>
            In diesem Projekt habe ich verschiedene Themen wie: routes, local DataBase, tailwindCss, tsx usw. verwendet!
            Ich hoffe es, dass es Ihnen gefallen hätte🙂
          </p>
        </div>
      </div>
    </>
  )
}
export default About;
