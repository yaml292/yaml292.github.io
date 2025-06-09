<template>
  <div class="shrink-0">
    <img
      :src="src"
      :alt="alt"
      class="rounded-full object-cover"
      :class="[size === 'small' ? 'w-16 h-16' : size === 'large' ? 'w-32 h-32' : 'w-24 h-24']"
    />
  </div>
</template>

<script>
export default {
  name: 'ProfileAvatar',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
  },
}
</script>
