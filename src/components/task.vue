<template lang="html">
    <div class="card" :id="id">
      <div class="card-body">
        <h4 class="card-title">{{task.task}}</h4>
        <button type="button" class="btn btn-success" @click="removeTask">Completed</button>

      </div>
    </div>
</template>

<script>
export default {
    props:['task'],
    data(){
        return{
            id:this.task._id,
            status:this.task.status
        }
    },
    methods:{
        addEffect(){
            console.log('.........................',this.status);
            let element = $(`#${this.task._id}`)
            if(this.status == 'optional'){
                element.addClass('border-secondary')       
            }
            else{
                element.addClass('border-primary')
            }
             
            
            // element.addClass('')
            
            
        },
        removeTask(){
            console.log(this.task);
            axios.delete(`http://35.198.200.36/todos/${this.id}`)
            .then(response=>{
                $(`#${this.task._id}`).remove()
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    mounted(){
        this.addEffect()
    }
}
</script>

<style lang="css">
</style>
