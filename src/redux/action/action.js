import {
  ADD_MANDAL_FAILED,
  ADD_MANDAL_REQUEST,
  ADD_MANDAL_SUCCESS,
  ADD_MANTRA_FAILED,
  ADD_MANTRA_REQUEST,
  ADD_MANTRA_SUCCESS,
  ADD_MANTRTAG_FAILED,
  ADD_MANTRTAG_REQUEST,
  ADD_MANTRTAG_SUCCESS,
  ADD_SUKTAS_FAILED,
  ADD_SUKTAS_REQUEST,
  ADD_SUKTAS_SUCCESS,
  ADD_TAGS_FAILED,
  ADD_TAGS_REQUEST,
  ADD_TAGS_SUCCESS,
  ADD_VEDAMS_FAILED,
  ADD_VEDAMS_REQUEST,
  ADD_VEDAMS_SUCCESS,
  DELETE_MANDAL_FAILED,
  DELETE_MANDAL_REQUEST,
  DELETE_MANDAL_SUCCESS,
  DELETE_MANTRA_FAILED,
  DELETE_MANTRA_REQUEST,
  DELETE_MANTRA_SUCCESS,
  DELETE_MANTRTAG_FAILED,
  DELETE_MANTRTAG_REQUEST,
  DELETE_MANTRTAG_SUCCESS,
  DELETE_SUKTAS_FAILED,
  DELETE_SUKTAS_REQUEST,
  DELETE_SUKTAS_SUCCESS,
  DELETE_TAGS_FAILED,
  DELETE_TAGS_REQUEST,
  DELETE_TAGS_SUCCESS,
  GET_MANDALS_FAILED,
  GET_MANDALS_REQUEST,
  GET_MANDALS_SUCCESS,
  GET_MANTRA_FAILED,
  GET_MANTRA_REQUEST,
  GET_MANTRA_SUCCESS,
  GET_MANTRTAG_FAILED,
  GET_MANTRTAG_REQUEST,
  GET_MANTRTAG_SUCCESS,
  GET_SUKTAS_FAILED,
  GET_SUKTAS_REQUEST,
  GET_SUKTAS_SUCCESS,
  GET_TAGS_FAILED,
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_VEDAMS_FAILED,
  GET_VEDAMS_REQUEST,
  GET_VEDAMS_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  UPDATE_MANDAL_FAILED,
  UPDATE_MANDAL_REQUEST,
  UPDATE_MANDAL_SUCCESS,
  UPDATE_MANTRA_FAILED,
  UPDATE_MANTRA_REQUEST,
  UPDATE_MANTRA_SUCCESS,
  UPDATE_MANTRTAG_FAILED,
  UPDATE_MANTRTAG_REQUEST,
  UPDATE_MANTRTAG_SUCCESS,
  UPDATE_SUKTAS_FAILED,
  UPDATE_SUKTAS_REQUEST,
  UPDATE_SUKTAS_SUCCESS,
  UPDATE_TAGS_FAILED,
  UPDATE_TAGS_REQUEST,
  UPDATE_TAGS_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_VEDAMS_FAILED,
  UPDATE_VEDAMS_REQUEST,
  UPDATE_VEDAMS_SUCCESS,
} from "./types";
import { baseUrl } from "../../const/baseUrl";
import { endPoints } from "../../const/endpoints";
import axios from "axios";
import { Token } from "../../const/token";
// import { Token } from "../../core/token";

const option = {
  headers: {
    "Content-Type": "application/json",
    authorization: "Bearer " + Token,
  },
};

export function loginAPi(data) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    console.log("api called");
    try {
      const response = await axios.post(
        baseUrl + endPoints.loginUser,
        data,
        option
      );
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: LOGIN_FAILED,
        payload: error,
      });
    }
  };
}
export function getUserApi(data) {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(baseUrl + endPoints.getUser, option);
      return dispatch({
        type: GET_USER_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: GET_USER_FAILED,
        payload: error,
      });
    }
  };
}
export function updateUserAPi(data) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    console.log("api called");
    try {
      const response = await axios.put(
        baseUrl + endPoints.updateUser,
        data,
        option
      );
      return dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: UPDATE_USER_FAILED,
        payload: error,
      });
    }
  };
}

