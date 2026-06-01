const toggle = document.querySelector("[data-nav-toggle]");
const links = document.querySelector("[data-nav-links]");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const filters = document.querySelectorAll("[data-filter]");
const posts = document.querySelectorAll("[data-post-category]");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    posts.forEach((post) => {
      const category = post.dataset.postCategory;
      post.hidden = filter !== "all" && category !== filter;
    });
  });
});
