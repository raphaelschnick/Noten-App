<template>
  <div class="instrument-add">
    <h2>Instrument Hinzufügen:</h2>
    <instrument-form :id="$route.params.id" />
  </div>
</template>

<script> 
import InstrumentForm from '@/components/instrument/Form'
export default {
  components: { InstrumentForm }
}
</script>