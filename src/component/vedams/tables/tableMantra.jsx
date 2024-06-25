import { useSelector } from "react-redux";
import IndexTable from "../table";
import {
  addMantraApi,
  deleteMantraApi,
  getMantrasApi,
  updateMantraApi,
} from "../../../redux/action/action";
import { useEffect, useState } from "react";
import AddVedaForm from "../addData/vedamForm";
import AddMandalForm from "../addData/mandalForm";
import AddMantraForm from "../addData/mantraForm";

export default function TableMantra() {
    const columns = [
        // { key: "sukta_id", header: "Sukta ID" },
        { key: "verse_number", header: "Verse Number" },
        { key: "text", header: "Text" },
        { key: "text_with_sounds", header: "Text with Sounds" },
        { key: "text_separated_with_sounds", header: "Text Separated with Sounds" },
        { key: "text_without_sounds", header: "Text without Sounds" },
        { key: "text_separated_without_sounds", header: "Text Separated without Sounds" },
        { key: "word_meanings", header: "Word Meanings" },
        { key: "total_meaning", header: "Total Meaning" },
        { key: "rishi_name", header: "Rishi's Name" }
      ];
      

  const { getMantraData, getSuktasData } = useSelector(
    (state) => state.reducer
  );

  const [rowData, setRowData] = useState([]);
  const [initialRows, setInitialRows] = useState(rowData);
  const [rows, setRows] = useState(rowData);
  const [suktasData, setSuktasData] = useState([]);

  useEffect(() => {
    try {
      if (getSuktasData.data) {
        setSuktasData(getSuktasData.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [getSuktasData]);

  useEffect(() => {
    try {
      if (getMantraData.data) {
        setRowData(getMantraData.data.data);
        console.log("rowData", rowData);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [getMantraData]);
  return (
    <IndexTable
      columns={columns}
      tableName={"Mantras"}
      dispatchFetch={getMantrasApi}
      row={rowData}
      initialRows={initialRows}
      setRows={setRows}
      rows={rowData}
      FormComponent={AddMantraForm}
      dispatchEdit={updateMantraApi}
      dispatchAdd={addMantraApi}
      dispatchDelete={deleteMantraApi}
      suktasData={suktasData}
    />
  );
}
