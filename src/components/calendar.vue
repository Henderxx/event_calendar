<template>
    <div id="calendar">
        <v-calendar
        :value="null"
        is-dark
        is-expanded
        show-weeknumbers
        />
    </div>
</template>

<script>
import VCalendar from 'v-calendar';

export default {
    name:'calendar',
    components: {VCalendar}
}
</script>

<style lang="scss">
//
</style>
