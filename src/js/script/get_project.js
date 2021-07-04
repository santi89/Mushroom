import { http } from "../../http";
import store from "../../store/index";

const pd = JSON.parse(localStorage.getItem("pd"));

function fecth() {
  //console.log({ project_id: store.state.project_id });
  http.get("/api/project/id", { params: { sub_id: pd.sub_id } })
    .then((Response) => {
      const data = Response.data;
      store.commit("Project/SET_P_DATA", data);
      //console.log(data);
    })
    .catch(() => {
      //console.log("ERROR:", err);
    });
}

export default {
  fecth,
};
