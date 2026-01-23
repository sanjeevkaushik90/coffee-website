import { FaLongArrowAltRight } from "react-icons/fa";

/* Blob component */
function Blob({ className }) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="#B88955"
        d="M5.3,-13.4C7.2,-8.1,9.3,-7.3,15.2,-5.9C21.1,-4.4,30.8,-2.2,40.3,5.5C49.8,13.1,59,26.3,55.3,31.5C51.5,36.7,34.8,33.9,23.4,35.1C12,36.4,6,41.5,-4.7,49.6C-15.3,57.7,-30.7,68.7,-31.5,61.3C-32.3,54,-18.6,28.4,-25.5,15.1C-32.4,1.9,-59.9,0.9,-59.5,0.2C-59.2,-0.5,-30.9,-1,-19,-5.6C-7,-10.1,-11.4,-18.7,-10.9,-24.7C-10.5,-30.8,-5.2,-34.3,-1.8,-31.2C1.7,-28.2,3.4,-18.6,5.3,-13.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

export default function Page2() {
  return (
    <div className="relative bg-[#EFDFC4] w-full min-h-screen pt-20 body overflow-hidden">

      {/* background blobs */}
      <Blob className="absolute top-12 left-12 w-65 opacity-30 z-0" />
      <Blob className="absolute top-[20%] right-15 w-105 opacity-35 z-0" />
      <Blob className="absolute top-[45%] left-[10%] w-95 opacity-30 z-0" />
      <Blob className="absolute bottom-35 right-[18%] w-75 opacity-35 z-0" />
      <Blob className="absolute bottom-16 left-[38%] w-90 opacity-30 z-0" />
      <Blob className="absolute top-[65%] right-12 w-60 opacity-30 z-0" />
      <Blob className="absolute top-[28%] left-80 w-55 opacity-25 z-0" />
      <Blob className="absolute top-[78%] left-105 w-65 opacity-25 z-0" />
      <Blob className="absolute left-[78%] w-65 opacity-25 z-0" />
      <Blob className="absolute left-[30%] w-65 opacity-25 z-0" />
      <Blob className="absolute left-[50%] w-65 opacity-25 z-0" />


      {/* content */}
      <div className="relative z-10">

        {/* upper section */}
        <div className="px-40 flex justify-between">
          <img
            className="h-[60vh] w-[30vw] rounded-lg"
            src="/2ndcoffee.jpg"
            alt=""
          />

          <div className="flex flex-col gap-24">
            <h1 className="text-8xl font-extrabold">Coffee Heaven</h1>

            <p className="text-2xl text-[#77746c]">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And <br />
              Typesetting Industry. Lorem Ipsum Has Been The Industry’s <br />
              Standard Dummy Text Ever Since The 1500s.
            </p>

            <button className="w-fit inline-flex items-center gap-4 text-2xl text-white bg-[#1B1107] p-4 rounded-2xl">
              View All
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>

        {/* lower section */}
        <div className="pt-50 px-40 pb-60 flex justify-between">
          <div className="flex flex-col gap-24">
            <h1 className="text-8xl font-extrabold">Jean’s Coffee</h1>

            <p className="text-2xl text-[#77746c]">
              Discover signature blends curated with passion and <br />
              precision, bringing you a perfect balance of strength, <br />
              smoothness, and taste.
            </p>

            <button className="w-fit inline-flex items-center gap-4 text-2xl text-white bg-[#1B1107] p-4 rounded-2xl">
              View All
              <FaLongArrowAltRight />
            </button>
          </div>

          <img
            className="h-[60vh] w-[30vw] rounded-2xl"
            src="/3rdcoffee.jpeg"
            alt=""
          />
        </div>

      </div>
    </div>
  );
}
