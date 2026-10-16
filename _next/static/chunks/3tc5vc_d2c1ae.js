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
      _GP = [{id:"launch",name:"Launch",en:"LAUNCH SPRINT",bestFor:"First-time overseas launch, new product testing, new country validation; new store cold start, new market or new product validation.",spend:"$8K - $15K / month (capped at $15K · 1 country / up to 2 platforms)",model:"Project-based · 30-45 days",desc:"A complete launch sprint: account and attribution checks, market and competitor analysis, first-round campaign launch and daily optimisation, ending with initial benchmarks and a 90-day roadmap.",media:!1},{id:"starter",name:"Starter",en:"STARTER",bestFor:"Cold-start clients in a single market with 1-2 channels.",spend:"Monthly net ad spend under $30K",model:"Monthly ongoing service",desc:"Start with cold start: get the acquisition model working in a single market and channel before talking about scale.",media:!0},{id:"growth",name:"Growth",en:"GROWTH",bestFor:"Local or regional clients running 2-3 channels and entering the scaling stage.",spend:"Monthly net ad spend $30K - $100K",model:"Monthly ongoing service",desc:"Moving budget between channels and running growth experiments to scale models that already work.",media:!0},{id:"scale",name:"Scale",en:"SCALE",bestFor:"Clients in multiple countries and channels with complex data coordination needs.",spend:"Monthly net ad spend $100K - $300K",model:"Monthly ongoing service",desc:"For multi-market account governance and business-level reviews, requiring a unified dashboard and cross-market coordination.",media:!0},{id:"enterprise",name:"Enterprise",en:"ENTERPRISE",bestFor:"Large enterprise clients needing a tailored service scope and working model.",spend:"Monthly net ad spend above $300K",model:"Custom",desc:"Service scope, working cadence and delivery standards are tailored to each client's business, on a case-by-case basis.",media:!0},{id:"none",name:"No Media Management Needed",en:"No Media Management Needed",bestFor:"Already have an in-house media team, or do not need managed media for now.",spend:"No managed media involved",model:"Choose other services as needed",desc:"No managed media needed, but you can still select creative production, influencer marketing, social media operations, SEO / GEO and other services separately.",media:!1}],
      _CP = [{id:"accounts",num:"01",name:"Accounts",en:"Accounts",summary:"When going overseas for the first time, or planning to launch on several platforms at once, set up the media accounts and permissions first - this is the precondition for all media buying that follows.",industries:["app","ecommerce"],products:[{id:"accounts01",name:"Single-Platform Account Setup",unit:"Account / one-off"},{id:"accounts02",name:"Multi-Platform Account Package",unit:"Project / one-off"}],hasPlatforms:!0},{id:"creative",num:"02",name:"Creative Production",en:"Creative Production",summary:"Producing working creative continuously, per platform and market, rather than shooting one film and running it for a year.",industries:["app","ecommerce"],products:[{id:"creative01",name:"Creative Factory Lite",unit:"5 Videos + 15 Images / Month",desc:"5 videos + 15 images per month"},{id:"creative02",name:"Creative Factory Growth",unit:"12 Videos + 40 Images / Month",desc:"12 videos + 40 images per month"},{id:"creative03",name:"Creative Factory Scale",unit:"30 Videos + 100 Images / Month",desc:"30 videos + 100 images per month"},{id:"custom",name:"Custom Creative Services",unit:"Custom Creative Services",desc:"Tailored to your needs, discussed separately"}],creativeGroup:!0},{id:"influencer",num:"03",name:"Influencer Marketing",en:"Influencer Marketing",summary:"Finding the right people and placing content in your target market's social spaces.",industries:["app","ecommerce"],products:[{id:"influencer01",name:"Influencer Campaign",unit:"Project"}],inline:!0},{id:"social",num:"04",name:"Social Media Operations",en:"Social Media Operations",summary:"Ongoing operation of an official Instagram, TikTok or YouTube account to maintain a local presence.",industries:["app","ecommerce"],products:[{id:"social01",name:"Account Social Media Operations",unit:"Account / month"}],inline:!0},{id:"commerce",num:"05",name:"E-commerce Operations",en:"E-commerce Operations",summary:"From site build and store operations to email and affiliate: turning traffic into orders.",industries:["ecommerce"],products:[{id:"commerce01",name:"Shopify Standard Store",unit:"Project"},{id:"commerce02",name:"Shopify Brand Growth Store",unit:"Project"},{id:"commerce03",name:"Shopify Custom Enterprise Store",unit:"From / project"},{id:"commerce04",name:"TikTok Shop / DTC store operations",unit:"Month"},{id:"commerce05",name:"E-commerce Operations - Starter",unit:"Month"},{id:"commerce06",name:"E-commerce Operations - Growth",unit:"Month"},{id:"commerce07",name:"E-commerce Operations - Scale",unit:"Month"},{id:"commerce08",name:"EDM and Email Marketing",unit:"Month"},{id:"commerce09",name:"Impact Affiliate Management",unit:"Month"}]},{id:"search",num:"06",name:"SEO / GEO",en:"SEO / GEO",summary:"Improving brand visibility and information consistency across search engines and generative AI environments. What we optimise is the brand's own content and structured information - we do not promise outcomes on third-party platforms.",industries:["app","ecommerce"],products:[{id:"search01",name:"AI Search Visibility Optimization(GEO)",unit:"Project / 6 months"}]}];
    let _MEDIA = [
      { id: "google", name: "Google Ads", zh: "Google Ads" },
      { id: "meta", name: "Meta Ads", zh: "Meta Ads" },
      { id: "tiktok", name: "TikTok Ads", zh: "TikTok Ads" },
      { id: "apple", name: "Apple Ads (ASA)", zh: "Apple Ads (ASA)" },
      { id: "other", name: "Other Platforms", zh: "Other Platforms" },
    ];
    let _CTRY = [{c:"US",n:"United States",z:"美国",r:"NA"},{c:"CA",n:"Canada",z:"加拿大",r:"NA"},{c:"MX",n:"Mexico",z:"墨西哥",r:"NA"},{c:"GT",n:"Guatemala",z:"危地马拉",r:"NA"},{c:"BZ",n:"Belize",z:"伯利兹",r:"NA"},{c:"SV",n:"El Salvador",z:"萨尔瓦多",r:"NA"},{c:"HN",n:"Honduras",z:"洪都拉斯",r:"NA"},{c:"NI",n:"Nicaragua",z:"尼加拉瓜",r:"NA"},{c:"CR",n:"Costa Rica",z:"哥斯达黎加",r:"NA"},{c:"PA",n:"Panama",z:"巴拿马",r:"NA"},{c:"BM",n:"Bermuda",z:"百慕大",r:"NA"},{c:"BS",n:"Bahamas",z:"巴哈马",r:"LATAM"},{c:"CU",n:"Cuba",z:"古巴",r:"LATAM"},{c:"JM",n:"Jamaica",z:"牙买加",r:"LATAM"},{c:"HT",n:"Haiti",z:"海地",r:"LATAM"},{c:"DO",n:"Dominican Republic",z:"多米尼加共和国",r:"LATAM"},{c:"PR",n:"Puerto Rico",z:"波多黎各",r:"LATAM"},{c:"TT",n:"Trinidad and Tobago",z:"特立尼达和多巴哥",r:"LATAM"},{c:"BB",n:"Barbados",z:"巴巴多斯",r:"LATAM"},{c:"CO",n:"Colombia",z:"哥伦比亚",r:"LATAM"},{c:"VE",n:"Venezuela",z:"委内瑞拉",r:"LATAM"},{c:"EC",n:"Ecuador",z:"厄瓜多尔",r:"LATAM"},{c:"PE",n:"Peru",z:"秘鲁",r:"LATAM"},{c:"BO",n:"Bolivia",z:"玻利维亚",r:"LATAM"},{c:"PY",n:"Paraguay",z:"巴拉圭",r:"LATAM"},{c:"UY",n:"Uruguay",z:"乌拉圭",r:"LATAM"},{c:"AR",n:"Argentina",z:"阿根廷",r:"LATAM"},{c:"CL",n:"Chile",z:"智利",r:"LATAM"},{c:"BR",n:"Brazil",z:"巴西",r:"LATAM"},{c:"GB",n:"United Kingdom",z:"英国",r:"EU"},{c:"IE",n:"Ireland",z:"爱尔兰",r:"EU"},{c:"FR",n:"France",z:"法国",r:"EU"},{c:"DE",n:"Germany",z:"德国",r:"EU"},{c:"IT",n:"Italy",z:"意大利",r:"EU"},{c:"ES",n:"Spain",z:"西班牙",r:"EU"},{c:"PT",n:"Portugal",z:"葡萄牙",r:"EU"},{c:"NL",n:"Netherlands",z:"荷兰",r:"EU"},{c:"BE",n:"Belgium",z:"比利时",r:"EU"},{c:"LU",n:"Luxembourg",z:"卢森堡",r:"EU"},{c:"CH",n:"Switzerland",z:"瑞士",r:"EU"},{c:"AT",n:"Austria",z:"奥地利",r:"EU"},{c:"DK",n:"Denmark",z:"丹麦",r:"EU"},{c:"SE",n:"Sweden",z:"瑞典",r:"EU"},{c:"NO",n:"Norway",z:"挪威",r:"EU"},{c:"FI",n:"Finland",z:"芬兰",r:"EU"},{c:"IS",n:"Iceland",z:"冰岛",r:"EU"},{c:"PL",n:"Poland",z:"波兰",r:"EU"},{c:"CZ",n:"Czechia",z:"捷克",r:"EU"},{c:"SK",n:"Slovakia",z:"斯洛伐克",r:"EU"},{c:"HU",n:"Hungary",z:"匈牙利",r:"EU"},{c:"RO",n:"Romania",z:"罗马尼亚",r:"EU"},{c:"BG",n:"Bulgaria",z:"保加利亚",r:"EU"},{c:"GR",n:"Greece",z:"希腊",r:"EU"},{c:"HR",n:"Croatia",z:"克罗地亚",r:"EU"},{c:"SI",n:"Slovenia",z:"斯洛文尼亚",r:"EU"},{c:"RS",n:"Serbia",z:"塞尔维亚",r:"EU"},{c:"UA",n:"Ukraine",z:"乌克兰",r:"EU"},{c:"EE",n:"Estonia",z:"爱沙尼亚",r:"EU"},{c:"LV",n:"Latvia",z:"拉脱维亚",r:"EU"},{c:"LT",n:"Lithuania",z:"立陶宛",r:"EU"},{c:"MT",n:"Malta",z:"马耳他",r:"EU"},{c:"CY",n:"Cyprus",z:"塞浦路斯",r:"EU"},{c:"RU",n:"Russia",z:"俄罗斯",r:"EU"},{c:"TR",n:"Turkey",z:"土耳其",r:"EU"},{c:"SA",n:"Saudi Arabia",z:"沙特阿拉伯",r:"ME"},{c:"AE",n:"United Arab Emirates",z:"阿拉伯联合酋长国",r:"ME"},{c:"QA",n:"Qatar",z:"卡塔尔",r:"ME"},{c:"KW",n:"Kuwait",z:"科威特",r:"ME"},{c:"BH",n:"Bahrain",z:"巴林",r:"ME"},{c:"OM",n:"Oman",z:"阿曼",r:"ME"},{c:"IL",n:"Israel",z:"以色列",r:"ME"},{c:"JO",n:"Jordan",z:"约旦",r:"ME"},{c:"LB",n:"Lebanon",z:"黎巴嫩",r:"ME"},{c:"IQ",n:"Iraq",z:"伊拉克",r:"ME"},{c:"IR",n:"Iran",z:"伊朗",r:"ME"},{c:"EG",n:"Egypt",z:"埃及",r:"AF"},{c:"MA",n:"Morocco",z:"摩洛哥",r:"AF"},{c:"DZ",n:"Algeria",z:"阿尔及利亚",r:"AF"},{c:"TN",n:"Tunisia",z:"突尼斯",r:"AF"},{c:"LY",n:"Libya",z:"利比亚",r:"AF"},{c:"NG",n:"Nigeria",z:"尼日利亚",r:"AF"},{c:"GH",n:"Ghana",z:"加纳",r:"AF"},{c:"KE",n:"Kenya",z:"肯尼亚",r:"AF"},{c:"ET",n:"Ethiopia",z:"埃塞俄比亚",r:"AF"},{c:"TZ",n:"Tanzania",z:"坦桑尼亚",r:"AF"},{c:"UG",n:"Uganda",z:"乌干达",r:"AF"},{c:"RW",n:"Rwanda",z:"卢旺达",r:"AF"},{c:"ZA",n:"South Africa",z:"南非",r:"AF"},{c:"CI",n:"Cote d'Ivoire",z:"科特迪瓦",r:"AF"},{c:"SN",n:"Senegal",z:"塞内加尔",r:"AF"},{c:"CM",n:"Cameroon",z:"喀麦隆",r:"AF"},{c:"CD",n:"DR Congo",z:"刚果民主共和国",r:"AF"},{c:"AO",n:"Angola",z:"安哥拉",r:"AF"},{c:"ZM",n:"Zambia",z:"赞比亚",r:"AF"},{c:"ZW",n:"Zimbabwe",z:"津巴布韦",r:"AF"},{c:"CN",n:"China",z:"中国",r:"AS"},{c:"JP",n:"Japan",z:"日本",r:"AS"},{c:"KR",n:"South Korea",z:"韩国",r:"AS"},{c:"IN",n:"India",z:"印度",r:"AS"},{c:"ID",n:"Indonesia",z:"印度尼西亚",r:"AS"},{c:"MY",n:"Malaysia",z:"马来西亚",r:"AS"},{c:"SG",n:"Singapore",z:"新加坡",r:"AS"},{c:"TH",n:"Thailand",z:"泰国",r:"AS"},{c:"VN",n:"Vietnam",z:"越南",r:"AS"},{c:"PH",n:"Philippines",z:"菲律宾",r:"AS"},{c:"HK",n:"Hong Kong SAR, China",z:"中国香港",r:"AS"},{c:"TW",n:"Taiwan, China",z:"中国台湾",r:"AS"},{c:"MO",n:"Macao SAR, China",z:"中国澳门",r:"AS"},{c:"PK",n:"Pakistan",z:"巴基斯坦",r:"AS"},{c:"BD",n:"Bangladesh",z:"孟加拉国",r:"AS"},{c:"LK",n:"Sri Lanka",z:"斯里兰卡",r:"AS"},{c:"MM",n:"Myanmar",z:"缅甸",r:"AS"},{c:"KH",n:"Cambodia",z:"柬埔寨",r:"AS"},{c:"LA",n:"Laos",z:"老挝",r:"AS"},{c:"NP",n:"Nepal",z:"尼泊尔",r:"AS"},{c:"MN",n:"Mongolia",z:"蒙古",r:"AS"},{c:"KZ",n:"Kazakhstan",z:"哈萨克斯坦",r:"AS"},{c:"UZ",n:"Uzbekistan",z:"乌兹别克斯坦",r:"AS"},{c:"AF",n:"Afghanistan",z:"阿富汗",r:"AS"},{c:"AU",n:"Australia",z:"澳大利亚",r:"OC"},{c:"NZ",n:"New Zealand",z:"新西兰",r:"OC"},{c:"FJ",n:"Fiji",z:"斐济",r:"OC"},{c:"PG",n:"Papua New Guinea",z:"巴布亚新几内亚",r:"OC"}];
    let _REG = [{id:"NA",en:"North America",zh:"北美洲"},{id:"LATAM",en:"Latin America & Caribbean",zh:"拉丁美洲与加勒比"},{id:"EU",en:"Europe",zh:"欧洲"},{id:"ME",en:"Middle East",zh:"中东"},{id:"AF",en:"Africa",zh:"非洲"},{id:"AS",en:"Asia",zh:"亚洲"},{id:"OC",en:"Oceania",zh:"大洋洲"}];
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
        // ===== V3 new helper components =====
    function _sel({ value: _val, onChange: _onChg, placeholder: _ph }) {
      let [q, Q] = (0, a.useState)("");
      let all = _CTRY;
      let cur = _val ? all.find((x) => x.c === _val) : null;
      let list = q.trim() ? all.filter((x) => x.n.toLowerCase().includes(q.toLowerCase()) || x.z.includes(q)) : [];
      return (0, t.jsxs)("div", {
        className: "relative",
        children: [
          (0, t.jsx)("input", {
            type: "text",
            value: q || (cur ? cur.n : ""),
            onChange: (ev) => { Q(ev.target.value); if (cur) _onChg(null); },
            onFocus: () => Q(cur ? "" : q),
            placeholder: _ph || "Search country / region",
            className: "mt-2 w-full border border-hairline bg-white px-3.5 py-3 text-[14px] text-navy placeholder:text-steel/50 focus:border-azure focus:outline-none",
          }),
          q.trim()
            ? (0, t.jsx)("ul", {
                className: "absolute z-20 mt-1 max-h-64 w-full overflow-y-auto border border-hairline bg-white shadow-lg",
                children: list.length
                  ? list.slice(0, 60).map((c) =>
                      (0, t.jsxs)(
                        "li",
                        {
                          children: (0, t.jsxs)("button", {
                            type: "button",
                            onClick: () => { _onChg(c.c); Q(""); },
                            className: "flex w-full items-center justify-between px-3.5 py-2.5 text-left text-[13.5px] text-navy hover:bg-frost",
                            children: [
                              (0, t.jsx)("span", { children: c.n }),
                            ],
                          }),
                        },
                        c.c,
                      ),
                    )
                  : (0, t.jsx)("li", { className: "px-3.5 py-3 text-[12.5px] text-steel", children: "No matching country / region found" }),
              })
            : null,
        ],
      });
    }

    function _g2({ goalIds: e, selected: l, onToggle: n, onSelectAll: i, accountMedia: am, setAccountMedia: sam, otherAccountMedia: oam, setOtherAccountMedia: soam, creativePackage: cp, setCreativePackage: scp, customCreative: cr, setCustomCreative: scr }) {
      return (0, t.jsx)("div", {
        className: "grid gap-px bg-hairline md:grid-cols-2",
        children: _CP.map((a, s) => {
          let rec = o(a.id, e);
          let isCreative = a.id === "creative";
          let isAccounts = a.id === "accounts";
          let inline = a.inline === !0;
          return (0, t.jsx)(
            _j2,
            {
              cat: a,
              index: s,
              selected: l[a.id] || [],
              onToggle: n,
              onSelectAll: i,
              recommendation: rec,
              inline: inline,
              isCreative: isCreative,
              isAccounts: isAccounts,
              accountMedia: am,
              setAccountMedia: sam,
              otherAccountMedia: oam,
              setOtherAccountMedia: soam,
              creativePackage: cp,
              setCreativePackage: scp,
              customCreative: cr,
              setCustomCreative: scr,
            },
            a.id,
          );
        }),
      });
    }

    function _j2({ cat: e, index: l, selected: n, onToggle: i, onSelectAll: r, recommendation: d, inline: inl, isCreative: isCr, isAccounts: isAc, accountMedia: am, setAccountMedia: sam, otherAccountMedia: oam, setOtherAccountMedia: soam, creativePackage: cp, setCreativePackage: scp, customCreative: cr, setCustomCreative: scr }) {
      let [o, m] = (0, a.useState)(inl ? !0 : !1);
      let x = e.products.length > 0 && n.length >= e.products.length,
        u = e.products.length;
      return (0, t.jsxs)("article", {
        className: (0, h.cn)("relative flex flex-col p-5 transition-colors sm:p-7", n.length ? "bg-frost" : "bg-white"),
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
                      (0, t.jsx)("span", { className: (0, h.cn)("type-mono-label tabular-nums", n.length ? "text-azure" : "text-steel/60"), children: e.num }),
                      (0, t.jsx)("h3", { className: "text-[17px] font-medium leading-snug text-navy", children: e.name }),
                    ],
                  }),
                  (0, t.jsx)("p", { className: "type-mono-label mt-1.5 text-steel", children: e.en }),
                ],
              }),
              "recommended" === d
                ? (0, t.jsxs)("span", { className: "inline-flex shrink-0 items-center gap-1.5 pt-1 text-[11.5px] text-brass", children: [(0, t.jsx)("span", { "aria-hidden": "true", className: "size-1 rounded-full bg-brass" }), "Recommended"] })
                : null,
            ],
          }),
          (0, t.jsx)("p", { className: "mt-4 text-[13.5px] leading-relaxed text-steel", children: e.summary }),
          isAc
            ? (0, t.jsxs)("div", { className: "mt-5 border-t border-hairline pt-4", children: [
                (0, t.jsx)("p", { className: "type-mono-label text-steel/70", children: "Select Advertising Platforms" }),
                (0, t.jsx)("div", { className: "mt-3 grid gap-2 sm:grid-cols-2", children: _MEDIA.filter((x) => !(false)).map((m2) => { let on = am.includes(m2.id); return (0, t.jsxs)("button", { type: "button", "aria-pressed": on, onClick: () => sam(on ? am.filter((x) => x !== m2.id) : [...am, m2.id]), className: (0, h.cn)("flex items-center gap-2 border p-2.5 text-left transition-colors", on ? "border-azure bg-white" : "border-hairline bg-white hover:border-azure/40"), children: [(0, t.jsx)("span", { "aria-hidden": "true", className: (0, h.cn)("grid size-4 shrink-0 place-items-center border text-[10px] leading-none", on ? "border-azure bg-azure text-white" : "border-hairline text-transparent"), children: "✓" }), (0, t.jsx)("span", { className: "text-[12.5px] text-navy", children: m2.name })] }, m2.id); }) }),
                am.includes("other") ? (0, t.jsxs)("div", { className: "mt-2.5", children: [(0, t.jsx)("span", { className: "type-mono-label block text-steel/70", children: "Please specify the platform(s)" }), (0, t.jsx)("input", { type: "text", value: oam, onChange: (ev) => soam(ev.target.value), maxLength: 200, placeholder: "Please specify the advertising platform(s). Comma-separated", className: "mt-2 w-full border border-hairline bg-white px-3 py-2.5 text-[13px] text-navy placeholder:text-steel/50 focus:border-azure focus:outline-none" })] }) : null,
                (0, t.jsx)("p", { className: "type-mono-label mt-4 text-steel/70", children: "Select Account Services" }),
              ] })
            : null,
          isCr
            ? (0, t.jsxs)("div", { className: "mt-5 border-t border-hairline pt-4", children: [
                (0, t.jsx)("p", { className: "type-mono-label text-steel/70", children: "Creative Packages" }),
                (0, t.jsx)("div", { className: "mt-3 grid gap-2 sm:grid-cols-2", children: e.products.map((pr) => { let on = cp === pr.id; let isCustom = pr.id === "custom"; return (0, t.jsxs)("button", { type: "button", "aria-pressed": on, onClick: () => { if (isCustom) { scp(on ? null : pr.id); } else { scp(on ? null : pr.id); } }, className: (0, h.cn)("flex flex-col items-start gap-1 border p-3 text-left transition-colors", on ? "border-azure bg-white" : "border-hairline bg-white hover:border-azure/40"), children: [(0, t.jsxs)("span", { className: "flex w-full items-center gap-2", children: [(0, t.jsx)("span", { "aria-hidden": "true", className: (0, h.cn)("grid size-4 shrink-0 place-items-center border text-[10px] leading-none", on ? "border-azure bg-azure text-white" : "border-hairline text-transparent"), children: "✓" }), (0, t.jsx)("span", { className: "text-[13px] font-medium text-navy", children: pr.name })] }), (0, t.jsx)("span", { className: "text-[12px] text-steel", children: pr.unit }), pr.desc ? (0, t.jsx)("span", { className: "text-[11.5px] text-steel", children: pr.desc }) : null] }, pr.id); }) }),
                cp === "custom" ? (0, t.jsxs)("div", { className: "mt-3", children: [(0, t.jsx)("span", { className: "type-mono-label block text-steel/70", children: "Tell us about your creative needs" }), (0, t.jsx)("textarea", { value: cr, onChange: (ev) => scr(ev.target.value), rows: 4, maxLength: 2000, placeholder: "e.g. number of videos, number of images, asset types, creative direction and other requirements", className: "mt-2 w-full resize-y border border-hairline bg-white px-3.5 py-3 text-[14px] text-navy placeholder:text-steel/50 focus:border-azure focus:outline-none" })] }) : null,
              ] })
            : null,
