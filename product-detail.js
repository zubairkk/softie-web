const productCatalog = [
  {
    slug: "socom",
    name: "SoCom",
    category: "Communication",
    image: "https://grapners.com/images/services/banners/ai.webp",
    description: "Bring customer conversations and voice calls into one workspace, with AI support that keeps your team in control.",
    overview: "SoCom gives customer-facing teams a shared place to manage conversations, follow up with people, and handle calls. AI can help agents work through replies and long threads while people stay responsible for the customer experience.",
    features: [
      { title: "Shared conversation inbox", description: "Keep incoming customer messages organized in a central workspace for your team." },
      { title: "AI-assisted replies", description: "Help agents draft, refine, or summarize conversations without taking away their oversight." },
      { title: "Team assignment", description: "Make ownership clearer by assigning conversations to the right people and following their progress." },
      { title: "Voice and messaging", description: "Bring supported customer calls and messaging into a more connected service workflow." }
    ]
  },
  {
    slug: "intelligent-crm",
    name: "Intelligent CRM",
    category: "Sales",
    image: "https://grapners.com/images/services/banners/api.webp",
    description: "Keep contacts, opportunities, and sales activity connected, with AI assistance for a more focused sales process.",
    overview: "Intelligent CRM helps teams keep customer context close to the work of selling. Organize contacts, track opportunities through your pipeline, and use AI-supported sales insights to help decide what needs attention next.",
    features: [
      { title: "Contact workspace", description: "Keep customer profiles and the details your team needs together in one place." },
      { title: "Sales pipeline", description: "See opportunities by stage and keep next steps visible to the people responsible." },
      { title: "AI sales assistance", description: "Use AI support to surface useful context and help sales teams prepare their follow-ups." },
      { title: "Team visibility", description: "Review activity across the pipeline to understand progress and where a deal may need help." }
    ]
  },
  {
    slug: "membership-management",
    name: "Intelligent Membership Management",
    category: "Membership",
    image: "https://grapners.com/images/services/banners/ai.webp",
    description: "Manage member records, plans, payments, and engagement in one connected platform built to support the full membership journey.",
    overview: "Bring the administrative and community sides of membership together. Track member status, subscription changes, payment activity, events, and communications while using engagement signals to guide retention work.",
    features: [
      { title: "Member records", description: "Maintain searchable profiles, membership history, preferences, and account status." },
      { title: "Plans and renewals", description: "Organize plan types, subscription periods, upgrades, renewals, and cancellations." },
      { title: "Payments and reminders", description: "Follow fees, invoices, balances, and payment reminders alongside member activity." },
      { title: "Engagement insights", description: "Review attendance and renewal patterns to identify members who may need outreach." }
    ]
  },
  {
    slug: "web-chatbot-saas",
    name: "Intelligent Web Chatbot SaaS",
    category: "SaaS",
    image: "https://grapners.com/images/services/banners/support.webp",
    description: "Create and manage AI chatbots for websites through a multi-tenant platform for training, deployment, and growth.",
    overview: "This platform gives chatbot providers a way to manage separate customer workspaces and the bots they serve. Organize bot setup, training materials, and website deployment in a single SaaS workflow.",
    features: [
      { title: "Multi-tenant workspaces", description: "Separate customer environments so each organization can manage its own chatbot setup." },
      { title: "Bot training workflow", description: "Prepare and maintain the information a chatbot uses to answer website visitors." },
      { title: "Website deployment", description: "Publish a configured chatbot experience for visitors on a customer website." },
      { title: "Platform operations", description: "Manage the customer and bot lifecycle from a central SaaS administration view." }
    ]
  },
  {
    slug: "ticket-management",
    name: "Intelligent Complaint & Ticket Management",
    category: "Support",
    image: "https://grapners.com/images/services/banners/custom.webp",
    description: "Give support teams a clearer way to receive, prioritize, route, and resolve customer complaints and requests.",
    overview: "Bring support requests into an organized helpdesk workflow. AI can help classify incoming tickets and prepare response drafts, while your team handles assignment, investigation, and resolution.",
    features: [
      { title: "Organized ticket queue", description: "Keep customer issues visible with a shared record of status and ownership." },
      { title: "AI-assisted classification", description: "Use suggested categories to help teams sort incoming requests more consistently." },
      { title: "Routing and assignment", description: "Direct issues to the right support team or agent and keep responsibility clear." },
      { title: "Reply drafting", description: "Help agents prepare responses faster while leaving review and sending in human hands." }
    ]
  },
  {
    slug: "wholesale-management",
    name: "Intelligent Wholesale Management System",
    category: "Commerce",
    image: "https://grapners.com/images/services/banners/ecommerce.webp",
    description: "Connect wholesale inventory, B2B orders, and pricing in one operational view, with AI-assisted demand planning.",
    overview: "Coordinate the core workflows behind wholesale sales, from stock and customer orders to account-specific pricing. Use demand signals to support better planning across products and warehouses.",
    features: [
      { title: "Inventory overview", description: "Monitor product availability across the stock locations used by your operation." },
      { title: "B2B order flow", description: "Manage wholesale orders and keep order progress connected to fulfillment." },
      { title: "Customer pricing", description: "Organize wholesale price rules and product terms for business customers." },
      { title: "Demand forecasting", description: "Use AI-supported demand signals to inform replenishment and purchasing decisions." }
    ]
  },
  {
    slug: "restaurant-pos",
    name: "Intelligent Restaurant POS with Bots",
    category: "Hospitality",
    image: "https://grapners.com/images/services/banners/software.webp",
    description: "Coordinate restaurant sales and service with a POS, kitchen display, and AI-supported ordering experiences.",
    overview: "Connect front-of-house ordering with kitchen operations so staff can keep service moving. Ordering bots and table-side automation can support the guest journey alongside the core point-of-sale workflow.",
    features: [
      { title: "Restaurant point of sale", description: "Keep order entry and sales activity within a workflow designed for restaurant service." },
      { title: "AI ordering bots", description: "Offer an automated ordering channel to support guests and staff during service." },
      { title: "Kitchen display", description: "Make incoming orders easier for kitchen teams to review and prepare." },
      { title: "Table-side workflows", description: "Support service tasks around the table with connected ordering and automation." }
    ]
  },
  {
    slug: "accounts-ledger",
    name: "Accounts & Ledger Application",
    category: "Finance",
    image: "https://grapners.com/images/services/banners/uiux.webp",
    description: "Keep day-to-day accounting organized with double-entry records, vouchers, ledgers, and clear financial reports.",
    overview: "A practical accounting workspace for small and growing businesses. Record transactions through vouchers, keep ledger balances connected, and review financial activity through structured reports.",
    features: [
      { title: "Double-entry accounting", description: "Record transactions with corresponding debit and credit entries for balanced books." },
      { title: "Ledgers and accounts", description: "Organize account activity and review balances in a consistent structure." },
      { title: "Voucher management", description: "Capture common financial transactions through a clear voucher-based process." },
      { title: "Financial reporting", description: "Review business activity through reports designed to make the numbers easier to follow." }
    ]
  },
  {
    slug: "rental-management",
    name: "Intelligent Rental Management",
    category: "Real estate",
    image: "https://grapners.com/images/services/banners/ai.webp",
    description: "Coordinate properties, tenants, leases, rent, and maintenance in one place, with AI insights for property operations.",
    overview: "Bring rental records and recurring tasks together so property teams can see what is happening across buildings and units. Keep tenant communication, lease dates, payments, and maintenance work connected.",
    features: [
      { title: "Property and tenant records", description: "Track buildings, units, occupancy, tenant details, and rental history together." },
      { title: "Lease and payment tracking", description: "Keep agreements, renewals, rent activity, deposits, and due dates visible." },
      { title: "Maintenance workflows", description: "Capture service requests, assign work, and follow maintenance progress." },
      { title: "AI operational insights", description: "Use AI-assisted summaries to help review payment patterns and property performance." }
    ]
  },
  {
    slug: "grapinvo",
    name: "GrapInvo",
    category: "Finance",
    image: "https://grapners.com/images/services/banners/ai.webp",
    description: "Prepare FBR-connected digital invoices with AI-assisted drafting, validation guidance, official numbering, QR codes, and branded PDFs.",
    overview: "GrapInvo supports digital invoicing workflows for businesses that need to prepare and manage invoices for FBR integration. AI assistance can help with draft creation and validation clarity while people remain in control of review and submission.",
    features: [
      { title: "AI-assisted invoice drafts", description: "Turn source details or plain-language input into a draft that a team member can review." },
      { title: "Validation guidance", description: "Make potential invoice issues easier to understand before proceeding with the workflow." },
      { title: "Business invoice setup", description: "Manage company-specific details and preferences used in invoice preparation." },
      { title: "Invoice output", description: "Create branded invoice documents with numbering and QR code support." }
    ]
  },
  {
    slug: "parking-management",
    name: "Intelligent Parking Management System",
    category: "Operations",
    image: "https://grapners.com/images/services/banners/enterprise.webp",
    description: "Improve parking operations with AI occupancy visibility, payment workflows, and real-time guidance to available spaces.",
    overview: "Help drivers and operators make better use of parking capacity. Bring occupancy, payment activity, and space guidance into a coordinated view across your parking operation.",
    features: [
      { title: "Occupancy visibility", description: "Review parking availability with AI-supported occupancy tracking." },
      { title: "Space guidance", description: "Help drivers find open spaces with up-to-date slot information." },
      { title: "Payment workflows", description: "Connect parking usage with the payment steps needed by your operation." },
      { title: "Operational overview", description: "Give parking teams a clearer view of site activity and capacity." }
    ]
  },
  {
    slug: "event-access",
    name: "Event Access Management",
    category: "Events",
    image: "https://grapners.com/images/services/banners/data-analytics.webp",
    description: "Manage event tickets, attendee badges, and entry control with a check-in workflow designed to keep gates moving.",
    overview: "Coordinate attendee access from ticket preparation through arrival at the venue. Keep credentials and entry checks organized for teams managing events of different sizes.",
    features: [
      { title: "Ticketing workflow", description: "Keep ticket and attendee access details organized ahead of event day." },
      { title: "Badge management", description: "Prepare event credentials to help staff identify attendees at entry points." },
      { title: "Gate control", description: "Manage access checks across event entrances with a consistent process." },
      { title: "Fast check-in", description: "Support a smoother arrival experience with a focused attendee check-in flow." }
    ]
  },
  {
    slug: "fleet-management",
    name: "Intelligent Fleet Management System",
    category: "Logistics",
    image: "https://grapners.com/images/services/banners/cloud.webp",
    description: "Keep vehicles, drivers, and maintenance connected, with fleet tracking and AI-supported route and utilization insights.",
    overview: "Give fleet teams a unified view of vehicle activity and upkeep. Bring tracking, driver information, and maintenance planning together, then use operational signals to review routing and vehicle utilization.",
    features: [
      { title: "Fleet tracking", description: "Keep vehicle activity visible to the people coordinating day-to-day operations." },
      { title: "Driver coordination", description: "Organize driver details alongside the vehicles and work they support." },
      { title: "Maintenance planning", description: "Track service needs and maintenance history to help keep vehicles ready." },
      { title: "AI route and usage insights", description: "Review route and utilization patterns to support better fleet decisions." }
    ]
  },
  {
    slug: "isp-management",
    name: "Intelligent ISP Management System",
    category: "Telecom",
    image: "https://grapners.com/images/services/banners/it.webp",
    description: "Connect subscriber records, ISP billing, network operations, and AI-assisted support for broadband teams.",
    overview: "Bring the customer and operational sides of an internet service provider into a more connected workspace. Keep subscriber accounts and billing close to the network and support work teams handle every day.",
    features: [
      { title: "Subscriber management", description: "Maintain customer accounts and service details in an organized view." },
      { title: "ISP billing", description: "Coordinate recurring service billing with subscriber and account information." },
      { title: "Network operations", description: "Keep operational work connected to the broadband services customers rely on." },
      { title: "AI support assistance", description: "Help support teams work through common customer questions with AI assistance." }
    ]
  },
  {
    slug: "gymflow",
    name: "GymFlow",
    category: "Fitness",
    image: "https://grapners.com/images/services/banners/ai.webp",
    description: "Coordinate gym memberships, classes, and trainers with AI-supported tools for member engagement.",
    overview: "GymFlow brings fitness operations into one management workflow. Keep track of memberships and class activity, support trainers in their day-to-day work, and use engagement signals to help members stay connected.",
    features: [
      { title: "Membership management", description: "Organize member profiles, membership status, and renewals." },
      { title: "Classes and schedules", description: "Coordinate class information and member participation." },
      { title: "Trainer workflows", description: "Keep trainer details and activity connected to the gym's services." },
      { title: "Member engagement", description: "Use AI-supported engagement insights to help guide member outreach." }
    ]
  },
  {
    slug: "hr-payroll",
    name: "Intelligent HR & Payroll Management",
    category: "Human resources",
    image: "https://grapners.com/images/services/banners/enterprise.webp",
    description: "Manage employee records, attendance, leave, and payroll with AI assistance across the employee lifecycle.",
    overview: "Connect core HR administration and payroll work in one place. Give teams a clearer view of employee information and recurring processes, with AI assistance for common tasks and questions.",
    features: [
      { title: "Employee records", description: "Keep employee information organized through the stages of their employment." },
      { title: "Attendance and leave", description: "Track attendance and leave activity alongside employee records." },
      { title: "Payroll workflows", description: "Coordinate payroll tasks with the HR information teams already manage." },
      { title: "AI HR assistance", description: "Use AI support to help staff navigate routine employee lifecycle workflows." }
    ]
  },
  {
    slug: "careflow",
    name: "Careflow",
    category: "Healthcare",
    image: "https://grapners.com/images/services/banners/app.webp",
    description: "Run multi-branch outpatient care with connected clinic administration, clinical workflows, diagnostics, pharmacy, billing, and patient engagement.",
    overview: "Careflow brings key clinic operations together for outpatient practices that need to coordinate teams and services across branches. It supports patient and appointment workflows alongside clinical records, diagnostics, pharmacy, billing, and patient-facing tools, with on-premise deployment available.",
    features: [
      { title: "Clinic and branch operations", description: "Manage organization settings, staff, practitioners, and multi-branch operations." },
      { title: "Patient care workflows", description: "Coordinate patient records, scheduling, queues, and clinical encounter documentation." },
      { title: "Diagnostics and pharmacy", description: "Connect laboratory and imaging requests with pharmacy workflows and patient care." },
      { title: "Billing and patient access", description: "Support billing and patient engagement through a connected clinic platform." }
    ]
  },
  {
    slug: "travel-management",
    name: "Intelligent Travel Agency Management",
    category: "Travel",
    image: "https://grapners.com/images/services/banners/app2.webp",
    description: "Bring travel packages, bookings, and agent workflows together, with AI assistance for itinerary planning.",
    overview: "Give travel teams a shared way to manage customer requests and the work behind each trip. Keep package information and booking activity visible to agents while using AI support to help shape itineraries.",
    features: [
      { title: "Travel packages", description: "Organize the trips and package details your agency offers to customers." },
      { title: "Booking coordination", description: "Keep booking activity connected to the customer and the trip being planned." },
      { title: "Agent workspace", description: "Help agents follow customer requests and coordinate their travel arrangements." },
      { title: "AI itinerary assistance", description: "Use AI support to help develop itinerary ideas around a traveler's needs." }
    ]
  }
];

