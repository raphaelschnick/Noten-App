<template>
  <div
    v-if="instrument"
    class="instrument-detail"
  >
    <b-row>
      <b-col>
        <h2>Instrumente</h2>
      </b-col>
      <b-col>
        <b-button
          class="float-right"
          :to="{ name: 'InstrumentEdit', params: {id: instrument.id} }"
        >
          Bearbeiten
        </b-button>
      </b-col>
    </b-row>
    <instrument-detail :instrument="instrument" />
  </div>
</template>

<script>
import instrumentService from '@/services/instrument.service'
import InstrumentDetail from '@/components/instrument/Detail'
export default {
  components: { InstrumentDetail },
  data () {
    return {
      instrument: null
    }
  },
  created () {
    instrumentService.get(this.$route.params.id).then(data => {
      this.instrument = data
    })
  }
}
</script>