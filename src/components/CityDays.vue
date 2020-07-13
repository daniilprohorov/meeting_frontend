<template>
    <div>
        <md-card>
            <md-ripple style="margin: 5%; padding :5%; align-content: center">
                <md-content>
                    <div class="md-layout-item" style="width : 50%; min-width: 100px; float: left">
                        <md-field>
                            <label for="movie">City</label>
                            <md-select v-model="city" name="city" id="city" @input="setCity">
                                <md-option value="msk">Moscow</md-option>
                                <md-option value="spb">St. Petersburg</md-option>
                                <md-option value="ekb">Yekaterinburg</md-option>
                                <md-option value="krasnoyarsk">Krasnoyarsk</md-option>
                                <md-option value="krd">Krasnodar</md-option>
                                <md-option value="kzn">Kazan</md-option>
                                <md-option value="sochi">Sochi</md-option>
                                <md-option value="nsk">Novosibirsk</md-option>
                                <md-option value="nnv">Nizhny Novgorod</md-option>
                                <md-option value="online">Online</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <div class="md-layout-item" style="padding: 2%;width : 25%; min-width: 100px; float: left">
                        Days for planning
                    </div>
                    <div class="md-layout-item" style="padding: 2%;width : 25%; min-width: 100px; float: left; align-content: flex-start">
                        <input type="range" v-model.number="days" min="1" max="10" @input="setDays()"> {{ days }}
                    </div>
                </md-content>
            </md-ripple>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "CityDays",
        data : () => {
            return {
                city : 'msk',
                days : 1
            }
        },
        methods : {
            setCity() {
                let config = JSON.parse(localStorage.getItem('config'))
                config['city'] = this.city
                localStorage.setItem('config', JSON.stringify(config))
            },
            setDays() {
                let config = JSON.parse(localStorage.getItem('config'))
                config['days'] = this.days
                localStorage.setItem('config', JSON.stringify(config))
            }
        }
    }
</script>

<style scoped>

</style>