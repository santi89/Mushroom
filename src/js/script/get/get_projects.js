import { http } from "../../http";
import store from "@/store/index";
//import index from "@/store/index";
function fecth() {
  const user = JSON.parse(localStorage.getItem("info-user"));
  try {
    if (user.isSuperUser === 0) {
      http
        .get("/api/users/admin", { params: { user_id: user.user_id } })
        .then((Response) => {
          const data = Response.data;
          //console.log(data);
          store.commit("Tables/SET_TABLE_PROJECTS", data);
        })
        .catch(() => {});
    }
    if (user.isSuperUser === 1) {
      http
        .get("/api/project")
        .then((Response) => {
          const data = Response.data;
          store.commit("Tables/SET_TABLE_PROJECTS", data);
          //console.log(data);
        })
        .catch(() => {
          //console.log("ERROR:", err);
        });
    }
  } catch (error) {
    return;
  }
}

export default {
  fecth,
};
