<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Card, CardHeader, CardContent, CardFooter } from "$lib/components/ui/card";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Alert, AlertDescription, AlertTitle } from "$lib/components/ui/alert";
  import { AlertCircle, Building2, Phone, Mail, Clock } from "lucide-svelte";
  import * as Select from "$lib/components/ui/select/index.js";

  interface ContactFormProps {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  }

  let contactForm: ContactFormProps = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };

  let invalidInputForm = false;

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const { firstName, lastName, email, subject, message } = contactForm;
    console.log(contactForm);

    const mailToLink = `mailto:thevrelief@gmail.com?subject=${subject}&body=Hello I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;
    window.location.href = mailToLink;
  }

  const subjects = [
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Development", label: "Mobile Development" },
    { value: "Figma Design", label: "Figma Design" },
    { value: "REST API", label: "REST API" },
    { value: "FullStack Project", label: "FullStack Project" }
  ];

  $: triggerContent = subjects.find(s => s.value === contactForm.subject)?.label ?? "Select a subject";
</script>

<section id="contact" class="container py-24 sm:py-32">
  <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <div class="mb-4">
        <h2 class="text-lg text-primary mb-2 tracking-wider">Contact</h2>
        <h2 class="text-3xl md:text-4xl font-bold">Connect With Us</h2>
      </div>
      <p class="mb-8 text-muted-foreground lg:w-5/6">
        Discover VRelief's innovative VR therapy solutions. Connect with our team to learn more—we’re eager to assist you in transforming mental health care.
      </p>
<!--  -->
      <div class="flex flex-col gap-4">
        <!-- <div>
          <div class="flex gap-2 mb-1">
            <Building2 />
            <div class="font-bold">Find Us</div>
          </div>
          <div>742 Evergreen Terrace, Springfield, IL 62704</div>
        </div> -->

        <div>
          <div class="flex gap-2 mb-1">
            <Phone />
            <div class="font-bold">Call Us</div>
          </div>
          <div>
            <a href="tel:+971507007757" class="text underline hover:text-primary">
              +971 50 700 7757
          </div>
        </div>

        <div>
          <div class="flex gap-2 mb-1">
            <Mail />
            <div class="font-bold">Mail Us</div>
          </div>
          <div>
            <a href="mailto:thevrelief@gmail.com" class="text hover:text-primary">
              thevrelief@gmail.com
            </a>
          </div>
        </div>

        <!-- <div>
          <div class="flex gap-2 mb-1">
            <Clock />
            <div class="font-bold">Visit Us</div>
          </div>
          <div>
            <div>Monday - Friday</div>
            <div>8AM - 4PM</div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Form -->
    <Card class="bg-muted/60 dark:bg-card relative overflow-hidden">
      <div
      class="z-10 h-full w-full absolute top-50% bg-primary/5 dark:bg-primary/10 blur-xl border rounded-full"
      ></div>


      <CardHeader class="text-primary text-2xl" />
      <CardContent>
        <form on:submit={handleSubmit} class="grid gap-4">
          <div class="flex flex-col md:flex-row gap-8">
            <div class="flex flex-col w-full gap-1.5">
              <Label for="firstName">First Name</Label>
              <Input
                class="z-10"
                id="firstName"
                type="text"
                placeholder=""
                bind:value={contactForm.firstName}
              />
            </div>

            <div class="flex flex-col w-full gap-1.5">
              <Label for="lastName">Last Name</Label>
              <Input
                class="z-10"
                id="lastName"
                type="text"
                placeholder=""
                bind:value={contactForm.lastName}
              />
            </div>
          </div>

          <div class="flex flex-col gap-1.5">
            <Label for="contactEmail">Email</Label>
            <Input

              class="z-10"
              id="contactEmail"
              type="email"
              placeholder="your@email.com"
              bind:value={contactForm.email}
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <Label for="contactSubject">Subject</Label>
            <Input
              class="z-10"
              id="contactSubject"
              type="text"
              placeholder="Your subject..."
              bind:value={contactForm.subject}
            />
          </div>

          <!-- <div class="flex flex-col gap-1.5">
            <Label for="contactSubject">Subject</Label>
            <Select.Root type="single" bind:value={contactForm.subject}>
              <Select.Trigger id="contactSubject" class="w-full">
                {triggerContent}
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  {#each subjects as subject}
                    <Select.Item value={subject.value} label={subject.label}>
                      {subject.label}
                    </Select.Item>
                  {/each}
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div> -->

          <div class="flex flex-col gap-1.5">
            <Label for="contactMessage">Message</Label>
            <Textarea
            class="z-10"
              id="contactMessage"
              placeholder="Your message..."
              rows={5}
              bind:value={contactForm.message}
            />
          </div>

          {#if invalidInputForm}
            <Alert variant="destructive">
              <AlertCircle class="w-4 h-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                There is an error in the form. Please check your input.
              </AlertDescription>
            </Alert>
          {/if}

          <Button type="submit" class="mt-4 z-10">Send message</Button>
        </form>
      </CardContent>
      <CardFooter />
    </Card>
  </section>
</section>
