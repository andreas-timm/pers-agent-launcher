const launcher = document.querySelector("#open-codex");
const launchDelayMs = 100;

if (launcher instanceof HTMLAnchorElement) {
  window.setTimeout(() => {
    window.location.assign(launcher.href);
  }, launchDelayMs);
}
