<template>
  <b-row>
    <b-col
      v-for="instrument in instrumentList"
      :key="instrument.id"
      cols="12"
      class="col-lg-4"
    >
      <instrument-list-item :instrument="instrument" />
    </b-col>
  </b-row>
</template>

<script>
import instrumentService from '@/services/instrument.service'
import InstrumentListItem from './ListItem.vue'
export default {
  name: 'InstrumentList',
  components: { InstrumentListItem },
  data () {
    return {
      instrumentList: null
    }
  },
  created () {
    instrumentService.getList()
      .then(data => {
        this.instrumentList = data
      })
  }
}
</script>