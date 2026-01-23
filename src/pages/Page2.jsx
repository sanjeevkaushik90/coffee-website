import { FaLongArrowAltRight } from "react-icons/fa";

export default function page2() {
  return (
    <div className="bg-[#EFDFC4] w-full min-h-screen pt-20 body">

      {/* upper */}

      <div className="p-50 flex justify-between">
        {/* left */}

        <div >
          <img className="h-[60vh] w-[30vw] rounded-lg" src="/2ndcoffee.jpg" alt="" />
        </div>

        {/* right */}

        <div className="flex flex-col gap-24">

          <h1 className="text-8xl font-extrabold">Coffee Heaven</h1>

          <p className="text-2xl text-[#77746c]">Lorem Ipsum Is Simply Dummy Text Of The Printing And <br />
            Typesetting Industry. Lorem Ipsum Has Been The Industry’s <br />
            Standard Dummy Text Ever Since The 1500s.
          </p>

          <button className="w-fit inline-flex   items-center gap-4 text-2xl text-white  bg-[#1B1107] p-4 rounded-2xl">

            View All
            <FaLongArrowAltRight />

          </button>

        </div>
      </div>

      {/* down */}
      <div className="pt-50 px-40 pb-60">
        <div className="flex justify-between">
          {/* left */}
          <div className="flex flex-col gap-24">

            <div>
              <h1 className="text-8xl font-extrabold">Jean’s Coffee</h1>
            </div>
            <div>
              <p className="text-2xl text-[#77746c]">Discover signature blends curated with passion and <br />
                precision, bringing you a perfect balance of strength, <br />
                smoothness, and taste.</p>
            </div>

              <button className="w-fit inline-flex   items-center gap-4 text-2xl text-white  bg-[#1B1107] p-4 rounded-2xl">

            View All
            <FaLongArrowAltRight />

          </button>

          </div>
          {/* right */}
          <div className="">
            <img className="h-[60vh] w-[30vw] rounded-2xl" src="/3rdcoffee.jpeg" alt="" />

            
          </div>
        </div>

      </div>

    </div>
  )
}
