import HowCards from "./HowCards";


export default function HowItWorks(){
  return(
    <section className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-medium"><span className="underline decoration-[#900633] underline-offset-7">How It</span> Work</h1>
      <p className="md:text-[25px] w-full md:w-[930px] py-7 mx-auto text-center">Managing hall accommodations has never been easier! Autonomy Hall Management System simplifies the entire process for both students and administrators, ensuring a smooth and hassle-free experience.</p>

      <HowCards/>
    </section>
  )
}