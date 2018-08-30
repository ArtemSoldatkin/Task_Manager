<template>
    <b-card 
        v-bind:footer = "date | styledDate"               
        v-bind:header = "title"
        v-bind:title = "priority | styledPriority"
        header-class = "card-header-new"  
        body-class = "card-body-new"      
        
    >        
        <b-button size = "sm" variant = "link" @click = "showHideDescription">
            <label v-if = "descriptionVisible">Скрыть описание задачи</label>
            <label v-else>Показать описание задачи</label>
        </b-button>    
        <p class = "card-text" v-if = "descriptionVisible">{{description}}</p>      
        <button class = "btn btn-success card-button-new-done" @click = "doneTask">Выполнено</button>  
        <button class = "btn btn-danger card-button-new-remove" @click = "removeTask">Удалить</button>    
    </b-card>  
</template>


<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        priority: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    data () {
        return {
            descriptionVisible: true
        }
    },
    methods: {
        removeTask() {
           this.$store.commit('removeTask', this.id)     
        },
        doneTask() {
            this.$store.commit('doneTask', this.id)   
        },
        showHideDescription () {
            this.descriptionVisible = !this.descriptionVisible
        }
    },
    filters: {
        styledDate (date) {
            return moment(date).format()
        },
        styledPriority (priority) {
            return `Приоритет задачи: ${priority}`
        } 
    }
}
</script>

<style>
    .card-header-new {
        color: #000000;
        font-size: 14pt;
    }
    .card-button-new-remove {
        float: right;
    }
    .card-button-new-done {
        float: left;
    }
</style>
    