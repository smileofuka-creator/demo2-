let Button = (props) => {
  let buttonStyle = "";

  if (props.isActive === true) {
    buttonStyle = "bg-blue-500 text-white border-blue-500";
  } else {
    buttonStyle = "bg-white text-black border border-black";
  }

  return (
    <div>
      <button
        className={`${buttonStyle} border p-2 rounded-2xl uppercase text-[10px] w-fit `}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
