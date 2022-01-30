<template>
    <div id="cal">
        <vue-cal class=" vuecal--blue-theme"
            locale="pl"
            
            active-view="month"
           
            :disable-views="['week','year','years']"
            :events="calendarEvents"
            >
        </vue-cal>
    </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/i18n/pl.js'
import 'vue-cal/dist/vuecal.css'
import { mapGetters } from 'vuex'

export default {
    components: { VueCal },
    data(){
        return {
            eventyTest: [
                {
                start: '2022-01-20 14:00',
                end: '2022-01-20 17:30',
                title: 'Boring event',
                content: 'I am not draggable, not resizable and not deletable.',
                class: 'blue-event',
                deletable: false,
                resizable: false,
                draggable: false
                },
                  {
                start: '2022-01-20 18:00',
                end: '2022-01-20 19:30',
                title: 'Boring event',
                content: 'I am not draggable, not resizable and not deletable.',
                class: 'blue-event',
                deletable: false,
                resizable: false,
                draggable: false
                }
            ]
            
        }
    },
    computed: {
        ...mapGetters('calEvents',{
            eventy: 'eventsGetter',
            calendarEvents: 'calendarEventsGet'

        })
    }
}
</script>

<style lang="scss">
//

</style>
