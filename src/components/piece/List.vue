<template>
  <b-container>
    <b-row>
      <b-col
        v-for="piece in pieceList"
        :key="piece.id"
        class="col-lg-6 col-sm-12"
      >
        <b-card-group class="mb-3">
          <piece-list-item :piece="piece" />
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import pieceService from '@/services/piece.service'
import PieceListItem from './ListItem.vue'
export default {
  name: 'PieceList',
  components: { PieceListItem },
  data () {
    return {
      pieceList: null
    }
  },
  created () {
    pieceService.getList()
      .then(data => {
        this.pieceList = data
      })
  }
}
</script>