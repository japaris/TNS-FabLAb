const page = document.body.dataset.page;

if (page) {
  document.querySelectorAll('[data-page-link]').forEach((link) => {
    if (link.dataset.pageLink === page) {
      link.classList.add('active');
    }
  });
}

const yearTarget = document.getElementById('year');
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
