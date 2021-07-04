import { http } from "../../http";
import store from "@/store/index";
//import index from "@/store/index";

function fecth() {
  http
    .get("/api/departments")
    .then((Response) => {
      const data = Response.data;
      store.commit("Tables/SET_TABLE_DEP", data);
      //console.log(data);
    })
    .catch(() => {
      //console.log("ERROR:", err);
    });
}

export default {
  fecth,
};
