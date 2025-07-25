import {tableHeaders} from "../../TableData/Data.js";

function DataGridHeader({ children }) {
  return (
    <thead>
        <tr>
          {tableHeaders.map((heading) => (
            <th key={heading} className="p-2 font-bold border border-gray-300" >
              {heading}
              {children}
            </th>
          ))}
        </tr>
    </thead>
  );
}

export default DataGridHeader;