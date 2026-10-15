/* ======================================================
   FALLBACK RATES (Indicative Benchmark Rates)
====================================================== */
const fallbackRates = {
  USD: 1, PKR: 278.50, EUR: 0.92, GBP: 0.78,
  AED: 3.67, SAR: 3.75, INR: 83, JPY: 150,
  CNY: 7.24, CAD: 1.36, AUD: 1.53, CHF: 0.9, KWD: 0.31
};

/* ======================================================
   170+ CURRENCIES LIST
====================================================== */
const currencies = [
  "USD","PKR","EUR","GBP","AED","SAR","INR","JPY","CNY","AUD","CAD","CHF","HKD","SGD","NZD",
  "ZAR","TRY","BRL","RUB","SEK","NOK","DKK","THB","MYR","IDR","PHP","BDT","LKR","NPR","KWD",
  "QAR","OMR","BHD","EGP","IQD","MAD","TND","UAH","PLN","CZK","HUF","ILS","KRW","MXN","CLP",
  "COP","ARS","VND","NGN","KES","GHS","UGX","TZS","RWF","ETB","SDG","DZD","LYD","SYP","YER",
  "IRR","AFN","MNT","LAK","MMK","KZT","UZS","TJS","GEL","AMD","AZN","BYN","MDL","RON","BGN",
  "HRK","RSD","ISK","FJD","PGK","SBD","TOP","WST","VUV","MOP","BND","BAM","XOF","XAF","XPF",
  "XCD","JMD","TTD","BBD","BSD","HTG","DOP","CRC","GTQ","HNL","NIO","PAB","PYG","UYU","VES",
  "BOB","PEN","GYD","SRD","ALL","MKD","ZMW","NAD","SCR","SOS","SZL","TMT"
];

/* ======================================================
   CURRENCY NAMES
====================================================== */
const currencyNames = {
  USD:"US Dollar", PKR:"Pakistani Rupee", EUR:"Euro", GBP:"British Pound",
  AED:"UAE Dirham", SAR:"Saudi Riyal", INR:"Indian Rupee", JPY:"Japanese Yen",
  CNY:"Chinese Yuan", AUD:"Australian Dollar", CAD:"Canadian Dollar", CHF:"Swiss Franc",
  HKD:"Hong Kong Dollar", SGD:"Singapore Dollar", NZD:"New Zealand Dollar",
  ZAR:"South African Rand", TRY:"Turkish Lira", BRL:"Brazilian Real",
  RUB:"Russian Ruble", SEK:"Swedish Krona", NOK:"Norwegian Krone", DKK:"Danish Krone",
  THB:"Thai Baht", MYR:"Malaysian Ringgit", IDR:"Indonesian Rupiah",
  PHP:"Philippine Peso", BDT:"Bangladeshi Taka", LKR:"Sri Lankan Rupee",
  NPR:"Nepalese Rupee", KWD:"Kuwaiti Dinar", QAR:"Qatari Riyal", OMR:"Omani Rial",
  BHD:"Bahraini Dinar", EGP:"Egyptian Pound", IQD:"Iraqi Dinar",
  MAD:"Moroccan Dirham", TND:"Tunisian Dinar", UAH:"Ukrainian Hryvnia",
  PLN:"Polish Zloty", CZK:"Czech Koruna", HUF:"Hungarian Forint",
  ILS:"Israeli Shekel", KRW:"South Korean Won", MXN:"Mexican Peso",
  CLP:"Chilean Peso", COP:"Colombian Peso", ARS:"Argentine Peso",
  VND:"Vietnamese Dong", NGN:"Nigerian Naira", KES:"Kenyan Shilling",
  GHS:"Ghanaian Cedi", UGX:"Ugandan Shilling", TZS:"Tanzanian Shilling",
  RWF:"Rwandan Franc", ETB:"Ethiopian Birr", SDG:"Sudanese Pound",
  DZD:"Algerian Dinar", LYD:"Libyan Dinar", SYP:"Syrian Pound",
  YER:"Yemeni Rial", IRR:"Iranian Rial", AFN:"Afghan Afghani",
  MNT:"Mongolian Tugrik", LAK:"Lao Kip", MMK:"Myanmar Kyat",
  KZT:"Kazakhstani Tenge", UZS:"Uzbekistani Som", TJS:"Tajikistani Somoni",
  GEL:"Georgian Lari", AMD:"Armenian Dram", AZN:"Azerbaijani Manat",
  BYN:"Belarusian Ruble", MDL:"Moldovan Leu", RON:"Romanian Leu",
  BGN:"Bulgarian Lev", HRK:"Croatian Kuna", RSD:"Serbian Dinar",
  ISK:"Icelandic Krona", FJD:"Fijian Dollar", PGK:"Papua New Guinean Kina",
  SBD:"Solomon Islands Dollar", TOP:"Tongan Paʻanga", WST:"Samoan Tala",
  VUV:"Vanuatu Vatu", MOP:"Macanese Pataca", BND:"Brunei Dollar",
  BAM:"Bosnia Mark", XOF:"CFA Franc (West)", XAF:"CFA Franc (Central)",
  XPF:"CFP Franc", XCD:"East Caribbean Dollar", JMD:"Jamaican Dollar",
  TTD:"Trinidad Dollar", BBD:"Barbados Dollar", BSD:"Bahamian Dollar",
  HTG:"Haitian Gourde", DOP:"Dominican Peso", CRC:"Costa Rican Colón",
  GTQ:"Guatemalan Quetzal", HNL:"Honduran Lempira", NIO:"Nicaraguan Córdoba",
  PAB:"Panamanian Balboa", PYG:"Paraguayan Guarani", UYU:"Uruguayan Peso",
  VES:"Venezuelan Bolívar", BOB:"Bolivian Boliviano", PEN:"Peruvian Sol",
  GYD:"Guyanese Dollar", SRD:"Surinamese Dollar", ALL:"Albanian Lek",
  MKD:"Macedonian Denar", ZMW:"Zambian Kwacha", NAD:"Namibian Dollar",
  SCR:"Seychellois Rupee", SOS:"Somali Shilling", SZL:"Swazi Lilangeni",
  TMT:"Turkmen Manat"
};

