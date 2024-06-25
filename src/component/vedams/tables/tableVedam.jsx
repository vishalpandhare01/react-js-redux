import { useSelector } from "react-redux";
import IndexTable from "../table";
import { addVedamsApi, deleteVedamsApi, getVedamsApi, updateVedamsApi } from "../../../redux/action/action";
import { useEffect, useState } from "react";
import AddVedaForm from "../addData/vedamForm";

export default function TableVedam() {
  const columns = [
    { key: "name", header: "Name" },
    { key: "description", header: "description" },
  ];

  const { getVedamData } = useSelector((state) => state.reducer);
  const [rowData, setRowData] = useState([]);
  const [initialRows, setInitialRows] = useState(rowData);
  const [rows, setRows] = useState(rowData);

  useEffect(() => {
    try {
      if (getVedamData.data) {
        setRowData(getVedamData.data.data);
        console.log("rowData", rowData);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [getVedamData]);
  return (
    <IndexTable
      columns={columns}
      tableName={"Vedams"}
      dispatchFetch={getVedamsApi}
      row={rowData}
      initialRows={initialRows}
      setRows={setRows}
      rows={rowData}
      FormComponent={AddVedaForm}
      dispatchEdit={updateVedamsApi}
      dispatchAdd={addVedamsApi}
      dispatchDelete={deleteVedamsApi}
    />
  );
}
