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

const AddMandalForm = ({
  title,
  dispatchEdit,
  dispatchAdd,
  data,
  getVedamData,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    number: "",
    description: "",
    vedam_id: "", // default value or initial value for veda select
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
          {title} Mandal
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
              <FormControl fullWidth>
                <Select
                  name="vedam_id"
                  value={formData.vedam_id}
                  onChange={handleChange}
                >
                  {getVedamData &&
                    getVedamData.map((el, i) => {
                      return (
                        <MenuItem value={el.id} key={el.id}>
                          {el.name}
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
              <Button type="submit" variant="contained" color="primary" >
                {title} Mandal
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddMandalForm;
