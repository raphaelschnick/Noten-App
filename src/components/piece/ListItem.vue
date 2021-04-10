<template>
  <div>
    <vs-card type="5">
      <template #title>
        <h3>{{ piece.name }}</h3>
      </template>
      <template #img>
        <img src="@/assets/avatar.jpg">
      </template>
      <template #text>
        <b-row>
          <b-col cols="3">
            <vs-button :to="{ name: 'PieceDetail', params: {id: piece.id}}">
              Details
            </vs-button>
          </b-col>
          <b-col cols="4">
            <vs-button
              success
              :to="{ name: 'PieceEdit', params: {id: piece.id } }"
            >
              Bearbeiten
            </vs-button>
          </b-col>
          <b-col cols="3">
            <vs-button
              danger
              @click="active=!active"
            >
              Löschen
            </vs-button>
          </b-col>
        </b-row>
      </template>
      <template #interactions>
        <vs-button
          danger
          icon
        >
          <i class="far fa-star" />
        </vs-button>
      </template>
    </vs-card>
    <vs-dialog
      v-model="active"
      width="550px"
      not-center
    >
      <template #header>
        <h4 class="not-margin">
          <b>{{ piece.name }}</b> wirklich löschen?
        </h4>
      </template>
      <b-row>
        <b-col cols="2">
          <vs-button
            danger
            @click="active=false, remove()"
          >
            Löschen
          </vs-button>
        </b-col>
        <b-col>
          <vs-button
            dark
            transparent
            @click="active=false"
          >
            Abbrechen
          </vs-button>
        </b-col>
      </b-row>
    </vs-dialog>
  </div>
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
  data () {
    return {
      active: false
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
