<template>
    <div id="cal">
        <vue-cal class="vuecal--rounded-theme vuecal--green-theme"
            xsmall
            hide-view-selector
            :time="false"
            active-view="month"
            :disable-views="['week']"
            >
        </vue-cal>
    </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {

    components: {VueCal},
    data(){

    }
}
</script>

<style lang="scss">
//

</style>