export function getVedamsApi(data) {
  return async (dispatch) => {
    dispatch({ type: GET_VEDAMS_REQUEST });
    try {
      const response = await axios.get(baseUrl + endPoints.getAllVedam, option);
      return dispatch({
        type: GET_VEDAMS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: GET_VEDAMS_FAILED,
        payload: error,
      });
    }
  };
}
export function updateVedamsApi(data) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_VEDAMS_REQUEST });
    try {
      const response = await axios.put(
        baseUrl + endPoints.updateVedam,
        data,
        option
      );
      return dispatch({
        type: UPDATE_VEDAMS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: UPDATE_VEDAMS_FAILED,
        payload: error,
      });
    }
  };
}
export function addVedamsApi(data) {
  return async (dispatch) => {
    dispatch({ type: ADD_VEDAMS_REQUEST });
    try {
      const response = await axios.post(
        baseUrl + endPoints.addVedam,
        data,
        option
      );
      return dispatch({
        type: ADD_VEDAMS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: ADD_VEDAMS_FAILED,
        payload: error,
      });
    }
  };
}
export function deleteVedamsApi(data) {
  return async (dispatch) => {
    dispatch({ type: ADD_VEDAMS_REQUEST });
    try {
      const response = await axios.delete(
        baseUrl + endPoints.deleteVedam + "/" + data.id,
        option
      );
      return dispatch({
        type: ADD_VEDAMS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: ADD_VEDAMS_FAILED,
        payload: error,
      });
    }
  };
}

export function getMandalApi(data) {
  return async (dispatch) => {
    dispatch({ type: GET_MANDALS_REQUEST });
    try {
      const response = await axios.get(baseUrl + endPoints.getMandals, option);
      return dispatch({
        type: GET_MANDALS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: GET_MANDALS_FAILED,
        payload: error,
      });
    }
  };
}
export function addMandalsApi(data) {
  return async (dispatch) => {
    dispatch({ type: ADD_MANDAL_REQUEST });
    try {
      const response = await axios.post(
        baseUrl + endPoints.addMandals,
        data,
        option
      );
      return dispatch({
        type: ADD_MANDAL_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: ADD_MANDAL_FAILED,
        payload: error,
      });
    }
  };
}
export function updateMandalApi(data) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MANDAL_REQUEST });
    try {
      const response = await axios.put(
        baseUrl + endPoints.updateMandals,
        data,
        option
      );
      return dispatch({
        type: UPDATE_MANDAL_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: UPDATE_MANDAL_FAILED,
        payload: error,
      });
    }
  };
}
export function deleteMandalsApi(data) {
  return async (dispatch) => {
    dispatch({ type: DELETE_MANDAL_REQUEST });
    try {
      const response = await axios.delete(
        baseUrl + endPoints.deleteMandals + "/" + data.id,
        option
      );
      return dispatch({
        type: DELETE_MANDAL_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: DELETE_MANDAL_FAILED,
        payload: error,
      });
    }
  };
}

export function getSuktasApi(data) {
  return async (dispatch) => {
    dispatch({ type: GET_SUKTAS_REQUEST });
    try {
      const response = await axios.get(baseUrl + endPoints.getSuktas, option);
      return dispatch({
        type: GET_SUKTAS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: GET_SUKTAS_FAILED,
        payload: error,
      });
    }
  };
}
export function addSuktasApi(data) {
  return async (dispatch) => {
    dispatch({ type: ADD_SUKTAS_REQUEST });
    try {
      const response = await axios.post(
        baseUrl + endPoints.addSuktas,
        data,
        option
      );
      return dispatch({
        type: ADD_SUKTAS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: ADD_SUKTAS_FAILED,
        payload: error,
      });
    }
  };
}
export function updateSuktasApi(data) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_SUKTAS_REQUEST });
    try {
      const response = await axios.put(
        baseUrl + endPoints.updateSuktas,
        data,
        option
      );
      return dispatch({
        type: UPDATE_SUKTAS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: UPDATE_SUKTAS_FAILED,
        payload: error,
      });
    }
  };
}
export function deleteSuktasApi(data) {
  return async (dispatch) => {
    dispatch({ type: DELETE_SUKTAS_REQUEST });
    try {
      const response = await axios.delete(
        baseUrl + endPoints.deleteSuktas + "/" + data.id,
        data,
        option
      );
      return dispatch({
        type: DELETE_SUKTAS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: DELETE_SUKTAS_FAILED,
        payload: error,
      });
    }
  };
}

