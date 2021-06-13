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
    // uploadFile({ commit, state }, filepath) {
    //   return new Promise((resolve, reject) => {
    //     var file = state.files[0];
    //     var storageRef = firebase.storage().ref(filepath + file.name);
    //     var uploadTask = storageRef.put(file);

    //     uploadTask.on(
    //       "state_changed",
    //       function (snapshot) {
    //         // Observe state change events such as progress, pause, and resume
    //         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //         var progress =
    //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         console.log("Upload is " + progress + "% done");
    //       },
    //       function (error) {
    //         // Handle unsuccessful uploads
    //         reject(error);
    //       },
    //       function () {
    //         // Handle successful uploads on complete
    //         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //         uploadTask.snapshot.ref
    //           .getDownloadURL()
    //           .then(function (downloadURL) {
    //             resolve(downloadURL);
    //           });
    //       }
    //     );
    //   });
    // },
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
