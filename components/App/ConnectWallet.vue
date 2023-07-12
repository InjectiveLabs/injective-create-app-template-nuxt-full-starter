<script setup lang="ts">
const walletStore = useWalletStore();

const formattedAddress = computed(
  () =>
    `${walletStore.injectiveAddress.slice(
      0,
      5
    )}...${walletStore.injectiveAddress.slice(-5)}`
);

function handleConnectWallet() {
  if (walletStore.injectiveAddress) {
    walletStore.$patch({ ethereumAddress: "", injectiveAddress: "" });
    return;
  }
  walletStore.connectWallet();
}
</script>

<template>
  <AppButton @click="handleConnectWallet">
    {{ walletStore.injectiveAddress ? formattedAddress : "Connect Wallet" }}
  </AppButton>
</template>
