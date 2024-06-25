import React, { useEffect, useState } from "react";
import SharedTable from "../share/table";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserApi, updateUserAPi } from "../../redux/action/action";
import UpdateUserPage from "./userupdate";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const UserData = () => {
  const dispatch = useDispatch();
  const { getUserData, responseData, updateUserData } = useSelector(
    (state) => state.reducer
  );
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  function editUser(data) {
    setSelectedUser(data);
  }

  const handleToggleActive = (row) => {
    try {
      const activeStatus = row.isActive ? false : true;
      dispatch(updateUserAPi({ id: row.id, isActive: activeStatus }));
    } catch (error) {}
  };

  const columns = [
    { id: "id", label: "No." },
    { id: "firstName", label: "First Name", editable: true },
    { id: "lastName", label: "Last Name", editable: true },
    { id: "email", label: "Email", editable: true },
    { id: "role", label: "Role", editable: true },
    { id: "actions", label: "Actions", editable: true },
  ];

  useEffect(() => {
    try {
      dispatch(getUserApi({}));
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      if (updateUserData.data) {
        window.location.reload();
      }
    } catch (error) {}
  }, [updateUserData]);

  function fetchUserData() {
    try {
      if (getUserData.data) {
        setData(getUserData.data.data);
        console.log("getUserData", data);
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchUserData();
  }, [getUserData]);

  const Component = selectedUser ? (
    <>
      <Button
        onClick={() => setSelectedUser(null)}
        component="label"
        variant="contained"
        tabIndex={-1}
        style={{ marginLeft: "10px" }}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
      <UpdateUserPage UserData={selectedUser} />
    </>
  ) : (
    <SharedTable
      columns={columns}
      rows={data}
      editFunction={editUser}
      handleToggleActive={handleToggleActive}
    />
  );

  return <Box>{Component}</Box>;
};

export default UserData;
