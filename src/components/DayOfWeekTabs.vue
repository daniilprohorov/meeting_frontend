<template>
    <div>
        <md-tabs router-link>
            <md-tab id="tab-city-days" md-label="City and days" to="/cityDays" exact>
                <CityDays></CityDays>
            </md-tab>
            <md-tab id="tab-monday" md-label="Monday" to="/monday" exact>
                <InputTimePeriod dayOfWeek="mon"></InputTimePeriod>
            </md-tab>
            <md-tab id="tab-tuesday" md-label="Tuesday" to="/tuesday">
                <InputTimePeriod dayOfWeek="tue"></InputTimePeriod>
            </md-tab>
            <md-tab id="tab-wednesday" md-label="Wednesday" to="/wednesday">
                <InputTimePeriod dayOfWeek="wed"></InputTimePeriod>
            </md-tab>
            <md-tab id="tab-thursday" md-label="Thursday" to="/thursday">
                <InputTimePeriod dayOfWeek="thu"></InputTimePeriod>
            </md-tab>
            <md-tab id="tab-friday" md-label="Friday" to="/friday">
                <InputTimePeriod dayOfWeek="fri"></InputTimePeriod>
            </md-tab>
            <md-tab id="tab-saturday" md-label="Saturday" to="/saturday">
                <InputTimePeriod dayOfWeek="sat"></InputTimePeriod>
            </md-tab>
            <md-tab id="tab-sunday" md-label="Sunday" to="/sunday">
                <InputTimePeriod dayOfWeek="sun"></InputTimePeriod>
            </md-tab>

        </md-tabs>
        <div></div>
    </div>
</template>

<script>
    import InputTimePeriod from "@/components/InputTimePeriod";
    import CityDays from "@/components/CityDays";
    export default {
        name: "DayOfWeekTabs",
        components : {
            CityDays,
           InputTimePeriod
        },

    }
</script>

<style scoped>

</style>