import {tableHeaders} from "../../TableData/Data.js";

function DataGridHeader({ children }) {
  return (
    <>
      <thead>
        <tr>
          {tableHeaders.map((heading) => (
            <th
              key={heading}
              className="font-bold border border-gray-300 bg-violet-400 text-center text-white p-5"
            >
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      {children}
    </>
  );
}

export default DataGridHeader;