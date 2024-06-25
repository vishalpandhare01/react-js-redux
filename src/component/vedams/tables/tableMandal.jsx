import { useSelector } from "react-redux";
import IndexTable from "../table";
import {
  addMandalsApi,
  addVedamsApi,
  deleteMandalsApi,
  deleteVedamsApi,
  getMandalApi,
  getVedamsApi,
  updateMandalApi,
  updateVedamsApi,
} from "../../../redux/action/action";
import { useEffect, useState } from "react";
import AddVedaForm from "../addData/vedamForm";
import AddMandalForm from "../addData/mandalForm";

export default function TableMandal() {
  const columns = [
    { key: "number", header: "Number" },
    { key: "description", header: "Description" },
  ];

  const { getMandalsData, getVedamData } = useSelector(
    (state) => state.reducer
  );

  const [rowData, setRowData] = useState([]);
  const [initialRows, setInitialRows] = useState(rowData);
  const [rows, setRows] = useState(rowData);
  const [vedamData, setVedamData] = useState([]);

  useEffect(() => {
    try {
      if (getVedamData.data) {
        setVedamData(getVedamData.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [getVedamData]);

  useEffect(() => {
    try {
      if (getMandalsData.data) {
        setRowData(getMandalsData.data.data);
        console.log("rowData", rowData);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [getMandalsData]);
  return (
    <IndexTable
      columns={columns}
      tableName={"Mandal"}
      dispatchFetch={getMandalApi}
      row={rowData}
      initialRows={initialRows}
      setRows={setRows}
      rows={rowData}
      FormComponent={AddMandalForm}
      dispatchEdit={updateMandalApi}
      dispatchAdd={addMandalsApi}
      dispatchDelete={deleteMandalsApi}
      getVedamData={vedamData}
    />
  );
}
