import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Container, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

const AddVedaForm = ({ title, dispatchEdit, dispatchAdd, data }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (title === "Edit") {
        dispatch(dispatchEdit(formData));
        console.log("edit", formData);
      }
      if (title === "Add") {
        dispatch(dispatchAdd(formData));
      }
    } catch (error) {
      console.log("form", error);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="success"
        sx={{ margin: "30px" }}
        onClick={() => window.location.reload()}
      >
        Back
      </Button>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          {title} Veda
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Description"
                fullWidth
                multiline
                rows={6}
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                {title} Veda
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddVedaForm;
