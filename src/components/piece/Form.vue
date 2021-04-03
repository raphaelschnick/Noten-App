<template>
  <b-form
    id="form"
    @submit="onSubmit()"
  >
    <b-form-group
      label="Titel:"
      :state="Boolean(piece.name)"
      valid-feedback="Ok!"
      invalid-feedback="Bitte Name eintragen"
    >
      <b-form-input
        v-model="piece.name"
        :state="Boolean(piece.name)"
        placeholder="Name"
        maxlength="256"
        required
      />
    </b-form-group>
    <b-button
      type="submit"
      class="mr-2"
      v-text="submitLabel"
    />
    <router-link :to="{ name: 'Home' }">
      Abbrechen
    </router-link>
  </b-form>
</template>

<script>
import pieceService from '@/services/piece.service.js'
export default {
  name: 'PieceForm',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    id: {
      required: false,
      default: null
    }
  },
  data () {
    return {
      briefLength: 256,
      piece: {
          name: ''
      }
    }
  },
  computed: {
    submitLabel () {
      return this.id ? 'Bearbeiten' : 'Hinzufügen'
    }
  },
  created () {
    if (this.id) {
      pieceService.get(this.id)
        .then(data => {
          this.piece = data
        })
    }
  },
  methods: {
    onSubmit () {
      event.preventDefault()
      if (this.id) {
        pieceService.update(this.piece, this.id).then(data => {
          this.$router.push({ name: 'PieceDetail', params: { id: this.id } })
        })
      } else {
        pieceService.add(this.piece).then(data => {
          this.$router.push({ name: 'PieceDetail', params: { id: data.id } })
        })
      }
    },
  }
}
</script>

<style scoped>
.btn:not(:disabled):not(.disabled) {
    background-color: #312F2F;
    border-color: #312F2F;
}
a {
    color: #312F2F;
}
input:focus {
    border-color: #312F2F !important;
    box-shadow: 0 0 5px #312F2F !important;
}
textarea:focus {
    border-color: #312F2F !important;
    box-shadow: 0 0 5px #312F2F !important;
}
</style>
