import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const DynamicTable = ({
  columns,
  handleEdit,
  handleSaveClick,
  handleDelete,
  editingId,
  rows,
}) => {
  const renderActions = (row) => {
    if (editingId === row.id) {
      return (
        <IconButton onClick={() => handleSaveClick(row.id)}>
          <SaveIcon />
        </IconButton>
      );
    } else {
      return (
        <>
          <IconButton onClick={() => handleEdit(row.id, row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      );
    }
  };

  return (
    <TableContainer component={Paper} sx={{ margin: "10px" }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key}>{column.header}</TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell key={column.key}>{row[column.key]}</TableCell>
              ))}
              <TableCell>{renderActions(row)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
