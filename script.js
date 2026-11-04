const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const homeHeader = document.querySelector(".home-header");
const hero = document.querySelector(".hero");

const revealTargets = Array.from(document.querySelectorAll(
  ".hero-copy, .hero-art, .hero-scroll, .intro-grid, .home-about-images, .trusted-copy, " +
  ".trusted-list > div, .section-kicker, .section-heading, .service-card, .process-top, " +
  ".step, .engagement, .case-feature, .quote-heading, .quote-wrap, .industry-grid article, " +
  ".location-grid article, .contact-copy, .contact-form, .page-hero-inner, .about-hero-copy, " +
  ".about-image-grid, .page-intro, .page-heading, .page-stat-grid article, .detail-card, " +
  ".case-card, .process-list li, .image-card, .partner-grid article, .page-cta, " +
  ".site-footer .footer-brand, .site-footer .footer-links, .site-footer .footer-project, " +
  ".site-footer .footer-bottom",
));

if (revealTargets.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal-on-scroll");
    element.classList.add(index % 2 === 0 ? "reveal-from-left" : "reveal-from-right");
    element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
  });

  document.documentElement.classList.add("has-motion");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.08 });

    revealTargets.forEach((element) => revealObserver.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  }
}

const caseTrack = document.querySelector(".home-case-grid");
if (caseTrack) {
  const caseCards = Array.from(caseTrack.querySelectorAll(".case-feature"));
  const caseScrollAmount = () => {
    const gap = parseFloat(getComputedStyle(caseTrack).columnGap) || 0;
    return (caseCards[0]?.getBoundingClientRect().width || 0) + gap;
  };

  document.querySelector(".case-carousel-prev")?.addEventListener("click", () => {
    caseTrack.scrollBy({ left: -caseScrollAmount(), behavior: "smooth" });
  });
  document.querySelector(".case-carousel-next")?.addEventListener("click", () => {
    caseTrack.scrollBy({ left: caseScrollAmount(), behavior: "smooth" });
  });
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
  [0, 1].forEach((offset) => {
    const testimonial = testimonials[(testimonialIndex + offset) % testimonials.length];
    const cardNumber = offset + 1;
    document.querySelector(`#quote-text-${cardNumber}`).textContent = testimonial.quote;
    document.querySelector(`#quote-avatar-${cardNumber}`).textContent = testimonial.initials;
    document.querySelector(`#quote-name-${cardNumber}`).textContent = testimonial.name;
    document.querySelector(`#quote-role-${cardNumber}`).textContent = testimonial.role;
  });
  document.querySelector("#quote-count-current").textContent = String(testimonialIndex + 1).padStart(2, "0");
  document.querySelector("#quote-count-total").textContent = String(testimonials.length).padStart(2, "0");
}

document.querySelector(".quote-prev")?.addEventListener("click", () => showTestimonial(testimonialIndex - 1));
document.querySelector(".quote-next")?.addEventListener("click", () => showTestimonial(testimonialIndex + 1));

