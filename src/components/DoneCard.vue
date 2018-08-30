<template> 
    <b-card 
        v-bind:footer = "date | styledDate"               
        v-bind:header = "title"
        header-class = "card-header-done"  
        body-class = "card-body-done"      
    >
        <b-button 
            size = "sm" 
            variant = "link" 
            @click = "showHideDescription"
        >
            <label v-if = "descriptionVisible">Скрыть описание задачи</label>
            <label v-else>Показать описание задачи</label>
        </b-button>    
        <p class = "card-text" v-if = "descriptionVisible">{{description}}</p>            
    </b-card>    
</template>

<script>
export default {
    props: {      
        title: {
            type: String,
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
            descriptionVisible: false
        }
    },
    methods: {
        showHideDescription () {
            this.descriptionVisible = !this.descriptionVisible
        }
    },
    filters: {
        styledDate (date) {
            return moment(date).format()
        }
    }
}
</script>

<style>
    .card-body-done {
        padding-top: 0;
    }
    .card-header-done {
        background-color: #82F67E;
        color: #000000;
        font-size: 14pt;
    }
</style>