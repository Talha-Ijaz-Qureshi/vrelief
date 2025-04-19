<script lang="ts">
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
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
      },
      {
        icon: "badgeCheck",
        title: "Therapist",
        description:
          "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
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
  
  <section id="features" class="container py-2 sm:py-10">
  
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each featureList as { icon, title, description }}
        <Card class="h-full bg-background rounded-lg border-0 shadow-sm py-4">
          <Button class="flex flex-col items-center justify-center h-full w-full">
            <CardTitle class="p-4 rounded-lg border shadow-sm bg-muted/60 dark:bg-card flex justify-center flex-col h-full">{title}</CardTitle>

            <a 
              href="/"
              target="_blank"
              rel="noreferrer"
              class="w-full h-full"
            >
              Apply
            </a>
          </Button>
        </Card>
      {/each}
    </div>
  </section>
  