export function getMantrasApi(data) {
  return async (dispatch) => {
    dispatch({ type: GET_MANTRA_REQUEST });
    try {
      const response = await axios.get(baseUrl + endPoints.getMantras, option);
      return dispatch({
        type: GET_MANTRA_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: GET_MANTRA_FAILED,
        payload: error,
      });
    }
  };
}
export function addMantraApi(data) {
  return async (dispatch) => {
    dispatch({ type: ADD_MANTRA_REQUEST });
    try {
      const response = await axios.post(
        baseUrl + endPoints.addMantras,
        data,
        option
      );
      return dispatch({
        type: ADD_MANTRA_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: ADD_MANTRA_FAILED,
        payload: error,
      });
    }
  };
}
export function updateMantraApi(data) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MANTRA_REQUEST });
    try {
      const response = await axios.put(
        baseUrl + endPoints.updateMantras,
        data,
        option
      );
      return dispatch({
        type: UPDATE_MANTRA_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: UPDATE_MANTRA_FAILED,
        payload: error,
      });
    }
  };
}
export function deleteMantraApi(data) {
  return async (dispatch) => {
    dispatch({ type: DELETE_MANTRA_REQUEST });
    try {
      const response = await axios.delete(
        baseUrl + endPoints.deleteMantras + "/" + data.id,
        data,
        option
      );
      return dispatch({
        type: DELETE_MANTRA_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: DELETE_MANTRA_FAILED,
        payload: error,
      });
    }
  };
}

export function getTagApi(data) {
  return async (dispatch) => {
    dispatch({ type: GET_TAGS_REQUEST });
    try {
      const response = await axios.get(baseUrl + endPoints.getTags, option);
      return dispatch({
        type: GET_TAGS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: GET_TAGS_FAILED,
        payload: error,
      });
    }
  };
}
export function addTagApi(data) {
  return async (dispatch) => {
    dispatch({ type: ADD_TAGS_REQUEST });
    try {
      const response = await axios.post(
        baseUrl + endPoints.addTags,
        data,
        option
      );
      return dispatch({
        type: ADD_TAGS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: ADD_TAGS_FAILED,
        payload: error,
      });
    }
  };
}
export function updateTagApi(data) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_TAGS_REQUEST });
    try {
      const response = await axios.put(
        baseUrl + endPoints.updateTags,
        data,
        option
      );
      return dispatch({
        type: UPDATE_TAGS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: UPDATE_TAGS_FAILED,
        payload: error,
      });
    }
  };
}
export function deleteTagApi(data) {
  return async (dispatch) => {
    dispatch({ type: DELETE_TAGS_REQUEST });
    try {
      const response = await axios.delete(
        baseUrl + endPoints.deleteTags + "/" + data.id,
        data,
        option
      );
      return dispatch({
        type: DELETE_TAGS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: DELETE_TAGS_FAILED,
        payload: error,
      });
    }
  };
}

export function getTagMantraApi(data) {
  return async (dispatch) => {
    dispatch({ type: GET_MANTRTAG_REQUEST });
    try {
      const response = await axios.get(
        baseUrl + endPoints.getMantraTag,
        option
      );
      return dispatch({
        type: GET_MANTRTAG_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: GET_MANTRTAG_FAILED,
        payload: error,
      });
    }
  };
}
export function addTagMantraApi(data) {
  return async (dispatch) => {
    dispatch({ type: ADD_MANTRTAG_REQUEST });
    try {
      const response = await axios.post(
        baseUrl + endPoints.addMantraTag,
        data,
        option
      );
      return dispatch({
        type: ADD_MANTRTAG_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: ADD_MANTRTAG_FAILED,
        payload: error,
      });
    }
  };
}
export function updateTagMantraApi(data) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MANTRTAG_REQUEST });
    try {
      const response = await axios.put(
        baseUrl + endPoints.updateMantraTag,
        data,
        option
      );
      return dispatch({
        type: UPDATE_MANTRTAG_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: UPDATE_MANTRTAG_FAILED,
        payload: error,
      });
    }
  };
}
export function deleteTagMantraApi(data) {
  return async (dispatch) => {
    dispatch({ type: DELETE_MANTRTAG_REQUEST });
    try {
      const response = await axios.delete(
        baseUrl + endPoints.deleteMantraTag + "/" + data.id,
        data,
        option
      );
      return dispatch({
        type: DELETE_MANTRTAG_SUCCESS,
        payload: response,
      });
    } catch (error) {
      return dispatch({
        type: DELETE_MANTRTAG_FAILED,
        payload: error,
      });
    }
  };
}
