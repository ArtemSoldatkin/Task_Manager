<template>
    <div class = "container form"> 
        <div class = "form-group">
            <label for = "taskTitle">Название задачи</label>
            <b-form-input 
                id = "taskTitle" 
                v-bind:state = "inputValidate" 
                type = "text" 
                v-model.trim = "title"
                placeholder = "Название задачи"
            />            
        </div>
        <div class = "form-group">
            <label for = "taskPriority">Приоритет задачи</label>
            <b-form-input 
                id = "taskPriority"                
                type = "number" 
                v-model = "priority"
                min = "0"
            />  
        </div>
        <div class = "form-group">
            <label for = "taskDescription">Описание задачи</label>
            <b-form-textarea 
                id = "taskDescription"
                v-bind:state = "textAreaValidate"
                v-model = "description"
                placeholder = "Введите описание задачи"
                rows = "3"
            />
        </div>
        <button class = "btn btn-primary mb-2 form-button" @click = "sendData">Отправить</button>
    </div>
</template>

<script>
export default {
    data () {
        return{
            title: '',
            priority: 0,
            description: '',
            textAreaValidate: null,
            inputValidate: null
        }
    },
    methods: {
        formValidate () {
            let check = true
            if(this.description.trim().length < 1){
                this.textAreaValidate = false
                check = false
            }else{
                this.textAreaValidate = null
            }
            if(this.title.trim().length < 1){
                this.inputValidate = false
                check = false
            }else{
                this.inputValidate = null
            }
            return check
        },
        clearForm () {
            this.title = ''
            this.priority = 0
            this.description = ''
            this.textAreaValidate = null
            this.inputValidate = null
        },        
        sendData () {
            if(this.formValidate()){
                this.$store.commit('addTask', { 
                    id: Date.now(), 
                    date: new Date (), 
                    title: this.title, 
                    priority: Number(this.priority), 
                    description: this.description 
                })
                this.clearForm()                
            }
        }
    }  
}
</script>

<style>
    .form {
        padding: 10px;
        width: 300px;
        float: left;
        background-color: #12121C;
        color: #CFCFE7;
        min-width: 300px;
    }
    .form-button{
        float: right;
    }
    .form-group {
        display: inline-flex;
    }
</style>