const productPage = document.querySelector("[data-product-page]");
const productNotFound = document.querySelector("[data-product-not-found]");
const productSlug = new URLSearchParams(window.location.search).get("product");
const product = productCatalog.find((item) => item.slug === productSlug);

if (product && productPage && productNotFound) {
  document.title = `${product.name} | SoftieLab`;
  document.querySelector('meta[name="description"]').setAttribute("content", product.description);
  document.querySelector("[data-product-category]").textContent = product.category;
  document.querySelector("[data-product-category-label]").textContent = `${product.category} platform`;
  document.querySelector("[data-product-title]").textContent = product.name;
  document.querySelector("[data-product-description]").textContent = product.description;
  document.querySelector("[data-product-overview-title]").textContent = `A clearer way to manage ${product.name}`;
  document.querySelector("[data-product-overview]").textContent = product.overview;
  document.querySelector("[data-product-cta-name]").textContent = product.name;

  const productImage = document.querySelector("[data-product-image]");
  productImage.src = product.image;
  productImage.alt = `${product.name} product visual`;

  const featureGrid = document.querySelector("[data-product-features]");
  product.features.forEach((feature, index) => {
    const card = document.createElement("article");
    const number = document.createElement("span");
    const heading = document.createElement("h3");
    const description = document.createElement("p");

    card.className = "detail-card product-feature-card";
    number.className = "product-feature-number";
    number.textContent = String(index + 1).padStart(2, "0");
    heading.textContent = feature.title;
    description.textContent = feature.description;
    card.append(number, heading, description);
    featureGrid.append(card);
  });
} else {
  if (!productPage || !productNotFound) {
    console.error("Product detail page is missing its required content containers.");
  } else {
    productPage.hidden = true;
    productNotFound.hidden = false;
    document.title = "Product not found | SoftieLab";
  }
}
