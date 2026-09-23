const typeData = {
  into: {
    number: "01",
    title: "Research Into Design",
    chinese: "对设计的研究",
    color: "blue",
    summary:
      "以设计本体、设计现象、设计理论、设计过程，以及设计者、用户、工具和智能体等为研究对象，通过分析、解释和批判来理解设计是什么、如何发生以及如何演变。",
    points: [
      ["核心问题", "设计是什么？如何运作？为什么会这样？"],
      ["设计角色", "设计是被观察、分析和解释的研究对象。"],
      ["典型产出", "理论、概念框架、经验材料和对设计机制的解释。"],
    ],
    methods: ["理论分析", "历史研究", "案例研究", "观察与批判性分析"],
  },
  for: {
    number: "02",
    title: "Research For Design",
    chinese: "为设计的研究",
    color: "orange",
    summary:
      "为了完成具体设计任务或产出设计成果而开展研究，通过收集信息、分析需求、开发方法、测试技术或建立工具，为设计实践提供可靠依据和操作支持。",
    points: [
      ["核心问题", "为了做好设计，需要什么依据、工具和支持？"],
      ["设计角色", "设计是研究要支持的目标和应用场景。"],
      ["典型产出", "设计需求、方法、工具、流程、系统和设计方案。"],
    ],
    methods: ["用户研究", "实证研究", "技术测试", "案例研究与原型制作"],
  },
  through: {
    number: "03",
    title: "Research Through Design",
    chinese: "通过设计的研究",
    color: "teal",
    summary:
      "把设计实践本身作为研究工具和知识生产过程，通过概念生成、原型制作、用户实验、技术测试、数据分析和反复迭代来探索问题。",
    points: [
      ["核心问题", "通过制作、实验和反思，可以发现什么新知识？"],
      ["设计角色", "设计既是研究方法，也是知识生成过程。"],
      ["典型产出", "原型、设计方案、设计原则、新方法和可复用知识。"],
    ],
    methods: ["原型制作", "用户实验", "迭代改进", "数据分析与实践反思"],
  },
};

const comparisonRows = [
  ["最核心的关注点", "理解和解释设计本身", "支持具体设计任务和设计成果", "通过设计实践产生新知识"],
  ["主要研究对象", "设计理论、现象、过程、主体和工具", "用户需求、使用情境、技术条件、设计问题", "设计过程、原型、实验、反馈和迭代"],
  ["设计的角色", "被研究的对象", "研究成果要服务的目标", "研究工具、实践过程和知识媒介"],
  ["研究者与设计者关系", "研究者主要分析设计及其相关现象", "研究者可为设计者提供信息与依据", "研究者和设计者通常密切协作，角色可能重叠"],
  ["典型方法", "理论分析、历史研究、案例研究、观察", "用户研究、实证研究、技术测试、原型制作", "原型制作、用户实验、技术测试、设计迭代"],
  ["主要知识贡献", "解释设计现象，扩展设计理论", "提高设计决策和实践的可靠性", "把实践经验转化为可讨论、可验证和可复用知识"],
];

