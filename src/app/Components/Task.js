let Task = (props) => {
  return (
    <div className=" group   max-w-[400px] bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
      <div className="flex justify-between items-center w-full h-[62px] p-[16px]">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={props.isChecked}
            className="w-5 h-5 "
          />
          <p className="text-gray-800 font-medium">{props.title}</p>
        </div>
        <button
          onClick={props.onDelete}
          className="hidden group-hover:block px-4 py-1 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;

// let Todo = (props) => {
//     // props.isChecked
//     // props.title
//     return <div className="flex items-center h-[62px] justify-between w-[345px] bg-[#F9FAFB] rounded-md p-4">
//         <div className="flex items-center gap-2">
//             <input type="checkbox" checked={props.isChecked} />
//             <p className="text-black">{props.title}</p>
//         </div>

//         <button className="rounded-md bg-[#FEF2F2] px-3 py-1.5 text-[#EF4444]">Delete</button>
//     </div>
// }

// export default Todo
