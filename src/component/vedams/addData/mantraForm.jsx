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

const AddMantraForm = ({
  title,
  dispatchEdit,
  dispatchAdd,
  data,
  suktasData,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    sukta_id: "",
    verse_number: "",
    text: "",
    text_with_sounds: "",
    text_separated_with_sounds: "",
    text_without_sounds: "",
    text_separated_without_sounds: "",
    word_meanings: "",
    total_meaning: "",
    rishi_name: "",
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
          {title} Mantra
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="verse_number"
                label="Verse Number"
                fullWidth
                value={formData.verse_number}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Select
                  name="sukta_id"
                  value={formData.sukta_id}
                  onChange={handleChange}
                >
                  {suktasData &&
                    suktasData.map((el, i) => {
                      return (
                        <MenuItem value={el.id} key={el.id}>
                          {el.title}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="text"
                label="text"
                fullWidth
                multiline
                rows={4}
                value={formData.text}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="text_with_sounds"
                label="Text Sounds"
                fullWidth
                multiline
                rows={4}
                value={formData.text_with_sounds}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="text_separated_with_sounds"
                label="Text Separated Sounds"
                fullWidth
                multiline
                rows={4}
                value={formData.text_separated_with_sounds}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="text_without_sounds"
                label="Text Without Sounds"
                fullWidth
                multiline
                rows={4}
                value={formData.text_without_sounds}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="text_separated_without_sounds"
                label="Text Separated Without Sounds"
                fullWidth
                multiline
                rows={4}
                value={formData.text_separated_without_sounds}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="word_meanings"
                label="Word Meanings"
                fullWidth
                multiline
                rows={4}
                value={formData.word_meanings}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="total_meaning"
                label="Total Meanings"
                fullWidth
                multiline
                rows={4}
                value={formData.total_meaning}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="rishi_name"
                label="Rishi Name"
                fullWidth
                multiline
                rows={1}
                value={formData.rishi_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ margin: "5px" }}
              >
                {title} mantra
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

export default AddMantraForm;
