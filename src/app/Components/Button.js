let Button = (props) => {
  return (
    <div>
      <button className="bg-blue-500 p-2 rounded-2xl uppercase text-[6px] w-fit">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
