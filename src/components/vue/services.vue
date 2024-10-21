<script setup lang="ts">
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/vue/ui/card'

import { Badge } from '@/components/vue/ui/badge'

enum ProService {
  YES = 1,
  NO = 0
}

interface ServiceProps {
  title: string
  pro: ProService
  description: string
}

const serviceList: ServiceProps[] = [
  {
    title: 'Powerfully Simple Oink',
    description: 'Highlights simplicity and effectiveness with a catchy twist',
    pro: 0
  },
  {
    title: 'Uniquely Effective Grunt',
    description: 'Playful and memorable, emphasizes community and fun',
    pro: 0
  },
  {
    title: 'Grunt-Email Marketing',
    description: 'Streamlining Your Content, One Grunt at a Time!',
    pro: 0
  },
  {
    title: 'Ultimate SALO-SEO',
    description: 'Grunting Towards Content Perfection!',
    pro: 1
  }
]
</script>

<template>
  <section
    id="services"
    class="container px-10 mx-auto py-24 sm:py-32"
  >
    <h2 class="text-lg text-primary text-color max-w-18 font-black text-center mb-2 tracking-wider">
      Our Services
    </h2>

    <h3 class="text-3xl md:text-4xl font-black text-center font-bold mb-4">
       Ultimate Unmatched Grunting - Simplify Your Success!
    </h3>
    <p class="md:w-1/2 mx-auto font-black text-xl text-center text-primary mb-8">
    Let's Grow Your Business!
    </p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
    >
      <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      >
        <Card class="bg-muted/60 dark:bg-card h-full relative">
          <CardHeader>
            <CardTitle>{{ title }}</CardTitle>
            <CardDescription>{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -top-2 -right-3"
            >PRO</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template>
