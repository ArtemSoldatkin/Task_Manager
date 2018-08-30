<template>
    <div class = "container-fluid header">
        <b-form-group>
            <b-form-radio-group 
                            buttons
                            button-variant = "outline-primary"
                            size = "lg"
                            v-model = "selected"
                            :options = "options"
            />  
        </b-form-group>
        <ListActions v-if = "selected === 'taskList'" />  
        <DoneTaskList v-if = "selected === 'doneTaskList'" />      
    </div>
</template>

<script>
import ListActions from './ListActions'
import DoneTaskList from './DoneTaskList'
export default {
  data () {
    return {
      selected: 'taskList',
      options: [
        { text: 'Список задач', value: 'taskList' },
        { text: 'Выполненные задачи', value: 'doneTaskList' }
      ]
    }
  },
  components: {
        ListActions,
        DoneTaskList
    }
}
</script>

<style>
    .header {           
        float: left;
        background-color: #12121C;
        color: #CFCFE7;
        height: 80px;
        padding: 0;
    }
</style>