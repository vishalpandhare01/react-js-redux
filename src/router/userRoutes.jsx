import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../component/auth/login";
import UserData from "../component/user/user";
import AutohideSnackbar from "../utils/snackbar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Token } from "../const/token";
import TableVedam from "../component/vedams/tables/tableVedam";
import TableMandal from "../component/vedams/tables/tableMandal";
import TableSuktas from "../component/vedams/tables/tableSuktas";
import TableMantra from "../component/vedams/tables/tableMantra";
import TableTag from "../component/vedams/tables/tableTag";
import TableMantraTag from "../component/vedams/tables/tableMantraTag";

export function UserRoutes() {
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const { responseData } = useSelector((state) => state.reducer);

  useEffect(() => {
    try {
      setOpen(true);
      console.log("responseData", responseData);
      if (responseData.data) {
        setMsg(responseData.data.message);
      }
      setMsg(responseData.response.data.message);
    } catch (error) {
      // console.log("Routes", error);
    }
  }, [responseData]);

  setTimeout(() => {
    setOpen(false);
  }, 3000);

  return (
    <BrowserRouter>
      <Routes>
        {!Token && <Route path="/" element={<Login />} />}
        {Token && <Route path="/users" element={<UserData />} />}
        <Route path="/vedams" element={<TableVedam />} />
        <Route path="/mandala" element={<TableMandal />} />
        <Route path="/suktas" element={<TableSuktas />} />
        <Route path="/mantras" element={<TableMantra />} />
        <Route path="/tags" element={<TableTag />} />
        <Route path="/tag-mantra" element={<TableMantraTag />} />
      </Routes>
      <AutohideSnackbar open={open} setOpen={setOpen} message={msg} />
    </BrowserRouter>
  );
}
