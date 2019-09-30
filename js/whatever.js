document.addEventListener("scroll", () => {
  let scroll = document.body.scrollTop;
  let nav = document.getElementsByTagName("nav")[0];
  if (scroll > 0) {
    return nav.className.indexOf("active") < 0
      ? (nav.className += "active")
      : "";
  }
  return (nav.className = nav.className.replace("active", ""));
});
