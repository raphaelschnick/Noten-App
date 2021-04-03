<template>
  <div class="pieces">
    <b-row>
      <b-col>
        <h2>Stücke</h2>
      </b-col>
      <b-col>
        <b-button
          class="float-right"
          :to="{ name: 'PieceAdd' }"
        >
          Hinzufügen
        </b-button>
      </b-col>
    </b-row>
    <piece-list />
  </div>
</template>

<script>
import PieceList from '@/components/piece/List'
export default {
  components: { PieceList },
  created () { 

  }
}
</script>

<style scoped>
.add {
    color: black
}
</style>