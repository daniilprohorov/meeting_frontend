<template>
    <div style = "margin : 0%">
        <md-card >
            <md-ripple style = "padding : 5%">
                <md-card-header>
                    <div class="md-title">Input time period</div>
                </md-card-header>

                <md-card-content>
                    <div>
                        <div class = one-line-four>
                            <md-field :class="h1Class" >
                                <label>Hours start</label>
                                <md-input v-model="h1" v-on:input="checkHoursH1"></md-input>
                                <span class="md-error"> Please input hours from 0 to 23</span>
                            </md-field>
                        </div>
                        <div class = one-line-four>
                            <md-field :class="m1Class" >
                                <label>Minutes start</label>
                                <md-input v-model="m1" v-on:input="checkMinutesM1"></md-input>
                                <span class="md-error"> Please input minutes from 0 to 59</span>
                            </md-field>
                        </div>
                        <div class = one-line-four>
                            <md-field :class="h2Class" >
                                <label>Hours end</label>
                                <md-input v-model="h2" v-on:input="checkHoursH2"></md-input>
                                <span class="md-error"> Please input hours from 0 to 23</span>
                            </md-field>
                        </div>
                        <div class = one-line-four>
                            <md-field :class="m2Class" >
                                <label>Minutes end</label>
                                <md-input v-model="m2" v-on:input="checkMinutesM2"></md-input>
                                <span class="md-error"> Please input minutes from 0 to 59</span>
                            </md-field>
                        </div>
                    </div>
                    <div style = "width : 100%; float : left; padding : 20px">
                        <md-button class="md-icon-button md-raised" @click="sendTimePeriods">
                            <md-icon>add</md-icon>
                        </md-button>
                    </div>
                </md-card-content>

            </md-ripple>
        </md-card>

        <md-button class="md-dense md-raised md-primary" style="margin:1%" @click="openCurrent"> {{ this.buttonName }} </md-button>

        <div v-if="openCurrentFlg">
            <div v-for="(t, index) in this.day" :key="t.id" >
                <md-card >
                    <md-ripple style = "margin : 1%">
                        <md-card-content>
                            <div class = one-line-fourty>
                                <p> {{t[0]}}</p>
                            </div>

                            <div class = one-line-twenty @click="deleteTimePeriod(index)">
                                <md-button class="md-icon-button md-raised">
                                    <md-icon>-</md-icon>
                                </md-button>
                            </div>

                            <div class = one-line-fourty>
                                <p> {{t[1]}}</p>
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
        name: "InputTimePeriod",
        props : {
            dayOfWeek : String
        },
        data: () => ({
            day: [],
            config : [],
            h1 : null,
            m1 : null,
            h2 : null,
            m2 : null,
            h1_res : null,
            m1_res : null,
            h2_res : null,
            m2_res : null,
            h1_check : false,
            m1_check : false,
            h2_check : false,
            m2_check : false,
            openCurrentFlg : false,
            buttonName : "Open current",
            timePeriods : [String]
        }),
        methods : {
            openCurrent() {
                this.infoUpdate()
                this.openCurrentFlg = !this.openCurrentFlg
                if (this.openCurrentFlg === true ) {
                    this.buttonName = "Close"
                }
                else {
                    this.buttonName = "Open current"
                }
            },
            infoUpdate() {
                let config = JSON.parse(localStorage.getItem('config'))
                this.day = config[this.dayOfWeek]
                this.config = config
                this.$forceUpdate();
            },
            sendTimePeriods() {
                if (this.h1_check && this.h2_check && this.m1_check && this.m2_check
                && this.h1_res !== null && this.h2_res !== null && this.m1_res !== null && this.m2_res != null) {
                    let config = JSON.parse(localStorage.getItem('config'))
                    let h1str = this.h1_res < 10 ? "0" + this.h1_res.toString() : this.h1_res.toString()
                    let m1str = this.m1_res < 10 ? "0" + this.m1_res.toString() : this.m1_res.toString()
                    let h2str = this.h2_res < 10 ? "0" + this.h2_res.toString() : this.h2_res.toString()
                    let m2str = this.m2_res < 10 ? "0" + this.m2_res.toString() : this.m2_res.toString()
                    let timePeriod = [(h1str + ":" + m1str), (h2str + ":" + m2str)]
                    config[this.dayOfWeek].push(timePeriod)
                    localStorage.setItem('config', JSON.stringify(config))
                    this.config = config
                    this.day = config[this.dayOfWeek]
                }
            },
            checkHours(inp) {
                let inpN = parseInt(inp)
                if (0 <= inpN && inpN < 24) {
                    return inpN
                } else {
                    return null
                }
            },
            checkMinutes(inp) {
                let inpN = parseInt(inp)
                if (0 <= inpN && inpN < 60) {
                    return inpN
                } else {
                    return null
                }
            },
            checkHoursH1() {
                this.h1_res = this.checkHours(this.h1)
            },
            checkHoursH2() {
                this.h2_res = this.checkHours(this.h2)
            },
            checkMinutesM1() {
                this.m1_res = this.checkMinutes(this.m1)
            },
            checkMinutesM2() {
                this.m2_res = this.checkMinutes(this.m2)
            },
            hm1() {
                let config = this.config
                let day = config[this.dayOfWeek]
                return day[this.n][0]
            },
            hm2() {
                let config = this.config
                let day = config[this.dayOfWeek]
                return day[this.n][1]
            },
            deleteTimePeriod(){
                let config = JSON.parse(localStorage.getItem('config'))
                config[this.dayOfWeek].splice(this.n, 1)
                this.day.splice(this.n, 1)
                localStorage.setItem('config', JSON.stringify(config))
                this.config = config

            }
        },
        mounted() {
            this.$root.$on('updateTabs', () => { // here you need to use the arrow function
                this.openCurrentFlg = false
                this.buttonName = "Open current"
            })
        },
        computed: {
            h1Class () {
                if (this.h1 !== null && this.h1_res === null) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.h1_check = false
                    return {"md-invalid" : true}
                }
                else {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.h1_check = true
                    return {"md-invalid" : false}
                }
            },
            h2Class () {
                if (this.h2 !== null && this.h2_res === null) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.h2_check = false
                    return {"md-invalid" : true}
                }
                else {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.h2_check = true
                    return {"md-invalid" : false}
                }
            },
            m1Class () {
                if (this.m1 !== null && this.m1_res === null) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.m1_check = false
                    return {"md-invalid" : true}
                }
                else {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.m1_check = true
                    return {"md-invalid" : false}
                }
            },
            m2Class () {
                if (this.m2 !== null && this.m2_res === null) {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.m2_check = false
                    return {"md-invalid" : true}
                }
                else {
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.m2_check = true
                    return {"md-invalid" : false}
                }
            }
        }

    }
</script>

<style scoped>

    .one-line-four {
        padding : 10px;
        width : 25%;
        float : left;
        min-width : 160px
    }
    .one-line-fourty {
        padding : 5px;
        width : 40%;
        float : left;
        font-size: large;
        min-width : 200px
    }
    .one-line-twenty {
        padding : 5px;
        width : 20%;
        float : left;
        min-width : 100px
    }
</style>
