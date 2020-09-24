<template>
    <div>
        <md-card>
            <md-ripple style="margin: 5%; padding :5%; align-content: center">
                <md-content>
                    <div class="md-layout-item" style="width : 50%; min-width: 100px; float: left; padding: 3%">
                        <md-field>
                            <label for="movie">City</label>
                            <md-select v-model="city" name="city" id="city-asdfasdf" @input="setCity">
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

                    <div class="md-layout-item" style="width : 50%; min-width: 100px; float: left; padding: 3%">
                        <md-field>
                            <label for="movie">Category</label>
                            <md-select v-model="categories" name="category" id="category" @input="setCategory">
                                <md-option value="business-events">Business events</md-option>
                                <md-option value="cinema">Movies</md-option>
                                <md-option value="concert">Concerts</md-option>
                                <md-option value="education">Education</md-option>
                                <md-option value="entertainment">Entertainment</md-option>
                                <md-option value="exhibition">Exhibitions</md-option>
                                <md-option value="fashion">Fashion</md-option>
                                <md-option value="festival">Festivals</md-option>
                                <md-option value="holiday">Holidays</md-option>
                                <md-option value="kids">Kids</md-option>
                                <md-option value="other">Other</md-option>
                                <md-option value="party">Parties</md-option>
                                <md-option value="photo">Photoevents</md-option>
                                <md-option value="quest">Quests</md-option>
                                <md-option value="recreation">Recreation</md-option>
                                <md-option value="shopping">Shopping</md-option>
                                <md-option value="social-activity">Charity</md-option>
                                <md-option value="stock">Promotions</md-option>
                                <md-option value="theater">Theater (plays, opera, ballet etc)</md-option>
                                <md-option value="tour">Tours</md-option>
                                <md-option value="yarmarki-razvlecheniya-yarmarki">Fair</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <div class="md-layout-item" style="padding: 2%;width : 25%; min-width: 100px; float: left; padding: 3%">
                        Days for planning
                    </div>
                    <div class="md-layout-item" style="padding: 2%;width : 25%; min-width: 100px; float: left; padding: 3%; align-content: flex-start">
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
                days : 1,
                categories : ''
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
            },
            setCategory() {
                let config = JSON.parse(localStorage.getItem('config'))
                config['categories'] = [this.categories]
                localStorage.setItem('config', JSON.stringify(config))
            }
        },

    }
</script>

<style scoped>

</style>