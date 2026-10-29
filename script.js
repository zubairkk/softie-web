const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const homeHeader = document.querySelector(".home-header");
const hero = document.querySelector(".hero");

const revealTargets = Array.from(document.querySelectorAll(
  ".intro-grid, .home-about-images, .service-card, .process-top, .step, .engagement, .case-feature, " +
  ".quote-heading, .quote-wrap, .trusted, .industry-grid article, .location-grid article, " +
  ".contact-copy, .contact-form, .page-hero-inner, .about-hero-copy, .about-image-grid, " +
  ".page-intro, .page-heading, .page-stat-grid article, .detail-card, .case-card, " +
  ".process-list li, .image-card, .partner-grid article, .page-cta",
));

if (revealTargets.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.style.setProperty("--reveal-delay", `${(index % 5) * 55}ms`);
  });

  document.documentElement.classList.add("has-motion");

  let pendingRevealTargets = revealTargets;
  let revealCheckScheduled = false;
  const revealVisibleTargets = () => {
    if (revealCheckScheduled) return;
    revealCheckScheduled = true;

    window.requestAnimationFrame(() => {
      revealCheckScheduled = false;
      pendingRevealTargets = pendingRevealTargets.filter((element) => {
        const bounds = element.getBoundingClientRect();
        if (bounds.top < window.innerHeight - 36 && bounds.bottom > 0) {
          element.classList.add("is-visible");
          return false;
        }
        return true;
      });

      if (!pendingRevealTargets.length) {
        window.removeEventListener("scroll", revealVisibleTargets);
        window.removeEventListener("resize", revealVisibleTargets);
      }
    });
  };

  revealVisibleTargets();
  window.addEventListener("scroll", revealVisibleTargets, { passive: true });
  window.addEventListener("resize", revealVisibleTargets);
}

if (homeHeader && hero) {
  const updateHomeHeaderBackground = () => {
    homeHeader.classList.toggle("solid-background", hero.getBoundingClientRect().bottom <= homeHeader.offsetHeight);
  };

  updateHomeHeaderBackground();
  window.addEventListener("scroll", updateHomeHeaderBackground, { passive: true });
  window.addEventListener("resize", updateHomeHeaderBackground);
}

const updateScrollProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
  document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
};

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

if (menuToggle && mainNav) {
  let menuScrollY = 0;
  let previousBodyStyles;
  const setMenuOpen = (isOpen) => {
    if (isOpen) {
      menuScrollY = window.scrollY;
      previousBodyStyles = {
        position: document.body.style.position,
        top: document.body.style.top,
        width: document.body.style.width,
      };
      document.body.style.position = "fixed";
      document.body.style.top = `-${menuScrollY}px`;
      document.body.style.width = "100%";
    }

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    mainNav.classList.toggle("open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    document.documentElement.classList.toggle("menu-open", isOpen);

    if (!isOpen && previousBodyStyles) {
      document.body.style.position = previousBodyStyles.position;
      document.body.style.top = previousBodyStyles.top;
      document.body.style.width = previousBodyStyles.width;
      previousBodyStyles = undefined;
      window.scrollTo(0, menuScrollY);
    }
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus({ preventScroll: true });
    }
  });
}

const themeToggle = document.querySelector(".theme-toggle");
themeToggle?.addEventListener("click", (event) => {
  const isDark = document.body.classList.toggle("dark-theme");
  event.currentTarget.textContent = isDark ? "☾" : "☼";
  event.currentTarget.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
});

