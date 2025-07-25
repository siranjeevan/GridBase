function GridLayout({ children }) {
return (
  <div className="  w-400 h-auto  bg-white ml-10 mt-10 p-10 rounded-4xl ">
    <table className=" rounded-md  w-350 h-auto ml-23 mt-10 border-separate border border-black shadow-2xs">
      {children}
    </table>
  </div>
);
}
export default GridLayout;
