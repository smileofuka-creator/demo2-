let Hairtsag = (props) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className=" w-[100px] h-[100px] border "
    >
      {props.name}
    </div>
  );
};

export default Hairtsag;
