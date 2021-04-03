<template>
  <b-card>
    <b-card-title>
      {{ piece.name }}
      <b-dropdown
        class="float-right"
        variant="link"
        toggle-class="text-decoration-none"
        no-caret
      >
        <template #button-content>
          <i
            style="color: #312F2F"
            class="fas fa-ellipsis-v"
          />
        </template>
        <b-dropdown-item :to="{ name: 'PieceEdit', params: {id: piece.id } }">
          <i class="fas fa-edit" /> Bearbeiten
        </b-dropdown-item>
        <b-dropdown-item @click="remove">
          <i class="fas fa-trash-alt" /> Löschen
        </b-dropdown-item>
      </b-dropdown>
    </b-card-title>
    <b-button
      :to="{ name: 'PieceDetail', params: {id: piece.id}}"
      variant="primary"
    >
      Details
    </b-button>
  </b-card>
</template>

<script>
import pieceService from '@/services/piece.service'
export default {
  name: 'PieceListItem',
  props: {
    piece: {
      type: Object,
      required: true
    }
  },
  methods: {
    remove () {
      pieceService.delete(this.piece.id).then(this.$router.go())
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
