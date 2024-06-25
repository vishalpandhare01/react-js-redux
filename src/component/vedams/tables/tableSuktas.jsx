import { useSelector } from "react-redux";
import IndexTable from "../table";
import {
  addMandalsApi,
  addSuktasApi,
  addVedamsApi,
  deleteMandalsApi,
  deleteSuktasApi,
  deleteVedamsApi,
  getMandalApi,
  getSuktasApi,
  getVedamsApi,
  updateMandalApi,
  updateSuktasApi,
  updateVedamsApi,
} from "../../../redux/action/action";
import { useEffect, useState } from "react";
import AddVedaForm from "../addData/vedamForm";
import AddMandalForm from "../addData/mandalForm";
import AddSuktasForm from "../addData/suktasForm";

export default function TableSuktas() {
  const columns = [
    { key: "number", header: "Number" },
    { key: "description", header: "Description" },
    { key: "title", header: "Title" },
  ];

  const { getMandalsData, getSuktasData } = useSelector(
    (state) => state.reducer
  );

  const [rowData, setRowData] = useState([]);
  const [initialRows, setInitialRows] = useState(rowData);
  const [rows, setRows] = useState(rowData);
  const [mandalData, setMandalData] = useState([]);

  useEffect(() => {
    try {
      if (getMandalsData.data) {
        setMandalData(getMandalsData.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [getMandalsData]);

  useEffect(() => {
    try {
      if (getSuktasData.data) {
        setRowData(getSuktasData.data.data);
        console.log("rowData", rowData);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [getSuktasData]);

  console.log("for select",mandalData)
  return (
    <IndexTable
      columns={columns}
      tableName={"Suktas"}
      dispatchFetch={getSuktasApi}
      row={rowData}
      initialRows={initialRows}
      setRows={setRows}
      rows={rowData}
      FormComponent={AddSuktasForm}
      dispatchEdit={updateSuktasApi}
      dispatchAdd={addSuktasApi}
      dispatchDelete={deleteSuktasApi}
      getMandalaData={mandalData}
    />
  );
}
