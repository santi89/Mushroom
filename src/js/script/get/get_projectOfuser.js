import { http } from "../../http";
import store from "@/store/index";
//import index from "@/store/index";

function fecth() {
  http
    .get("/api/project/user/id", {
      params: {
        user_id: JSON.parse(localStorage.getItem("info-user")).user_id,
      },
    })
    .then((Response) => {
      const data = Response.data;
      store.commit("Project/SET_P_USER", data);
      console.log(data); 
    })
    .catch(() => {
      //console.log("ERROR:", err);
    });
}

export default {
  fecth,
};
