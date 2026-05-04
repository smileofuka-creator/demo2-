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
  let array = [
    { title: "All", status: true },
    { title: "Active", status: false },
    { title: "Completed", status: true },
  ];
  const task = [
    {
      title: "task",
      isChecked: false,
    },
    {
      title: "task",
      isChecked: false,
    },
    {
      title: "task",
      isChecked: false,
    },
  ];
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="flex gap-[10px]">
        <input
          className="w-[280px] h-[40px] rounded-[6px] p-[6px] bg-white border border-black text-black"
          placeholder="Add a new task .."
        />
        <button className="width-[59px] h-[40px] rounded-[6px] p-[8px] gap-[10px] bg-blue-500 text-white">
          Add
        </button>
      </div>
      <div className="flex gap-[24px] ">
        {array.map((element, index) => {
          return (
            <Button title={element.title} key={index} status={element.status} />
          );
        })}
      </div>
      <div className="flex flex-col gap-4">
        {task.map((element, index) => {
          return (
            <Task
              title={element.title}
              key={index}
              isChecked={element.isChecked}
            />
          );
        })}
        {/* <Task title={"hello"} isChecked={true}></Task> */}
      </div>
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

// const Home = () => {
//   const data = ["red", "blue", "green"];
//   return (
//     <div>
//       {data.map((element, index) => {
//         return (
//           <button
//             className="w-[200px] h-[200px] border gap-[3px] flex flex-col items-center justify-center text-white uppercase  rounded-lg"
//             style={{ backgroundColor: element }}
//             key={index}
//           >
//             {element}
//           </button>
//         );
//       })}
//     </div>
//   );
// };
// export default Home;
