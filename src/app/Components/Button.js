// let Button = (props) => {
//   let buttonStyle = "";

//   if (props.isActive === true) {
//     buttonStyle = "bg-blue-500 text-white border-blue-500";
//   } else {
//     buttonStyle = "bg-white text-black border border-black";
//   }

//   return (
//     <div>
//       <button
//         className={`${buttonStyle} border p-2 rounded-2xl uppercase text-[10px] w-fit `}
//       >
//         {props.title}
//       </button>
//     </div>
//   );
// };

// export default Button;

let Button = (props) => {
  if (props.status) {
    return (
      <div className="rounded-[6px] bg-[#3C82F6] px-3 py-1 w-fit">
        {props.title}
      </div>
    );
  } else {
    return (
      <div className="rounded-[6px] bg-[#b2b6be] text-[#363636] px-3 py-1 w-fit">
        {props.title}
      </div>
    );
  }
};

export default Button;

// let Button = (props) => {
//     const title = ["All","Active","Completed"]
//     let buttonStyle = "";
//             if (props.isActive === true) {
//             buttonStyle = "bg-blue-500 text-white border-blue-500";
//         } else {
//             buttonStyle = "bg-white text-black border border-black";
//         }
//         return (
//                 <div>
//                     {title.map((props.title) =>{
//                         return (
//                     <button
//                         className={`${buttonStyle} border p-2 rounded-2xl uppercase text-[10px] w-fit `}
//                         style={{ backgroundColor: props.title }}
//                         key={index}
//                     >
//                         {props.title}
//                     </button>
//                     } )}
//                 </div>
//             )
// }

// export default Button;

// ene bol aldaatai heseg doorh shuu

// const ButtonGroup = (props) => {

//   return (

//         let buttonStyle = "";

//         if (props.isActive === true) {
//           buttonStyle = "bg-blue-500 text-white border-blue-500";
//         } else {
//           buttonStyle = "bg-white text-black border border-black";
//         }

//         return (
//           <button
//             key={index}
//             className={`${buttonStyle} border p-2 rounded-2xl uppercase text-[10px] w-fit transition-all`}
//           >
//             {props.title}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default ButtonGroup;
