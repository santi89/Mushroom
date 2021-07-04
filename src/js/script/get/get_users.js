import { http } from "../../http";
import store from "@/store/index";

function fecth() {
  http
    .get("/api/users")
    .then((Response) => {
      const data = Response.data;
      store.commit("Tables/SET_TABLE_USRES", data);
      //console.log(data);
    })
    .catch(() => {
      //console.log("ERROR:", err);
    });
}

export default {
  fecth,
};
