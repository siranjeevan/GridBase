import { data } from "../../TableData/Data";

function DataGridRow() {
  return (
    <>
      {data.map((row, i) => (
        <tr key={i}>
          {Object.keys(row).map((key) => (
            <td
              key={key}
              class="border border-gray-300 p-5 font-black text-center text-[15px] text-black"
            >
              {row[key]}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}

export default DataGridRow;