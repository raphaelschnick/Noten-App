<template>
  <b-container>
    <b-row>
      <b-col
        v-for="instrument in instrumentList"
        :key="instrument.id"
        class="col-lg-6 col-sm-12"
      >
        <b-card-group class="mb-3">
          <instrument-list-item :instrument="instrument" />
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
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