const testimonials = [
  {
    quote: "SoftieLab helped us move our operations from spreadsheets to a proper web-based system. The team understood what we actually needed instead of just building what was written in the initial requirements.",
    initials: "AR",
    name: "Ahmed Raza",
    role: "Founder | Retail Business",
  },
  {
    quote: "We had a fairly complex workflow with multiple user roles and approval steps. SoftieLab handled the development well and, more importantly, were responsive whenever we needed changes during testing.",
    initials: "SK",
    name: "Sarah Khan",
    role: "Product Manager | FinTech Company",
  },
  {
    quote: "The biggest improvement for us was visibility. We can now track orders, team activity, and operational issues from one place. The development process was straightforward and communication was consistent.",
    initials: "MH",
    name: "Muhammad Hamza",
    role: "Operations Manager | Logistics Company",
  },
  {
    quote: "SoftieLab joined the project when we already had a partially developed product. They cleaned up several existing issues and helped us get the platform into a much more maintainable state.",
    initials: "DW",
    name: "Daniel Wilson",
    role: "CEO | Technology Startup",
  },
  {
    quote: "We needed something that could handle both students and administrators without making the interface complicated. SoftieLab did a good job balancing the technical requirements with the actual user experience.",
    initials: "AM",
    name: "Ayesha Malik",
    role: "Director | Education Platform",
  },
  {
    quote: "Our previous website was becoming difficult to manage as the business grew. SoftieLab rebuilt the core parts of the platform and gave us a much better structure for adding new features.",
    initials: "BA",
    name: "Bilal Ahmed",
    role: "Co-Founder | E-Commerce Brand",
  },
  {
    quote: "What stood out was their willingness to discuss the problem before jumping into development. In a few cases, they suggested simpler approaches that saved us development time.",
    initials: "JC",
    name: "James Carter",
    role: "Managing Director | Digital Services",
  },
  {
    quote: "We had a lot of small requirements that were easy to overlook. SoftieLab kept track of those details and worked closely with our team during testing to make sure the final system matched our workflow.",
    initials: "FN",
    name: "Fatima Noor",
    role: "Project Manager | Healthcare Services",
  },
  {
    quote: "The project involved multiple dashboards, permissions, and reporting requirements. It took some iterations to get everything right, but the team stayed involved until the system was working properly.",
    initials: "UT",
    name: "Usman Tariq",
    role: "Founder | Property Management Company",
  },
  {
    quote: "SoftieLab became an extension of our development team rather than just an outsourced vendor. Their developers were comfortable discussing architecture, APIs, database design, and deployment requirements with our engineers.",
    initials: "MB",
    name: "Michael Brown",
    role: "CTO | SaaS Company",
  },
  {
    quote: "We wanted a cleaner online shopping experience without losing the flexibility of our existing process. The new platform is easier for our staff to manage and considerably easier for customers to navigate.",
    initials: "HS",
    name: "Hira Shah",
    role: "Business Owner | Fashion & Retail",
  },
  {
    quote: "Our system needed to process a large amount of operational data while keeping the interface simple for daily users. SoftieLab understood that balance and worked through the requirements with us step by step.",
    initials: "OF",
    name: "Omar Farooq",
    role: "Operations Director | Transportation Company",
  },
  {
    quote: "We started with a fairly basic product idea and the requirements changed several times along the way. SoftieLab adapted to those changes without losing sight of the original business objective.",
    initials: "RM",
    name: "Ryan Mitchell",
    role: "Founder | Startup",
  },
  {
    quote: "The team was particularly helpful with the parts of the project that were outside our technical knowledge. They explained the options clearly and helped us make practical decisions instead of overcomplicating things.",
    initials: "ZI",
    name: "Zainab Iqbal",
    role: "Marketing Director | Consumer Brand",
  },
  {
    quote: "Security, user permissions, and transaction workflows were major concerns for us. SoftieLab took those requirements seriously and worked closely with our team during development and testing.",
    initials: "HA",
    name: "Hassan Ali",
    role: "CEO | Financial Services",
  },
  {
    quote: "We needed a development partner who could work with an existing product rather than starting everything from scratch. SoftieLab integrated with our workflow quickly and handled both new development and ongoing fixes.",
    initials: "ER",
    name: "Emma Roberts",
    role: "Product Owner | Software Company",
  },
  {
    quote: "The project involved several different teams and stakeholders, so coordination was important. SoftieLab kept the technical side organized and gave us regular updates throughout development.",
    initials: "SK",
    name: "Saad Khan",
    role: "Business Development Manager | Logistics",
  },
  {
    quote: "We launched the first version quickly and then continued improving it based on actual customer feedback. SoftieLab were able to work with that iterative approach rather than treating the original scope as fixed.",
    initials: "AH",
    name: "Ali Hassan",
    role: "Founder | E-Commerce Startup",
  },
  {
    quote: "Before the project, several of our internal processes were handled manually. The solution SoftieLab developed has reduced that repetitive work and made it much easier for our team to see what is happening across the business.",
    initials: "NG",
    name: "Natalie Green",
    role: "COO | Professional Services Firm",
  },
  {
    quote: "SoftieLab were easy to work with from the initial discussion through deployment. They were open about technical limitations, suggested alternatives when necessary, and remained available after the initial launch.",
    initials: "IS",
    name: "Imran Sheikh",
    role: "Managing Partner | Business Consulting Firm",
  },
];
let testimonialIndex = 0;

function showTestimonial(index) {
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  const testimonial = testimonials[testimonialIndex];
  document.querySelector("#quote-text").textContent = testimonial.quote;
  document.querySelector(".quote-avatar").textContent = testimonial.initials;
  document.querySelector(".quote-person strong").textContent = testimonial.name;
  document.querySelector(".quote-person small").textContent = testimonial.role;
  document.querySelector("#quote-count").textContent = `${String(testimonialIndex + 1).padStart(2, "0")} / ${String(testimonials.length).padStart(2, "0")}`;
}

document.querySelector(".quote-prev")?.addEventListener("click", () => showTestimonial(testimonialIndex - 1));
document.querySelector(".quote-next")?.addEventListener("click", () => showTestimonial(testimonialIndex + 1));

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  document.querySelector(".form-message").textContent = "Thanks for reaching out! Your email app is ready to send your note.";
  const formData = new FormData(form);
  const subject = encodeURIComponent(`Project enquiry from ${formData.get("name")}`);
  const body = encodeURIComponent(
    `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nProject: ${formData.get("project")}\n\n${formData.get("message")}`,
  );
  window.location.href = `mailto:info@grapners.com?subject=${subject}&body=${body}`;
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
