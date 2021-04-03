<template>
  <div
    v-if="piece"
    class="piece-detail"
  >
    <b-row>
      <b-col>
        <h2>Stücke</h2>
      </b-col>
      <b-col>
        <b-button
          class="float-right"
          :to="{ name: 'PieceEdit', params: {id: piece.id} }"
        >
          Bearbeiten
        </b-button>
      </b-col>
    </b-row>
    <piece-detail :piece="piece" />
  </div>
</template>

<script>
import pieceService from '@/services/piece.service'
import PieceDetail from '@/components/piece/Detail'
export default {
  components: { PieceDetail },
  data () {
    return {
      piece: null
    }
  },
  created () {
    pieceService.get(this.$route.params.id).then(data => {
      this.piece = data
    })
  }
}
</script>