<template>
  <div class="w-xs md:w-md mx-auto my-auto" :class="className">
    <div :class="innerClassName">
      <div class="p-4">
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <ProfileAvatar :src="profileImage" :alt="name" :size="avatarSize" />

          <div class="flex flex-col text-center sm:text-left">
            <h3 class="font-bold text-lg prose">{{ name }}</h3>
            <span v-if="title" class="text-sm opacity-80 prose">{{ title }}</span>

            <p v-if="bio" class="mt-2 text-sm prose">{{ bio }}</p>

            <slot name="additional-info"></slot>

            <div
              v-if="socialLinks && socialLinks.length"
              class="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start"
            >
              <a
                v-for="(link, index) in socialLinks"
                :key="index"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center p-2 rounded-full"
                :style="{
                  backgroundColor: link.bgColor || '',
                  color: link.color || '',
                }"
              >
                <component
                  :is="link.icon || 'span'"
                  v-if="link.icon"
                  :style="{ color: link.color || '' }"
                />
                <span v-else>{{ link.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="$slots.footer" class="px-4 py-3 border-t">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileAvatar from './ProfileAvatar.vue'

export default {
  name: 'ProfileCard',
  components: {
    ProfileAvatar,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    bio: {
      type: String,
      default: '',
    },
    socialLinks: {
      type: Array,
      default: () => [],
    },
    avatarSize: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    className: {
      type: String,
      default: '',
    },
    innerClassName: {
      type: String,
      default: '',
    },
  },
}
</script>
