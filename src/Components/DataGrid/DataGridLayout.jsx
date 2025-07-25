function GridLayout({ children }) {
return (
  <div>
    <table className="w-400 h-220 bg-white shadow-lg ml-14 mt-4 rounded-[50px] border-separate border-spacing-0 border border-black ">
      {children}
    </table>
  </div>
);
}
export default GridLayout;
