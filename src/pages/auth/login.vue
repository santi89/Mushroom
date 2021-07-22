<template>
  <f7-page name="signin" theme-teal>
    <f7-page no-hairlines-md>
      <!-- <div class="langchange">
        <f7-row>
          <f7-col></f7-col>
          <f7-col></f7-col>
          <f7-col></f7-col>
          <f7-col></f7-col>
          <f7-col></f7-col>
          <f7-col></f7-col>
          <f7-col><select name="lang" id="">
          <option value="EN" >EN</option>
          <option value="LA">LA</option>
        </select></f7-col>
        </f7-row>
      </div> -->

      <div class="wrapper">
        <img
          class="image--cover"
          src="https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png"
          alt=""
        />
      </div>

      <f7-login-screen-title>Login</f7-login-screen-title>

      <f7-block no-hairlines>
        <f7-list Strong>
          <f7-list-input
            floating-label
            :value="user.username"
            @input="user.username = $event.target.value"
            label="Username"
            type="text"
            outline
            clear-button
          >
            <!-- :value="user.username"
            @input="user.username = $event.target.value" -->
          </f7-list-input>
          <f7-list-input
            floating-label
            outline
            :value="user.password"
            @input="user.password = $event.target.value"
            label="Password"
            type="password"
            clear-button
          >
            <!-- :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="() => (value = !value)" -->
          </f7-list-input>
          <div class="text_pass">
            <f7-link>Forget Password?</f7-link>
          </div>
        </f7-list>
      </f7-block>
      <f7-block no-hairlines>
        <f7-block strong class="text-align-center">
          <f7-row>
            <f7-col>
              <f7-button outline class="btn-login bg-color-teal text-color-white" round @click="login()"
                >Login</f7-button
              >
              <!-- <f7-button outline @click="login()" class="btn-login" round>Login</f7-button> -->
            </f7-col>
            <f7-col>
              <f7-button outline href="/signup/" class="btn-signup" round
                >signup</f7-button
              >
            </f7-col>
          </f7-row>
        </f7-block>

        <!-- <br />
        <div style="text-align: center">
         <f7-link v-if="show_resend_email" @click="resendEmail" :color="color(time_left)">Resend Confirmation Email<span v-if="time_left>0">&nbsp; {{time_left}}</span></f7-link><br>
          <p>@ <f7-link href="https://mounoydev.com/">MounoyDev</f7-link>          <f7-link>FNS</f7-link></p>
          <br />
        </div> -->
      </f7-block>
    </f7-page>
  </f7-page>
</template>

<script>
import { http } from "../../js/http";
import LocalStorageService from "../../js/script/ServiceLocalStorage";
//import { f7ready } from "framework7-vue";
// import { f7 } from "framework7-vue";
const localStorageService = LocalStorageService.getService();
export default {
     props: {
      f7router: Object,
    },
  data() {
    return {
      value: "",
      user: {
        username: "santi",
        password: "s96616118",
      },
    };
  },
  methods: {
    login() {
      var _this=this;
      console.log(this);
 
    //  _this.$f7router.navigate('/ProjectView/');
      http
        .post("/api/login", {
          username: this.user.username,
          password: this.user.password,
        })
        .then(async (Response) => {
          const has = await Response.data;
          if (Response.status === 200) {
            const msg = await has.STT;
            this.msg = msg;
            this.sheet = true;
            // console.log("have sothing");
           
          }
          if (Response.status === 201) {
            // console.log("loggedin");
            
            var _seft=_this;
            const token = await Response.data.token;
            localStorageService.setToken(Response.data);
            await localStorage.setItem(
              "info-user",
              JSON.stringify(Response.data.results[0])
            );
            await localStorage.setItem(
              "ispa", 
              Response.data.results[0].isSuperUser  
            ); 
             this.f7router.navigate('/ProjectView/');

            //_seft.$f7router.navigate('/ProjectView/');
            // this.$f7router.navigate("/ProjectView/");
            await store.commit("AUTH_SUCCESS", token);
            await store.commit("ISPA", Response.data.results[0].isSuperUser);
            console.log("loggeding");
          }
        })
        .catch((err) => {
          localStorageService.clearToken();
          return err;
        });
    },
    fecth() {
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
    },
  },
};
</script>

<style scoped>
.wrapper {
  text-align: center;
}

.image--cover {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px;
  object-fit: cover;
  object-position: center;
}
.btn-login {
  width: 100%;
}
.text_pass {
  font-weight: 5px;
  text-align: right;
}
.langchange {
  text-align: center;
  align-items: right;
  position: relative;
  align-self: right;
  margin: 5px 5px;
  margin-top: 10px;
  object-position: right;
}
</style>
