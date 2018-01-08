<template lang="html">
  <div class="">
      <h3>{{date}}</h3>
      <div class="form-group">  
          <input class="form-control form-control-lg" type="text" placeholder="Write new task here" id="inputLarge" v-model="newTodo" @keyup.enter="addTodo">
          
      <label class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" checked="" v-model="status">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">Priority</span>
      </label>
    </div>
    
    <!-- tasks -->
    <div class="list-group">
      <task v-for="t in todo" :task="t"/>
    </div>
    
    
  </div>
</template>

<script>
import task from '@/components/task'
export default {
    name: 'profile',
    data(){
        return{
            email:'',
            todo: [],
            date: new Date().toDateString(),
            newTodo:'',
            id:'',
            status:''
        }
    },
    methods:{
        findUserTodo(){
            let data = localStorage.getItem('jwtToken')
            if(data){
                axios.post('http://35.198.200.36/users/profile',{
                    token:data
                })
                .then(response=>{
                    console.log(response);
                    this.todo = response.data.response.todoList
                    this.email = response.data.response.email
                    this.id = response.data.response._id
                    
                    
                })
                .catch(err=>{
                    console.log(err);
                })
            }
            else{
                this.$router.push('/')
            }
        },
        addTodo(){
            
            let data = localStorage.getItem('jwtToken')
            let currentStatus = ''
            
            
            // console.log("==================",this.status);
            if(data){
                console.log(this.status);
                if(this.status){
                    currentStatus = 'priority'
                }
                else{
                    currentStatus = 'optional'
                }
                            // console.log("==================",this.status);
                axios.post('http://35.198.200.36/todos',{
                    token:data,
                    task:this.newTodo,
                    importance:currentStatus
                    
                })
                .then(response=>{
                    // console.log('ini response add todo',response.data.result.todoList[response.data.result.todoList.length -1]);
                    let todoObj = {
                        _id : response.data.result.todoList[response.data.result.todoList.length -1],
                        task : this.newTodo,
                        importance:currentStatus
                    }
                    
                    this.todo.push(todoObj)
                    console.log(response);
                    
                    
                })
                .catch(err=>{
                    console.log(err);
                })
            }
            else{
                this.$router.push('/')
            }
        }
    },
    mounted(){
        this.findUserTodo()
    },
    components:{
        task : task
    }
}
</script>

<style lang="css">
</style>
