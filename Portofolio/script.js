function scrollDiscoverMe() {
    var element = document.querySelector("#about-me");

    element.scrollIntoView();
}
function scrollPortofolio() {
    var element = document.querySelector("#my-work");

    element.scrollIntoView();
}
function scrollContact() {
    var element = document.querySelector("#contact-me");

    element.scrollIntoView();
}
function openInNewTab(href) {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href: href,
  }).click();
}