const papers = [
  {
    id: "into-paper",
    type: "into",
    index: "01",
    label: "典型案例 · INTO",
    title: "From computation to curation: Expanding the boundaries of design practice",
    authors: "Lee, S.-H. · Design Studies · 2025 · 101, 101357",
    description:
      "一篇概念性较强的 perspective paper，分析当代设计实践如何从物件生产扩展到体验策划、计算能力、关系张力与跨学科场域。",
    doi: "https://doi.org/10.1016/j.destud.2025.101357",
    source: "https://www.sciencedirect.com/science/article/pii/S0142694X25000699",
    question:
      "设计边界如何变化？在体验设计、人工智能、跨学科协作和系统性问题中，设计师的角色如何转变？",
    method:
      "概念分析、设计理论综合、专业实践与案例论证，提出四维度框架和 Design for Longevity（D4L）框架。",
    role: "设计是被观察、分析和重新概念化的研究对象。",
    contribution:
      "提出四个重新理解设计实践的维度：沉浸式体验、演化中的计算能力、关系张力和扩展中的设计场域。",
    judgement:
      "主要研究设计实践本身的变化、边界和理论意义，因此属于 Research Into Design。",
    evidence: [
      {
        title: "Evidence 01 · Abstract",
        location: "摘要",
        text: "文章将自身定位为讨论设计实践边界变化的 perspective paper。",
        quote: "“This perspective paper explores the evolving boundaries of design practice.”",
      },
      {
        title: "Evidence 02 · Section 2 / Figure 1",
        location: "Evolving design practice: a four-dimensional perspective",
        text: "作者把设计从传统的物件生产扩展到体验策划，并用四维框架解释设计实践的扩展。",
        quote: "“expanding design’s role from artifact creation to experience curation”",
      },
    ],
  },
  {
    id: "for-paper",
    type: "for",
    index: "02",
    label: "典型案例 · FOR",
    title: "Technology selection in design education in an undergraduate course",
    authors: "Alessandrini, A. · Design Studies · 2026 · 104, 101344",
    description:
      "一项关于本科设计学生制作交互原型时如何选择技术的田野研究，关注团队、教师、同伴和知识条件对技术选择的影响。",
    doi: "https://doi.org/10.1016/j.destud.2025.101344",
    source: "https://www.sciencedirect.com/science/article/abs/pii/S0142694X25000560",
    question:
      "设计学生如何选择制作交互原型所需要的技术？哪些因素影响技术选择和探索过程？",
    method:
      "田野研究、半结构化访谈、原型制作过程观察、原型分析，并依据 grounded theory 进行主题分析。",
    role: "设计是被支持和改进的实践目标，研究结果要回到课程、工具和原型实践中使用。",
    contribution:
      "揭示技术选择不只是性能比较，还受到社会关系、教师支持、同伴影响和团队知识影响，为原型课程重新设计提供依据。",
    judgement:
      "研究直接改善设计实践和设计教育，主要属于 Research For Design。",
    evidence: [
      {
        title: "Evidence 01 · Abstract / Method",
        location: "摘要与方法描述",
        text: "研究围绕真实设计活动中的技术选择问题展开，并收集能够改进原型实践的经验材料。",
        quote: "“How are interactive technologies selected when prototyping interactive artefacts?”",
      },
      {
        title: "Evidence 02 · Conclusion / Implications",
        location: "结论与实践启示",
        text: "作者将研究结果明确转回原型课程、学习环境、工具和文化的改进。",
        quote: "“The study highlights the need to redesign prototyping design classes, learning contexts, tools, and culture”",
      },
    ],
  },
  {
    id: "through-paper",
    type: "through",
    index: "03",
    label: "典型案例 · THROUGH",
    title: "Enabling Relational Adaptation: Flipping the Script in Public Service Design",
    authors: "Hay, A. F., Vink, J., & Sangiorgi, D. · International Journal of Design · 2024 · 18(3), 9–27",
    description:
      "一项持续 18 个月的 research-by-design study，通过原型、对话实验和互动戏剧探索公共服务中的关系脚本如何被共同创作、调整和重写。",
    doi: "https://doi.org/10.57698/v18i3.02",
    source: "https://www.ijdesign.org/index.php/IJDesign/article/view/5772/1082",
    question:
      "服务设计如何帮助挪威儿童福利系统中的行动者自主调整关系，并让服务脚本变成可持续协商的关系结构？",
    method:
      "programmatic research by design；包含 Dialogue Lab、互动戏剧、共同设计、原型制作、参与式活动和溯因分析。",
    role: "设计同时是研究方法、实验媒介、共同思考工具和知识生产过程。",
    contribution:
      "提出五项支持关系适应的设计原则，重新概念化公共服务脚本，并为关系性公共服务设计提供实践方向。",
    judgement:
      "设计实验和迭代本身是产生研究发现和设计原则的主要过程，因此属于 Research Through Design。",
    evidence: [
      {
        title: "Evidence 01 · Abstract",
        location: "摘要",
        text: "五项设计原则来自一项持续 18 个月的 research-by-design study。",
        quote: "“The principles were developed through an 18-month research-by-design study”",
      },
      {
        title: "Evidence 02 · Introduction / Design explorations",
        location: "引言与设计探索",
        text: "研究通过原型、对话实验和互动戏剧展开，并从这些设计探索中发展关系适应原则。",
        quote: "“promoting the co-authorship of scripts”",
      },
      {
        title: "Evidence 03 · Methodology",
        location: "方法论",
        text: "设计探索、经验材料和理论分析之间形成循环反馈，符合通过设计生成知识的逻辑。",
        quote: "programmatic research by design",
      },
    ],
  },
];

