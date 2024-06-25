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

const AddMantraTagForm = ({
  title,
  dispatchEdit,
  dispatchAdd,
  data,
  tagData,
  mantraData
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    mantra_id: "",
    tag_id: "",
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
          {title} Mantra Tag
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Select
                  name="mantra_id"
                  value={formData.mantra_id}
                  onChange={handleChange}
                >
                  {mantraData &&
                    mantraData.map((el, i) => {
                      return (
                        <MenuItem value={el.id} key={el.id}>
                          {el.text}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Select
                  name="tag_id"
                  value={formData.tag_id}
                  onChange={handleChange}
                >
                  {tagData &&
                    tagData.map((el, i) => {
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
              <Button type="submit" variant="contained" color="primary">
                {title} Mantra Tag
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddMantraTagForm;
