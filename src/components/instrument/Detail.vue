<template>
  <div>
    <h2>{{ instrument.name }}</h2>
  </div>
</template>

<script>
export default {
 name: 'InstrumentDetail',
  props: {
    instrument: {
      type: Object,
      required: true
    }
  }
}
</script>