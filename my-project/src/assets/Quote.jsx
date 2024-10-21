// import React from "react";

// function Quote() {
//   return (
//     <div>
//       <div className="lg:block md:hidden sm:hidden">
//         <div>
//           <img className="relative" src="Quote.jpg" />
//         </div>
//         <div className="absolute inset-0  ml-[200px]">
//           <p className="mt-[1370px] font-semibold text-white text-[35px]">
//             OUR COVERAGE IS THE BEST IN THE INDUSTRY, WITH REPAIRS AND
//           </p>
//           <p className="ml-[90px] mt-[10px] font-semibold text-white text-[35px]">
//             {" "}
//             PRODUCTION GUARANTEE AT NO ADDITIONAL CHARGE
//           </p>

//           <button className="pt-3 pb-3 border border-transparent border-black pl-8 pr-8 rounded-3xl  ml-[480px] mt-[50px] font-bold text-white bg-green-500 hover:bg-green-600  cursor-pointer hover:scale-110">
//             GET A QUOTE
//           </button>
//         </div>
//       </div>

//       <div className="md:block sm:hidden lg:hidden">
//         <div>
//           <img className="relative h-[500px]" src="Quote.jpg" />
//         </div>
//         <div className="absolute inset-0  ml-[130px]">
//           <p className="mt-[1250px] font-semibold text-white text-[30px]">
//             OUR COVERAGE IS THE BEST IN THE
//           </p>{" "}
//           <p className="font-semibold text-white text-[30px] ml-[25px]">
//             {" "}
//             INDUSTRY, WITH REPAIRS AND
//           </p>
//           <p className="ml-[0px] mt-[10px] font-semibold text-white text-[30px]">
//             {" "}
//             PRODUCTION GUARANTEE AT NO</p><p className="font-semibold text-white text-[30px] ml-[70px]" >ADDITIONAL CHARGE
//           </p>
//           <button className="pt-3 pb-3 border border-transparent border-black pl-8 pr-8 rounded-3xl  ml-[145px] mt-[70px] font-bold text-white bg-green-500 hover:bg-green-600 ransition-all cursor-pointer hover:scale-110">
//             GET A QUOTE
//           </button>
//         </div>
//       </div>

//       <div className="md:hidden lg:hidden">
//         <div>
//           <img className="relative h-[400px]" src="Quote.jpg" />
//         </div>
//         <div className="absolute inset-0  ml-[30px]">
//           <p className="mt-[1870px] font-bold text-white text-[20px]">
//             OUR COVERAGE IS THE BEST IN
//           </p>
//           <p className="font-bold text-white text-[20px] ml-[10px]">

//           THE INDUSTRY, WITH REPAIRS
//           </p>
//           <p className="ml-[-10px] mt-[10px] font-bold text-white text-[20px]">
//             {" "}
//             AND PRODUCTION GUARANTEE AT </p><p className="font-bold text-white text-[20px] ml-[30px]" >NO ADDITIONAL CHARGE
//           </p>
//           <button className="pt-3 pb-3 border border-transparent border-black pl-8 pr-8 rounded-3xl  ml-[70px] mt-[50px] font-bold text-white bg-green-500 hover:bg-green-600 ransition-all cursor-pointer hover:scale-110">
//             GET A QUOTE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Quote;

import React from "react";

function Quote() {
  return (
    <div>
      <div className="lg:block sm:hidden md:hidden">
        <div className="w-auto h-[500px] bg-cover text-center bg-center bg-Quote ">
          <p className="text-[35px] text-white pl-[200px] pr-[200px] pt-[130px]">
            𝐎𝐔𝐑 𝐂𝐎𝐕𝐄𝐑𝐀𝐆𝐄 𝐈𝐒 𝐓𝐇𝐄 𝐁𝐄𝐒𝐓 𝐈𝐍 𝐓𝐇𝐄 𝐈𝐍𝐃𝐔𝐒𝐓𝐑𝐘, 𝐖𝐈𝐓𝐇 𝐑𝐄𝐏𝐀𝐈𝐑𝐒 𝐀𝐍𝐃
            𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐈𝐎𝐍 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄 𝐀𝐓 𝐍𝐎 𝐀𝐃𝐃𝐈𝐓𝐈𝐎𝐍𝐀𝐋 𝐂𝐇𝐀𝐑𝐆𝐄
          </p>
          <button className="pt-3 pb-3 border border-transparent border-black pl-9 pr-9 rounded-3xl  ml-[-30px] mt-[50px] font-bold text-white bg-green-500 hover:bg-green-600 ransition-all cursor-pointer hover:scale-110">
            GET A QUOTE
          </button>
        </div>
      </div>

      {/* middle screen  */}

      <div className="md:block lg:hidden sm:hidden">
        <div className="w-auto h-[550px] bg-cover text-center bg-center bg-Quote ">
          <p className="text-[35px] text-white pl-[20px] pr-[20px] pt-[130px]">
            𝐎𝐔𝐑 𝐂𝐎𝐕𝐄𝐑𝐀𝐆𝐄 𝐈𝐒 𝐓𝐇𝐄 𝐁𝐄𝐒𝐓 𝐈𝐍 𝐓𝐇𝐄 𝐈𝐍𝐃𝐔𝐒𝐓𝐑𝐘, 𝐖𝐈𝐓𝐇 𝐑𝐄𝐏𝐀𝐈𝐑𝐒 𝐀𝐍𝐃
            𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐈𝐎𝐍 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄 𝐀𝐓 𝐍𝐎 𝐀𝐃𝐃𝐈𝐓𝐈𝐎𝐍𝐀𝐋 𝐂𝐇𝐀𝐑𝐆𝐄
          </p>
          <button className="pt-3 pb-3 border border-transparent border-black pl-8 pr-8 rounded-3xl  ml-[-30px] mt-[50px] font-bold text-white bg-green-500 hover:bg-green-600 ransition-all cursor-pointer hover:scale-110">
            GET A QUOTE
          </button>
        </div>
      </div>

      {/* small screen  */}

      <div className="md:hidden lg:hidden sm:block">
        <div className="w-auto h-[500px] bg-cover text-center bg-center bg-Quote ">
          <p className="text-[25px] text-white text-center pt-[140px]">
            𝐎𝐔𝐑 𝐂𝐎𝐕𝐄𝐑𝐀𝐆𝐄 𝐈𝐒 𝐓𝐇𝐄 𝐁𝐄𝐒𝐓 𝐈𝐍 𝐓𝐇𝐄 𝐈𝐍𝐃𝐔𝐒𝐓𝐑𝐘, 𝐖𝐈𝐓𝐇 𝐑𝐄𝐏𝐀𝐈𝐑𝐒 𝐀𝐍𝐃
            𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐈𝐎𝐍 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄 𝐀𝐓 𝐍𝐎 𝐀𝐃𝐃𝐈𝐓𝐈𝐎𝐍𝐀𝐋 𝐂𝐇𝐀𝐑𝐆𝐄
          </p>
          <button className="pt-3 pb-3 border border-transparent border-black pl-8 pr-8 rounded-3xl  ml-[-30px] mt-[50px] font-bold text-white bg-green-500 hover:bg-green-600 ransition-all cursor-pointer hover:scale-110">
            GET A QUOTE
          </button>
        </div>
      </div>

      {/* white image  */}

      
    </div>
  );
}

export default Quote;