const disputePaper = {
  title: "Theory as Design Material: How Design Researchers Use Design Skills to Explore the Malleability of Theory",
  info: "Bekker, T., Skovbjerg, H. M., Petersen, M. L., & Johry, A. · International Journal of Design · 2025 · 19(2), 1–12",
  doi: "https://doi.org/10.57698/v19i2.01",
  source: "https://www.ijdesign.org/index.php/IJDesign/article/view/5484/1107",
  question:
    "设计研究者如何把理论带入设计研究过程？理论如何从抽象知识转化为设计材料？",
  judgement:
    "主要是 Research Through Design，同时具有 Research Into Design 特征，并在设计研究教育和理论应用层面具有 Research For Design 的作用。",
  into:
    "它把设计研究实践、理论使用和知识转化作为被观察、分析和解释的对象。",
  through:
    "它关注理论如何在设计实践中被改变、组合、测试和重新解释，具有明显的做中思考特征。",
  for:
    "它为设计研究者如何使用理论、为教育者如何设计研究训练提供支持。",
  evidence: [
    {
      title: "Evidence 01 · Abstract",
      location: "摘要",
      text: "研究基于对 10 名设计研究者的访谈，分析他们如何以设计方式使用理论。",
      quote: "“Based on interviews with 10 design researchers”",
    },
    {
      title: "Evidence 02 · Introduction",
      location: "引言",
      text: "文章明确把理论描述为能够被探索和使用的设计材料。",
      quote: "“theory is explored and used as a design material”",
    },
    {
      title: "Evidence 03 · Method",
      location: "方法",
      text: "作者通过开放编码、主题编码和多轮迭代分析理论使用实践，因此又具备 Into 的观察和分析属性。",
      quote: "半结构化访谈 · 开放编码 · 主题分析",
    },
  ],
};

const references = [
  {
    title: "From computation to curation: Expanding the boundaries of design practice",
    detail: "Lee, S.-H. · Design Studies, 2025 · 101, 101357",
    url: "https://doi.org/10.1016/j.destud.2025.101357",
  },
  {
    title: "Technology selection in design education in an undergraduate course",
    detail: "Alessandrini, A. · Design Studies, 2026 · 104, 101344",
    url: "https://doi.org/10.1016/j.destud.2025.101344",
  },
  {
    title: "Enabling Relational Adaptation: Flipping the Script in Public Service Design",
    detail: "Hay, A. F., Vink, J., & Sangiorgi, D. · International Journal of Design, 2024 · 18(3), 9–27",
    url: "https://doi.org/10.57698/v18i3.02",
  },
  {
    title: "Theory as Design Material: How Design Researchers Use Design Skills to Explore the Malleability of Theory",
    detail: "Bekker, T., Skovbjerg, H. M., Petersen, M. L., & Johry, A. · International Journal of Design, 2025 · 19(2), 1–12",
    url: "https://doi.org/10.57698/v19i2.01",
  },
];

