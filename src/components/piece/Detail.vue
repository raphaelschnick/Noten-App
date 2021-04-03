<template>
  <div>
    <h2>{{ piece.name }}</h2>
  </div>
</template>

<script>
export default {
 name: 'PieceDetail',
  props: {
    piece: {
      type: Object,
      required: true
    }
  }
}
</script>