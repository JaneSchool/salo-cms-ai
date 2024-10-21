<script lang="ts" setup>
import { ref } from 'vue'

import { useColorMode } from '@vueuse/core'
const mode = useColorMode()
mode.value = 'dark'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/vue/ui/navigation-menu'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/vue/ui/sheet/'

import { Button } from '@/components/vue/ui/button'
import { Separator } from '@/components/vue/ui/separator'

import GithubIcon from '@/icons/vue/GithubIcon.vue'
import { Menu } from 'lucide-vue-next'

interface RouteProps {
  href: string
  label: string
}

interface FeatureProps {
  title: string
  description: string
}

const routeList: RouteProps[] = [
  {
    href: '#testimonials',
    label: 'Testimonials'
  },
  {
    href: '#team',
    label: 'Team'
  },
  {
    href: '#contact',
    label: 'Contact'
  },
  {
    href: '#faq',
    label: 'FAQ'
  }
]

const isOpen = ref<boolean>(false)
</script>

<template>
  <header
    :class="{
      'shadow-light': mode === 'light',
      'shadow-dark': mode === 'dark',
      'w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card shadow-md': true,
    }"
  >
    <a
      href="/"
      class="font-bold text-lg flex items-center"
    >
      <img
          class="w-9 h-9 mr-2 mx-auto relative leading-none flex items-center"
          :src="
            mode == 'light' ? 'favicon.webp' : 'favicon.webp'
          "
          alt="dashboard using shadcn-vue"
        />
      SALO CMS</a
    >
    <!-- Mobile -->
    <div class="flex items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu
            @click="isOpen = true"
            class="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card"
        >
          <div>
            <SheetHeader class="mb-4 ml-4">
              <SheetTitle class="flex items-center">
                <a
                  href="/"
                  class="flex items-center"
                >
                        <img
          class="w-9 h-9 mr-2 mx-auto relative leading-none flex items-center"
          :src="
            mode == 'light' ? 'favicon.webp' : 'favicon.webp'
          "
          alt="dashboard using shadcn-vue"
        />
                  SALO CMS
                </a>
              </SheetTitle>
            </SheetHeader>

            <div class="flex flex-col gap-2">
              <Button
                v-for="{ href, label } in routeList"
                :key="label"
                as-child
                variant="link"
                class="justify-start text-base"
              >
                <a
                  @click="isOpen = false"
                  :href="href"
                >
                  {{ label }}
                </a>
              </Button>
            </div>
          </div>

          <SheetFooter class="flex-col sm:flex-col justify-start items-start">
            <Separator class="mb-2" />

            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop -->
    <NavigationMenu class="hidden lg:block">
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Button
              v-for="{ href, label } in routeList"
              :key="label"
              as-child
              variant="link"
              class="justify-start text-base"
            >
              <a :href="href">
                {{ label }}
              </a>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div class="hidden lg:flex">

      <Button
        as-child
        size="sm"
        variant="link"
        aria-label="View on GitHub"
      >
        <a
          aria-label="View on GitHub"
          href="https://github.com/Frikadellios/salo-cms-ai.git"
          target="_blank"
        >
          <GithubIcon class="size-5" />
        </a>
      </Button>
    </div>
  </header>
</template>

<style scoped>
.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}
</style>
