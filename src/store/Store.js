import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        taskList: [],
        doneTaskList: []
    },
    mutations: {
        addTask (state, data) {
            state.taskList.push(data)
        },
        removeTask (state, id) {
            state.taskList.splice(state.taskList.findIndex(task => task.id == id), 1) 
        },
        filterTask (state, param) {
            if(param === 'date') state.taskList.sort((a,b) => a[param] > b[param])
            if(param === 'priority') state.taskList.sort((a,b) => a[param] < b[param])
        },        
        doneTask(state, id){
            let doneTask = state.taskList.find(task => task.id == id)
            doneTask.date = new Date ()
            state.doneTaskList.push(doneTask)
            state.taskList.splice(state.taskList.findIndex(task => task.id == id), 1)            
        }        
    }  
})