import * as ACTIONS from "~/store/actionTypes";

export default async function ({ store }) {
  await store.dispatch(ACTIONS.GET_BOOKS);
};
