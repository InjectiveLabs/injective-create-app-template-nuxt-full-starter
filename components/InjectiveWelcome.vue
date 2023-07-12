<template>
  <div>
    <div class="flex justify-end p-4 absolute inset-x-0">
      <AppConnectWallet />
    </div>
    <div class="min-h-screen grid place-items-center">
      <div class="text-center">
        <InjectiveLogo class="w-[20vw] mx-auto mb-10" />
        <p class="text-4xl">Create Injective App</p>
        <p class="mb-10 text-gray-400 mt-4">Pinia + TailwindCSS + VueUse</p>
        <a
          target="_blank"
          href="https://docs.ts.injective.network"
          class="text-green-200 underline text-xl"
        >
          Learn how to build on Injective
        </a>
      </div>
    </div>
  </div>
</template>

<style>
body {
  @apply bg-gray-900 text-white;
}
</style>
