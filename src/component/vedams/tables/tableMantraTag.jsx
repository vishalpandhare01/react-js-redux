import { useSelector } from "react-redux";
import IndexTable from "../table";
import {
  addSuktasApi,
  addTagMantraApi,
  deleteSuktasApi,
  deleteTagMantraApi,
  getSuktasApi,
  getTagMantraApi,
  updateSuktasApi,
  updateTagMantraApi,
} from "../../../redux/action/action";
import { useEffect, useState } from "react";
import AddSuktasForm from "../addData/suktasForm";
import AddMantraForm from "../addData/mantraTagForm";
import AddMantraTagForm from "../addData/mantraTagForm";

export default function TableMantraTag() {
  const columns = [
    { key: "mantra_id", header: "mantra_id" },
    { key: "tag_id", header: "tag_id" },
  ];

  const { getTagsData, getMantraTagData, getMantraData } = useSelector(
    (state) => state.reducer
  );

  const [rowData, setRowData] = useState([]);
  const [initialRows, setInitialRows] = useState(rowData);
  const [rows, setRows] = useState(rowData);
  const [tagData, setTagData] = useState([]);
  const [mantraData, setMantraData] = useState([]);

  useEffect(() => {
    try {
      if (getTagsData.data) {
        setTagData(getTagsData.data.data);
      }
    } catch (error) {
      console.log("error tag mntr", error);
    }
  }, [getTagsData]);

  useEffect(() => {
    try {
      if (getMantraData.data) {
        setMantraData(getMantraData.data.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [getMantraData]);

  useEffect(() => {
    try {
      if (getMantraTagData.data) {
        setRowData(getMantraTagData.data.data);
        console.log("rowData", rowData);
      }
    } catch (error) {
      console.log("error........", error);
    }
  }, [getMantraTagData]);

  return (
    <IndexTable
      columns={columns}
      tableName={"Mantra Tag"}
      dispatchFetch={getTagMantraApi}
      row={rowData}
      initialRows={initialRows}
      setRows={setRows}
      rows={rowData}
      FormComponent={AddMantraTagForm}
      dispatchEdit={updateTagMantraApi}
      dispatchAdd={addTagMantraApi}
      dispatchDelete={deleteTagMantraApi}
      mantraData={mantraData}
      tagData={tagData}
    />
  );
}
