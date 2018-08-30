<template>
    <div class="container-fluid list-actions">
        <div>
            <label for = "checkbox">Выводить по одной задаче</label> 
            <b-form-checkbox 
                id = "checkbox"
                v-model = "checked"               
            />         
        </div>
        <label for = "filterButtonGroup">Фильтры</label>
        <div id = "filterButtonGroup" class = "btn-group" role = "group">            
            <button class = "btn btn-secondary" @click = "priorityFilters">По приоритету</button>
            <button class = "btn btn-secondary" @click = "dateFilters">По дате добавления</button>         
        </div>
        <NewTaskList v-bind:checked = "checked"/>
    </div>
</template>

<script>
import NewTaskList from './NewTaskList'

export default {
    components: {
        NewTaskList
    },
     data() {
      return  {        
        checked: false,
        taskList: this.$store.state.taskList
      }
    },    
    methods: {
        priorityFilters(){
          this.$store.commit('filterTask', 'priority')    
        },
        dateFilters(){
            this.$store.commit('filterTask', 'date')   
        }
        
    }
}
</script>

<style>
    .list-actions {           
        float: left;
        background-color: #12121C;
        color: #CFCFE7;
        height: 80px;
        padding: 0px;
    }
</style>