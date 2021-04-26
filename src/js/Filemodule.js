
const FileModule = {
   state: {
     image_url:
       "https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png",
     files: null,
     images: [],
   },
   getters: {
     image_url: (state) => state.image_url,
     files: (state) => state.files,
     images: (state) => state.images,
   },
   actions: {
     readFile({ commit }, action_name) {
       const files = event.target.files;
       commit("setFile", files);
       const fileReader = new FileReader();
       let file = files[0];
       if (file["size"] < 2000000) {
         fileReader.readAsDataURL(file);
         fileReader.addEventListener("load", () => {
           var imageUrl = fileReader.result;
           commit(action_name, imageUrl);
         });
         return;
       } else {
         commit("setAlertMessage", "The images size is greater than 2M");
         return;
       }
     },
   },
   mutations: {
     setImageURL(state, payload) {
       state.image_url = payload;
     },
     setFiles(state, payload) {
       state.files = payload;
     },
     setImages(state, payload) {
       state.images = payload;
     },
   },
 };
 
 export default FileModule;
 