export function HandleActive(event) {
  const li = event.currentTarget; 
  const icon = li.querySelector("i");
  if (!icon) return;

  const ul = li.closest("ul");
  if (!ul) return;

  ul.querySelectorAll("i.active").forEach(el => el.classList.remove("active"));

  icon.classList.add("active");
}
