// import Header from "./Components/images/header";
// import { ViewIcon } from "lucide-react";

// import Username from "./Components/Username";
// import Hairtsag from "./Components/box";
// import logo from "./mmm.jpeg";
import { Eye } from "lucide-react";
import { MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="w-[200px] h-[320px] border flex flex-col justify-between p-4 rounded-[8px] bg-center bg-cover ">
      {/* <img src="/images/mmm.jpeg" alt="" /> */}
      {/* <div className="bg-[url('/path/to/')] bg-cover bg-center h-64"></div> */}
      <div className="flex justify-between">
        <p>.</p>
        <div>min</div>
      </div>
      <div>
        <div className="flex items-center gap-2 ">
          <Eye size={18} />
          <span className="text-x">2000</span>
          <MessageCircle size={18} />
          <span className="text-x">0</span>
        </div>
        <h4 className="text-xs">
          Unread туршив: Тоглоомын дүрмийг өөрчлөх 600 долларын үнэтэй macbook
        </h4>
        <label className="bg-blue-400 round-[8px]">Techworm</label>
      </div>
    </div>

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
  );
};
export default Home;
