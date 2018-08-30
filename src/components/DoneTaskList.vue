<template>
    <div>
        <DoneCard v-for = "task in doneTaskList"
            :key = "task.id"        
            :title = "task.title"        
            :description = "task.description" 
            :date = "task.date"
        />
    </div>
</template>

<script>
import DoneCard from './DoneCard'
export default {
    components: {
        DoneCard
    },
    data () {
        return {
            doneTaskList: this.$store.state.doneTaskList
        }
    }
}
</script>