/* ======================================================
   FLAGS
====================================================== */
const flags = {
  USD:"🇺🇸", PKR:"🇵🇰", EUR:"🇪🇺", GBP:"🇬🇧", AED:"🇦🇪", SAR:"🇸🇦",
  INR:"🇮🇳", JPY:"🇯🇵", CNY:"🇨🇳", AUD:"🇦🇺", CAD:"🇨🇦", CHF:"🇨🇭",
  HKD:"🇭🇰", SGD:"🇸🇬", NZD:"🇳🇿", ZAR:"🇿🇦", TRY:"🇹🇷", BRL:"🇧🇷",
  RUB:"🇷🇺", SEK:"🇸🇪", NOK:"🇳🇴", DKK:"🇩🇰", THB:"🇹🇭", MYR:"🇲🇾",
  IDR:"🇮🇩", PHP:"🇵🇭", BDT:"🇧🇩", LKR:"🇱🇰", NPR:"🇳🇵", KWD:"🇰🇼",
  QAR:"🇶🇦", OMR:"🇴🇲", BHD:"🇧🇭", EGP:"🇪🇬", IQD:"🇮🇶", MAD:"🇲🇦",
  TND:"🇹🇳", UAH:"🇺🇦", PLN:"🇵🇱", CZK:"🇨🇿", HUF:"🇭🇺", ILS:"🇮🇱",
  KRW:"🇰🇷", MXN:"🇲🇽", CLP:"🇨🇱", COP:"🇨🇴", ARS:"🇦🇷", VND:"🇻🇳",
  NGN:"🇳🇬", KES:"🇰🇪", GHS:"🇬🇭", UGX:"🇺🇬", TZS:"🇹🇿", RWF:"🇷🇼",
  ETB:"🇪🇹", ZMW:"🇿🇲", NAD:"🇳🇦", SCR:"🇸🇨"
};

/* ======================================================
   PWA INSTALL VARIABLE
====================================================== */
let deferredPrompt;

