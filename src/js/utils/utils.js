export default function preloader(isLoading, preloaderBlock) {
  // const preloader = document.querySelector(".loading");
  if (isLoading) {
    preloaderBlock.classList.add("configuration__loader_show");
  } else if (!isLoading) {
    preloaderBlock.classList.remove("configuration__loader_show");
  }
}
