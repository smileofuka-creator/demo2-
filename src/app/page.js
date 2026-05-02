// import Header from "./Components/images/header";
// import { ViewIcon } from "lucide-react";

// import Username from "./Components/Username";
// import Hairtsag from "./Components/box";
// import logo from "./mmm.jpeg";
// import { Eye } from "lucide-react";
// import { MessageCircle } from "lucide-react";
// import Card from "./Components/Card";

import Button from "./Components/Button";
import Task from "./Components/Task";

const Home = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="flex gap-[10px]">
        <input
          className="width-[280px] h-[40px] rounded-[6px] p-[6px] bg-white border border-black text-black"
          placeholder="Add a new task .."
        ></input>
        <button className="width-[59px] h-[40px] rounded-[6px] p-[8px] gap-[10px] bg-blue-500 text-white">
          Add
        </button>
      </div>

      <div className="flex gap-[24] ">
        <Button title="All" isActive={false}></Button>
        <Button title="Active" isActive={true}></Button>
        <Button title="Compoleted" isActive={true}></Button>
      </div>
      <div className="flex flex-col gap-4">
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
      </div>

      {/* 
      <div className="max-w-[400px] bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
        <div className="flex justify-between items-center w-full h-[62px] p-[16px]">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
            <p className="text-gray-800 font-medium">Shan bailaa</p>
          </div>
          <button className="px-4 py-1 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
            Delete
          </button>
        </div>
      </div> */}

      {/* <div>
        <div className="flex justify-between items-center width-[345] h-[62] rounded-md gap-[30] p-[16]">
          <input type="checkbox"></input>
          <p>Shan bailaa</p>
        </div>
        <button className=" width-[67] h-[29] rounded-b-xl p-6 bg-red-100 ">
          Delete
        </button>
      </div> */}
    </div>
  );
};
export default Home;

// isChecked={true}

// <div className="flex gap-10">
//   <Card
//     time="12min"
//     view="1000"
//     title="Unread туршив: Тоглоомын дурмийг верчлех 600 долларын унэтэй MacBook"
//     title1="Techworm"
//     // picture="/run.jpeg"
//   ></Card>
//   <Card></Card>
//   <Card></Card>
// </div>

// <div className="w-[200px] h-[320px] border flex flex-col justify-between p-4 rounded-[8px] bg-center bg-cover ">
//   {/* <img src="/images/mmm.jpeg" alt="" /> */}
//   {/* <div className="bg-[url('/path/to/')] bg-cover bg-center h-64"></div> */}
//   <div className="flex justify-between">
//     <p>.</p>
//     <div>min</div>
//   </div>
//   <div>
//     <div className="flex items-center gap-2 ">
//       <Eye size={18} />
//       <span className="text-x">2000</span>
//       <MessageCircle size={18} />
//       <span className="text-x">0</span>
//     </div>
//     <h4 className="text-xs">
//       Unread туршив: Тоглоомын дүрмийг өөрчлөх 600 долларын үнэтэй macbook
//     </h4>
//     <label className="bg-blue-400 round-[8px] ">Techworm</label>
//   </div>
// </div>

// <div className="flex gap-[3px]">
//   <Hairtsag color="red" name="Red"></Hairtsag>
//   <Hairtsag color="blue" name="Green"></Hairtsag>
//   <Hairtsag color="yellow" name="Blue"></Hairtsag>
// </div>

// <>
//   <Username name="bataa"></Username>
//   <Username name="3242354325423"></Username>
//   <Username name="Bilguun"></Username>
//   <Username name="Bugd"></Username>
// </>

// <>
//   <div className="w-[200px] h-[320px] border flex flex-col justify-between p-4 rounded-[8px] bg-center bg-cover bg-[url(https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-size-unselect-202601-gallery-1?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=YTFkSnBPS2tMZFdhaFNRRkx6VnJZaUd4WmthcldkemtncUgvMzhXenFEVkJtY3lja2FvNzhqZzhFY0x4NDFzYkE0ZWxMVGt3djRUV0FHWk92REs5YjYwekI5ZWpRa0o2WWdVYzdzTUdBdFU2dU1nNnJNaVdBaXhRUnBZb0RXYUU&traceId=1)]">
//     <div className="bg-[url('/path/to/image.jpg')] bg-cover bg-center h-64"></div>
//     <div className="flex justify-between">
//       <p>.</p>
//       <div>min</div>
//     </div>
//     <div>
//       <ViewIcon />
//       <div>views</div>
//       <h4 className="">тоглоомын дүрмийг өөрчлөх МАК 600 macbook </h4>
//       <label className="bg-blue-500 rounded-2xl uppercase text-[6px] w-fit">
//         Techworm
//       </label>
//     </div>
//   </div>
// </>
