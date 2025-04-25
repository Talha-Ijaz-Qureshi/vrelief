<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "$lib/components/ui/card";
  import { base } from '$app/paths';
  import Icon from "@iconify/svelte";  
  import LinkedInIcon from "$lib/icons/LinkedInIcon.svelte";
  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import Instagram from "$lib/icons/XIcon.svelte";
  
  interface TeamProps {
    imageUrl: string;
    firstName: string;
    lastName: string;
    positions: string[];
    socialNetworks: SocialNetworkProps[];
  }

  interface SocialNetworkProps {
    name: string;
    url: string;
  }

  const teamList: TeamProps[] = [
    {
    imageUrl: 'sala.png',
    firstName: "Saleh",
    lastName: "Khan",
    positions: ["Founder & Chief Executive Officer @ VRelief"],
    socialNetworks: [
      {
        name: "cib:linkedin",
        url: "https://www.linkedin.com/in/saleh-k/",
      },
      {
        name: "cib:instagram",
        url: "https://www.instagram.com/saleh.xlm/",
      },
      {
        name: "tdesign:mail-filled",
        url: "mailto:salehkhan0707@gmail.com",
      },
    ],
  },
  {
    imageUrl:
      "tehla.png",
    firstName: "Talha",
    lastName: "Ijaz",
    positions: ["Chief Technical Officer @ VRelief"],
    socialNetworks: [
      {
        name: "cib:linkedin",
        url: "https://www.linkedin.com/in/talha-ijaz-qureshi/",
      },
      {
        name: "cib:github",
        url: "https://github.com/Talha-Ijaz-Qureshi",
      },
      {
        name: "tdesign:mail-filled",
        url: "mailto:muhammadtalhaijaz2005@gmail.com",
      },
    ],
  },

  {
    imageUrl:
      "rish.png",
    firstName: "Rishabh",
    lastName: "Johary",
    positions: ["Chief Operating Officer @ VRelief"],
    socialNetworks: [
      {
        name: "cib:linkedin",
        url: "https://www.linkedin.com/in/rishabh-johary-753962276/",
      },
      {
        name: "cib:instagram",
        url: "https://www.instagram.com/rish1bh00/",
      },
      {
        name: "tdesign:mail-filled",
        url: "mailto:j.rishab2020@gmail.com",
      },
    ],
  },
  // {
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   firstName: "Sarah",
  //   lastName: "Robinson",
  //   positions: ["Cloud Native Developer", " Kubernetes Orchestrator"],
  //   socialNetworks: [
  //     {
  //       name: "LinkedIn",
  //       url: "https://www.linkedin.com/in/leopoldo-miranda/",
  //     },
  //     {
  //       name: "Github",
  //       url: "https://github.com/leoMirandaa",
  //     },
  //     {
  //       name: "X",
  //       url: "https://x.com/leo_mirand4",
  //     },
  //   ],
  // },
  // {
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   firstName: "Michael",
  //   lastName: "Holland",
  //   positions: ["DevOps Engineer", "CI/CD Pipeline Mastermind"],
  //   socialNetworks: [
  //     {
  //       name: "LinkedIn",
  //       url: "https://www.linkedin.com/in/leopoldo-miranda/",
  //     },
  //   ],
  // },
  // {
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   firstName: "Zoe",
  //   lastName: "Garcia",
  //   positions: ["JavaScript Evangelist", "Deno Champion"],
  //   socialNetworks: [
  //     {
  //       name: "LinkedIn",
  //       url: "https://www.linkedin.com/in/leopoldo-miranda/",
  //     },
  //     {
  //       name: "Github",
  //       url: "https://github.com/leoMirandaa",
  //     },
  //   ],
  // },
];

</script>

<section id="team" class=" container max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
  <div class="text-center mb-12">
    <h2 class="text-lg text-primary text-center mb-3 tracking-wider">Team</h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold">
      Meet The Team
    </h2>
  </div>
  <!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-center"> -->

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center items-center">
    {#each teamList as { imageUrl, firstName, lastName, positions, socialNetworks }}
      <Card class="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
        <CardHeader class="p-0 gap-0">
          <div class="h-full overflow-hidden">
            <img
              src={imageUrl}
              alt={`${firstName} ${lastName}`}
              class="w-full aspect-square object-cover saturate-0 transition-all duration-300 ease-out group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-105"
            />
          </div>
          <CardTitle class="p-4 sm:p-6">
            {firstName}
            <span class="text-primary">{lastName}</span>
          </CardTitle>
        </CardHeader>

        <div class="px-4 sm:px-6 flex-grow">
          {#each positions as position, index}
            <CardContent class="p-0 pb-2 text-muted-foreground">
              {position}{#if index < positions.length - 1},{/if}
            </CardContent>
          {/each}
        </div>

        <CardFooter class="space-x-4 px-4 sm:px-6 py-4">
          {#each socialNetworks as { name, url }}
            <a
              href={url}
              target="_blank"
              class="hover:opacity-80 transition-opacity"
              aria-label="Visit our {name} page"
            >
            <Icon icon={name} width="24" height="24px"  style="color: hsl(var(--primary))" />
            </a>
          {/each}
        </CardFooter>
      </Card>
    {/each}
  </div>
</section>
