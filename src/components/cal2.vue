<template>
    <div id="cal">
        <vue-cal class=" vuecal--blue-theme"
            locale="pl"
            :time="false"
            active-view="month"
            :disable-views="['week','year','years']"
            >
        </vue-cal>
    </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/i18n/pl.js'
import 'vue-cal/dist/vuecal.css'

export default {
    components: { VueCal },
    // data(){
    //     return {

    //     }
    // }
}
</script>

<style lang="scss">
//

</style>
