<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import Icon from "@iconify/svelte";  

  interface HowItWorksProps {
    badgeTitle: string;
    title: string;
    description: string;
    image: string;
  }

  const HowItWorksList: HowItWorksProps[] = [
    {
      badgeTitle: "Sign Up",
      title: "Being your VR Therapy Journey",
      description: "Take your first step towards a whole new experience of healing by creating your VRelief account.",
      image: "hugeicons:health",
    },
    {
      badgeTitle: "Personalize",
      title: "Finding Your Path",
      description: "Answer a short questionnaire to identify your mental health needs, allowing us to tailor your experience.",
      image: "icon-park-twotone:health",
    },
    {
      badgeTitle: "Prepare",
      title: "Set Up Your VR Experience",
      description: "Grab a VR box (like Google Cardboard) compatible with your smartphone's size, download the VRelief app, and follow easy setup instructions.",
      image: "streamline:vr-headset-1",
    },
    {
      badgeTitle: "Engage",
      title: "Dive into Your VR Therapy",
      description: "Choose from the modules curated by us for you, and immerse yourself in a world of healing.",
      image: "healthicons:resilient-and-migration-sensitive-health-system-outline-24px",
    },    
    {
      badgeTitle: "Grow",
      title: "Track Your Progress",
      description: "See your journey unfold with insights and support. Expect tools to celebrate your progress and resources to keep you inspired.",
      image: "lets-icons:time-progress-duotone",
    },
  ];
  </script>

<section id="features" class="container py-24 sm:py-32">
  <div class="text-center mb-8">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      User Experience
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold">
      Your VRelief Journey
    </h2>
  </div>

  <div class="lg:w-[60%] mx-auto relative">
    {#each HowItWorksList as { badgeTitle, title, description, image }, index}
      <div class="flex mb-12 items-center " class:flex-row-reverse={index % 2 !== 0}>
        <Card class="h-full bg-transparent border-0 shadow-none flex flex-col items-start {index % 2 !== 0 ? 'items-end' : ''}">
          <CardHeader>
            <div class="pb-4">
              <Badge>{badgeTitle}</Badge>
            </div>

            <CardTitle>
              {title}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-muted-foreground w-[100%]">
            {description}
          </CardContent>
        </Card>

        <!-- <img
          src={image}
          alt="Image describing {title}"
          class="w-[150px] md:w-[250px] lg:w-[300px] mx-auto -scale-x-100"
        /> -->
        <div class=" p-10 rounded-full ring-8 ring-primary/10 mb-4 w-[300px] md:w-[200px] lg:w-[200px] mx-auto -scale-x-100">
          <Icon icon={image} width="100%" height="100%" class="mx-0" style="color: hsl(var(--primary))" />
        </div>

        <div
          class="-z-10 absolute right-0 w-44 h-72 lg:w-64 lg:h-80 rounded-full bg-primary/15 dark:bg-primary/10 blur-3xl"
          class:left-0={index % 2 !== 0}
        ></div>
      </div>
    {/each}
  </div>
</section>
