import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Box,
  Switch,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const SharedTable = ({ columns, rows, editFunction, handleToggleActive }) => {
  return (
    <Box margin={5}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
              {/* Additional column header for actions */}
              <TableCell>Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                {columns.map((column) => (
                  <TableCell key={`${row.id}-${column.id}`}>
                    {column.id !== "actions" ? (
                      row[column.id]
                    ) : (
                      <>
                        {column.editable && (
                          <IconButton
                            aria-label="edit"
                            size="small"
                            onClick={() => editFunction(row)}
                          >
                            <EditIcon />
                          </IconButton>
                        )}
                        {/* Add more action buttons as needed */}
                      </>
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  {console.log(row.isActive)}
                  {row.isActive ? (
                    <>
                      <Switch
                        checked={row.isActive}
                        onClick={() => handleToggleActive(row)}
                      />
                    </>
                  ) : (
                    <>
                      <Switch
                        checked={row.isActive}
                        onClick={() => handleToggleActive(row)}
                      />
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SharedTable;
