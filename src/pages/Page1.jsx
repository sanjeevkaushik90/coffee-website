import { FaLongArrowAltRight } from "react-icons/fa";



export default function Page1() {
    return (
        <div className="h-screen w-full bg-[#1B1107] text-white flex flex-col  overflow-hidden">

            {/* hero section */}
            <div className="relative min-h-full w-screen flex items-center px-20 ">

                {/* left side  */}

                <div className="flex flex-col gap-18 ">
                    {/* upper text */}
                    <div>
                        <h1 className="text-9xl font-extrabold leading-30 body">Discover The <br />
                            Art Of Perfect <br />
                            Coffee
                        </h1>
                    </div>

                    {/* descrption */}

                    <div>
                        <p className="text-3xl body ">Experience The Rich And Bold Flavors Of Our <br />
                            Exquisite Coffee Blends, Crafted To Awaken Your <br />
                            Senses And Start Your Day Right.
                        </p>
                    </div>

                    {/* below */}
                    <div className="flex  gap-18">
                        <button className="body flex items-center gap-4 text-2xl text-black bg-white p-4 rounded-2xl">

                            Order Now
                            <FaLongArrowAltRight />

                        </button>

                        <button className="body text-2xl border-2 border-white p-4 rounded-2xl">
                            Explore  More
                        </button>
                    </div>

                    <div className="flex gap-24 body text-2xl">
                        <div className="flex flex-col items-center">
                            <h1>50+</h1>
                            <h1>ITEM OF COFFEE</h1>
                        </div>

                          <div className="flex flex-col items-center">
                            <h1>20+</h1>
                            <h1>Order Running</h1>
                        </div>

                          <div className="flex flex-col items-center">
                            <h1>2K</h1>
                            <h1>Happy Customer</h1>
                        </div>
                    </div>

                </div>

                {/* background text */}
                <div className="absolute head right-0 top-1/2 -translate-y-1/2 text-[220px] font-extrabold opacity-10  z-0 ">
                    <h1>Caffeine</h1>
                    <h1>Caffeine</h1>
                </div>

                {/* image */}
                <div className="relative z-10 ml-auto">
                    <img className="h-[80vh] w-[40vw]" src="/coffee.png" alt="Coffee" />
                </div>

            </div>
        </div>
    )
}
