<script setup>
import { h } from 'vue'
import ProfileCard from '@/components/ProfileCard.vue'
import { siGithub, siDiscord } from 'simple-icons'
import { MapPin } from 'lucide-vue-next'

const createSvgComponent = (icon) => ({
  render() {
    return h('svg', {
      innerHTML: icon.svg,
      viewBox: '0 0 24 24',
      width: '24',
      height: '24',
      fill: 'currentColor',
      xmlns: 'http://www.w3.org/2000/svg',
    })
  },
})

const GitHubIcon = createSvgComponent(siGithub)
const DiscordIcon = createSvgComponent(siDiscord)
</script>

<template>
  <main class="flex min-w-screen min-h-screen">
    <ProfileCard
      name="undefined"
      title="Web Developer"
      profileImage="https://avatars.githubusercontent.com/u/173511646?v=4"
      avatarSize="medium"
      bio="Hey, I'm yaml292, a student and web developer. I love exploring cool AI tools to simplify life."
      className="bg-white/60 backdrop-blur-md rounded"
      :socialLinks="[
        {
          name: 'GitHub',
          url: 'https://github.com/yaml292',
          icon: GitHubIcon,
          bgColor: '#181717',
          color: '#fff',
        },
        {
          name: 'Discord',
          url: 'https://discordapp.com/users/1349382889506209883',
          icon: DiscordIcon,
          bgColor: '#5865F2',
          color: '#fff',
        },
      ]"
    >
      <template #additional-info>
        <div class="flex items-center justify-center sm:justify-start text-sm opacity-60 mt-4">
          <MapPin class="w-4 h-4 mr-1" />
          <span>Switzerland</span>
        </div>
      </template>
    </ProfileCard>
  </main>
</template>
