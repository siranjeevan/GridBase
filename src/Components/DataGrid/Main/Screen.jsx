import GridLayout from "../DataGridLayout";
import GridHead from "../DataGridHeader.jsx";
import DataGridBody from "../DataGridBody.jsx";
import DataGridRow from "../DataGridRow.jsx";

function Screen() {
  return (
    <GridLayout >
      <GridHead >
        <DataGridBody>
          <DataGridRow />
        </DataGridBody>
      </GridHead>
    </GridLayout>
  );
}   

export default Screen;