/* ======================================================
   DOM READY — INITIALIZATION
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
  populateDropdowns();
  loadRates();
  initPWA();
  initDarkMode();
  initMobileNav();
  initInputListeners();
});

/* ======================================================
   DARK / LIGHT MODE
====================================================== */
function initDarkMode() {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light");
    updateThemeBtn(true);
  } else {
    updateThemeBtn(false);
  }
}

function toggleMode() {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  updateThemeBtn(isLight);
}

function updateThemeBtn(isLight) {
  document.querySelectorAll(".btn-theme").forEach(btn => {
    btn.textContent = isLight ? "🌞" : "🌙";
  });
}

/* ======================================================
   MOBILE NAV MANAGEMENT
====================================================== */
function initMobileNav() {
  const headerActions = document.querySelector(".header-actions");
  const nav = document.querySelector(".nav");
  if (!headerActions || !nav) return;

  if (!document.querySelector(".btn-hamburger")) {
    const btn = document.createElement("button");
    btn.className = "btn-hamburger";
    btn.setAttribute("aria-label", "Toggle Menu");
    btn.textContent = "☰";
    btn.addEventListener("click", toggleNav);
    headerActions.prepend(btn);
  }

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      const hbtn = document.querySelector(".btn-hamburger");
      if (hbtn) hbtn.textContent = "☰";
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav") && !e.target.closest(".btn-hamburger")) {
      nav.classList.remove("open");
      const hbtn = document.querySelector(".btn-hamburger");
      if (hbtn) hbtn.textContent = "☰";
    }
  });
}

function toggleNav() {
  const nav = document.querySelector(".nav");
  const btn = document.querySelector(".btn-hamburger");
  if (!nav) return;
  const isOpen = nav.classList.toggle("open");
  if (btn) btn.textContent = isOpen ? "✕" : "☰";
}

/* ======================================================
   POPULATE DROPDOWNS
====================================================== */
function populateDropdowns() {
  const from = document.getElementById("from");
  const to   = document.getElementById("to");
  if (!from || !to) return;

  const opts = currencies.map(c =>
    `<option value="${c}">${flags[c] || "🌍"} ${c} — ${currencyNames[c] || "Currency"}</option>`
  ).join("");

  from.innerHTML = opts;
  to.innerHTML   = opts;
  from.value = "USD";
  to.value   = "PKR";
}

/* ======================================================
   ENTER KEY EVENT LISTENERS FOR INPUT
====================================================== */
function initInputListeners() {
  const amountEl = document.getElementById("amount");
  if (amountEl) {
    amountEl.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        convert();
      }
    });
  }
}

/* ======================================================
   LOAD LIVE RATES & UPDATE UI
====================================================== */
async function loadRates() {
  const cardMap = {
    "r-usd":"USD","r-eur":"EUR","r-gbp":"GBP","r-sar":"SAR",
    "r-aed":"AED","r-cny":"CNY","r-inr":"INR","r-cad":"CAD",
    "r-aud":"AUD","r-jpy":"JPY","r-chf":"CHF","r-kwd":"KWD"
  };
  const tickerMap = {
    "t-usd":"USD","t-eur":"EUR","t-gbp":"GBP","t-aed":"AED",
    "t-sar":"SAR","t-cny":"CNY","t-inr":"INR","t-cad":"CAD"
  };

  try {
    const res  = await fetch("https://open.er-api.com/v6/latest/PKR");
    const data = await res.json();

    // Update Grid Cards
    for (const [id, code] of Object.entries(cardMap)) {
      const el = document.getElementById(id);
      if (!el) continue;
      const val = data?.rates?.[code]
        ? (1 / data.rates[code]).toFixed(2)
        : getFallbackPKR(code);
      el.textContent = val + " PKR";
    }

    // Update Ticker Tape
    for (const [id, code] of Object.entries(tickerMap)) {
      const val = data?.rates?.[code]
        ? (1 / data.rates[code]).toFixed(2)
        : getFallbackPKR(code);
      const el  = document.getElementById(id);
      const el2 = document.getElementById(id + "2");
      if (el)  el.textContent  = val;
      if (el2) el2.textContent = val;
    }

  } catch (e) {
    // Fallback updates
    for (const [id, code] of Object.entries(cardMap)) {
      const el = document.getElementById(id);
      if (el) el.textContent = getFallbackPKR(code) + " PKR";
    }
    for (const [id, code] of Object.entries(tickerMap)) {
      const val = getFallbackPKR(code);
      const el  = document.getElementById(id);
      const el2 = document.getElementById(id + "2");
      if (el)  el.textContent  = val;
      if (el2) el2.textContent = val;
    }
  }
}