const typeDetail = document.querySelector("#type-detail");
const typeTabs = [...document.querySelectorAll(".type-tab")];
const comparisonBody = document.querySelector("#comparison-body");
const caseList = document.querySelector("#case-list");
const disputeCard = document.querySelector("#dispute-card");
const referenceList = document.querySelector("#reference-list");
const dialog = document.querySelector("#evidence-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogContent = document.querySelector("#dialog-content");

function renderType(type) {
  const data = typeData[type];
  typeTabs.forEach((tab) => {
    const active = tab.dataset.type === type;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  typeDetail.innerHTML = `
    <div class="type-detail-grid">
      <div>
        <p class="detail-kicker">${data.number} / ${data.title.toUpperCase()}</p>
        <h3>${data.chinese}</h3>
        <p class="detail-summary">${data.summary}</p>
        <dl class="detail-points">
          ${data.points.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}
        </dl>
      </div>
      <aside class="detail-aside">
        <h4>常见研究方法</h4>
        <ul>${data.methods.map((method) => `<li>${method}</li>`).join("")}</ul>
      </aside>
    </div>
  `;
}

function renderComparison() {
  comparisonBody.innerHTML = comparisonRows
    .map(
      ([label, into, forType, through]) => `
        <tr>
          <td>${label}</td>
          <td data-col="into">${into}</td>
          <td data-col="for">${forType}</td>
          <td data-col="through">${through}</td>
        </tr>
      `,
    )
    .join("");

  document.querySelectorAll(".comparison-table th[data-col], .comparison-table td[data-col]").forEach((cell) => {
    cell.addEventListener("click", () => {
      const column = cell.dataset.col;
      document.querySelectorAll(".comparison-table [data-col]").forEach((item) => {
        item.classList.toggle("is-highlighted", item.dataset.col === column);
      });
    });
  });
}

function renderCases(filter = "all") {
  const visible = filter === "all" ? papers : papers.filter((paper) => paper.type === filter);
  caseList.innerHTML = visible
    .map(
      (paper) => `
        <article class="case-card">
          <div class="case-index">${paper.index}</div>
          <div>
            <div class="case-meta">
              <span class="case-tag ${paper.type}">${paper.label}</span>
            </div>
            <h3 class="case-title"><a href="${paper.doi}" target="_blank" rel="noreferrer">${paper.title}</a></h3>
            <p class="case-authors">${paper.authors}</p>
            <p class="case-desc">${paper.description}</p>
            <details class="case-details">
              <summary>展开研究分析</summary>
              <div class="case-analysis-grid">
                <div><b>研究问题</b><span>${paper.question}</span></div>
                <div><b>研究方法</b><span>${paper.method}</span></div>
                <div><b>设计角色</b><span>${paper.role}</span></div>
                <div><b>主要贡献</b><span>${paper.contribution}</span></div>
                <div class="analysis-judgement"><b>小组分类判断</b><span>${paper.judgement}</span></div>
              </div>
            </details>
          </div>
          <div class="case-actions">
            <button class="text-button evidence-button" type="button" data-paper="${paper.id}">看证据</button>
            <a class="external-link" href="${paper.source}" target="_blank" rel="noreferrer">期刊页面 ↗</a>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll(".evidence-button").forEach((button) => {
    button.addEventListener("click", () => {
      const paper = papers.find((item) => item.id === button.dataset.paper);
      openEvidence(paper.title, paper.evidence);
    });
  });
}

function renderDispute() {
  disputeCard.innerHTML = `
    <div class="classification-bar">
      <span>THROUGH · 主分类</span><span>INTO · 交叉</span><span>FOR · 作用</span>
    </div>
    <h3>${disputePaper.title}</h3>
    <p class="paper-info">${disputePaper.info}</p>
    <p class="dispute-question"><b>研究问题：</b>${disputePaper.question}</p>
    <blockquote>${disputePaper.judgement}</blockquote>
    <div class="dispute-columns">
      <div><b>为什么像 Into</b><span>${disputePaper.into}</span></div>
      <div><b>为什么像 Through</b><span>${disputePaper.through}</span></div>
      <div><b>为什么有 For 作用</b><span>${disputePaper.for}</span></div>
    </div>
    <div class="case-actions" style="align-items:flex-start; margin-top:26px; flex-direction:row;">
      <button class="text-button dispute-evidence" type="button">查看三处证据</button>
      <a class="external-link" href="${disputePaper.source}" target="_blank" rel="noreferrer">官方全文 ↗</a>
    </div>
  `;
  document.querySelector(".dispute-evidence").addEventListener("click", () => {
    openEvidence(disputePaper.title, disputePaper.evidence);
  });
};

function renderReferences() {
  referenceList.innerHTML = references
    .map(
      (reference, index) => `
        <li class="reference-item">
          <span class="reference-number">0${index + 1}</span>
          <div><strong>${reference.title}</strong><span>${reference.detail}</span></div>
          <a href="${reference.url}" target="_blank" rel="noreferrer">打开 DOI ↗</a>
        </li>
      `,
    )
    .join("");
}

function openEvidence(title, evidence) {
  dialogTitle.textContent = "原文证据";
  dialogContent.innerHTML = `
    <p style="margin:0 0 16px; color:var(--ink); font-weight:750; line-height:1.55;">${title}</p>
    ${evidence
      .map(
        (item) => `
          <section class="evidence-block">
            <h3>${item.title}</h3>
            <p><strong>定位：</strong>${item.location}</p>
            <p>${item.text}</p>
            <p class="evidence-quote">${item.quote}</p>
          </section>
        `,
      )
      .join("")}
  `;
  dialog.showModal();
}

typeTabs.forEach((tab) => tab.addEventListener("click", () => renderType(tab.dataset.type)));

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderCases(button.dataset.filter);
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
navToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});
mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mobileNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

renderType("into");
renderComparison();
renderCases();
renderDispute();
renderReferences();