!isCr ? (inl ? (0, t.jsx)("ul", {
                className: "mt-4 border-t border-hairline pt-2",
                children: e.products.map((a) => {
                  let s = n.includes(a.id);
                  return (0, t.jsx)("li", {
                    children: (0, t.jsxs)("button", { type: "button", "aria-pressed": s, onClick: () => i(e.id, a.id), className: (0, h.cn)("flex w-full items-center gap-3 border-b border-hairline py-2.5 text-left transition-colors last:border-b-0", s ? "text-navy" : "text-navy/75 hover:text-navy"), children: [(0, t.jsx)("span", { "aria-hidden": "true", className: (0, h.cn)("grid size-5 shrink-0 place-items-center border text-[11px] leading-none transition-colors", s ? "border-azure bg-azure text-white" : "border-hairline text-transparent"), children: "✓" }), (0, t.jsx)("span", { className: "min-w-0 flex-1 text-[13.5px] leading-snug", children: a.name }), (0, t.jsx)("span", { className: "type-mono-label shrink-0 text-steel/60", children: a.unit })] }, a.id),
                  }, a.id);
                }),
              }) : (0, t.jsxs)(t.Fragment, { children: [
                (0, t.jsxs)("div", {
                  className: "mt-5 flex items-center justify-between gap-3 border-t border-hairline pt-4",
                  children: [
                    (0, t.jsxs)("button", { type: "button", "aria-expanded": o, onClick: () => m((e) => !e), className: "group inline-flex items-center gap-2 text-[12.5px] font-medium text-azure transition-colors hover:text-azure-soft", children: [o ? "Collapse" : "Expand products (" + u + ")", (0, t.jsx)("span", { "aria-hidden": "true", className: (0, h.cn)("transition-transform duration-200", o && "rotate-45"), children: "+" })] }),
                    (0, t.jsx)("button", { type: "button", onClick: () => r(e.id), className: "shrink-0 text-[12px] text-steel transition-colors hover:text-navy", children: x ? "Deselect all" : "Select all" }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: (0, h.cn)("grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none", o ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
                  children: (0, t.jsx)("div", { className: "overflow-hidden", children: (0, t.jsx)("ul", { className: "mt-3.5 space-y-0 border-t border-hairline pt-1", children: e.products.map((a) => { let s = n.includes(a.id); return (0, t.jsx)("li", { children: (0, t.jsxs)("button", { type: "button", "aria-pressed": s, onClick: () => i(e.id, a.id), className: (0, h.cn)("flex w-full items-center gap-3 border-b border-hairline py-2.5 text-left transition-colors last:border-b-0", s ? "text-navy" : "text-navy/75 hover:text-navy"), children: [(0, t.jsx)("span", { "aria-hidden": "true", className: (0, h.cn)("grid size-5 shrink-0 place-items-center border text-[11px] leading-none transition-colors", s ? "border-azure bg-azure text-white" : "border-hairline text-transparent"), children: "✓" }), (0, t.jsx)("span", { className: "min-w-0 flex-1 text-[13.5px] leading-snug", children: a.name }), (0, t.jsx)("span", { className: "type-mono-label shrink-0 text-steel/60", children: a.unit })] }, a.id) }, a.id); }) }) }),
                }),
              ] })) : null,
          (0, t.jsx)("span", { "aria-hidden": "true", className: (0, h.cn)("absolute inset-y-0 left-0 w-0.5 transition-colors", n.length ? "bg-azure" : "bg-transparent") }),
          (0, t.jsx)("span", { className: "sr-only", children: "Item " + (l + 1) + " of " + _CP.length + "; selected " + n.length + " / " + u }),
        ],
      });
    }

    function w2({ open: e, onClose: s, plan: l, scaleBandId: n, onScaleBandChange: i, savedEmail: r, onSavedEmailChange: c, onSave: o, err: er, setErr: ser }) {
      let m = (0, a.useRef)(null), [x, p] = (0, a.useState)({ kind: "idle", text: "" }), [u, b] = (0, a.useState)(!1);
      return (
        (0, a.useEffect)(() => { let t = m.current; t && (e && !t.open && t.showModal(), !e && t.open && t.close()); }, [e]),
        (0, a.useEffect)(() => { if (!e) return; let t = document.body.style.overflow; return (document.body.style.overflow = "hidden"), () => { document.body.style.overflow = t; }; }, [e]),
        (0, t.jsx)("dialog", { ref: m, onClose: s, onClick: (e) => { let t = m.current; if (!t || e.target !== t) return; let a = t.getBoundingClientRect(); (e.clientX < a.left || e.clientX > a.right || e.clientY < a.top || e.clientY > a.bottom) && t.close(); }, className: "planner-dialog m-auto w-[min(880px,calc(100%-1.5rem))] max-h-[92dvh] bg-white p-0 text-navy backdrop:bg-navy/70", children: (0, t.jsxs)("div", { className: "flex max-h-[92dvh] flex-col", children: [
          (0, t.jsxs)("div", { className: "flex items-start justify-between gap-4 border-b border-hairline px-5 py-5 sm:px-8 sm:py-6", children: [
            (0, t.jsxs)("div", { children: [
              (0, t.jsx)("p", { className: "type-mono-label text-steel/70", children: "YOUR GROWTH PLAN" }),
              (0, t.jsx)("h2", { className: "mt-2 text-[20px] font-medium leading-snug text-navy sm:text-[23px]", children: "Your plan is ready." }),
              (0, t.jsx)("p", { className: "mt-1.5 text-[13px] leading-relaxed text-steel", children: "Your plan is ready. Let's discuss the execution scope, market approach and investment scale that fit your business." }),
            ] }),
            (0, t.jsx)("button", { type: "button", onClick: s, "aria-label": "Close", className: "grid size-8 shrink-0 place-items-center bg-mist text-[18px] leading-none text-steel transition-colors hover:bg-hairline hover:text-navy", children: "×" }),
          ] }),
          (0, t.jsxs)("div", { className: "min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8", children: [
            (0, t.jsxs)("dl", { className: "border border-hairline bg-mist/60", children: [
              l.growthEngine ? (0, t.jsx)(k, { label: "Growth Engine", value: l.growthEngine.name, sub: l.growthEngine.en }) : null,
              l.growthDirection ? (0, t.jsx)(k, { label: "Growth Direction", value: l.growthDirection.name, sub: l.growthDirection.en }) : null,
              (0, t.jsx)(k, { label: "Growth Plan", value: l.growthPlan?.name, sub: l.growthPlan ? l.growthPlan.en + " · " + l.growthPlan.model : void 0 }),
              l.managedMedia && l.managedMedia.length ? (0, t.jsx)(k, { label: "Managed Media", value: l.managedMedia.join(", "), sub: l.otherManagedMedia || void 0 }) : null,
              l.homeMarket ? (0, t.jsx)(k, { label: "Home Market", value: l.homeMarket.name, sub: l.homeMarket.code }) : null,
              l.targetCountries && l.targetCountries.length ? (0, t.jsx)(k, { label: "Target Markets", value: l.targetCountries.join(", ") }) : null,
              l.targetMarket ? (0, t.jsx)(k, { label: "Target Market", value: l.targetMarket.en, sub: [l.targetMarket.name, l.targetMarket.detail].filter(Boolean).join(" · ") }) : null,
              (0, t.jsx)(k, { label: "Business Type", value: l.businessType?.en, sub: l.businessType?.name }),
              l.accountMedia && l.accountMedia.length ? (0, t.jsx)(k, { label: "Account Media", value: l.accountMedia.join(", "), sub: l.otherAccountMedia || void 0 }) : null,
              l.creativePackage ? (0, t.jsx)(k, { label: "Creative Package", value: l.creativePackage }) : null,
              l.customCreative ? (0, t.jsx)(k, { label: "Custom Creative", value: l.customCreative }) : null,
              (0, t.jsxs)("div", { className: "border-b border-hairline px-4 py-3.5 last:border-b-0 sm:px-5", children: [
                (0, t.jsxs)("dt", { className: "type-mono-label text-steel/70", children: ["Investment Scale ", (0, t.jsx)("span", { className: "normal-case tracking-normal", children: " (optional)" })] }),
                (0, t.jsxs)("dd", { className: "mt-2", children: [
                  (0, t.jsxs)("select", { value: n ?? "", onChange: (e) => i(e.target.value), className: (0, h.cn)(N, "text-[13.5px]"), children: [(0, t.jsx)("option", { value: "", children: "Not sure yet / discuss with consultant" }), d.map((e) => (0, t.jsx)("option", { value: e.id, children: e.label }, e.id))] }),
                  (0, t.jsx)("p", { className: "mt-2 text-[11.5px] leading-relaxed text-steel", children: "This is your current spend level, used by the consultant to scope the plan - not a service quote." }),
                ] }),
              ] }),
              (0, t.jsxs)("div", { className: "px-4 py-3.5 sm:px-5", children: [
                (0, t.jsxs)("dt", { className: "type-mono-label text-steel/70", children: ["Selected Capabilities", (0, t.jsx)("span", { className: "ml-2 normal-case tracking-normal text-navy", children: String(l.capabilities.length).padStart(2, "0") })] }),
                (0, t.jsx)("dd", { className: "mt-3", children: (0, t.jsx)("ol", { className: "space-y-0", children: l.capabilities.map((e, a) => (0, t.jsxs)("li", { className: "flex items-baseline gap-3 border-b border-hairline py-2 last:border-b-0", children: [(0, t.jsx)("span", { className: "type-mono-label shrink-0 tabular-nums text-azure", children: String(a + 1).padStart(2, "0") }), (0, t.jsx)("span", { className: "min-w-0 flex-1 text-[13.5px] text-navy", children: e.product }), (0, t.jsx)("span", { className: "shrink-0 text-[11.5px] text-steel", children: e.category })] }, e.id)) }) }),
              ] }),
            ] }),
            (0, t.jsxs)("form", { onSubmit: (e) => { var t, a, s, n, i2, r2; e.preventDefault(); let d2 = e.currentTarget, c2 = new FormData(d2); for (let e of Array.from(d2.querySelectorAll("[required]"))) if (!e.value.trim()) { (e.setCustomValidity("Please fill in this field"), e.reportValidity(), e.addEventListener("input", () => e.setCustomValidity(""), { once: !0 })); return; } let o2 = Object.fromEntries(Array.from(c2.entries()).map(([e, t]) => [e, String(t).trim()])); (p({ kind: "info", text: "Your plan has been compiled into a request form, but not sent - this prototype is not connected to a backend. Please download and send it to your AdsMarch consultant." }), (t = l), (a = o2), (s = { name: "Name", company: "Company", email: "Email", region: "Country / Region", notes: "Notes" }), (n = new Blob(["\uFEFF", ["AdsMarch · Overseas Growth Plan Request", "(Prototype generated, not sent. Please send this file to your consultant.)", "", "Generated: " + new Date().toLocaleString(), "", "-- Growth Engine --", "Growth Engine: " + (t.growthEngine ? t.growthEngine.name + "（" + t.growthEngine.en + ")" : "Not selected"), "Growth Direction: " + (t.growthDirection ? t.growthDirection.name + "（" + t.growthDirection.en + ")" : "Not selected"), "-- Growth Plan --", "Growth Plan: " + (t.growthPlan ? t.growthPlan.name + "（" + t.growthPlan.en + ")" : "Not selected"), "Managed Media Platforms: " + (t.managedMedia && t.managedMedia.length ? t.managedMedia.join("、") : "Not selected") + (t.otherManagedMedia ? " (Other: " + t.otherManagedMedia + ")" : ""), "-- Markets --", "Home Market: " + (t.homeMarket ? t.homeMarket.name : "Not selected"), "Target Markets: " + (t.targetCountries && t.targetCountries.length ? t.targetCountries.join("、") : (t.targetMarket ? t.targetMarket.name + "（" + t.targetMarket.en + ")" : "Not selected")), "Target Regions: " + (t.targetRegions && t.targetRegions.length ? t.targetRegions.join("、") : "Not selected"), "Business Type: " + (t.businessType ? t.businessType.name + "（" + t.businessType.en + ")" : "Not selected"), "Investment Scale: " + (t.scaleBand ?? "Not sure"), "", "Selected capabilities (" + t.capabilities.length + "):", ...t.capabilities.map((e, t2) => "  " + String(t2 + 1).padStart(2, "0") + " [" + e.category + "] " + e.product), "Account Service Platforms: " + (t.accountMedia && t.accountMedia.length ? t.accountMedia.join("、") : "Not selected") + (t.otherAccountMedia ? " (Other: " + t.otherAccountMedia + ")" : ""), "Creative Package: " + (t.creativePackage || "Not selected"), "Custom Creative Requirements: " + (t.customCreative || "Not provided"), "", "-- Contact --", ...Object.entries(a).filter(([, e]) => e).map(([e, t2]) => (s[e] ?? e) + "：" + t2), "", "Status: not sent. Please send this request to your AdsMarch consultant."].join("\n")], { type: "text/plain;charset=utf-8" })), (i2 = URL.createObjectURL(n)), ((r2 = document.createElement("a")).href = i2), (r2.download = "AdsMarch-Growth-Plan-Request.txt"), r2.click(), setTimeout(() => URL.revokeObjectURL(i2), 1e3)); }, className: "mt-8", children: [
              (0, t.jsx)("p", { className: "type-mono-label text-steel/70", children: "Request a Tailored Proposal" }),
              (0, t.jsx)("p", { className: "mt-2 text-[13px] leading-relaxed text-steel", children: "Target markets and selected capabilities are carried over automatically - no need to re-enter." }),
              (0, t.jsxs)("div", { className: "mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2", children: [
                (0, t.jsx)(S, { label: "Name", name: "name", required: !0, autoComplete: "name", placeholder: "Your name" }),
                (0, t.jsx)(S, { label: "Company", name: "company", required: !0, autoComplete: "organization", placeholder: "Full company name" }),
                (0, t.jsx)(S, { label: "Work Email", name: "email", type: "email", required: !0, autoComplete: "email", placeholder: "name@company.com" }),
                (0, t.jsx)(S, { label: "Country / Region", name: "region", required: !0, autoComplete: "country-name", placeholder: "e.g. China / Singapore" }),
                (0, t.jsxs)("label", { className: "block sm:col-span-2", children: [(0, t.jsx)("span", { className: "type-mono-label block text-steel/70", children: "Additional Notes" }), (0, t.jsx)("textarea", { name: "notes", rows: 4, maxLength: 3e3, placeholder: "e.g. product link, expected launch time, existing ad channels, and questions for the consultant.", className: (0, h.cn)(N, "mt-2 resize-y") })] }),
              ] }),
              (0, t.jsxs)("div", { className: "mt-6 border border-hairline bg-mist/60 p-4 sm:p-5", children: [
                (0, t.jsx)("p", { className: "text-[13.5px] font-medium text-navy", children: "Save My Growth Plan" }),
                (0, t.jsx)("p", { className: "mt-1.5 text-[12.5px] leading-relaxed text-steel", children: "Save your plan and continue later. Enter your email to save the current plan and restore it next time." }),
                (0, t.jsxs)("div", { className: "mt-3.5 flex flex-col gap-2.5 sm:flex-row", children: [(0, t.jsx)("input", { type: "email", value: r, onChange: (e) => c(e.target.value), placeholder: "name@company.com", "aria-label": "Email to save the plan", className: (0, h.cn)(N, "sm:flex-1") }), (0, t.jsx)("button", { type: "button", onClick: o, disabled: !r.trim(), className: "min-h-11 shrink-0 border border-navy/25 px-5 text-[13.5px] text-navy transition-colors hover:border-navy/60 disabled:cursor-not-allowed disabled:opacity-40", children: "Save Plan" })] }),
                (0, t.jsx)("p", { className: "mt-2.5 text-[11.5px] leading-relaxed text-steel", children: "The plan is saved in this browser. It will be lost if you switch devices or clear browser data - it is not uploaded to any server." }),
              ] }),
              (0, t.jsxs)("div", { className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center", children: [
                (0, t.jsxs)("button", { type: "submit", disabled: u, className: "group inline-flex min-h-12 items-center justify-center gap-2 bg-navy px-6 text-[14px] font-medium text-white transition-colors hover:bg-navy-2 disabled:opacity-60", children: [u ? "Submitting…" : "Request a Tailored Proposal", (0, t.jsx)("span", { "aria-hidden": "true", className: "transition-transform group-hover:translate-x-0.5", children: "↗" })] }),
                (0, t.jsx)("button", { type: "button", onClick: s, className: "inline-flex min-h-12 items-center justify-center border border-navy/25 px-6 text-[13.5px] text-navy transition-colors hover:border-navy/60", children: "Talk to a Growth Consultant" }),
              ] }),
              "idle" !== x.kind ? (0, t.jsx)("p", { role: "status", "aria-live": "polite", className: (0, h.cn)("mt-4 border-l-2 py-1 pl-3 text-[12.5px] leading-relaxed", "error" === x.kind ? "border-navy text-navy" : "border-azure text-steel"), children: x.text }) : null,
              (0, t.jsx)("p", { className: "mt-4 text-[11.5px] leading-relaxed text-steel", children: "The information you submit is used only for this service consultation. This prototype is not connected to a backend; information is not uploaded or retained." }),
            ] }),
          ] }),
        ] }) })
      );
    }
    // ===== V3 new helper components end =====


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
          directions: [
            { id: "domestic", name: "Domestic Growth", en: "Domestic Growth" },
            { id: "international", name: "International Expansion", en: "International Expansion" },
          ],
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
          directions: [
            { id: "domestic", name: "Domestic Growth", en: "Domestic Growth" },
            { id: "international", name: "International Expansion", en: "International Expansion" },
          ],
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
            [_dir, _sdir] = (0, a.useState)(null),
            [_gp, _gset] = (0, a.useState)(null),
            [_mmp, _smmp] = (0, a.useState)([]),
            [_ommp, _sommp] = (0, a.useState)(""),
            [c, j] = (0, a.useState)(null),
            [v, f] = (0, a.useState)(""),
            [_home, _shome] = (0, a.useState)(null),
            [_tregs, _stregs] = (0, a.useState)([]),
            [_tcts, _stcts] = (0, a.useState)([]),
            [N, k] = (0, a.useState)(null),
            [G, R] = (0, a.useState)({}),
            [_asp, _sasp] = (0, a.useState)([]),
            [_oasp, _soasp] = (0, a.useState)(""),
            [_cpkg, _scpkg] = (0, a.useState)(null),
            [_creq, _screq] = (0, a.useState)(""),
            [B, E] = (0, a.useState)(null),
            [L, O] = (0, a.useState)(!1),
            [P, U] = (0, a.useState)(!1),
            [q, Y] = (0, a.useState)(""),
            [D, K] = (0, a.useState)(!1),
            [W, F] = (0, a.useState)(!1),
            [_err, _serr] = (0, a.useState)(""),
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
          let _engObj = _eg ? _LK.find((e) => e.id === _eg) : null,
            _dirObj = _dir ? (_engObj?.directions || []).find((e) => e.id === _dir) : null,
            _gpObj = _gp ? _GP.find((e) => e.id === _gp) : null,
            _isEcom = _eg === "ecommerce",
            _isNone = _gp === "none",
            _showManagedMedia = !_isNone && _gpObj && _gpObj.media === !0,
            _C = _CTRY,
            _R = _REG,
            _homeObj = _home ? _C.find((e) => e.c === _home) : null,
            _ctry = (e) => _C.find((x) => x.c === e) || null;
          let Z = (0, a.useMemo)(() => {
              let t = _gpObj,
                a = e.map((e) => n.find((t) => t.id === e)).filter(Boolean),
                l = c ? i.find((e) => e.id === c) : null,
                x = N ? m.find((e) => e.id === N) : null,
                p = B ? d.find((e) => e.id === B) : null;
              return {
                growthPlan: t ? { id: t.id, name: t.name, en: t.en, model: t.model, spend: t.spend } : null,
                growthEngine: _engObj ? { id: _engObj.id, name: _engObj.name, en: _engObj.en } : null,
                growthDirection: _dirObj ? { id: _dirObj.id, name: _dirObj.name, en: _dirObj.en } : null,
                managedMedia: _mmp.map((e) => (_MEDIA.find((x) => x.id === e) || {}).name).filter(Boolean),
                otherManagedMedia: (_ommp || "").trim(),
                growthGoals: a.map((e) => ({ id: e.id, name: e.name, en: e.en })),
                targetMarket: l ? { id: l.id, name: l.name, en: l.en, detail: (v || "").trim() } : null,
                homeMarket: _homeObj ? { code: _homeObj.c, name: _homeObj.n, zh: _homeObj.z } : null,
                targetRegions: _tregs.map((e) => ((_R.find((x) => x.id === e) || {}).en || e)),
                targetCountries: _tcts.map((e) => { let c = _ctry(e); return c ? c.n : e; }),
                businessType: x ? { id: x.id, name: x.name, en: x.en } : null,
                capabilities: _capList(G, e),
                accountMedia: _asp.map((e) => (_MEDIA.find((x) => x.id === e) || {}).name).filter(Boolean),
                otherAccountMedia: (_oasp || "").trim(),
                creativePackage: _cpkg ? (_CP.find((x) => x.id === "creative")?.products || []).find((x) => x.id === _cpkg)?.name || _cpkg : null,
                customCreative: (_creq || "").trim(),
                scaleBand: p ? p.label : null,
              };
            }, [e, c, v, N, G, B, _gp, _eg, _dir, _mmp, _ommp, _asp, _oasp, _cpkg, _creq, _home, _tregs, _tcts]),
            _ = (e) => R((t) => _capRemove(t, e)),
            Q = () => {
              (R({}), l([]), j(null), f(""), k(null), E(null), _sg(null), _sdir(null), _gset(null), _smmp([]), _sommp(""), _shome(null), _stregs([]), _stcts([]), _sasp([]), _soasp(""), _scpkg(null), _screq(""), _serr(""));
            },
            ee = (0, a.useMemo)(() => {
              let t = [];
              return (
                _eg && _dir && t.push("engine"),
                _gp && t.push("plan"),
                (_dir === "domestic" ? _home : _tcts.length > 0) && t.push("market"),
                _capCount(G) && t.push("capabilities"),
                t
              );
            }, [_eg, _dir, _gp, e, c, G, _home, _tcts]),
            et = (0, a.useMemo)(
              () => (_eg && _dir ? (_gp ? (_dir === "domestic" ? (_home ? "capabilities" : "market") : _tcts.length ? "capabilities" : "market") : "plan") : "engine"),
              [_eg, _dir, _gp, e, c, _home, _tcts],
            ),
            ea = !!(_gp || e.length || c || N) || _capCount(G) > 0;
          let _toggleDir = (t, a) => {
            if (_sdir(t), t !== "domestic") {
              _shome(null);
            } else {
              _stregs([]), _stcts([]);
            }
          };
          let _toggleEngine = (t) => {
            let a = _eg === t,
              _e2 = _LK.find((e) => e.id === t);
            if (a) {
              _sg(null), _sdir(null), l([]);
            } else {
              _sg(t), _e2 && l([_e2.goal]);
            }
            if (t === "ecommerce" && _mmp.includes("apple")) _smmp(_mmp.filter((e) => e !== "apple"));
            if (t === "ecommerce" && _asp.includes("apple")) _sasp(_asp.filter((e) => e !== "apple"));
          };
          let _togglePlan = (e) => {
            _gset((t) => (t === e ? null : e));
            if (e === "none") {
              _smmp([]), _sommp("");
            }
          };
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
                                      "A previously saved plan was detected",
                                      X.savedAt
                                        ? (0, t.jsxs)("span", {
                                            className: "text-steel",
                                            children: ["（", new Date(X.savedAt).toLocaleString("zh-CN"), "）"],
                                          })
                                        : null,
                                      ", restore it?",
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
                                            _sdir(X.growthDirectionId ?? null),
                                            _gset(X.growthPlanId ?? null),
                                            _smmp(X.managedMediaPlatforms ?? []),
                                            _sommp(X.otherManagedMedia ?? ""),
                                            j(X.marketId),
                                            f(X.marketDetail ?? ""),
                                            _shome(X.homeMarket ?? null),
                                            _stregs(X.targetRegions ?? []),
                                            _stcts(X.targetCountries ?? []),
                                            k(X.industryId),
                                            R(X.capabilities ?? {}),
                                            _sasp(X.accountServicePlatforms ?? []),
                                            _soasp(X.otherAccountPlatforms ?? ""),
                                            _scpkg(X.creativePackage ?? null),
                                            _screq(X.customCreative ?? ""),
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
                          (0, t.jsx)($, {
                            id: "engine",
                            num: "01",
                            title: "Choose Your Growth Engine",
                            en: "Choose Your Growth Engine",
                            desc: "Start by choosing a path, then a growth direction. Both paths share the same AI + Expert capability system, but their growth stages, core metrics and recommended combinations differ.",
                            done: ee.includes("engine"),
                            children: [
                              (0, t.jsx)(b, {
                                options: _LK,
                                selected: _eg ? [_eg] : [],
                                className: "gp-engine-grid",
                                onToggle: _toggleEngine,
                              }),
                              _eg
                                ? (0, t.jsxs)("div", {
                                    className: "mt-6 border border-hairline bg-white p-5 sm:p-6",
                                    children: [
                                      (0, t.jsx)("p", {
                                        className: "type-mono-label text-steel/70",
                                        children: "Growth Direction",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "mt-3 grid gap-3 sm:grid-cols-2",
                                        children: (_engObj?.directions || []).map((d) => {
                                          let on = _dir === d.id;
                                          return (0, t.jsxs)(
                                            "button",
                                            {
                                              type: "button",
                                              "aria-pressed": on,
                                              onClick: () => _toggleDir(d.id, on),
                                              className: (0, h.cn)(
                                                "flex items-center gap-3 border p-4 text-left transition-colors",
                                                on
                                                  ? "border-azure bg-frost"
                                                  : "border-hairline bg-white hover:border-azure/40",
                                              ),
                                              children: [
                                                (0, t.jsx)("span", {
                                                  "aria-hidden": "true",
                                                  className: (0, h.cn)(
                                                    "grid size-5 shrink-0 place-items-center border text-[11px] leading-none",
                                                    on ? "border-azure bg-azure text-white" : "border-hairline text-transparent",
                                                  ),
                                                  children: "✓",
                                                }),
                                                (0, t.jsxs)("span", {
                                                  className: "flex flex-col",
                                                  children: [
                                                    (0, t.jsx)("span", {
                                                      className: "text-[14px] font-medium text-navy",
                                                      children: d.name,
                                                    }),
                                                    (0, t.jsx)("span", {
                                                      className: "type-mono-label text-steel",
                                                      children: d.en,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            d.id,
                                          );
                                        }),
                                      }),
                                    ],
                                  })
                                : null,
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
                            title: "Which plan fits your current stage?",
                            en: "Choose Your Growth Plan",
                            desc: "Different growth stages call for different service models and plan structures. The first five are managed-media packages; the sixth is for clients who do not need managed media but want to buy other services separately.",
                            done: ee.includes("plan"),
                            children: [
                              (0, t.jsx)(_pg, {
                                options: _GP,
                                selected: _gp,
                                onToggle: _togglePlan,
                              }),
                              _showManagedMedia
                                ? (0, t.jsxs)("div", {
                                    className: "mt-6 border border-hairline bg-white p-5 sm:p-6",
                                    children: [
                                      (0, t.jsx)("p", {
                                        className: "type-mono-label text-steel/70",
                                        children: "Managed Media Platforms",
                                      }),
                                      (0, t.jsx)("p", {
                                        className: "mt-1.5 text-[12.5px] text-steel",
                                        children: "Select the platforms you want us to manage your advertising on (multi-select).",
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "mt-3.5 grid gap-2.5 sm:grid-cols-2",
                                        children: _MEDIA.filter((x) => !(_isEcom && x.id === "apple")).map((m2) => {
                                          let on = _mmp.includes(m2.id);
                                          return (0, t.jsxs)(
                                            "button",
                                            {
                                              type: "button",
                                              "aria-pressed": on,
                                              onClick: () => _smmp(on ? _mmp.filter((x) => x !== m2.id) : [..._mmp, m2.id]),
                                              className: (0, h.cn)(
                                                "flex items-center gap-2.5 border p-3 text-left transition-colors",
                                                on ? "border-azure bg-frost" : "border-hairline bg-white hover:border-azure/40",
                                              ),
                                              children: [
                                                (0, t.jsx)("span", {
                                                  "aria-hidden": "true",
                                                  className: (0, h.cn)(
                                                    "grid size-5 shrink-0 place-items-center border text-[11px] leading-none",
                                                    on ? "border-azure bg-azure text-white" : "border-hairline text-transparent",
                                                  ),
                                                  children: "✓",
                                                }),
                                                (0, t.jsx)("span", { className: "text-[13.5px] text-navy", children: m2.name }),
                                              ],
                                            },
                                            m2.id,
                                          );
                                        }),
                                      }),
                                      _mmp.includes("other")
                                        ? (0, t.jsxs)("div", { className: "mt-3", children: [
                                            (0, t.jsx)("span", { className: "type-mono-label block text-steel/70", children: "Please specify the platform(s)" }),
                                            (0, t.jsx)("input", {
                                              type: "text",
                                              value: _ommp,
                                              onChange: (e) => _sommp(e.target.value),
                                              maxLength: 200,
                                              placeholder: "Please specify the advertising platform(s). Comma-separated",
                                              className: "mt-2 w-full border border-hairline bg-white px-3.5 py-3 text-[14px] text-navy placeholder:text-steel/50 focus:border-azure focus:outline-none",
                                            }),
                                          ] })
                                        : null,
                                    ],
                                  })
                                : null,
                            ],
                          }),
                          (0, t.jsx)($, {
                            id: "market",
                            num: "03",
                            title: _dir === "international" ? "Which markets are you targeting?" : "Where is your home market?",
                            en: _dir === "international" ? "Which markets are you targeting?" : "Where is your home market?",
                            desc: _dir === "international"
                              ? "First confirm where your business is based, then select target markets (multi-select)."
                              : "Select your home market (searchable).",
                            done: ee.includes("market"),
                            children: _dir === "international"
                              ? [
                                  (0, t.jsxs)("div", {
                                    className: "border border-hairline bg-white p-5 sm:p-6",
                                    children: [
                                      (0, t.jsx)("p", { className: "type-mono-label text-steel/70", children: "Where Is Your Business Based?" }),
                                      (0, t.jsx)(_sel, {
                                        value: _home,
                                        onChange: _shome,
                                        placeholder: "Search and select a country / region",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "mt-5 border border-hairline bg-white p-5 sm:p-6",
                                    children: [
                                      (0, t.jsx)("p", { className: "type-mono-label text-steel/70", children: "Select Target Regions" }),
                                      (0, t.jsx)("div", {
                                        className: "mt-3 flex flex-wrap gap-2",
                                        children: _R.map((r) => {
                                          let on = _tregs.includes(r.id);
                                          return (0, t.jsxs)(
                                            "button",
                                            {
                                              type: "button",
                                              "aria-pressed": on,
                                              onClick: () => {
                                                let nx = on ? _tregs.filter((x) => x !== r.id) : [..._tregs, r.id];
                                                _stregs(nx);
                                                let keep = _tcts.filter((cc) => { let o = _ctry(cc); return o && nx.includes(o.r); });
                                                _stcts(keep);
                                              },
                                              className: (0, h.cn)(
                                                "inline-flex items-center gap-1.5 border px-3 py-2 text-[12.5px] transition-colors",
                                                on ? "border-azure bg-frost text-navy" : "border-hairline bg-white text-navy hover:border-azure/40",
                                              ),
                                              children: [r.zh + " " + r.en],
                                            },
                                            r.id,
                                          );
                                        }),
                                      }),
                                      (0, t.jsx)("p", { className: "type-mono-label mt-5 text-steel/70", children: "Select Target Countries" }),
                                      (0, t.jsxs)("div", { className: "mt-2 flex flex-wrap gap-2", children: [
                                        ["US", "AU", "NZ", "GB", "CA", "SG"].map((cc) => {
                                          let o = _ctry(cc);
                                          if (!o) return null;
                                          let on = _tcts.includes(cc);
                                          return (0, t.jsx)(
                                            "button",
                                            {
                                              type: "button",
                                              "aria-pressed": on,
                                              onClick: () => _stcts(on ? _tcts.filter((x) => x !== cc) : [..._tcts, cc]),
                                              className: (0, h.cn)(
                                                "inline-flex items-center gap-1 border px-2.5 py-1.5 text-[12px] transition-colors",
                                                on ? "border-azure bg-frost text-navy" : "border-hairline bg-white text-navy hover:border-azure/40",
                                              ),
                                              children: o.n,
                                            },
                                            cc,
                                          );
                                        }),
                                        (0, t.jsx)(_sel, { value: null, onChange: (cc) => { if (cc && !_tcts.includes(cc)) _stcts([..._tcts, cc]); }, placeholder: "Search and add a country" }),
                                      ] }),
                                      _tcts.length
                                        ? (0, t.jsx)("div", {
                                            className: "mt-4 flex flex-wrap gap-2",
                                            children: _tcts.map((cc) => {
                                              let o = _ctry(cc);
                                              return (0, t.jsxs)(
                                                "span",
                                                {
                                                  className: "inline-flex items-center gap-1.5 border border-hairline bg-mist px-2.5 py-1.5 text-[12px] text-navy",
                                                  children: [
                                                    o ? o.n : cc,
                                                    _home === cc ? (0, t.jsx)("span", { className: "text-[11px] text-brass", children: "Home market" }) : null,
                                                    (0, t.jsx)("button", {
                                                      type: "button",
                                                      onClick: () => _stcts(_tcts.filter((x) => x !== cc)),
                                                      className: "text-steel hover:text-navy",
                                                      children: "×",
                                                    }),
                                                  ],
                                                },
                                                cc,
                                              );
                                            }),
                                          })
                                        : null,
                                      _tcts.includes(_home) && _home
                                        ? (0, t.jsx)("p", {
                                            className: "mt-3 border-l-2 border-brass pl-3 text-[12px] text-steel",
                                            children: "This is your home market. Please confirm whether you intend to target it.",
                                          })
                                        : null,
                                    ],
                                  }),
                                ]
                              : [
                                  (0, t.jsx)("div", {
                                    className: "border border-hairline bg-white p-5 sm:p-6",
                                    children: [
                                      (0, t.jsx)("p", { className: "type-mono-label text-steel/70", children: "Where Is Your Home Market?" }),
                                      (0, t.jsx)(_sel, { value: _home, onChange: _shome, placeholder: "Search and select a country / region" }),
                                      _homeObj
                                        ? (0, t.jsx)("p", { className: "mt-3 text-[13px] text-navy", children: "Selected: " + _homeObj.z + "（" + _homeObj.n + "）" })
                                        : null,
                                    ],
                                  }),
                                ],
                          }),
                          (0, t.jsx)($, {
                            id: "capabilities",
                            num: "04",
                            title: "Which capabilities belong in your plan?",
                            en: "Which capabilities belong in your plan?",
                            desc: "Expand by service category, tick specific products, and combine freely across categories. The judgement is left to you and your consultant.",
                            done: ee.includes("capabilities"),
                            children: (0, t.jsx)(_g2, {
                              goalIds: e,
                              selected: G,
                              onToggle: (e, t) => R((a) => _capToggle(a, e, t)),
                              onSelectAll: (e) => R((t) => _capAll(t, e)),
                              accountMedia: _asp,
                              setAccountMedia: _sasp,
                              otherAccountMedia: _oasp,
                              setOtherAccountMedia: _soasp,
                              creativePackage: _cpkg,
                              setCreativePackage: _scpkg,
                              customCreative: _creq,
                              setCustomCreative: _screq,
                            }),
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-10 border-l-2 border-azure pl-4 text-[12.5px] leading-relaxed text-steel",
                            children:
                              "No fixed pricing is shown on this page. AdsMarch provides overseas growth services rather than standard products - the final quote depends on target market, industry, spend scale, creative needs and service period. Tell us clearly what you want, and the consultant will produce a tailored proposal.",
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
                        onClick: () => {
                          if (_isNone && _capCount(G) === 0) {
                            _serr("Please select at least one capability to continue.");
                            document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" });
                            return;
                          }
                          O(!0);
                        },
                        disabled: 0 === Z.capabilities.length && !_isNone,
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
                            if (_isNone && _capCount(G) === 0) {
                              _serr("Please select at least one capability to continue.");
                              return;
                            }
                            (U(!1), O(!0));
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)(w2, {
                open: L,
                onClose: () => O(!1),
                plan: Z,
                scaleBandId: B,
                onScaleBandChange: E,
                savedEmail: q,
                onSavedEmailChange: Y,
                err: _err,
                setErr: _serr,
                onSave: () =>
                  ((t) => {
                    let a = {
                      goalIds: e,
                      growthPathId: _eg,
                      growthDirectionId: _dir,
                      growthPlanId: _gp,
                      managedMediaPlatforms: _mmp,
                      otherManagedMedia: _ommp,
                      marketId: c,
                      marketDetail: v,
                      homeMarket: _home,
                      targetRegions: _tregs,
                      targetCountries: _tcts,
                      industryId: N,
                      capabilities: G,
                      accountServicePlatforms: _asp,
                      otherAccountPlatforms: _oasp,
                      creativePackage: _cpkg,
                      customCreative: _creq,
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
              _err
                ? (0, t.jsx)("div", {
                    "aria-live": "polite",
                    className: "fixed inset-x-0 bottom-20 z-50 flex justify-center px-5",
                    children: (0, t.jsxs)("div", {
                      className: "flex items-center gap-3 border border-brass bg-white px-5 py-3 text-[13px] text-navy shadow-lg",
                      children: [
                        _err,
                        (0, t.jsx)("button", { type: "button", onClick: () => _serr(""), className: "text-steel hover:text-navy", children: "×" }),
                      ],
                    }),
                  })
                : null,
            ],
          });
        },

      ],
      34977,
    );
  },
]);
