import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex-col">
        {/* Landing View Make this hook people */}
        <div className="bg-primary w-full h-screen flex grid grid-cols-4 ">
          <div className="  col-start-2 grid grid-rows-3">
            <div className="row-start-2 overflow-auto">
              <p className="text-sm " >Welcome I am,</p>
            <p className=" md:text-5xl font-bold text-4xl text-secondary ">Kevin Kant</p>
            <p>I write software to make cool stuff</p>
            </div>
            
          </div>

          
        </div>
        {/* About Section, quick words hook line */}
        <div className="bg-secondary w-full h-screen">
          <p className="text-white">two</p>
        </div>

        {/* Projects Section Grid style with view */}
        <div className="bg-red-100 w-full h-screen">
          <p>One</p>

          <div className="bg-indigo-500 rounded-full w-48 h-48"></div>
        </div>

        {/* Technologies known section grids and lvl bit */}
        <div className="bg-black w-full h-screen">
          <p className="text-white">two</p>
        </div>

        {/* Contact footer probably best here Maybe footer-> contact section would be cool */}
        <div className="bg-red-100 w-full h-screen">
          <p>One</p>

          <div className="bg-indigo-500 rounded-full w-48 h-48"></div>
        </div>

      </div>
    </main>
  );
}
