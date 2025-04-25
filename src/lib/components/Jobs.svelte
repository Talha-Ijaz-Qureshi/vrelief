<script lang="ts">
    import { base } from '$app/paths';
    import { ArrowRight } from "lucide-svelte";
    import Icon from "@iconify/svelte";  

    import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
    import {
      Paintbrush,
      MessageCircle,
      TabletSmartphone,
      BadgeCheck,
      Goal,
      PictureInPicture,
      MousePointerClick,
      Newspaper,
    } from "lucide-svelte";
    import { Button } from "$lib/components/ui/button";

    interface FeaturesProps {
      icon: string;
      title: string;
      url: string;
      description: string;
    }
  
    const featureList: FeaturesProps[] = [
      {
        icon: "iconoir:code",
        title: "Developer",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfqsGWmgN7mQNX90vre3oGvbxm8kTPqVDznIYtNC_Y6361MQg/viewform?usp=dialog",
        description:
          "Build our innovative VR therapy platform, creating immersive, user-friendly scenarios for mental wellness. Work with therapists to implement clinically precise designs, optimize for phone-based VR, and enhance beta program functionality, driving accessible care in a pre-launch startup.",
      },
      {
        icon: "ri:psychotherapy-line",
        title: "Therapist",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfFhZWdPWVa8VtsP7V04cRZ7litO8S2UWOTbL_4opRe9XiWNg/viewform?usp=header",
        description:
          "Shape our VR therapy platform by designing evidence-based scenarios for mental wellness. Collaborate with developers to ensure clinical accuracy, validate content, and analyze beta feedback, driving impactful, accessible care in a pre-launch startup.",
      },
      {
        icon: "ant-design:layout-outlined",
        title: "UX Researcher",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdqfY-OfT_nEc0MQqUD8Gvo6X6QcH87uGoOh1qiDWwZzgzWLw/viewform?usp=header",
        description:
          "Enhance our VR therapy platform by studying user needs and behaviors. Conduct usability tests, analyze beta feedback, and collaborate with therapists to create intuitive, impactful experiences, shaping accessible mental health care in a pre-launch startup.",
      },
    ];
  
    const iconMap = {
      tabletSmartphone: TabletSmartphone,
      badgeCheck: BadgeCheck,
      goal: Goal,
      pictureInPicture: PictureInPicture,
      paintbrush: Paintbrush,
      mousePointerClick: MousePointerClick,
      messageCircle: MessageCircle,
      newspaper: Newspaper,
    };
  </script>
  
  <section id="features" class="container py-2 sm:py-10 px-0">
  
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full lg:w-[100%] px-1 mx-auto">
      {#each featureList as { icon, url,  title, description }}
        <Card class=" p-4 relative rounded-lg border shadow-sm bg-muted/60 dark:bg-card flex justify-start flex-col h-full py-4 overflow-hidden">
          <div
          class="z-0 h-full w-full absolute top-50% bg-primary/5 dark:bg-primary/10 blur-xl border rounded-full"
          ></div>
          <Icon icon={icon} width="50" height="50" class="mx-2" style="color: hsl(var(--primary))" />
            <CardTitle class="text-left pt-4 px-3">{title}</CardTitle>  

          <!-- <div class="absolute right-[0em] top-[0em] z-0 bg-primary/20 p-2 rounded-full rounded-tr-sm opacity-50 ring-8 ring-primary/10 mb-4">
            <Icon icon={icon} width="100" height="100"  style="color: hsl(var(--primary))" />

          </div> -->
          <CardContent class="text-muted-foreground text-left z-10 px-3">
            {description}
          </CardContent>
          <a 
          href={url}
          target="_blank"
          class="z-10 inline-flex items-center justify-end w-fit h-fit mt-auto ml-auto p-2 rounded-lg bg-blacks bg-none underline underline-offset-2 hover:underline-offset-4"
        >
          Apply
          <ArrowRight
          class="size-4 "
      />

        </a>

        </Card>
      {/each}
    </div>
  </section>
  