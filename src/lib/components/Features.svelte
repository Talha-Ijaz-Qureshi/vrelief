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

  interface FeaturesProps {
    icon: 'tabletSmartphone' | 'badgeCheck' | 'goal' | 'pictureInPicture' | 
          'paintbrush' | 'mousePointerClick' | 'messageCircle' | 'newspaper';
    title: string;
    description: string;
  }

  const featureList: FeaturesProps[] = [
    {
      icon: "tabletSmartphone",
      title: "Tapping a Vast Market",
      description:
        "Our VR therapy targets ADHD, PTSD, and aviophobia, addressing a 400M+ global market with clinically validated potential.",
    },
    {
      icon: "badgeCheck",
      title: "Precision-Crafted Scenarios",
      description:
        "Expert-designed, immersive experiences deliver tailored, evidence-based therapy for specific disorders.",
    },
    {
      icon: "goal",
      title: "Accessible Beta Program",
      description:
        "Affordable VR sets and intuitive tutorials enable at-home therapy, with our beta program inviting early users to shape the future.",
    },
    {
      icon: "pictureInPicture",
      title: "Scalable Reach",
      description:
        "Phone-based platform ensures rapid, cost-effective access, poised to empower millions with mental health support.",
    },
    {
      icon: "mousePointerClick",
      title: "Empowering Users",
      description:
        "Our direct-to-consumer model prioritizes user access, breaking free from clinician-only constraints to drive engagement.",
    },
    {
      icon: "newspaper",
      title: "Innovative Horizon",
      description:
        "AI and biofeedback-ready tech, targeting a 15% efficacy boost, positions us for long-term leadership in VR therapy.",
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

<section id="features" class="container py-24 sm:py-32">
  <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
    Features
  </h2>

  <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
    What Makes Us Different
  </h2>

  <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
    At VRelief, we’re redefining mental health care with affordable, immersive VR therapy. Discover how our consumer-first approach and cutting-edge technology set us apart in delivering accessible, effective solutions.
  </h3>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each featureList as { icon, title, description }}
      <Card class="h-full bg-background border-0 shadow-none">
        <CardHeader class="flex justify-center items-center">
          <div class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
            <svelte:component 
              this={iconMap[icon]} 
              class="size-6 text-primary"
            />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>

        <CardContent class="text-muted-foreground text-center">
          {description}
        </CardContent>
      </Card>
    {/each}
  </div>
</section>
