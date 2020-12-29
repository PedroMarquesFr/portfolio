import { Types } from "./types";
import {initialState} from "../initialState";

interface Action {
  type: string;
  tag: string;
}
export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case Types.CHANGE_TAG:
      return { tag: action.tag };

    default:
      return state;
  }
}
