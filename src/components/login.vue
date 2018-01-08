<template>
  <div class="hello">
    
    <h1>{{ msg }}</h1>
    <h4>{{ newUserMsg }}</h4>
    <blockquote class="blockquote text-center">
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
    <h6>Email</h6>
    <div class="form-group has-success">
      <input type="email" class="form-control is-valid" v-model="email">
    </div>
    <h6>Password</h6>
    <div class="form-group has-success">
      <input type="password" class="form-control is-valid" v-model="password" @keyup.enter="submit">
    </div>
    <button type="submit" class="btn btn-primary" @click="submit">Login</button>
    <button type="button" class="btn btn-link" @click="register">Register</button><br>
    <br>
    <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
</fb:login-button>  
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Todo.js App',
      email:'',
      password:'',
      newUserMsg:''
    }
  },
  components:{
      
  },
  methods:{
      submit(){
          console.log(this.email);
          console.log(this.password);
          axios.post('http://35.198.200.36/login',{
              email:this.email,
              password:this.password
          })
          .then(response=>{
            //   console.log(response.data.token);
              localStorage.setItem('jwtToken',response.data.token)
              this.$router.push('/profile')
          })
          .catch(err=>{
              alert(err)
          })
      },
      onLoad(){
          let tokenExist = localStorage.getItem('jwtToken')
          if(tokenExist){
              this.$router.push('/profile')
          }
      },
      register(){
          axios.post('http://35.198.200.36/users/register',{
              email:this.email,
              password:this.password
          })
          .then(response=>{
              this.newUserMsg = "New User Registered. Please Log In"
          })
          .catch(err=>{
              console.log(err);
          })
      }
      
  },
  mounted(){
      this.onLoad()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