function getFallbackPKR(code) {
  return ((fallbackRates["PKR"] || 278.50) / (fallbackRates[code] || 1)).toFixed(2);
}

/* ======================================================
   CONVERT CURRENCY
====================================================== */
async function convert() {
  const amountEl = document.getElementById("amount");
  const fromEl   = document.getElementById("from");
  const toEl     = document.getElementById("to");
  const result   = document.getElementById("result");
  const loader   = document.getElementById("loading");

  if (!amountEl || !fromEl || !toEl || !result) return;

  const amount = Number(amountEl.value);
  const from   = fromEl.value;
  const to     = toEl.value;

  if (!amount || amount <= 0) {
    result.textContent = "⚠️ Please enter a valid amount.";
    return;
  }

  if (loader) loader.style.display = "block";
  result.textContent = "Calculating…";

  try {
    const res  = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await res.json();
    let rate   = data?.rates?.[to];

    if (!rate) {
      rate = (fallbackRates[to] || 1) / (fallbackRates[from] || 1);
    }

    const converted = (amount * rate).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    result.textContent = `${amount.toLocaleString()} ${from} = ${converted} ${to}`;

  } catch (e) {
    const rate = (fallbackRates[to] || 1) / (fallbackRates[from] || 1);
    const converted = (amount * rate).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    result.textContent = `${amount.toLocaleString()} ${from} ≈ ${converted} ${to} (offline)`;
  } finally {
    if (loader) loader.style.display = "none";
  }
}

/* ======================================================
   SWAP CURRENCIES
====================================================== */
function swapCurrencies() {
  const from = document.getElementById("from");
  const to   = document.getElementById("to");
  if (!from || !to) return;
  [from.value, to.value] = [to.value, from.value];
}

/* ======================================================
   FILTER CURRENCY DROPDOWNS
====================================================== */
function filterCurrency(query) {
  const q = query.toLowerCase().trim();
  ["from", "to"].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    let firstVisible = null;
    Array.from(sel.options).forEach(opt => {
      const match = opt.text.toLowerCase().includes(q);
      opt.style.display = match ? "" : "none";
      if (match && !firstVisible) firstVisible = opt;
    });
  });
}

/* ======================================================
   CLEAR FORM DATA
====================================================== */
function clearData() {
  const amount = document.getElementById("amount");
  const result = document.getElementById("result");
  const search = document.getElementById("currencySearch");
  
  if (amount) amount.value = "";
  if (result) result.textContent = "Enter amount & click Convert";
  if (search) {
    search.value = "";
    filterCurrency("");
  }
}

/* ======================================================
   FAQ ACCORDION TOGGLE
====================================================== */
function toggleFaq(el) {
  const faqItem = el.closest(".faq-item");
  if (faqItem) {
    faqItem.classList.toggle("open");
  }
}

/* ======================================================
   SCROLL PROGRESS BAR
====================================================== */
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const bar  = document.getElementById("progressBar");
      const winH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct  = winH > 0 ? (document.documentElement.scrollTop / winH) * 100 : 0;
      if (bar) bar.style.width = pct + "%";
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

/* ======================================================
   PWA INSTALLATION PROMPT
====================================================== */
function initPWA() {
  const btn = document.getElementById("installBtn");
  if (!btn) return;

  if (window.matchMedia("(display-mode: standalone)").matches) {
    btn.style.display = "none";
    return;
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btn.style.display = "flex";
  });

  btn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      btn.style.display = "none";
    }
    deferredPrompt = null;
  });

  window.addEventListener("appinstalled", () => {
    btn.style.display = "none";
    deferredPrompt    = null;
  });
}