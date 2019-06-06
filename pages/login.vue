<template>
  <div>
    <v-container>
      <v-layout column>
        <v-flex xs12>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
          </v-card>
        </v-flex>
        <v-flex>
          <v-text-field v-model="form.user" label="ชื่อผู้ใช้"/>
        </v-flex>
        <v-flex>
          <v-text-field v-model="form.pass" label="ระหัสผ่าน"/>
        </v-flex>
        <v-flex>
          <v-btn color="primary" @click="doLogin">
            เข้าสู่ระบบ
            <v-icon medium right>thumb_up</v-icon>
          </v-btn>
          <v-btn color="blue white--text" fab>
            <v-icon size="35px">thumb_up</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
let blankform = {
  user: "",
  pass: ""
  // start_time: "",
  // end_time: "",
  // date_in: "",
  // date_out: "",
  // now_time: ""
};

export default {
  layout: "public",
  data() {
    return {
      form: JSON.parse(JSON.stringify(blankform))
    };
  },
  methods: {
    async doLogin() {
      // let form = {
      //   user: "",
      //   pass: ""
      // };
      let res = await this.$http.post(
        "http://localhost:9000/user/login2",
        this.form
      );
      if (!res.data.ok) {
        // login ไม่สำเร็จ
        console.log("login failed");
        return;
      }
      console.log("login ok");
      //1. จำ user /login
      //window.localStorage.setItem('user', JSON.stringify(res.data.user))// แบบนี้ เก็บถาวร
      window.sessionStorage.setItem("user", JSON.stringify(res.data.user)); // แบบนี้หาย เมื่อ restart หรือ ปิด  browser
      this.$router.push("/home");
    } // end login
    // login ok
    // ridirect to home
  }
};
</script>
