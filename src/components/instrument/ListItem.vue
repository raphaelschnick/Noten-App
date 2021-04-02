<template>
  <b-card>
    <b-card-title> {{ instrument.name }} </b-card-title>
    <b-button
      :to="{ name: 'InstrumentDetail', params: {id: instrument.id}}"
      variant="primary"
    >
      Details
    </b-button>
  </b-card>
</template>

<script>
export default {
  name: 'InstrumentListItem',
  props: {
    instrument: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.btn:not(:disabled):not(.disabled) {
  width: 100%;
}
.card {
  transition-property: all;
  transition-duration: 0.35s;
}
.card:hover {
  box-shadow: 0 0 15px #BFFCFA;
  transition: ease-in-out 0.35s;
}
</style>
