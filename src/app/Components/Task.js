let Task = (props) => {
  return (
    <div className=" group   max-w-[400px] bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
      <div className="flex justify-between items-center w-full h-[62px] p-[16px]">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-5 h-5 " />
          <p className="text-gray-800 font-medium">Shan bailaa</p>
        </div>
        <button className="hidden group-hover:block px-4 py-1 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg ">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
