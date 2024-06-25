import * as types from "../action/types";

const initialState = {
  responseData: {},
  userLoginData: [],
  getUserData: [],
  updateUserData: [],

  getVedamData: [],
  updateVedamData: [],
  addVedamData: [],
  deleteVedamData: [],

  getMandalsData: [],
  addMandalsData: [],
  updateMandalData: [],
  deleteMandalData: [],

  getSuktasData: [],
  addSuktasData: [],
  updateSuktasData: [],
  deleteSuktasData: [],

  addMantraData: [],
  getMantraData: [],
  updateMantraData: [],
  deleteMantraData: [],

  addTagsData: [],
  getTagsData: [],
  updateTagsData: [],
  deleteTagsData: [],

  addMantraTagData: [],
  getMantraTagData: [],
  updateMantraTagData: [],
  deleteMantraTagData: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    //login
    case types.LOGIN_REQUEST:
      return { ...state, userLoginData: payload };
    case types.LOGIN_SUCCESS:
      return { ...state, responseData: payload, userLoginData: payload };
    case types.LOGIN_FAILED:
      return { ...state, responseData: payload, userLoginData: payload };

    //get users
    case types.GET_USER_REQUEST:
      return { ...state, getUserData: payload };
    case types.GET_USER_SUCCESS:
      return { ...state, responseData: payload, getUserData: payload };
    case types.GET_USER_FAILED:
      return { ...state, responseData: payload, getUserData: payload };

    //update users
    case types.UPDATE_USER_REQUEST:
      return { ...state, updateUserData: payload };
    case types.UPDATE_USER_SUCCESS:
      return { ...state, responseData: payload, updateUserData: payload };
    case types.UPDATE_USER_FAILED:
      return { ...state, responseData: payload, updateUserData: payload };

    //get All vedams
    case types.GET_VEDAMS_REQUEST:
      return { ...state, getVedamData: payload };
    case types.GET_VEDAMS_SUCCESS:
      return { ...state, responseData: payload, getVedamData: payload };
    case types.GET_VEDAMS_FAILED:
      return { ...state, responseData: payload, getVedamData: payload };

    //update vedams
    case types.UPDATE_VEDAMS_REQUEST:
      return { ...state, updateVedamData: payload };
    case types.UPDATE_VEDAMS_SUCCESS:
      return { ...state, responseData: payload, updateVedamData: payload };
    case types.UPDATE_VEDAMS_FAILED:
      return { ...state, responseData: payload, updateVedamData: payload };

    //add vedams
    case types.ADD_VEDAMS_REQUEST:
      return { ...state, addVedamData: payload };
    case types.ADD_VEDAMS_SUCCESS:
      return { ...state, responseData: payload, addVedamData: payload };
    case types.ADD_VEDAMS_FAILED:
      return { ...state, responseData: payload, addVedamData: payload };

    //delete vedams
    case types.DELETE_VEDAMS_REQUEST:
      return { ...state, deleteVedamData: payload };
    case types.DELETE_VEDAMS_SUCCESS:
      return { ...state, responseData: payload, deleteVedamData: payload };
    case types.DELETE_VEDAMS_FAILED:
      return { ...state, responseData: payload, deleteVedamData: payload };

    //get mandals
    case types.GET_MANDALS_REQUEST:
      return { ...state, getMandalsData: payload };
    case types.GET_MANDALS_SUCCESS:
      return { ...state, responseData: payload, getMandalsData: payload };
    case types.GET_MANDALS_FAILED:
      return { ...state, responseData: payload, getMandalsData: payload };

    //add mandal
    case types.ADD_MANDAL_REQUEST:
      return { ...state, addMandalsData: payload };
    case types.ADD_MANDAL_SUCCESS:
      return { ...state, responseData: payload, addMandalsData: payload };
    case types.ADD_MANDAL_FAILED:
      return { ...state, responseData: payload, addMandalsData: payload };

    //update mandal
    case types.UPDATE_MANDAL_REQUEST:
      return { ...state, updateMandalData: payload };
    case types.UPDATE_MANDAL_SUCCESS:
      return { ...state, responseData: payload, updateMandalData: payload };
    case types.UPDATE_MANDAL_FAILED:
      return { ...state, responseData: payload, updateMandalData: payload };

    //delete mandal
    case types.DELETE_MANDAL_REQUEST:
      return { ...state, deleteMandalData: payload };
    case types.UPDATE_MANDAL_SUCCESS:
      return { ...state, responseData: payload, deleteMandalData: payload };
    case types.UPDATE_MANDAL_FAILED:
      return { ...state, responseData: payload, deleteMandalData: payload };

    //get suktas
    case types.GET_SUKTAS_REQUEST:
      return { ...state, getSuktasData: payload };
    case types.GET_SUKTAS_SUCCESS:
      return { ...state, responseData: payload, getSuktasData: payload };
    case types.GET_SUKTAS_FAILED:
      return { ...state, responseData: payload, getSuktasData: payload };

    //add suktas
    case types.ADD_SUKTAS_REQUEST:
      return { ...state, addSuktasData: payload };
    case types.ADD_SUKTAS_SUCCESS:
      return { ...state, responseData: payload, addSuktasData: payload };
    case types.ADD_SUKTAS_FAILED:
      return { ...state, responseData: payload, addSuktasData: payload };

    //update Suktas
    case types.UPDATE_SUKTAS_REQUEST:
      return { ...state, updateSuktasData: payload };
    case types.UPDATE_SUKTAS_SUCCESS:
      return { ...state, responseData: payload, updateSuktasData: payload };
    case types.UPDATE_SUKTAS_FAILED:
      return { ...state, responseData: payload, updateSuktasData: payload };

    //delete Suktas
    case types.DELETE_SUKTAS_REQUEST:
      return { ...state, updateSuktasData: payload };
    case types.DELETE_SUKTAS_SUCCESS:
      return { ...state, responseData: payload, updateSuktasData: payload };
    case types.DELETE_SUKTAS_FAILED:
      return { ...state, responseData: payload, updateSuktasData: payload };

    //add mantras
    case types.ADD_MANTRA_REQUEST:
      return { ...state, addMantraData: payload };
    case types.ADD_MANTRA_SUCCESS:
      return { ...state, responseData: payload, addMantraData: payload };
    case types.ADD_MANDAL_FAILED:
      return { ...state, responseData: payload, addMantraData: payload };

    //get mantras
    case types.GET_MANTRA_REQUEST:
      return { ...state, getMantraData: payload };
    case types.GET_MANTRA_SUCCESS:
      return { ...state, responseData: payload, getMantraData: payload };
    case types.GET_MANTRA_FAILED:
      return { ...state, responseData: payload, getMantraData: payload };

    //update mantras
    case types.UPDATE_MANTRA_REQUEST:
      return { ...state, updateMantraData: payload };
    case types.UPDATE_MANTRA_SUCCESS:
      return { ...state, responseData: payload, updateMantraData: payload };
    case types.UPDATE_MANTRA_FAILED:
      return { ...state, responseData: payload, updateMantraData: payload };

    //delete mantras
    case types.DELETE_MANTRA_REQUEST:
      return { ...state, deleteMantraData: payload };
    case types.DELETE_MANTRA_SUCCESS:
      return { ...state, responseData: payload, deleteMantraData: payload };
    case types.DELETE_MANTRA_FAILED:
      return { ...state, responseData: payload, deleteMantraData: payload };

    //add tags
    case types.ADD_TAGS_REQUEST:
      return { ...state, addTagsData: payload };
    case types.ADD_TAGS_SUCCESS:
      return { ...state, responseData: payload, addTagsData: payload };
    case types.ADD_TAGS_FAILED:
      return { ...state, responseData: payload, addTagsData: payload };

    //get tags
    case types.GET_TAGS_REQUEST:
      return { ...state, getTagsData: payload };
    case types.GET_TAGS_SUCCESS:
      return { ...state, responseData: payload, getTagsData: payload };
    case types.GET_TAGS_FAILED:
      return { ...state, responseData: payload, getTagsData: payload };

    //update tags
    case types.UPDATE_TAGS_REQUEST:
      return { ...state, updateTagsData: payload };
    case types.UPDATE_TAGS_SUCCESS:
      return { ...state, responseData: payload, updateTagsData: payload };
    case types.UPDATE_TAGS_FAILED:
      return { ...state, responseData: payload, updateTagsData: payload };

    //delete tags
    case types.DELETE_TAGS_REQUEST:
      return { ...state, deleteTagsData: payload };
    case types.DELETE_TAGS_SUCCESS:
      return { ...state, responseData: payload, deleteTagsData: payload };
    case types.DELETE_TAGS_FAILED:
      return { ...state, responseData: payload, deleteTagsData: payload };

    //add mantra tag
    case types.ADD_MANTRTAG_REQUEST:
      return { ...state, addMantraTagData: payload };
    case types.ADD_MANTRTAG_SUCCESS:
      return { ...state, responseData: payload, addMantraTagData: payload };
    case types.ADD_MANTRTAG_FAILED:
      return { ...state, responseData: payload, addMantraTagData: payload };

    //get mantra tag
    case types.GET_MANTRTAG_REQUEST:
      return { ...state, getMantraTagData: payload };
    case types.GET_MANTRTAG_SUCCESS:
      return { ...state, responseData: payload, getMantraTagData: payload };
    case types.GET_MANTRTAG_FAILED:
      return { ...state, responseData: payload, getMantraTagData: payload };

    //update mantra tag
    case types.UPDATE_MANTRTAG_REQUEST:
      return { ...state, updateMantraTagData: payload };
    case types.UPDATE_MANTRTAG_SUCCESS:
      return { ...state, responseData: payload, updateMantraTagData: payload };
    case types.UPDATE_MANTRTAG_FAILED:
      return { ...state, responseData: payload, updateMantraTagData: payload };

    //delete mantra tag
    case types.DELETE_MANTRTAG_REQUEST:
      return { ...state, deleteMantraTagData: payload };
    case types.DELETE_MANTRTAG_SUCCESS:
      return { ...state, responseData: payload, deleteMantraTagData: payload };
    case types.DELETE_MANTRTAG_FAILED:
      return { ...state, responseData: payload, deleteMantraTagData: payload };

    default:
      return state;
  }
}
