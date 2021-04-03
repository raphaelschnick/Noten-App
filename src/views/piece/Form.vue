<template>
  <div class="piece-add">
    <h2>Stück Hinzufügen:</h2>
    <piece-form :id="$route.params.id" />
  </div>
</template>

<script> 
import PieceForm from '@/components/piece/Form'
export default {
  components: { PieceForm }
}
</script>