<template>  
    <div>  
        <div v-if = "!checked">             
            <NewCard v-for = "task in taskList" 
                :key = "task.id"
                :id = "task.id"
                :title = "task.title" 
                :priority = "task.priority"
                :description = "task.description" 
                :date = "task.date"
            />   
        </div>
        <div v-else>
            <NewCard v-if = "taskList.length > 0"
                v-bind:key = "taskList[0].id"
                v-bind:id = "taskList[0].id"
                v-bind:title = "taskList[0].title" 
                v-bind:priority = "taskList[0].priority"
                v-bind:description = "taskList[0].description" 
                v-bind:date = "taskList[0].date" 
            />
        </div>
    </div>
</template>

<script>
import NewCard from './NewCard'
export default {
    components: {
        NewCard
    },
    props: {
        checked: {
            type: Boolean,
            required: true
        }
    },
    data () {
      return {    
        taskList: this.$store.state.taskList
      }
    }
}
</script>
