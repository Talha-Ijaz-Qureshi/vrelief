<script lang="ts">
  import { base } from '$app/paths';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
  } from "$lib/components/ui/dropdown-menu";
  import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "$lib/components/ui/sheet";
  import { Button, buttonVariants } from "$lib/components/ui/button";
  import { Separator } from "$lib/components/ui/separator";
  import { ChevronsDown, Menu } from "lucide-svelte";
  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import ToggleTheme from "$lib/components/ToggleTheme.svelte";
  import { mode } from "mode-watcher";
    import { onMount } from 'svelte';

    let imageSrc = 'vrdark.png';
    
    onMount(() => {
        mode.subscribe(currentMode => {
            imageSrc = currentMode === 'dark' ? 'vrdark.png' : 'vrlight.png';
        });
    });

  interface RouteProps {
    href: string;
    label: string;
  }

  interface FeatureProps {
    title: string;
    description: string;
  }

  const routeList: RouteProps[] = [
    // { href: "#testimonials", label: "Testimonials" },
    { href: "#features", label: "Features" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
    { href: "#faq", label: "FAQ" },
  ];

  const featureList: FeatureProps[] = [
    {
      title: "Showcase Your Value ",
      description: "Highlight how your product solves user problems.",
    },
    {
      title: "Build Trust",
      description: "Leverages social proof elements to establish trust and credibility.",
    },
    {
      title: "Capture Leads",
      description: "Make your lead capture form visually appealing and strategically.",
    },
  ];

  let isOpen = false;
</script>

<header
  class="w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border z-40 rounded-2xl flex justify-between items-center p-2 bg-card/50 backdrop-blur-md shadow-md dark:shadow-dark shadow-light"
>
  <a href="{base}/" class="font-bold text-lg flex items-center">
    <img
      class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-10 h-10 mr-2 border-2 text-white"
      src={imageSrc}
      alt="VRelief-logo"
    />


    VRelief
  </a>

  <!-- Mobile -->
  <div class="flex items-center lg:hidden">
    <Sheet bind:open={isOpen}>
      <SheetTrigger>
        <Menu on:click={() => (isOpen = true)} class="cursor-pointer" />
      </SheetTrigger>

      <SheetContent side="right" class="flex flex-col justify-between rounded-tl-2xl rounded-bl-2xl bg-card">
        <div>
          <SheetHeader class="mb-4 ml-4">
            <SheetTitle class="flex items-center">
              <a href="{base}/" class="flex items-center">
                <img
                class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-10 h-10 mr-2 border-2 text-white"
                src={imageSrc}
                alt="VRelief-logo"
              />
                          VRelief
              </a>
            </SheetTitle>
          </SheetHeader>

          <div class="flex flex-col gap-2">
            {#each routeList as { href, label }}
              <a on:click={() => (isOpen = false)} {href}>
                <Button variant="ghost" class="justify-start text-base w-full underline">
                  {label}
                </Button>
              </a>
            {/each}
          </div>
        </div>

        <SheetFooter class="flex-col sm:flex-col justify-start items-start">
          <Separator class="mb-2" />
          <ToggleTheme />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
  <div class="hidden lg:flex items-center gap-1">
    <!-- <DropdownMenu>
      <DropdownMenuTrigger class={`${buttonVariants({ variant: "ghost", size: "default" })} text-base`}>
       Features
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-[600px]">
        <div class="grid grid-cols-2 gap-5 p-4">
          <img
            src="https://github.com/sveltejs.png"
            alt="Beach"
            class="h-full w-full rounded-md object-cover"
          />
          <ul class="flex flex-col gap-2">
            {#each featureList as { title, description }}
              <DropdownMenuItem class="rounded-md p-3 text-sm cursor-pointer">
                <div>
                  <p class="mb-1 font-semibold leading-none text-foreground">
                    {title}
                  </p>
                  <p class="line-clamp-2 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </DropdownMenuItem>
            {/each}
          </ul>
        </div>
      </DropdownMenuContent>
    </DropdownMenu> -->

    <!-- Navigation Links -->
    {#each routeList as { href, label }}
      <a {href} class={buttonVariants({ variant: "ghost", size: "default" })}>
        {label}
      </a>
    {/each}
  </div>

  <div class="hidden lg:flex pl-12">
    <ToggleTheme />
    <!-- <Button size="sm" variant="ghost" aria-label="View on GitHub">
      <a
        aria-label="View on GitHub"
        href="https://github.com/zxce3/shadcn-sveltekit-landing-page.git"
        target="_blank"
      >
        <GithubIcon class_="size-5" />
      </a>
    </Button> -->
  </div>
</header>

<style>
  .shadow-light {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
  }

  .shadow-dark {
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
  }
</style>
