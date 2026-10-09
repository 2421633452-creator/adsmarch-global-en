(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  34977,
  (e) => {
    "use strict";
    var t = e.i(43476),
      a = e.i(71645),
      s = e.i(67577),
      l = e.i(45020);
    let n = [
        {
          id: "enter-market",
          name: "Enter a New Market",
          en: "Enter a New Market",
          desc: "From zero to first launch: settle the market and channels first.",
          capabilities: ["accounts", "media", "creative"],
        },
        {
          id: "acquire-customers",
          name: "Acquire More Customers",
          en: "Acquire More Customers",
          desc: "Build a scalable acquisition model on the core digital channels.",
          capabilities: ["media", "creative"],
        },
        {
          id: "scale-market",
          name: "Scale an Existing Market",
          en: "Scale an Existing Market",
          desc: "You have channels that already work and want to scale them.",
          capabilities: ["media", "creative"],
        },
        {
          id: "grow-app",
          name: "Grow an App",
          en: "Grow an App",
          desc: "Building install volume while controlling retention and unit cost.",
          capabilities: ["appstore", "media", "creative"],
        },
        {
          id: "grow-ecommerce",
          name: "Grow E-commerce",
          en: "Grow E-commerce",
          desc: "Turn traffic into orders and make repeat purchase happen.",
          capabilities: ["commerce", "media", "creative"],
        },
        {
          id: "global-brand",
          name: "Build a Global Brand",
          en: "Build a Global Brand",
          desc: "Make your target market remember who you are, not just see an ad once.",
          capabilities: ["creative", "influencer", "search"],
        },
      ],
      i = [
        { id: "us", name: "United States", en: "United States", featured: !0, hint: "You can specify a state or city" },
        { id: "au", name: "Australia", en: "Australia", featured: !0 },
        { id: "nz", name: "New Zealand", en: "New Zealand", featured: !0 },
        { id: "eu", name: "Europe", en: "Europe", hint: "You can specify countries, such as Germany, France or the UK" },
        { id: "sea", name: "Southeast Asia", en: "Southeast Asia", hint: "You can specify countries, such as Indonesia, Thailand or Vietnam" },
        { id: "other", name: "Other Markets", en: "Other Markets", hint: "Enter any market you want to move into" },
      ],
      r = [
        {
          id: "awareness",
          name: "Build Awareness",
          en: "Build Awareness",
          desc: "Let people in your target market know who you are.",
          capabilities: ["creative", "influencer", "strategy"],
        },
        {
          id: "users",
          name: "Acquire Users",
          en: "Acquire Users",
          desc: "Grow the user base - and keep it growing.",
          capabilities: ["media", "creative", "data"],
        },
        {
          id: "conversion",
          name: "Improve Conversion",
          en: "Improve Conversion",
          desc: "Traffic is there, but it does not become orders or payments.",
          capabilities: ["commerce", "creative", "data"],
        },
        {
          id: "organic",
          name: "Build Organic Growth",
          en: "Build Organic Growth",
          desc: "Be found and cited without constantly increasing the budget.",
          capabilities: ["search", "creative", "data"],
        },
        {
          id: "local",
          name: "Build Local Presence",
          en: "Build Local Presence",
          desc: "Look like a local brand, not an outsider.",
          capabilities: ["influencer", "creative", "strategy"],
        },
        {
          id: "scale",
          name: "Scale Growth",
          en: "Scale Growth",
          desc: "Run multiple markets and platforms at once without losing control.",
          capabilities: ["media", "data", "creative"],
        },
      ],
      d = [
        { id: "not-started", label: "Not running yet", en: "Not running yet" },
        { id: "under-30k", label: "Under $30K / month", en: "Under $30K / month" },
        { id: "30k-100k", label: "$30,000 – $100,000", en: "$30K – $100K / month" },
        { id: "100k-300k", label: "$100,000 – $300,000", en: "$100K – $300K / month" },
        { id: "over-300k", label: "Over $300K / month", en: "Over $300K / month" },
        { id: "unsure", label: "Not sure yet", en: "Not sure yet" },
      ],
      c = {
        strategy: {
          en: "Fixing the market, audience and channels before spending is the only order that avoids paying to learn.",
          zh: "Settle the market, audience, channels and measurement basis before you spend. Get that order wrong and you are simply paying to find out.",
        },
        media: {
          en: "Paid media helps validate market demand and build a scalable customer acquisition model.",
          zh: "Using paid media to test whether market demand is real, and turning acquisition into a repeatable model rather than relying on a single spike.",
        },
        creative: {
          en: "Creative is a supply chain, not a deliverable — when it runs out, spending stalls.",
          zh: "Creative is an ongoing supply, not a one-off deliverable. The week creative stops, media buying stops with it.",
        },
        influencer: {
          en: "Useful for building local awareness, trust and social proof in a new market.",
          zh: "Building local awareness, trust and social proof in a new market. This is the part that media buying alone cannot purchase.",
        },
        search: {
          en: "Helps build long-term organic visibility across search and AI discovery.",
          zh: "Building lasting organic visibility across search and AI discovery - the kind that does not disappear when the media budget is switched off.",
        },
        appstore: {
          en: "The store listing is the app's first conversion step; keywords and visuals decide organic installs.",
          zh: "The store page is the first conversion step for any app. Keywords and creative directly determine organic installs, and they amplify paid acquisition in turn.",
        },
        commerce: {
          en: "Turning traffic into orders — site, store, email and affiliate are four parts of one job.",
          zh: "Turning traffic into orders. Your site, marketplace stores, email and affiliate channels are four parts of one job and should not be run in isolation.",
        },
        data: {
          en: "Attribution and reporting feed the next decision — without them you are guessing.",
          zh: "Data feedback is standard practice, not an add-on. Without it, the next budget round is guesswork.",
        },
      },
      _GP = [{id:"launch",name:"Launch",en:"LAUNCH SPRINT",bestFor:"First-time overseas launch, new product testing, new country validation; new store cold start, new market or new product validation.",spend:"$8K - $15K / month (capped at $15K · 1 country / up to 2 platforms)",model:"Project-based · 30-45 days",desc:"A complete launch sprint: account and attribution checks, market and competitor analysis, first-round campaign launch and daily optimisation, ending with initial benchmarks and a 90-day roadmap."},{id:"starter",name:"Starter",en:"STARTER",bestFor:"Cold-start clients in a single market with 1-2 channels.",spend:"Monthly net ad spend under $30K",model:"Monthly ongoing service",desc:"Start with cold start: get the acquisition model working in a single market and channel before talking about scale."},{id:"growth",name:"Growth",en:"GROWTH",bestFor:"Local or regional clients running 2-3 channels and entering the scaling stage.",spend:"Monthly net ad spend $30K - $100K",model:"Monthly ongoing service",desc:"Moving budget between channels and running growth experiments to scale models that already work."},{id:"scale",name:"Scale",en:"SCALE",bestFor:"Clients in multiple countries and channels with complex data coordination needs.",spend:"Monthly net ad spend $100K - $300K",model:"Monthly ongoing service",desc:"For multi-market account governance and business-level reviews, requiring a unified dashboard and cross-market coordination."},{id:"enterprise",name:"Enterprise",en:"ENTERPRISE",bestFor:"Large enterprise clients needing a tailored service scope and working model.",spend:"Monthly net ad spend above $300K",model:"Custom",desc:"Service scope, working cadence and delivery standards are tailored to each client's business, on a case-by-case basis."}],
      _CP = [{id:"accounts",num:"01",name:"Accounts & Rebates",en:"Accounts & Rebates",summary:"When going overseas for the first time, or planning to launch on several platforms at once, set up the media accounts and permissions first - this is the precondition for all media buying that follows.",industries:["app","ecommerce"],products:[{id:"accounts01",name:"Single-Platform Account Setup",unit:"Account / one-off"},{id:"accounts02",name:"Multi-Platform Account Package",unit:"Project / one-off"}]},{id:"media",num:"02",name:"App Media Management",en:"App Media Management",summary:"Building user scale on Google, Meta, TikTok and other platforms, reviewed weekly.",industries:["app"],products:[{id:"media01",name:"Media Management - Starter",unit:"Month"},{id:"media02",name:"Media Management - Growth",unit:"Month"},{id:"media03",name:"Media Management - Scale",unit:"Month"}]},{id:"creative",num:"03",name:"Creative Production",en:"Creative Production",summary:"Producing working creative continuously, per platform and market, rather than shooting one film and running it for a year.",industries:["app","ecommerce"],products:[{id:"creative01",name:"Creative Factory Lite",unit:"Month"},{id:"creative02",name:"Creative Factory Growth",unit:"Month"},{id:"creative03",name:"Creative Factory Scale",unit:"Month"},{id:"creative04",name:"Original Video (AE Motion Graphics)",unit:"Video"},{id:"creative05",name:"Original Image (Brand Campaign)",unit:"Image"},{id:"creative06",name:"Video Adaptation",unit:"Video"},{id:"creative07",name:"Image Adaptation",unit:"Image"}]},{id:"influencer",num:"04",name:"Influencer Marketing",en:"Influencer Marketing",summary:"Finding the right people and placing content in your target market's social spaces.",industries:["app","ecommerce"],products:[{id:"influencer01",name:"Influencer Campaign",unit:"Project"}]},{id:"social",num:"05",name:"Social Media Operations",en:"Social Media Operations",summary:"Ongoing operation of an official Instagram, TikTok or YouTube account to maintain a local presence.",industries:["app","ecommerce"],products:[{id:"social01",name:"Single-Account Social Media Operations",unit:"Account / month"}]},{id:"commerce",num:"06",name:"E-commerce Operations",en:"E-commerce Operations",summary:"From site build and store operations to email and affiliate: turning traffic into orders.",industries:["ecommerce"],products:[{id:"commerce01",name:"Shopify Standard Store",unit:"Project"},{id:"commerce02",name:"Shopify Brand Growth Store",unit:"Project"},{id:"commerce03",name:"Shopify Custom Enterprise Store",unit:"From / project"},{id:"commerce04",name:"TikTok Shop / DTC store operations",unit:"Month"},{id:"commerce05",name:"E-commerce Operations - Starter",unit:"Month"},{id:"commerce06",name:"E-commerce Operations - Growth",unit:"Month"},{id:"commerce07",name:"E-commerce Operations - Scale",unit:"Month"},{id:"commerce08",name:"EDM and Email Marketing",unit:"Month"},{id:"commerce09",name:"Impact Affiliate Management",unit:"Month"}]},{id:"search",num:"07",name:"SEO / GEO",en:"SEO / GEO",summary:"Improving brand visibility and information consistency across search engines and generative AI environments. What we optimise is the brand's own content and structured information - we do not promise outcomes on third-party platforms.",industries:["app","ecommerce"],products:[{id:"search01",name:"AI Search Visibility Optimization(GEO)",unit:"Project / 6 months"}]},{id:"appstore",num:"08",name:"ASA / ASO",en:"ASA / ASO",summary:"Optimising the store page and keywords, and managing Apple Ads.",industries:["app"],products:[{id:"appstore01",name:"App store optimisation and managed Apple Ads",unit:"Month"}]}];
    function o(e, t) {
      return (t || []).some((a) => ((n.find((e) => e.id === a) || {}).capabilities || []).includes(e))
        ? "recommended"
        : "optional";
    }
    let m = l.INDUSTRIES.map((e) => ({ id: e.id, name: e.name, en: e.en, confidence: e.confidence }));
    var x = e.i(28540),
      p = e.i(32184),
      h = e.i(45060);

    function _capCount(e) {
      return Object.keys(e || {}).reduce((t, a) => t + ((e[a] && e[a].length) || 0), 0);
    }
    function _capList(e, t) {
      let a = [];
      Object.keys(e || {}).forEach((s) => {
        let l = _CP.find((e) => e.id === s);
        if (!l) return;
        (e[s] || []).forEach((e) => {
          let n = l.products.find((t) => t.id === e);
          if (n)
            a.push({
              key: s + "::" + e,
              id: e,
              product: n.name,
              unit: n.unit,
              category: l.name,
              categoryEn: l.en,
              recommendation: o(s, t),
            });
        });
      });
      return a;
    }
    function _capToggle(e, t, a) {
      let s = (e[t] || []).slice(),
        l = s.indexOf(a);
      l < 0 ? s.push(a) : s.splice(l, 1);
      return Object.assign({}, e, { [t]: s });
    }
    function _capAll(e, t) {
      let a = (_CP.find((e) => e.id === t) || { products: [] }).products.map((e) => e.id),
        s = e[t] || [];
      return Object.assign({}, e, { [t]: s.length >= a.length ? [] : a });
    }
    function _capRemove(e, t) {
      let a = String(t).split("::"),
        s = (e[a[0]] || []).filter((e) => e !== a[1]);
      return Object.assign({}, e, { [a[0]]: s });
    }

    function _pg({ options: e, selected: a, onToggle: s }) {
      return (0, t.jsx)("div", {
        className: "grid gap-px bg-hairline sm:grid-cols-2",
        children: e.map((e, l) => {
          let n = a === e.id;
          return (0, t.jsxs)(
            "button",
            {
              type: "button",
              "aria-pressed": n,
              onClick: () => s(e.id),
              className: (0, h.cn)(
                "group relative flex h-full flex-col items-start gap-2 p-5 text-left transition-colors sm:p-6",
                n ? "bg-frost" : "bg-white hover:bg-mist",
              ),
              children: [
                (0, t.jsxs)("span", {
                  className: "flex w-full items-center gap-2",
                  children: [
                    (0, t.jsx)("span", {
                      className: (0, h.cn)(
                        "type-mono-label tabular-nums transition-colors",
                        n ? "text-azure" : "text-steel/60",
                      ),
                      children: String(l + 1).padStart(2, "0"),
                    }),
                    (0, t.jsx)("span", {
                      "aria-hidden": "true",
                      className: (0, h.cn)(
                        "ml-auto grid size-5 place-items-center border text-[11px] leading-none transition-colors",
                        n ? "border-azure bg-azure text-white" : "border-hairline text-transparent group-hover:border-steel/40",
                      ),
                      children: "\u2713",
                    }),
                  ],
                }),
                (0, t.jsx)("span", {
                  className: "mt-1 block text-[16px] font-medium leading-snug text-navy",
                  children: e.name,
                }),
                (0, t.jsx)("span", { className: "type-mono-label block text-steel", children: e.en }),
                (0, t.jsx)("span", {
                  className: "mt-1.5 block text-[13px] leading-relaxed text-steel",
                  children: e.desc,
                }),
                (0, t.jsxs)("span", {
                  className: "mt-4 flex w-full flex-col gap-2 border-t border-hairline pt-4",
                  children: [
                    (0, t.jsxs)("span", {
                      className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4",
                      children: [
                        (0, t.jsx)("span", { className: "type-mono-label shrink-0 text-steel/60", children: "Best For" }),
                        (0, t.jsx)("span", { className: "text-[12.5px] leading-relaxed text-navy/75", children: e.bestFor }),
                      ],
                    }),
                    (0, t.jsxs)("span", {
                      className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4",
                      children: [
                        (0, t.jsx)("span", { className: "type-mono-label shrink-0 text-steel/60", children: "Spend" }),
                        (0, t.jsx)("span", { className: "text-[12.5px] leading-relaxed text-navy/75", children: e.spend }),
                      ],
                    }),
                    (0, t.jsxs)("span", {
                      className: "flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4",
                      children: [
                        (0, t.jsx)("span", { className: "type-mono-label shrink-0 text-steel/60", children: "Model" }),
                        (0, t.jsx)("span", { className: "text-[12.5px] leading-relaxed text-navy/75", children: e.model }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("span", {
                  "aria-hidden": "true",
                  className: (0, h.cn)("absolute inset-x-0 bottom-0 h-0.5 transition-colors", n ? "bg-azure" : "bg-transparent"),
                }),
              ],
            },
            e.id,
          );
        }),
      });
    }

    function _g({ goalIds: e, selected: l, onToggle: n, onSelectAll: i }) {
      return (0, t.jsx)("div", {
        className: "grid gap-px bg-hairline md:grid-cols-2",
        children: _CP.map((a, s) =>
          (0, t.jsx)(
            _j,
            {
              cat: a,
              index: s,
              selected: l[a.id] || [],
              onToggle: n,
              onSelectAll: i,
              recommendation: o(a.id, e),
            },
            a.id,
          ),
        ),
      });
    }
    function _j({ cat: e, index: l, selected: n, onToggle: i, onSelectAll: r, recommendation: d }) {
      let [o, m] = (0, a.useState)(!1),
        x = e.products.length > 0 && n.length >= e.products.length,
        u = e.products.length;
      return (0, t.jsxs)("article", {
        className: (0, h.cn)(
          "relative flex flex-col p-5 transition-colors sm:p-7",
          n.length ? "bg-frost" : "bg-white",
        ),
        children: [
          (0, t.jsxs)("div", {
            className: "flex items-start justify-between gap-4",
            children: [
              (0, t.jsxs)("div", {
                className: "min-w-0",
                children: [
                  (0, t.jsxs)("div", {
                    className: "flex items-baseline gap-3",
                    children: [
                      (0, t.jsx)("span", {
                        className: (0, h.cn)("type-mono-label tabular-nums", n.length ? "text-azure" : "text-steel/60"),
                        children: e.num,
                      }),
                      (0, t.jsx)("h3", {
                        className: "text-[17px] font-medium leading-snug text-navy",
                        children: e.name,
                      }),
                    ],
                  }),
                  (0, t.jsx)("p", { className: "type-mono-label mt-1.5 text-steel", children: e.en }),
                ],
              }),
              "recommended" === d
                ? (0, t.jsxs)("span", {
                    className: "inline-flex shrink-0 items-center gap-1.5 pt-1 text-[11.5px] text-brass",
                    children: [
                      (0, t.jsx)("span", { "aria-hidden": "true", className: "size-1 rounded-full bg-brass" }),
                      "Recommended",
                    ],
                  })
                : null,
            ],
          }),
          (0, t.jsx)("p", { className: "mt-4 text-[13.5px] leading-relaxed text-steel", children: e.summary }),
          (0, t.jsxs)("div", {
            className: "mt-5 flex items-center justify-between gap-3 border-t border-hairline pt-4",
            children: [
              (0, t.jsxs)("button", {
                type: "button",
                "aria-expanded": o,
                onClick: () => m((e) => !e),
                className:
                  "group inline-flex items-center gap-2 text-[12.5px] font-medium text-azure transition-colors hover:text-azure-soft",
                children: [
                  o ? "Collapse products" : "Expand products (" + u + ")",
                  (0, t.jsx)("span", {
                    "aria-hidden": "true",
                    className: (0, h.cn)("transition-transform duration-200", o && "rotate-45"),
                    children: "+",
                  }),
                ],
              }),
              (0, t.jsx)("button", {
                type: "button",
                onClick: () => r(e.id),
                className: "shrink-0 text-[12px] text-steel transition-colors hover:text-navy",
                children: x ? "Clear all" : "Select all",
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className: (0, h.cn)(
              "grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none",
              o ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            ),
            children: (0, t.jsx)("div", {
              className: "overflow-hidden",
              children: (0, t.jsx)("ul", {
                className: "mt-3.5 space-y-0 border-t border-hairline pt-1",
                children: e.products.map((a) => {
                  let s = n.includes(a.id);
                  return (0, t.jsx)(
                    "li",
                    {
                      children: (0, t.jsxs)("button", {
                        type: "button",
                        "aria-pressed": s,
                        onClick: () => i(e.id, a.id),
                        className: (0, h.cn)(
                          "flex w-full items-center gap-3 border-b border-hairline py-2.5 text-left transition-colors last:border-b-0",
                          s ? "text-navy" : "text-navy/75 hover:text-navy",
                        ),
                        children: [
                          (0, t.jsx)("span", {
                            "aria-hidden": "true",
                            className: (0, h.cn)(
                              "grid size-5 shrink-0 place-items-center border text-[11px] leading-none transition-colors",
                              s ? "border-azure bg-azure text-white" : "border-hairline text-transparent",
                            ),
                            children: "\u2713",
                          }),
                          (0, t.jsx)("span", {
                            className: "min-w-0 flex-1 text-[13.5px] leading-snug",
                            children: a.name,
                          }),
                          (0, t.jsx)("span", {
                            className: "type-mono-label shrink-0 text-steel/60",
                            children: a.unit,
                          }),
                        ],
                      }),
                    },
                    a.id,
                  );
                }),
              }),
            }),
          }),
          (0, t.jsx)("span", {
            "aria-hidden": "true",
            className: (0, h.cn)(
              "absolute inset-y-0 left-0 w-0.5 transition-colors",
              n.length ? "bg-azure" : "bg-transparent",
            ),
          }),
          (0, t.jsx)("span", {
            className: "sr-only",
            children: "Item " + (l + 1) + " of " + _CP.length + " · selected " + n.length + " / " + u,
          }),
        ],
      });
    }

    function u({ steps: e, current: a, completed: s }) {
      return (0, t.jsx)("nav", {
        "aria-label": "How the plan is built",
        className: "sticky top-16 z-40 border-b border-hairline bg-white/95 backdrop-blur-md lg:top-20",
        children: (0, t.jsx)("div", {
          className: "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14 xl:px-20",
          children: (0, t.jsx)("ol", {
            className: "flex items-stretch overflow-x-auto",
            children: e.map((e, l) => {
              let n = s.includes(e.id),
                i = e.id === a;
              return (0, t.jsxs)(
                "li",
                {
                  className: "flex shrink-0 items-stretch",
                  children: [
                    l > 0 ? (0, t.jsx)("span", { "aria-hidden": "true", className: "w-px bg-hairline" }) : null,
                    (0, t.jsxs)("a", {
                      href: `#${e.id}`,
                      "aria-current": i ? "step" : void 0,
                      className: (0, h.cn)(
                        "flex items-center gap-3 px-4 py-3.5 transition-colors sm:px-5",
                        i ? "bg-frost" : "hover:bg-mist",
                      ),
                      children: [
                        (0, t.jsx)("span", {
                          className: (0, h.cn)(
                            "grid size-6 shrink-0 place-items-center border text-[11px] font-medium tabular-nums transition-colors",
                            n
                              ? "border-navy bg-navy text-white"
                              : i
                                ? "border-navy text-navy"
                                : "border-hairline text-steel",
                          ),
                          children: n ? "✓" : e.num,
                        }),
                        (0, t.jsxs)("span", {
                          className: "flex flex-col leading-tight",
                          children: [
                            (0, t.jsx)("span", {
                              className: (0, h.cn)(
                                "text-[13.5px] font-medium whitespace-nowrap",
                                i || n ? "text-navy" : "text-steel",
                              ),
                              children: e.title,
                            }),
                            (0, t.jsx)("span", {
                              className: "type-mono-label whitespace-nowrap text-steel/70",
                              children: e.en,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
        }),
      });
    }
    function b({ options: e, selected: a, onToggle: s, className: l }) {
      return (0, t.jsx)("div", {
        className: (0, h.cn)("grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3", l),
        children: e.map((e, l) => {
          let n = a.includes(e.id);
          return (0, t.jsxs)(
            "button",
            {
              type: "button",
              "aria-pressed": n,
              onClick: () => s(e.id),
              className: (0, h.cn)(
                "group relative flex flex-col items-start gap-2 p-5 text-left transition-colors sm:p-6",
                n ? "bg-frost" : "bg-white hover:bg-mist",
              ),
              children: [
                (0, t.jsxs)("span", {
                  className: "flex w-full items-center gap-2",
                  children: [
                    (0, t.jsx)("span", {
                      className: (0, h.cn)(
                        "type-mono-label tabular-nums transition-colors",
                        n ? "text-azure" : "text-steel/60",
                      ),
                      children: String(l + 1).padStart(2, "0"),
                    }),
                    e.featured
                      ? (0, t.jsx)("span", {
                          "aria-hidden": "true",
                          className: (0, h.cn)("size-1 rounded-full", n ? "bg-azure" : "bg-steel/40"),
                        })
                      : null,
                    (0, t.jsx)("span", {
                      "aria-hidden": "true",
                      className: (0, h.cn)(
                        "ml-auto grid size-5 place-items-center border text-[11px] leading-none transition-colors",
                        n
                          ? "border-azure bg-azure text-white"
                          : "border-hairline text-transparent group-hover:border-steel/40",
                      ),
                      children: "✓",
                    }),
                  ],
                }),
                (0, t.jsx)("span", {
                  className: "mt-1 block text-[16px] font-medium leading-snug text-navy",
                  children: e.name,
                }),
                (0, t.jsx)("span", { className: "type-mono-label block text-steel", children: e.en }),
                e.desc
                  ? (0, t.jsx)("span", {
                      className: "mt-1.5 block text-[13px] leading-relaxed text-steel",
                      children: e.desc,
                    })
                  : null,
                (0, t.jsx)("span", {
                  "aria-hidden": "true",
                  className: (0, h.cn)(
                    "absolute inset-x-0 bottom-0 h-0.5 transition-colors",
                    n ? "bg-azure" : "bg-transparent",
                  ),
                }),
              ],
            },
            e.id,
          );
        }),
      });
    }
    function y({ plan: e, onRemove: a, onClear: s, onReview: l, className: n }) {
      let i = e.capabilities.length,
        r = !!(e.growthPlan || (e.growthGoals && e.growthGoals.length) || e.targetMarket || e.businessType),
        d = 0 === i && !r;
      return (0, t.jsxs)("div", {
        className: (0, h.cn)("flex min-h-0 flex-col bg-white", n),
        children: [
          (0, t.jsxs)("div", {
            className: "flex items-center justify-between gap-3 border-b border-hairline px-5 py-4 sm:px-6",
            children: [
              (0, t.jsxs)("div", {
                className: "flex items-baseline gap-2.5",
                children: [
                  (0, t.jsx)("h2", { className: "type-mono-label text-navy", children: "YOUR GROWTH PLAN" }),
                  i > 0
                    ? (0, t.jsx)(
                        "span",
                        {
                          className:
                            "planner-tick grid size-5 place-items-center bg-navy text-[11px] font-medium tabular-nums text-white",
                          children: String(i).padStart(2, "0"),
                        },
                        i,
                      )
                    : null,
                ],
              }),
              d
                ? null
                : (0, t.jsx)("button", {
                    type: "button",
                    onClick: s,
                    className: "text-[12px] text-steel transition-colors hover:text-navy",
                    children: "Clear",
                  }),
            ],
          }),
          (0, t.jsx)("div", {
            className: "min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6",
            children: d
              ? (0, t.jsxs)("div", {
                  className: "py-6",
                  children: [
                    (0, t.jsx)("p", {
                      className: "text-[14px] leading-relaxed text-navy",
                      children: "Your growth plan is empty.",
                    }),
                    (0, t.jsx)("p", {
                      className: "mt-2 text-[13px] leading-relaxed text-steel",
                      children: "Choose your growth plan, target market and required capabilities above and your plan is generated here in real time.",
                    }),
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    r
                      ? (0, t.jsxs)("dl", {
                          className: "space-y-3.5",
                          children: [
                            e.targetMarket
                              ? (0, t.jsxs)(v, {
                                  label: "Target Market",
                                  children: [
                                    (0, t.jsx)("span", { className: "text-navy", children: e.targetMarket.en }),
                                    (0, t.jsx)("span", { className: "ml-2 text-steel", children: e.targetMarket.name }),
                                    e.targetMarket.detail
                                      ? (0, t.jsx)("span", {
                                          className: "mt-1 block text-[12.5px] text-steel",
                                          children: e.targetMarket.detail,
                                        })
                                      : null,
                                  ],
                                })
                              : null,
                            e.businessType
                              ? (0, t.jsxs)(v, {
                                  label: "Business Type",
                                  children: [
                                    (0, t.jsx)("span", { className: "text-navy", children: e.businessType.en }),
                                    (0, t.jsx)("span", { className: "ml-2 text-steel", children: e.businessType.name }),
                                  ],
                                })
                              : null,
                            e.growthPlan
                              ? (0, t.jsxs)(v, {
                                  label: "Growth Plan",
                                  children: [
                                    (0, t.jsx)("span", { className: "text-navy", children: e.growthPlan.name }),
                                    (0, t.jsx)("span", { className: "ml-2 text-steel", children: e.growthPlan.en }),
                                    (0, t.jsx)("span", {
                                      className: "mt-1 block text-[12.5px] text-steel",
                                      children: e.growthPlan.model,
                                    }),
                                  ],
                                })
                              : null,
                            e.growthGoals && e.growthGoals.length
                              ? (0, t.jsxs)(v, {
                                  label: e.growthGoals.length > 1 ? "Growth Goals" : "Growth Goal",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "text-navy",
                                      children: e.growthGoals.map((e) => e.en).join(", "),
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "mt-1 block text-[12.5px] text-steel",
                                      children: e.growthGoals.map((e) => e.name).join(", "),
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        })
                      : null,
                    (0, t.jsxs)("div", {
                      className: (0, h.cn)(r && "mt-6 border-t border-hairline pt-5"),
                      children: [
                        (0, t.jsx)("p", {
                          className: "type-mono-label text-steel/70",
                          children: i > 0 ? `${String(i).padStart(2, "0")} Capabilities` : "Capabilities",
                        }),
                        i > 0
                          ? (0, t.jsx)("ol", {
                              className: "mt-3.5 space-y-0",
                              children: e.capabilities.map((e, s) =>
                                (0, t.jsxs)(
                                  "li",
                                  {
                                    className:
                                      "flex items-center gap-3 border-b border-hairline py-2.5 last:border-b-0",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className: "type-mono-label shrink-0 tabular-nums text-azure",
                                        children: String(s + 1).padStart(2, "0"),
                                      }),
                                      (0, t.jsxs)("span", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                          (0, t.jsx)("span", {
                                            className: "block text-[13.5px] leading-snug text-navy",
                                            children: e.product,
                                          }),
                                          (0, t.jsx)("span", {
                                            className: "block text-[12px] leading-snug text-steel",
                                            children: e.category,
                                          }),
                                          "optional" !== e.recommendation
                                            ? (0, t.jsxs)("span", {
                                                className: "mt-1 flex items-center gap-1.5",
                                                children: [
                                                  (0, t.jsx)("span", {
                                                    "aria-hidden": "true",
                                                    className: "size-1 rounded-full bg-brass",
                                                  }),
                                                  (0, t.jsx)("span", {
                                                    className: "type-mono-label text-brass",
                                                    children:
                                                      "recommended" === e.recommendation
                                                        ? "Recommended"
                                                        : "Recommended Add-on",
                                                  }),
                                                ],
                                              })
                                            : null,
                                        ],
                                      }),
                                      (0, t.jsx)("button", {
                                        type: "button",
                                        onClick: () => a(e.key),
                                        "aria-label": `Remove ${e.product}`,
                                        className:
                                          "-mr-1 shrink-0 p-1 text-[16px] leading-none text-steel/60 transition-colors hover:text-navy",
                                        children: "×",
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            })
                          : (0, t.jsx)("p", {
                              className: "mt-3 text-[13px] leading-relaxed text-steel",
                              children: "No capabilities selected yet. Start from the recommendations above.",
                            }),
                      ],
                    }),
                  ],
                }),
          }),
          (0, t.jsxs)("div", {
            className: "border-t border-hairline bg-mist px-5 py-5 sm:px-6",
            children: [
              (0, t.jsxs)("dl", {
                className: "grid grid-cols-2 gap-3",
                children: [
                  (0, t.jsx)(f, { value: +!!e.growthPlan, label: "Plan" }),
                  (0, t.jsx)(f, { value: +!!e.targetMarket, label: "Market" }),
                ],
              }),
              (0, t.jsxs)("button", {
                type: "button",
                onClick: l,
                disabled: 0 === i,
                className:
                  "mt-5 flex min-h-12 w-full items-center justify-center gap-2 bg-navy px-5 text-[14px] font-medium text-white transition-colors hover:bg-navy-2 disabled:cursor-not-allowed disabled:opacity-40",
                children: ["Review My Growth Plan", (0, t.jsx)("span", { "aria-hidden": "true", children: "→" })],
              }),
              (0, t.jsx)("a", {
                href: "/adsmarch-global-en/contact",
                className:
                  "mt-2.5 flex min-h-11 w-full items-center justify-center border border-navy/25 px-5 text-[13.5px] text-navy transition-colors hover:border-navy/60",
                children: "Talk to a Growth Consultant",
              }),
              (0, t.jsx)("p", {
                className: "mt-4 text-[11.5px] leading-relaxed text-steel",
                children: "No online payment. A consultant will confirm the service scope, market approach and investment level with you, then issue a tailored proposal.",
              }),
            ],
          }),
        ],
      });
    }
    function v({ label: e, children: a }) {
      return (0, t.jsxs)("div", {
        children: [
          (0, t.jsx)("dt", { className: "type-mono-label text-steel/70", children: e }),
          (0, t.jsx)("dd", { className: "mt-1 text-[13.5px] leading-snug", children: a }),
        ],
      });
    }
    function f({ value: e, label: a }) {
      return (0, t.jsxs)("div", {
        className: "border-l border-hairline pl-3 first:border-l-0 first:pl-0",
        children: [
          (0, t.jsx)("dd", { className: "text-[20px] font-medium tabular-nums leading-none text-navy", children: e }),
          (0, t.jsx)("dt", { className: "mt-1.5 type-mono-label text-steel/70", children: a }),
        ],
      });
    }
    let N =
      "w-full border border-hairline bg-white px-3.5 py-3 text-[14px] text-navy placeholder:text-steel/50 transition-colors focus:border-azure focus:outline-none";
    function w({
      open: e,
      onClose: s,
      plan: l,
      scaleBandId: n,
      onScaleBandChange: i,
      savedEmail: r,
      onSavedEmailChange: c,
      onSave: o,
    }) {
      let m = (0, a.useRef)(null),
        [x, p] = (0, a.useState)({ kind: "idle", text: "" }),
        [u, b] = (0, a.useState)(!1);
      return (
        (0, a.useEffect)(() => {
          let t = m.current;
          t && (e && !t.open && t.showModal(), !e && t.open && t.close());
        }, [e]),
        (0, a.useEffect)(() => {
          if (!e) return;
          let t = document.body.style.overflow;
          return (
            (document.body.style.overflow = "hidden"),
            () => {
              document.body.style.overflow = t;
            }
          );
        }, [e]),
        (0, t.jsx)("dialog", {
          ref: m,
          onClose: s,
          onClick: (e) => {
            let t = m.current;
            if (!t || e.target !== t) return;
            let a = t.getBoundingClientRect();
            (e.clientX < a.left || e.clientX > a.right || e.clientY < a.top || e.clientY > a.bottom) && t.close();
          },
          className:
            "planner-dialog m-auto w-[min(880px,calc(100%-1.5rem))] max-h-[92dvh] bg-white p-0 text-navy backdrop:bg-navy/70",
          children: (0, t.jsxs)("div", {
            className: "flex max-h-[92dvh] flex-col",
            children: [
              (0, t.jsxs)("div", {
                className: "flex items-start justify-between gap-4 border-b border-hairline px-5 py-5 sm:px-8 sm:py-6",
                children: [
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("p", { className: "type-mono-label text-steel/70", children: "YOUR GROWTH PLAN" }),
                      (0, t.jsx)("h2", {
                        className: "mt-2 text-[20px] font-medium leading-snug text-navy sm:text-[23px]",
                        children: "Your plan is ready.",
                      }),
                      (0, t.jsx)("p", {
                        className: "mt-1.5 text-[13px] leading-relaxed text-steel",
                        children: "Your plan is ready. Let us discuss the execution scope, market approach and investment level that fit your business.",
                      }),
                    ],
                  }),
                  (0, t.jsx)("button", {
                    type: "button",
                    onClick: s,
                    "aria-label": "Close",
                    className:
                      "grid size-8 shrink-0 place-items-center bg-mist text-[18px] leading-none text-steel transition-colors hover:bg-hairline hover:text-navy",
                    children: "×",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8",
                children: [
                  (0, t.jsxs)("dl", {
                    className: "border border-hairline bg-mist/60",
                    children: [
                      (0, t.jsx)(k, {
                        label: "Growth Plan",
                        value: l.growthPlan?.name,
                        sub: l.growthPlan ? l.growthPlan.en + " \u00b7 " + l.growthPlan.model : void 0,
                      }),
                      (0, t.jsx)(k, {
                        label: "Target Market",
                        value: l.targetMarket?.en,
                        sub: [l.targetMarket?.name, l.targetMarket?.detail].filter(Boolean).join(" · "),
                      }),
                      (0, t.jsx)(k, { label: "Business Type", value: l.businessType?.en, sub: l.businessType?.name }),
                      (0, t.jsxs)("div", {
                        className: "border-b border-hairline px-4 py-3.5 last:border-b-0 sm:px-5",
                        children: [
                          (0, t.jsxs)("dt", {
                            className: "type-mono-label text-steel/70",
                            children: [
                              "Investment Scale ",
                              (0, t.jsx)("span", { className: "normal-case tracking-normal", children: "(optional)" }),
                            ],
                          }),
                          (0, t.jsxs)("dd", {
                            className: "mt-2",
                            children: [
                              (0, t.jsxs)("select", {
                                value: n ?? "",
                                onChange: (e) => i(e.target.value),
                                className: (0, h.cn)(N, "text-[13.5px]"),
                                children: [
                                  (0, t.jsx)("option", { value: "", children: "Not sure yet / Discuss with a consultant" }),
                                  d.map((e) => (0, t.jsx)("option", { value: e.id, children: e.label }, e.id)),
                                ],
                              }),
                              (0, t.jsx)("p", {
                                className: "mt-2 text-[11.5px] leading-relaxed text-steel",
                                children: "This is your current media volume, used by the consultant to judge the scope of the plan - it is not a service quote.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "px-4 py-3.5 sm:px-5",
                        children: [
                          (0, t.jsxs)("dt", {
                            className: "type-mono-label text-steel/70",
                            children: [
                              "Selected Capabilities",
                              (0, t.jsx)("span", {
                                className: "ml-2 normal-case tracking-normal text-navy",
                                children: String(l.capabilities.length).padStart(2, "0"),
                              }),
                            ],
                          }),
                          (0, t.jsx)("dd", {
                            className: "mt-3",
                            children: (0, t.jsx)("ol", {
                              className: "space-y-0",
                              children: l.capabilities.map((e, a) =>
                                (0, t.jsxs)(
                                  "li",
                                  {
                                    className:
                                      "flex items-baseline gap-3 border-b border-hairline py-2 last:border-b-0",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className: "type-mono-label shrink-0 tabular-nums text-azure",
                                        children: String(a + 1).padStart(2, "0"),
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "min-w-0 flex-1 text-[13.5px] text-navy",
                                        children: e.product,
                                      }),
                                      (0, t.jsx)("span", {
                                        className: "shrink-0 text-[11.5px] text-steel",
                                        children: e.category,
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("form", {
                    onSubmit: (e) => {
                      var t, a;
                      let s, n, i, r;
                      e.preventDefault();
                      let d = e.currentTarget,
                        c = new FormData(d);
                      for (let e of Array.from(d.querySelectorAll("[required]")))
                        if (!e.value.trim()) {
                          (e.setCustomValidity("Please complete this field"),
                            e.reportValidity(),
                            e.addEventListener("input", () => e.setCustomValidity(""), { once: !0 }));
                          return;
                        }
                      let o = Object.fromEntries(Array.from(c.entries()).map(([e, t]) => [e, String(t).trim()]));
                      (p({
                        kind: "info",
                        text: "Your plan has been compiled into a brief, but it has not been sent - this prototype is not connected to a backend. Please download it and send it to your AdsMarch consultant.",
                      }),
                        (t = l),
                        (a = o),
                        (s = {
                          name: "Name",
                          company: "Company name",
                          email: "Work email",
                          region: "Country / region",
                          notes: "Additional notes",
                        }),
                        (n = new Blob(
                          [
                            "\uFEFF",
                            [
                              "AdsMarch · Global Growth Plan Brief",
                              "(Generated by the prototype, not yet sent. Please send this file to your consultant.)",
                              "",
                              `Generated: ${new Date().toLocaleString("en-US")}`,
                              "",
                              "── Growth plan ──",
                              `Growth plan: ${t.growthPlan ? `${t.growthPlan.name}(${t.growthPlan.en})` : "Not selected"}`,
                              `Target market: ${t.targetMarket ? `${t.targetMarket.name}(${t.targetMarket.en})${t.targetMarket.detail ? ` \xb7 ${t.targetMarket.detail}` : ""}` : "Not selected"}`,
                              `Business type: ${t.businessType ? `${t.businessType.name}(${t.businessType.en})` : "Not selected"}`,
                              `Spend level: ${t.scaleBand ?? "Not sure"}`,
                              "",
                              `Selected capabilities (${t.capabilities.length} items): `,
                              ...t.capabilities.map(
                                (e, t) => `  ${String(t + 1).padStart(2, "0")} [${e.category}] ${e.product}`,
                              ),
                              "",
                              "── Contact details ──",
                              ...Object.entries(a)
                                .filter(([, e]) => e)
                                .map(([e, t]) => `${s[e] ?? e}: ${t}`),
                              "",
                              "Status: not yet sent. Please send this brief to your AdsMarch consultant.",
                            ].join("\n"),
                          ],
                          { type: "text/plain;charset=utf-8" },
                        )),
                        (i = URL.createObjectURL(n)),
                        ((r = document.createElement("a")).href = i),
                        (r.download = "AdsMarch-Growth-Plan-Brief.txt"),
                        r.click(),
                        setTimeout(() => URL.revokeObjectURL(i), 1e3));
                    },
                    className: "mt-8",
                    children: [
                      (0, t.jsx)("p", {
                        className: "type-mono-label text-steel/70",
                        children: "Request a Tailored Proposal",
                      }),
                      (0, t.jsx)("p", {
                        className: "mt-2 text-[13px] leading-relaxed text-steel",
                        children: "Your target market and selected capabilities are carried over automatically, so there is no need to enter them again.",
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2",
                        children: [
                          (0, t.jsx)(S, {
                            label: "Name",
                            name: "name",
                            required: !0,
                            autoComplete: "name",
                            placeholder: "Your name",
                          }),
                          (0, t.jsx)(S, {
                            label: "Company name",
                            name: "company",
                            required: !0,
                            autoComplete: "organization",
                            placeholder: "Full company name",
                          }),
                          (0, t.jsx)(S, {
                            label: "Work email",
                            name: "email",
                            type: "email",
                            required: !0,
                            autoComplete: "email",
                            placeholder: "name@company.com",
                          }),
                          (0, t.jsx)(S, {
                            label: "Country / region",
                            name: "region",
                            required: !0,
                            autoComplete: "country-name",
                            placeholder: "For example: China / Singapore",
                          }),
                          (0, t.jsxs)("label", {
                            className: "block sm:col-span-2",
                            children: [
                              (0, t.jsx)("span", {
                                className: "type-mono-label block text-steel/70",
                                children: "Additional notes",
                              }),
                              (0, t.jsx)("textarea", {
                                name: "notes",
                                rows: 4,
                                maxLength: 3e3,
                                placeholder:
                                  "For example: product link, expected launch timing, channels you already run, and the questions you most want a consultant to answer.",
                                className: (0, h.cn)(N, "mt-2 resize-y"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-6 border border-hairline bg-mist/60 p-4 sm:p-5",
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-[13.5px] font-medium text-navy",
                            children: "Save My Growth Plan",
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-1.5 text-[12.5px] leading-relaxed text-steel",
                            children: "Save your plan and continue later. Enter your email to save the current plan and have it restored automatically next time.",
                          }),
                          (0, t.jsxs)("div", {
                            className: "mt-3.5 flex flex-col gap-2.5 sm:flex-row",
                            children: [
                              (0, t.jsx)("input", {
                                type: "email",
                                value: r,
                                onChange: (e) => c(e.target.value),
                                placeholder: "name@company.com",
                                "aria-label": "Email used to save the plan",
                                className: (0, h.cn)(N, "sm:flex-1"),
                              }),
                              (0, t.jsx)("button", {
                                type: "button",
                                onClick: o,
                                disabled: !r.trim(),
                                className:
                                  "min-h-11 shrink-0 border border-navy/25 px-5 text-[13.5px] text-navy transition-colors hover:border-navy/60 disabled:cursor-not-allowed disabled:opacity-40",
                                children: "Save plan",
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-2.5 text-[11.5px] leading-relaxed text-steel",
                            children:
                              "Your plan is saved in this browser. It will be lost if you switch devices or clear your browser data - it is not uploaded to any server.",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center",
                        children: [
                          (0, t.jsxs)("button", {
                            type: "submit",
                            disabled: u,
                            className:
                              "group inline-flex min-h-12 items-center justify-center gap-2 bg-navy px-6 text-[14px] font-medium text-white transition-colors hover:bg-navy-2 disabled:opacity-60",
                            children: [
                              u ? "Submitting…" : "Request a Tailored Proposal",
                              (0, t.jsx)("span", {
                                "aria-hidden": "true",
                                className: "transition-transform group-hover:translate-x-0.5",
                                children: "↗",
                              }),
                            ],
                          }),
                          (0, t.jsx)("button", {
                            type: "button",
                            onClick: s,
                            className:
                              "inline-flex min-h-12 items-center justify-center border border-navy/25 px-6 text-[13.5px] text-navy transition-colors hover:border-navy/60",
                            children: "Talk to a Growth Consultant",
                          }),
                        ],
                      }),
                      "idle" !== x.kind
                        ? (0, t.jsx)("p", {
                            role: "status",
                            "aria-live": "polite",
                            className: (0, h.cn)(
                              "mt-4 border-l-2 py-1 pl-3 text-[12.5px] leading-relaxed",
                              "error" === x.kind ? "border-navy text-navy" : "border-azure text-steel",
                            ),
                            children: x.text,
                          })
                        : null,
                      (0, t.jsx)("p", {
                        className: "mt-4 text-[11.5px] leading-relaxed text-steel",
                        children: "The information you submit is used only for this service enquiry. This prototype is not connected to a backend, so nothing is uploaded or retained.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      );
    }
    function k({ label: e, value: a, sub: s }) {
      return (0, t.jsxs)("div", {
        className:
          "flex flex-col gap-1 border-b border-hairline px-4 py-3.5 sm:flex-row sm:items-baseline sm:gap-6 sm:px-5",
        children: [
          (0, t.jsx)("dt", { className: "type-mono-label shrink-0 text-steel/70 sm:w-44", children: e }),
          (0, t.jsxs)("dd", {
            className: "text-[13.5px] leading-snug text-navy",
            children: [
              a ?? (0, t.jsx)("span", { className: "text-steel/60", children: "Not selected" }),
              s ? (0, t.jsx)("span", { className: "ml-2 text-steel", children: s }) : null,
            ],
          }),
        ],
      });
    }
    function S({ label: e, name: a, type: s = "text", required: l, placeholder: n, autoComplete: i }) {
      return (0, t.jsxs)("label", {
        className: "block",
        children: [
          (0, t.jsxs)("span", {
            className: "type-mono-label block text-steel/70",
            children: [e, l ? (0, t.jsx)("span", { className: "ml-1 text-brass", children: "*" }) : null],
          }),
          (0, t.jsx)("input", {
            type: s,
            name: a,
            required: l,
            placeholder: n,
            autoComplete: i,
            maxLength: 150,
            className: (0, h.cn)(N, "mt-2"),
          }),
        ],
      });
    }
    let C = [
        { id: "engine", num: "01", title: "Choose Your Growth Engine", en: "Choose Your Growth Engine" },
        { id: "plan", num: "02", title: "Choose Your Growth Plan", en: "Choose Your Growth Plan" },
        { id: "market", num: "03", title: "Select Your Market", en: "Select Your Market" },
        { id: "capabilities", num: "04", title: "Select Capabilities", en: "Select Capabilities" },
      ],
      _LK = [
        {
          id: "app",
          name: "APP GROWTH",
          en: "APP GROWTH",
          desc: "From first install to sustainable growth: store page, activation, retention and payback.",
          goal: "grow-app",
          goals: ["grow-app", "acquire-customers", "scale-market", "global-brand"],
          href: "/adsmarch-global-en/app-growth",
          link: "View the APP GROWTH path",
        },
        {
          id: "ecommerce",
          name: "E-COMMERCE GROWTH",
          en: "E-COMMERCE GROWTH",
          desc: "From market entry to repeat purchase at scale: site, conversion, retention and scale.",
          goal: "grow-ecommerce",
          goals: ["grow-ecommerce", "acquire-customers", "scale-market", "global-brand", "enter-market"],
          href: "/adsmarch-global-en/ecommerce-growth",
          link: "View the E-COMMERCE GROWTH path",
        },
      ],
      _lkOf = (e) => (e === "grow-app" ? "app" : e === "grow-ecommerce" ? "ecommerce" : null),
      z = "adsmarch.growth-plan.en.v1";
    function T() {
      try {
        return window.localStorage.getItem(z);
      } catch {
        return null;
      }
    }
    function I(e) {
      return (window.addEventListener("storage", e), () => window.removeEventListener("storage", e));
    }
    function A() {
      return null;
    }
    function $({ id: e, num: a, title: s, en: l, desc: n, done: i, children: r }) {
      return (0, t.jsxs)("section", {
        id: e,
        className: (0, h.cn)("scroll-mt-[124px] lg:scroll-mt-[141px]", "mb-14 last:mb-0"),
        children: [
          (0, t.jsxs)("div", {
            className: "flex items-baseline gap-3 border-t border-hairline pt-6",
            children: [
              (0, t.jsx)("span", {
                className: (0, h.cn)("type-mono-label tabular-nums", i ? "text-azure" : "text-steel/60"),
                children: a,
              }),
              (0, t.jsx)("span", {
                "aria-hidden": "true",
                className: (0, h.cn)("size-1", i ? "bg-azure" : "bg-steel/40"),
              }),
              i ? (0, t.jsx)("span", { className: "type-mono-label text-azure", children: "Completed" }) : null,
            ],
          }),
          (0, t.jsx)("h2", {
            className: "mt-4 text-[22px] font-medium leading-snug text-navy sm:text-[26px]",
            children: s,
          }),
          (0, t.jsx)("p", { className: "type-mono-label mt-2 text-steel", children: l }),
          (0, t.jsx)("p", { className: "mt-3.5 max-w-[58ch] text-[13.5px] leading-relaxed text-steel", children: n }),
          (0, t.jsx)("div", { className: "mt-7", children: r }),
        ],
      });
    }
    e.s(
      [
        "PlanBuilder",
        0,
        function () {
          let [e, l] = (0, a.useState)([]),
            [_eg, _sg] = (0, a.useState)(null),
            [_gp, _gset] = (0, a.useState)(null),
            [c, j] = (0, a.useState)(null),
            [v, f] = (0, a.useState)(""),
            [N, k] = (0, a.useState)(null),
            [G, R] = (0, a.useState)({}),
            [B, E] = (0, a.useState)(null),
            [L, O] = (0, a.useState)(!1),
            [P, U] = (0, a.useState)(!1),
            [q, Y] = (0, a.useState)(""),
            [D, K] = (0, a.useState)(!1),
            [W, F] = (0, a.useState)(!1),
            H = (0, a.useRef)(null),
            V = (0, a.useRef)(null);
          (0, a.useEffect)(() => {
            let e = V.current;
            e && (P && !e.open && e.showModal(), !P && e.open && e.close());
          }, [P]);
          let J = (0, a.useSyncExternalStore)(I, T, A),
            X = (0, a.useMemo)(
              () =>
                (function (e) {
                  if (!e) return null;
                  try {
                    let t = JSON.parse(e);
                    return Array.isArray(t?.goalIds) || Array.isArray(t?.capabilityIds) ? t : null;
                  } catch {
                    return null;
                  }
                })(J),
              [J],
            );
          (0, a.useEffect)(
            () => () => {
              H.current && clearTimeout(H.current);
            },
            [],
          );
          let Z = (0, a.useMemo)(() => {
              let t = _gp ? _GP.find((e) => e.id === _gp) : null,
                a = e.map((e) => n.find((t) => t.id === e)).filter(Boolean),
                l = c ? i.find((e) => e.id === c) : null,
                x = N ? m.find((e) => e.id === N) : null,
                p = B ? d.find((e) => e.id === B) : null;
              return {
                growthPlan: t ? { id: t.id, name: t.name, en: t.en, model: t.model, spend: t.spend } : null,
                growthGoals: a.map((e) => ({ id: e.id, name: e.name, en: e.en })),
                targetMarket: l ? { id: l.id, name: l.name, en: l.en, detail: (v || "").trim() } : null,
                businessType: x ? { id: x.id, name: x.name, en: x.en } : null,
                capabilities: _capList(G, e),
                scaleBand: p ? p.label : null,
              };
            }, [e, c, v, N, G, B, _gp]),
            _ = (e) => R((t) => _capRemove(t, e)),
            Q = () => {
              (R({}), l([]), j(null), f(""), k(null), E(null), _sg(null), _gset(null));
            },
            ee = (0, a.useMemo)(() => {
              let t = [];
              return (
                _eg && t.push("engine"),
                _gp && t.push("plan"),
                c && t.push("market"),
                _capCount(G) && t.push("capabilities"),
                t
              );
            }, [_eg, _gp, e, c, G]),
            et = (0, a.useMemo)(
              () => (_eg ? (_gp ? (c ? "capabilities" : "market") : "plan") : "engine"),
              [_eg, _gp, e, c],
            ),
            ea = !!(_gp || e.length || c || N) || _capCount(G) > 0;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(u, { steps: C, current: et, completed: ee }),
              (0, t.jsx)("div", {
                className: "bg-mist pb-28 lg:pb-16",
                children: (0, t.jsx)(x.Container, {
                  children: (0, t.jsxs)("div", {
                    className:
                      "grid gap-12 pt-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-12 lg:pt-14 xl:gap-16",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "min-w-0",
                        children: [
                          !X || D || ea
                            ? null
                            : (0, t.jsxs)("div", {
                                className:
                                  "mb-10 flex flex-col gap-3 border border-azure/40 bg-frost px-5 py-4 sm:flex-row sm:items-center sm:justify-between",
                                children: [
                                  (0, t.jsxs)("p", {
                                    className: "text-[13px] leading-relaxed text-navy",
                                    children: [
                                      "We found a previously saved plan",
                                      X.savedAt
                                        ? (0, t.jsxs)("span", {
                                            className: "text-steel",
                                            children: ["(", new Date(X.savedAt).toLocaleString("en-US"), ")"],
                                          })
                                        : null,
                                      ", would you like to restore it?",
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "flex shrink-0 gap-2.5",
                                    children: [
                                      (0, t.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                          X &&
                                            (l([]),
                                            _sg(X.growthPathId ?? _lkOf((X.goalIds ?? [])[0] ?? X.goalId)),
                                            _gset(X.growthPlanId ?? null),
                                            j(X.marketId),
                                            f(X.marketDetail ?? ""),
                                            k(X.industryId),
                                            R(X.capabilities ?? {}),
                                            E(X.scaleBandId),
                                            Y(X.email ?? ""),
                                            K(!0));
                                        },
                                        className:
                                          "min-h-9 border border-navy/30 px-4 text-[12.5px] text-navy transition-colors hover:border-navy/70",
                                        children: "Restore",
                                      }),
                                      (0, t.jsx)("button", {
                                        type: "button",
                                        onClick: () => K(!0),
                                        className:
                                          "min-h-9 px-3 text-[12.5px] text-steel transition-colors hover:text-navy",
                                        children: "Dismiss",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          (0, t.jsxs)($, {
                            id: "engine",
                            num: "01",
                            title: "Choose Your Growth Engine",
                            en: "Choose Your Growth Engine",
                            desc: "Start by choosing a path. Both paths share the same underlying AI + Expert capability system, but their growth stages, core metrics and recommended combinations differ.",
                            done: ee.includes("engine"),
                            children: [
                              (0, t.jsx)(b, {
                                options: _LK,
                                selected: _eg ? [_eg] : [],
                                className: "gp-engine-grid",
                                onToggle: (t) => {
                                  let a = _eg === t,
                                    _e2 = _LK.find((e) => e.id === t);
                                  (_sg(a ? null : t), a || (_e2 && l([_e2.goal])));
                                },
                              }),
                              (0, t.jsx)("div", {
                                className: "mt-5 flex flex-wrap gap-4",
                                children: _LK.map((e) =>
                                  (0, t.jsx)(
                                    "a",
                                    {
                                      href: e.href,
                                      className:
                                        "group inline-flex items-center gap-2 text-[13px] text-azure transition-colors hover:text-navy",
                                      children: e.link,
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          (0, t.jsx)($, {
                            id: "plan",
                            num: "02",
                            title: "Choose Your Growth Plan",
                            en: "Choose Your Growth Plan",
                            desc: "Different growth stages call for different service models and plan structures. Pick the closest one, and the market and capability choices that follow will narrow to that range.",
                            done: ee.includes("plan"),
                            children: (0, t.jsx)(_pg, {
                              options: _GP,
                              selected: _gp,
                              onToggle: (e) => _gset((t) => (t === e ? null : e)),
                            }),
                          }),
                          (0, t.jsxs)($, {
                            id: "market",
                            num: "03",
                            title: "Where do you want to grow?",
                            en: "Where do you want to grow?",
                            desc: "You can pick a listed market or type any other market directly - we do not restrict target countries.",
                            done: ee.includes("market"),
                            children: [
                              (0, t.jsx)(b, {
                                options: i,
                                selected: c ? [c] : [],
                                onToggle: (e) => j((t) => (t === e ? null : e)),
                              }),
                              c
                                ? (0, t.jsxs)("div", {
                                    className:
                                      "mt-5 grid gap-5 border border-hairline bg-white p-5 sm:grid-cols-2 sm:p-6",
                                    children: [
                                      (0, t.jsxs)("label", {
                                        className: "block",
                                        children: [
                                          (0, t.jsxs)("span", {
                                            className: "type-mono-label block text-steel/70",
                                            children: [
                                              "Specific country / city ",
                                              (0, t.jsx)("span", {
                                                className: "normal-case tracking-normal",
                                                children: "(optional)",
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)("input", {
                                            type: "text",
                                            value: v,
                                            onChange: (e) => f(e.target.value),
                                            maxLength: 100,
                                            placeholder: "For example: California, Germany, Indonesia",
                                            className:
                                              "mt-2 w-full border border-hairline bg-white px-3.5 py-3 text-[14px] text-navy placeholder:text-steel/50 focus:border-azure focus:outline-none",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        children: [
                                          (0, t.jsxs)("span", {
                                            className: "type-mono-label block text-steel/70",
                                            children: [
                                              "Business type ",
                                              (0, t.jsx)("span", {
                                                className: "normal-case tracking-normal",
                                                children: "(optional)",
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)("div", {
                                            className: "mt-2.5 flex flex-wrap gap-2",
                                            children: m.map((e) => {
                                              let a = N === e.id;
                                              return (0, t.jsxs)(
                                                "button",
                                                {
                                                  type: "button",
                                                  "aria-pressed": a,
                                                  onClick: () => k(a ? null : e.id),
                                                  className: (0, h.cn)(
                                                    "inline-flex items-center gap-1.5 border px-3 py-2 text-[12.5px] transition-colors",
                                                    a
                                                      ? "border-navy bg-navy text-white"
                                                      : "border-hairline bg-white text-navy hover:border-navy/40",
                                                  ),
                                                  children: [
                                                    e.name,
                                                    "pending" === e.confidence
                                                      ? (0, t.jsx)("span", {
                                                          title: "Cases for this sector are still being added; confirm whether to publish before launch",
                                                          className: (0, h.cn)(
                                                            "size-1.5 rounded-full",
                                                            a ? "bg-white/60" : "bg-brass/70",
                                                          ),
                                                        })
                                                      : null,
                                                  ],
                                                },
                                                e.id,
                                              );
                                            }),
                                          }),
                                          (0, t.jsxs)("p", {
                                            className:
                                              "mt-2.5 flex flex-wrap items-center gap-2 text-[11.5px] leading-relaxed text-steel",
                                            children: [
                                              (0, t.jsxs)("span", {
                                                children: [
                                                  "Sectors marked",
                                                  (0, t.jsx)("span", {
                                                    "aria-hidden": "true",
                                                    className:
                                                      "mx-1 inline-block size-1.5 rounded-full bg-brass/70 align-middle",
                                                  }),
                                                  "have cases still being added",
                                                ],
                                              }),
                                              (0, t.jsx)(p.PendingMark, { children: "Confirm before launch" }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                          (0, t.jsx)($, {
                            id: "capabilities",
                            num: "04",
                            title: "Which capabilities belong in your plan?",
                            en: "Which capabilities belong in your plan?",
                            desc: "Expand a service category and select individual products; you can combine across several categories freely. The judgment stays with you and the consultant.",
                            done: ee.includes("capabilities"),
                            children: (0, t.jsx)(_g, {
                              goalIds: e,
                              selected: G,
                              onToggle: (e, t) => R((a) => _capToggle(a, e, t)),
                              onSelectAll: (e) => R((t) => _capAll(t, e)),
                            }),
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-10 border-l-2 border-azure pl-4 text-[12.5px] leading-relaxed text-steel",
                            children:
                              "This page does not show fixed pricing. AdsMarch provides overseas growth services, not a standard product - the final quote depends on the target market, industry, media spend, creative requirements and engagement period. Set out what you want clearly, and a consultant will build a tailored proposal from it.",
                          }),
                        ],
                      }),
                      (0, t.jsx)("aside", {
                        className: "hidden lg:sticky lg:top-[141px] lg:block",
                        children: (0, t.jsx)("div", {
                          className: "max-h-[calc(100dvh-165px)] border border-hairline bg-white",
                          children: (0, t.jsx)(y, { plan: Z, onRemove: _, onClear: Q, onReview: () => O(!0) }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className:
                  "fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white/97 backdrop-blur-md lg:hidden",
                children: (0, t.jsx)(x.Container, {
                  className: "px-5 sm:px-8",
                  children: (0, t.jsxs)("div", {
                    className: "flex items-center gap-3 py-3",
                    children: [
                      (0, t.jsxs)("button", {
                        type: "button",
                        onClick: () => U(!0),
                        "aria-expanded": P,
                        "aria-controls": "plan-sheet",
                        className: "min-w-0 flex-1 text-left",
                        children: [
                          (0, t.jsx)("span", {
                            className: "type-mono-label block text-steel/70",
                            children: "YOUR GROWTH PLAN",
                          }),
                          (0, t.jsx)("span", {
                            className: "mt-1 block text-[15px] font-medium text-navy",
                            children:
                              Z.capabilities.length > 0 ? `${Z.capabilities.length} Capabilities` : "No capabilities selected",
                          }),
                        ],
                      }),
                      (0, t.jsx)("button", {
                        type: "button",
                        onClick: () => O(!0),
                        disabled: 0 === Z.capabilities.length,
                        className:
                          "min-h-11 shrink-0 bg-navy px-5 text-[13.5px] font-medium text-white transition-colors hover:bg-navy-2 disabled:opacity-40",
                        children: "Review Plan",
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)("dialog", {
                ref: V,
                id: "plan-sheet",
                onClose: () => U(!1),
                className:
                  "planner-dialog fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-navy lg:hidden",
                children: (0, t.jsx)("div", {
                  className: "flex h-full flex-col justify-end",
                  onClick: (e) => {
                    e.target === e.currentTarget && U(!1);
                  },
                  children: (0, t.jsxs)("div", {
                    className: "flex max-h-[82dvh] flex-col bg-white",
                    children: [
                      (0, t.jsxs)("button", {
                        type: "button",
                        onClick: () => U(!1),
                        className:
                          "flex w-full shrink-0 items-center justify-center gap-2 border-b border-hairline py-3 text-[12.5px] text-steel",
                        children: [(0, t.jsx)("span", { "aria-hidden": "true", children: "⌄" }), "Collapse"],
                      }),
                      (0, t.jsx)("div", {
                        className: "min-h-0 flex-1 overflow-y-auto",
                        children: (0, t.jsx)(y, {
                          plan: Z,
                          onRemove: _,
                          onClear: Q,
                          onReview: () => {
                            (U(!1), O(!0));
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)(w, {
                open: L,
                onClose: () => O(!1),
                plan: Z,
                scaleBandId: B,
                onScaleBandChange: E,
                savedEmail: q,
                onSavedEmailChange: Y,
                onSave: () =>
                  ((t) => {
                    let a = {
                      goalIds: e,
                      growthPathId: _eg,
                      growthPlanId: _gp,
                      marketId: c,
                      marketDetail: v,
                      industryId: N,
                      capabilities: G,
                      scaleBandId: B,
                      email: t,
                      savedAt: new Date().toISOString(),
                    };
                    try {
                      (window.localStorage.setItem(z, JSON.stringify(a)),
                        F(!0),
                        H.current && clearTimeout(H.current),
                        (H.current = setTimeout(() => F(!1), 2400)));
                    } catch {}
                  })(q),
              }),
              (0, t.jsx)("div", {
                "aria-live": "polite",
                className: (0, h.cn)(
                  "fixed bottom-24 left-1/2 z-50 -translate-x-1/2 border border-navy bg-navy px-5 py-2.5 text-[12.5px] text-white transition-opacity duration-300 lg:bottom-8",
                  W ? "opacity-100" : "pointer-events-none opacity-0",
                ),
                children: "Plan saved to this browser",
              }),
            ],
          });
        },
      ],
      34977,
    );
  },
]);
