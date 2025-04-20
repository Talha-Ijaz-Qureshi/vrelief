<script lang="ts">
    import { base } from '$app/paths';
    import { ArrowRight } from "lucide-svelte";

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
      icon: 'tabletSmartphone' | 'badgeCheck' | 'goal' | 'pictureInPicture' | 
            'paintbrush' | 'mousePointerClick' | 'messageCircle' | 'newspaper';
      title: string;
      description: string;
    }
  
    const featureList: FeaturesProps[] = [
      {
        icon: "tabletSmartphone",
        title: "Developer",
        description:
          "Create VR scenarios and get behind the development at VRelief",
      },
      {
        icon: "badgeCheck",
        title: "Therapist",
        description:
          "Create scenarios curated to specific conditions",
      },
      {
        icon: "goal",
        title: "Etc",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
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
  
  <section id="features" class="container py-2 sm:py-10 ">
  
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each featureList as { icon, title, description }}
        <Card class="h-full p-4  rounded-lg border shadow-sm bg-muted/60 dark:bg-card flex justify-start flex-col w-full py-4">
          <CardTitle class="text-left pt-4">{title}</CardTitle>

          <CardContent class="text-muted-foreground text-left p-3">
            {description}
          </CardContent>
          <a 
          href="{base}/"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center justify-end w-fit h-fit mt-auto ml-auto p-2 rounded-lg bg-blacks bg-none underline underline-offset-2"
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
  