<script>
    import { base } from '$app/paths';
    import Benefits from "$lib/components/Benefits.svelte";
    import Community from "$lib/components/Community.svelte";
    import JobsApply from "$lib/components/JobsApply.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Faq from "$lib/components/FAQ.svelte";
    import Features from "$lib/components/Features.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import HowItWorks from "$lib/components/HowItWorks.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    // import Pricing from "$lib/components/Pricing.svelte";
    // import Services from "$lib/components/Services.svelte";
    // import Sponsors from "$lib/components/Sponsors.svelte";
    import Teams from "$lib/components/Teams.svelte";
    import Testimonials from "$lib/components/Testimonials.svelte";
</script>

<svelte:head>
    <link rel="preload" as="image" href="{base}/vrdark.png" />
    <link rel="preload" as="image" href="{base}/vrlight.png" />
    <link rel="preload" as="image" href="{base}/dr4.png" />
    <link rel="preload" as="image" href="{base}/dr5.png" />
</svelte:head>

<Navbar />
<Hero />
<!-- <Sponsors /> -->
<Benefits />
<Features />
<!-- <Services /> -->
<HowItWorks />
<!-- <Testimonials /> -->
<!-- <Timeline /> -->

<Teams />
<Community />
<JobsApply />
<!-- <Pricing /> -->
<Contact />
<Faq />
<Footer />
