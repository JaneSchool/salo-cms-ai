<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
const mode = useColorMode()

import { Badge } from '@/components/vue/ui/badge'
import { Button } from '@/components/vue/ui/button'
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="container ">
    <div
      class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32"
    >
      <div class="text-center space-y-8">
        <Badge
          variant="outline"
          class="text-sm py-2"
        >
          <span class="mr-2 animate-pulse text-primary">
            <Badge class="animate-pulse">New</Badge>
          </span>
          <span> Ultimate CMS with Unmatched Grunting</span>
        </Badge>

        <div
          class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold"
        >
          <h1>
            Make
            <span
              class="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text"
              >Your Work
            </span>
            Easier
          </h1>
        </div>
        <h2>Powerfully Simply and Uniquely Effective !</h2>
        <p class="max-w-screen-sm mx-auto text-xl text-foreground">
          More Than Just a oink Tool – We're a Grunting Community of Passionate Creators.
          Join Us for Exclusive Resources, Tutorials, and Unmatched Support.
        </p>

        <div class="space-y-4 md:space-y-0 md:space-x-4">
          <Button class="w-5/6 md:w-1/4 font-bold group/arrow">
             <a
              href="/#/app"
              target="_blank">Get Started</a>
            <ArrowRight
              class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform"
            />
          </Button>

          <Button
            as-child
            variant="secondary"
            class="w-5/6 md:w-1/4 font-bold"
          >
            <a
              href="https://github.com/Frikadellios/salo-cms-ai.git"
              target="_blank"
              >Github respository</a
            >
          </Button>
        </div>
      </div>

      <div class="relative group mt-14">
        <!-- gradient shadow -->
        <div
          class="absolute -top-6 right-12 w-[90%] h-12 lg:h-[80%] bg-primary/50 blur-3xl rounded-full img-shadow-animation"
        ></div>

        <img
          class="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-t-primary/30 img-border-animation"
          :src="
            mode == 'light' ? 'og.webp' : 'og.webp'
          "
          alt="dashboard using shadcn-vue"
        />

        <!-- gradient effect img -->
        <div
          class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
        ></div>
      </div>
    </div>
  </section>
</template>
