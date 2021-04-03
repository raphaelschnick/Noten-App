<template>
  <b-form
    id="form"
    @submit="onSubmit()"
  >
    <b-form-group
      label="Titel:"
      :state="Boolean(instrument.name)"
      valid-feedback="Ok!"
      invalid-feedback="Bitte Name eintragen"
    >
      <b-form-input
        v-model="instrument.name"
        :state="Boolean(instrument.name)"
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
    <router-link :to="{ name: 'Instruments' }">
      Abbrechen
    </router-link>
  </b-form>
</template>

<script>
import instrumentService from '@/services/instrument.service.js'
export default {
  name: 'InstrumentForm',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    id: {
      required: false,
      default: null
    }
  },
  data () {
    return {
      instrument: {
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
      instrumentService.get(this.id)
        .then(data => {
          this.instrument = data
        })
    }
  },
  methods: {
    onSubmit () {
      event.preventDefault()
      if (this.id) {
        instrumentService.update(this.instrument, this.id).then(data => {
          this.$router.push({ name: 'InstrumentDetail', params: { id: this.id } })
        })
      } else {
        instrumentService.add(this.instrument).then(data => {
          this.$router.push({ name: 'InstrumentDetail', params: { id: data.id } })
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
