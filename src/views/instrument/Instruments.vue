<template>
  <div class="instruments">
    <b-row>
      <b-col cols="9">
        <h2>Instrumente</h2>
      </b-col>
      <b-col>
        <b-button :to="{ name: 'InstrumentAdd' }">
          Hinzufügen
        </b-button>
      </b-col>
    </b-row>
    <instrument-list />
  </div>
</template>

<script>
import InstrumentList from '@/components/instrument/List'
export default {
  components: { InstrumentList },
  created () { 

  }
}
</script>

<style scoped>
.add {
    color: black
}
</style>