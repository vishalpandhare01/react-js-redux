import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";

const AddSuktasForm = ({
  title,
  dispatchEdit,
  dispatchAdd,
  data,
  getMandalaData,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title:"",
    number: "",
    description: "",
    mandala_id: "", 
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
    e.preventDefault();
    try {
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

  console.log("getman for from",getMandalaData)

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
          {title} suktas
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="number"
                label="Number"
                fullWidth
                value={formData.number}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="title"
                label="Title"
                fullWidth
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Select
                  name="mandala_id"
                  value={formData.mandala_id}
                  onChange={handleChange}
                >
                  {getMandalaData &&
                    getMandalaData.map((el, i) => {
                        
                      return (
                        <MenuItem value={el.id} key={el.id}>
                          {el.description}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
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
                {title} Suktas
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddSuktasForm;
