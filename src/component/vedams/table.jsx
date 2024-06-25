import { useEffect, useState } from "react";
import DynamicTable from "../share/dynamicTable";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMandalApi, getMantrasApi, getSuktasApi, getTagApi, getVedamsApi } from "../../redux/action/action";

export default function IndexTable({
  tableName,
  columns,
  dispatchFetch,
  initialRows,
  rows,
  setRows,
  dispatchEdit,
  dispatchDelete,
  FormComponent,
  dispatchAdd,
  getVedamData,
  getMandalaData,
  suktasData,
  tagData,
  mantraData
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(dispatchFetch({}));
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      dispatch(getVedamsApi({}));
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      dispatch(getMandalApi({}));
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      dispatch(getSuktasApi({}));
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      dispatch(getMantrasApi({}));
    } catch (error) {}
  }, []);
  useEffect(() => {
    try {
      dispatch(getTagApi({}));
    } catch (error) {}
  }, []);

  // console.log("row",rows)

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  const handleEdit = (id, rowData) => {
    setEditingId(id);
    setEditData(rowData);
  };

  const handleSave = (id) => {
    console.log(editData);
    setRows(rows);
    setEditingId(null);
    setEditData({});
  };

  const [savingId, setSavingId] = useState(null); // State to track which row is being saved

  const handleSaveClick = (id) => {
    handleSave(id); // Call the parent component's save handler
    setSavingId(null); // Reset savingId after save
    console.log("edit", id);
  };

  const handleDelete = (id) => {
    console.log("delete", id);
    try {
      dispatch(dispatchDelete({ id }));
      setTimeout(() => {
        dispatch(dispatchFetch({}));
      }, 1000);
    } catch (error) {
      console.log("dele", error);
    }
  };

  const { responseData } = useSelector((state) => state.reducer);

  const handleChange = (e, key) => {
    setEditData((prevData) => ({
      ...prevData,
      [key]: e.target.value,
    }));
  };

  // console.log("row fro tag",rows)

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{tableName}</h3>
      {!isAdd && !editingId && (
        <>
          <Button
            variant="contained"
            color="success"
            sx={{ margin: "30px" }}
            onClick={() => setIsAdd(true)}
          >
            Add {tableName}
          </Button>
          <DynamicTable
            columns={columns}
            editData={editData}
            editingId={editingId}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleSave={handleSave}
            initialRows={initialRows}
            handleSaveClick={handleSaveClick}
            setSavingId={setSavingId}
            rows={rows}
          />
        </>
      )}
      {isAdd && (
        <FormComponent
          title="Add"
          dispatchAdd={dispatchAdd}
          getVedamData={getVedamData}
          getMandalaData={getMandalaData}
          suktasData={suktasData}
          tagData={tagData}
          mantraData={mantraData}
        />
      )}
      {editingId && (
        <FormComponent
          title="Edit"
          data={editData}
          dispatchEdit={dispatchEdit}
          getVedamData={getVedamData}
          getMandalaData={getMandalaData}
          suktasData={suktasData}
          tagData={tagData}
          mantraData={mantraData}
        />
      )}
    </div>
  );
}