const serviceSlider = document.querySelector(".hero-service-slider");
if (serviceSlider) {
  const slides = [
    {
      title: "Custom Software Development",
      description: "Purpose-built digital tools, designed around the way your business works.",
      image: "https://grapners.com/images/services/banners/software.webp",
      alt: "Custom software development visualization",
    },
    {
      title: "Web Application Development",
      description: "Responsive web products that help customers and teams get more done.",
      image: "https://grapners.com/images/services/banners/web.webp",
      alt: "Web application development visualization",
    },
    {
      title: "Mobile App Development",
      description: "Useful, intuitive mobile experiences for the moments that matter.",
      image: "https://grapners.com/images/services/banners/app2.webp",
      alt: "Mobile app development visualization",
    },
    {
      title: "Cloud Solutions",
      description: "Secure cloud foundations that help your product grow with confidence.",
      image: "https://grapners.com/images/services/banners/cloud.webp",
      alt: "Cloud solutions visualization",
    },
    {
      title: "UI/UX Design",
      description: "Thoughtful product experiences that feel clear from the first interaction.",
      image: "https://grapners.com/images/services/banners/uiux.webp",
      alt: "User experience and interface design visualization",
    },
    {
      title: "AI & Machine Learning Solutions",
      description: "Practical AI features that turn useful data into smarter workflows.",
      image: "https://grapners.com/images/services/banners/ai.webp",
      alt: "Artificial intelligence and machine learning visualization",
    },
  ];
  const sliderImage = serviceSlider.querySelector(".hero-slider-image");
  const title = serviceSlider.querySelector(".hero-slider-title");
  const description = serviceSlider.querySelector(".hero-slider-description");
  const slideIndex = serviceSlider.querySelector(".hero-slider-index");
  const dots = Array.from(serviceSlider.querySelectorAll(".hero-slider-dots button"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let currentSlide = 0;
  let timer;
  let slideTransition;
  let isPaused = reducedMotion;

  const showServiceSlide = (index) => {
    currentSlide = (index + slides.length) % slides.length;
    const slide = slides[currentSlide];
    window.clearTimeout(slideTransition);
    serviceSlider.classList.add("is-transitioning");
    slideTransition = window.setTimeout(() => {
      sliderImage.src = slide.image;
      sliderImage.alt = slide.alt;
      title.textContent = slide.title;
      description.textContent = slide.description;
      slideIndex.textContent = `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
      dots.forEach((dot, dotIndex) => {
        if (dotIndex === currentSlide) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      serviceSlider.classList.remove("is-transitioning");
    }, 180);
  };
  const stopServiceTimer = () => window.clearInterval(timer);
  const startServiceTimer = () => {
    stopServiceTimer();
    if (!isPaused && !document.hidden) {
      timer = window.setInterval(() => showServiceSlide(currentSlide + 1), 4800);
    }
  };
  const pauseButton = serviceSlider.querySelector(".hero-slider-pause");
  const setPaused = (paused) => {
    isPaused = paused;
    pauseButton.setAttribute("aria-label", paused ? "Play service slider" : "Pause service slider");
    pauseButton.textContent = paused ? "▶" : "Ⅱ";
    startServiceTimer();
  };

  serviceSlider.querySelector(".hero-slider-prev").addEventListener("click", () => showServiceSlide(currentSlide - 1));
  serviceSlider.querySelector(".hero-slider-next").addEventListener("click", () => showServiceSlide(currentSlide + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => showServiceSlide(index)));
  pauseButton.addEventListener("click", () => setPaused(!isPaused));
  serviceSlider.addEventListener("mouseenter", stopServiceTimer);
  serviceSlider.addEventListener("mouseleave", startServiceTimer);
  serviceSlider.addEventListener("focusin", stopServiceTimer);
  serviceSlider.addEventListener("focusout", (event) => {
    if (!serviceSlider.contains(event.relatedTarget)) startServiceTimer();
  });
  document.addEventListener("visibilitychange", startServiceTimer);
  startServiceTimer();
}

const parallaxImages = Array.from(document.querySelectorAll(
  ".home-about-images img, .about-image-grid img, .service-card .service-image, " +
  ".image-card > img, .case-image-wrap > img, .product-detail-visual > img",
));
if (parallaxImages.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let parallaxFrame = 0;
  const updateParallax = () => {
    parallaxFrame = 0;
    const viewportCenter = window.innerHeight / 2;
    parallaxImages.forEach((image) => {
      const bounds = image.getBoundingClientRect();
      if (bounds.bottom < -80 || bounds.top > window.innerHeight + 80) return;
      const distanceFromCenter = viewportCenter - (bounds.top + bounds.height / 2);
      const offset = Math.max(-14, Math.min(14, distanceFromCenter * .035));
      image.style.setProperty("--parallax-offset", `${offset.toFixed(1)}px`);
    });
  };
  const scheduleParallax = () => {
    if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateParallax);
  };

  scheduleParallax();
  window.addEventListener("scroll", scheduleParallax, { passive: true });
  window.addEventListener("resize", scheduleParallax);
}

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
