<script lang="ts">
  import { onMount } from "svelte";

  let email: string;
  let subject: string;
  let to: string = "support@d-litesoftware.com";
  let message: string;

  function sendEmail() {
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(gmailUrl, "_blank");
  }
</script>

<div
  class="max-w-6xl w-full px-4 sm:px-6 md:w-[90vw] lg:w-[80vw] xl:w-[70vw] mx-auto"
>
  <h1
    class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-secondary my-4 sm:my-6"
  >
    Contact Us
  </h1>
  <div class="shadow-lg bg-secondary/50 p-4 sm:p-6 md:p-8 lg:p-10 mb-6">
    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      <a type="email" href="mailto:support@d-litesoftware.com"
        >support@d-litesoftware.com</a
      >
    </p>

    <p
      class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-4"
    >
      Get in Touch
    </p>

    <form class="my-4 text-sm sm:text-base md:text-lg">
      <label for="name" class="block mb-2">Your Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        class="block w-full p-2 mb-4 border border-gray-400"
        required
      />

      <label for="email" class="block mb-2">Your Email Address:</label>
      <input
        type="email"
        id="email"
        name="email"
        bind:value={email}
        class="block w-full p-2 mb-4 border border-gray-400"
        required
      />

      <label for="subject" class="block mb-2">Email Subject:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        bind:value={subject}
        class="block w-full p-2 mb-4 border border-gray-400"
        required
      />

      <label for="message" class="block mb-2">Email Text:</label>
      <textarea
        id="message"
        name="message"
        bind:value={message}
        class="block w-full p-2 mb-4 border border-gray-400"
        required
      ></textarea>

      <button
        type="button"
        class="bg-secondary text-white font-bold py-2 px-4 hover:bg-secondary/50"
        on:click={sendEmail}
      >
        Send Message
      </button>
    </form>
  </div>
</div>
