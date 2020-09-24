<template>
    <div id = "result">
        <div>
            <md-card >
                <md-ripple style = "margin : 10px">
                    <md-card-content>
                        <md-button class="md-dense md-raised md-primary" style="margin:2%;" @click="getResult()"> FIND </md-button>
                    </md-card-content>
                </md-ripple>
            </md-card>
        </div>
        <div v-if="this.info !== null">
            <div v-for="t in this.info" :key="t.id" >
                <md-card >
                    <md-card-header>
                        <div  v-html="t.title" class="md-title"></div>
                    </md-card-header>
                    <md-ripple style = "margin : 1%">
                        <md-card-content>
                            <div v-html="t.body_text">
                            </div>
                        </md-card-content>
                    </md-ripple>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Result",
        data: () => {
            return {
                globalConfig: Object,
                info: null
            }
        },
        methods : {
            getResult() {
                let config = JSON.parse(localStorage.getItem('config'))
                console.log(config)
                this.axios
                    .post('http://localhost:9000/api/', config)
                    .then(response => {
                        console.log(response.data)
                        this.info = response.data.map((x) => x)
                    })
                    .catch((error) => {
                       console.log(error)
                    })
                console.log(JSON.parse(this.info))
            }
        },
        mounted() {
            this.getResult()

        }

    }

</script>

<style scoped>

</style>