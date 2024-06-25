import { useSelector } from "react-redux";
import IndexTable from "../table";
import { addTagApi, addVedamsApi, deleteTagApi, deleteVedamsApi, getTagApi, getVedamsApi, updateTagApi, updateVedamsApi } from "../../../redux/action/action";
import { useEffect, useState } from "react";
import AddVedaForm from "../addData/vedamForm";
import AddTagForm from "../addData/tagForm";

export default function TableTag() {
  const columns = [
    { key: "name", header: "Name" },
  ];

  const { getTagsData } = useSelector((state) => state.reducer);
  const [rowData, setRowData] = useState([]);
  const [initialRows, setInitialRows] = useState(rowData);
  const [rows, setRows] = useState(rowData);

  useEffect(() => {
    try {
      if (getTagsData.data) {
        setRowData(getTagsData.data.data);
        console.log("rowData", rowData);
      }
    } catch (error) {
      console.log("error", error);
    }
  }, [getTagsData]);
  return (
    <IndexTable
      columns={columns}
      tableName={"Tags"}
      dispatchFetch={getTagApi}
      row={rowData}
      initialRows={initialRows}
      setRows={setRows}
      rows={rowData}
      FormComponent={AddTagForm}
      dispatchEdit={updateTagApi}
      dispatchAdd={addTagApi}
      dispatchDelete={deleteTagApi}
    />
  );
}
