const REPOSITORY = "CharlesWesley-S/computer-science-notes";
const RAW_ROOT = `https://raw.githubusercontent.com/${REPOSITORY}/main/`;
const BLOB_ROOT = `https://github.com/${REPOSITORY}/blob/main/`;

const knowledgeTopics = {
  programming: {
    code:"CS / 01", label:"FOUNDATION",
    title:{en:"Basic Programming",zh:"基础编程"},
    description:{en:"C, Java, and Python fundamentals, with an emphasis on clear logic and intuitive explanations.",zh:"C、Java、Python 基础语法与编程思想，侧重清晰的逻辑与直觉解释。"},
    groups:{
      zh:[
        {name:"Python",articles:[]},
        {name:"Java",articles:[
          {id:"java-basics",code:"JAVA / 01",title:"Java：基本知识",description:"变量、变量类型与 Scanner 输入。",path:"中文/基础编程/java/java：基本知识.md"},
          {id:"java-selection",code:"JAVA / 02",title:"Java 学习笔记第二篇：选择结构",description:"Java 的布尔值、逻辑运算符与 if 选择结构。",path:"中文/基础编程/java/java学习笔记第二篇：选择结构.md"},
          {id:"java-for",code:"JAVA / 03",title:"Java 学习笔记第三篇：for 循环",description:"for 循环、循环过程与嵌套循环。",path:"中文/基础编程/java/java学习笔记第三篇：for循环.md"},
          {id:"java-for-if",code:"JAVA / 04",title:"Java 学习笔记第四篇：for 循环与 if",description:"for 循环与 if 条件语句的联合使用。",path:"中文/基础编程/java/java学习笔记第四篇：for循环与if条件语句的结合.md"}
        ]},
        {name:"C",articles:[]}
      ],
      en:[
        {name:"Python",articles:[]},
        {name:"Java",articles:[
          {id:"java-basics",code:"JAVA / 01",title:"Java: Basic Knowledge",description:"Variables, data types, and Scanner input.",path:"English/basic programming/java/Java：Basic Knowledge.md"}
        ]},
        {name:"C",articles:[]}
      ]
    }
  },
  algorithms: {
    code:"CS / 02",label:"ALGORITHM",title:{en:"Algorithms & Data Structures",zh:"算法与数据结构"},
    description:{en:"Classic algorithms, implementations, complexity analysis, visualizations, and real-life analogies.",zh:"经典算法思路、实现、复杂度分析，并配合可视化与生活类比。"},
    groups:{zh:[{name:"算法与数据结构",articles:[]}],en:[{name:"Algorithms & Data Structures",articles:[]}]}
  },
  systems: {
    code:"CS / 03",label:"SYSTEMS",title:{en:"Operating Systems & Hardware",zh:"操作系统与硬件"},
    description:{en:"Computer organization, operating systems, ARM architecture, and low-level mechanisms.",zh:"计算机组成、操作系统原理、ARM 架构与底层运行机制。"},
    groups:{
      zh:[
        {name:"操作系统：软件世界的基础设施",articles:[]},
        {name:"汇编语言：软件与硬件的桥梁",articles:[
          {id:"assembly-intro",code:"ARM / 01",title:"汇编语言的基础与为什么要学习汇编",description:"汇编语言基础、学习原因与最简单的 ARM 指令。",path:"中文/操作系统与硬件/汇编语言：软件与硬件的桥梁/3.1汇编语言的基础与为什么要知道汇编语言.md"},
          {id:"arm-number-systems",code:"ARM / 02",title:"ARM 汇编语言 2：二进制、十进制与十六进制",description:"ARM 编程所需的基本进制知识。",path:"中文/操作系统与硬件/汇编语言：软件与硬件的桥梁/ARM 汇编语言2：二进制,十进制,十六进制.md"},
          {id:"arm-if",code:"ARM / 03",title:"ARM 汇编语言 3：伪代码与 if 语句",description:"伪代码与 ARM 条件判断基础。",path:"中文/操作系统与硬件/汇编语言：软件与硬件的桥梁/arm汇编语言3：伪代码与if语句.md"}
        ]},
        {name:"硬件：计算机的核心",articles:[
          {id:"logic-gates",code:"HW / 01",title:"硬件 1：逻辑门",description:"从逻辑门理解计算机为何能够工作。",path:"中文/操作系统与硬件/硬件：计算机的核心/硬件/硬件1：逻辑门.md"},
          {id:"verilog-one",code:"HDL / 01",title:"硬件语言：Verilog（1）",description:"初步理解由逻辑门构建电路的编程语言。",path:"中文/操作系统与硬件/硬件：计算机的核心/硬件语言/Verilog HDL/硬件语言：verilog（1）.md"}
        ]}
      ],
      en:[
        {name:"Operating Systems",articles:[]},
        {name:"Assembly Language",articles:[
          {id:"arm-number-systems",code:"ARM / 02",title:"ARM Assembly 2: Binary, Decimal, and Hexadecimal",description:"The basic number systems used in ARM programming.",path:"English/Operating Systems and Hardware/Assembly language the bridge between software and hardware/ARM Assembly Language 2 Binary, Decimal, Hexadecimal.md"}
        ]},
        {name:"Hardware",articles:[
          {id:"logic-gates",code:"HW / 01",title:"Hardware 1: Logic Gates",description:"Understand why computers work through logic gates.",path:"English/Operating Systems and Hardware/Hardware： The Heart of a Computer/Hardware/Hardware 1：Logic Gates.md"},
          {id:"verilog-one",code:"HDL / 01",title:"Hardware Language: Verilog (1)",description:"A first look at the language used to describe circuits.",path:"English/Operating Systems and Hardware/Hardware： The Heart of a Computer/Hardware programming language/Hardware language：Verilog (1).md"}
        ]}
      ]
    }
  },
  networks: {
    code:"CS / 04",label:"NETWORK",title:{en:"Computer Networks",zh:"计算机网络"},
    description:{en:"TCP/IP, HTTP, routing, network programming, and security fundamentals.",zh:"TCP/IP、HTTP、路由机制、网络编程与安全基础。"},
    groups:{zh:[{name:"计算机网络",articles:[]}],en:[{name:"Computer Networks",articles:[]}]}
  },
  math: {
    code:"CS / 05",label:"LOGIC",title:{en:"Mathematics & Logic",zh:"数学与逻辑"},
    description:{en:"Sets, logic, probability, linear algebra, and the mathematical intuition behind computing.",zh:"集合、逻辑、概率、线性代数，以及计算机背后的数学直觉。"},
    groups:{zh:["微积分","线性代数","数论","离散数学","概率","布尔代数","基础逻辑与集合论"].map(name=>({name,articles:[]})),en:[{name:"Mathematics & Logic",articles:[]}]}
  },
  database: {
    code:"CS / 06",label:"DATABASE",title:{en:"Database",zh:"数据库"},
    description:{en:"Notes about computer databases and data systems.",zh:"关于计算机数据库与数据系统的学习笔记。"},
    groups:{zh:[{name:"数据库",articles:[]}],en:[{name:"Database",articles:[]}]}
  },
  security: {
    code:"CS / 07",label:"SECURITY",title:{en:"Cybersecurity",zh:"网络安全"},
    description:{en:"Cryptography, attack techniques, security protocols, cases, and defensive practice.",zh:"加密基础、攻击思路、安全协议、实际案例与攻防技巧。"},
    groups:{
      zh:[{name:"HTML：理解网页的起点",articles:[
        {id:"html-one",code:"WEB / 01",title:"HTML 1：从 HTML 开始了解网页",description:"HTML 与网页结构的基础指令。",path:"中文/网络安全/html/html1：从html开始了解网页.md"},
        {id:"html-two",code:"WEB / 02",title:"HTML 2：超链接与图片",description:"在网页中嵌入链接与图片。",path:"中文/网络安全/html/html2：超链接与图片.md"}
      ]}],
      en:[{name:"HTML: The Beginning of the Web",articles:[
        {id:"html-one",code:"WEB / 01",title:"HTML 1: Understanding Web Pages",description:"HTML and basic commands for structuring a web page.",path:"English/Cybersecurity/HTML1： Learn about web pages starting with HTML.md"},
        {id:"html-two",code:"WEB / 02",title:"HTML 2: Hyperlinks and Images",description:"How to embed links and images in web pages.",path:"English/Cybersecurity/HTML2： Hyperlinks and Images.md"}
      ]}]
    }
  },
  quantum: {
    code:"CS / 08",label:"QUANTUM",title:{en:"Quantum Computing",zh:"量子计算与前沿"},
    description:{en:"Quantum computing foundations, complexity, and future architectures.",zh:"量子计算的基本思想、复杂性问题与未来计算架构。"},
    groups:{zh:[{name:"量子计算与前沿",articles:[]}],en:[{name:"Quantum Computing",articles:[]}]}
  }
};

function language(){ return localStorage.getItem("cw-language") === "zh" ? "zh" : "en"; }
function currentTopicKey(){ const key=new URLSearchParams(location.search).get("topic"); return knowledgeTopics[key]?key:"programming"; }
function currentTopic(){ return knowledgeTopics[currentTopicKey()]; }
function allArticles(topic,lang){ return (topic.groups[lang]||[]).flatMap(group=>group.articles); }
function findArticle(topic,id,lang){ return allArticles(topic,lang).find(item=>item.id===id); }
function encodePath(path){ return path.split("/").map(encodeURIComponent).join("/"); }
function rawUrl(path){ return RAW_ROOT+encodePath(path); }
function blobUrl(path){ return BLOB_ROOT+encodePath(path); }
function escapeHtml(value){ return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char])); }
function normalizePath(path){ const parts=[]; path.split("/").forEach(part=>{ if(!part||part===".") return; if(part==="..") parts.pop(); else parts.push(part); }); return parts.join("/"); }
function relativePath(base,target){ return normalizePath(`${base.slice(0,base.lastIndexOf("/")+1)}${decodeURIComponent(target)}`); }

function articleRouteForPath(path){
  for(const [topicKey,topic] of Object.entries(knowledgeTopics)){
    for(const lang of ["zh","en"]){
      const article=allArticles(topic,lang).find(item=>item.path===path);
      if(article) return `article.html?topic=${topicKey}&article=${article.id}&v=20260805-7`;
    }
  }
  return null;
}

function resolveLink(url,sourcePath){
  if(/^https?:\/\//i.test(url)){
    const marker=`github.com/${REPOSITORY}/blob/main/`;
    const position=url.indexOf(marker);
    if(position!==-1){ const path=decodeURIComponent(url.slice(position+marker.length).split(/[?#]/)[0]); return articleRouteForPath(path)||url; }
    return url;
  }
  if(url.startsWith("#")) return url;
  const path=relativePath(sourcePath,url.split(/[?#]/)[0]);
  return articleRouteForPath(path)||blobUrl(path);
}

function inlineMarkdown(text,sourcePath){
  const tokens=[];
  const keep=html=>{ const token=`@@TOKEN${tokens.length}@@`; tokens.push(html); return token; };
  let value=text
    .replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g,(_,alt,url)=>keep(`<img src="${escapeHtml(/^https?:\/\//i.test(url)?url:rawUrl(relativePath(sourcePath,url)))}" alt="${escapeHtml(alt)}" loading="lazy">`))
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g,(_,label,url)=>keep(`<a href="${escapeHtml(resolveLink(url.trim(),sourcePath))}">${escapeHtml(label)}</a>`))
    .replace(/`([^`]+)`/g,(_,code)=>keep(`<code>${escapeHtml(code)}</code>`));
  value=escapeHtml(value).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>");
  tokens.forEach((html,index)=>{ value=value.replace(`@@TOKEN${index}@@`,html); });
  return value;
}

function renderMarkdown(markdown,sourcePath){
  const lines=markdown.replace(/^#\s+.*(?:\r?\n)+/,"").replace(/\r/g,"").split("\n");
  let html="", index=0, list=null;
  const closeList=()=>{ if(list){ html+=`</${list}>`; list=null; } };
  while(index<lines.length){
    const line=lines[index];
    if(/^```/.test(line)){
      closeList(); const languageName=line.slice(3).trim(); const code=[]; index+=1;
      while(index<lines.length&&!/^```/.test(lines[index])) code.push(lines[index++]);
      html+=`<pre><code data-language="${escapeHtml(languageName)}">${escapeHtml(code.join("\n"))}</code></pre>`; index+=1; continue;
    }
    const heading=line.match(/^(#{2,6})\s+(.+)$/);
    if(heading){ closeList(); const level=heading[1].length; html+=`<h${level}>${inlineMarkdown(heading[2],sourcePath)}</h${level}>`; index+=1; continue; }
    if(/^\s*[-*_]{3,}\s*$/.test(line)){ closeList(); html+="<hr>"; index+=1; continue; }
    if(/^\|.*\|\s*$/.test(line)&&index+1<lines.length&&/^\|?\s*:?-+/.test(lines[index+1])){
      closeList(); const rows=[]; rows.push(line); index+=2;
      while(index<lines.length&&/^\|.*\|\s*$/.test(lines[index])) rows.push(lines[index++]);
      const cells=row=>row.trim().replace(/^\||\|$/g,"").split("|").map(cell=>cell.trim());
      html+="<div class=\"table-scroll\"><table><thead><tr>"+cells(rows[0]).map(cell=>`<th>${inlineMarkdown(cell,sourcePath)}</th>`).join("")+"</tr></thead><tbody>"+rows.slice(1).map(row=>"<tr>"+cells(row).map(cell=>`<td>${inlineMarkdown(cell,sourcePath)}</td>`).join("")+"</tr>").join("")+"</tbody></table></div>"; continue;
    }
    const unordered=line.match(/^\s*[-*+]\s+(.+)$/), ordered=line.match(/^\s*\d+[.)]\s+(.+)$/);
    if(unordered||ordered){ const wanted=ordered?"ol":"ul"; if(list!==wanted){ closeList(); list=wanted; html+=`<${list}>`; } html+=`<li>${inlineMarkdown((unordered||ordered)[1],sourcePath)}</li>`; index+=1; continue; }
    if(/^>\s?/.test(line)){ closeList(); html+=`<blockquote>${inlineMarkdown(line.replace(/^>\s?/,""),sourcePath)}</blockquote>`; index+=1; continue; }
    if(!line.trim()){ closeList(); index+=1; continue; }
    closeList(); const paragraph=[line]; index+=1;
    while(index<lines.length&&lines[index].trim()&&!/^(#{2,6})\s|^```|^\s*[-*+]\s+|^\s*\d+[.)]\s+|^>\s?|^\|.*\|\s*$/.test(lines[index])) paragraph.push(lines[index++]);
    html+=`<p>${inlineMarkdown(paragraph.join(" "),sourcePath)}</p>`;
  }
  closeList(); return html;
}

function renderTopic(){
  const list=document.getElementById("article-directory"); if(!list) return;
  const lang=language(),topic=currentTopic(),key=currentTopicKey(),groups=topic.groups[lang]||[];
  document.body.dataset.titleEn=`${topic.title.en} · Charles Wesley`; document.body.dataset.titleZh=`${topic.title.zh} · Charles Wesley`; document.title=lang==="zh"?document.body.dataset.titleZh:document.body.dataset.titleEn;
  document.getElementById("topic-code").textContent=topic.code; document.getElementById("topic-label").textContent=topic.label;
  document.getElementById("topic-title").textContent=topic.title[lang]; document.getElementById("topic-description").textContent=topic.description[lang];
  const total=allArticles(topic,lang).length; document.getElementById("directory-count").textContent=String(total).padStart(2,"0"); list.textContent="";
  groups.forEach(group=>{
    const section=document.createElement("section"); section.className="directory-group";
    section.innerHTML=`<div class="directory-group-title"><span>${escapeHtml(group.name)}</span><b>${String(group.articles.length).padStart(2,"0")}</b></div>`;
    const entries=document.createElement("div"); entries.className="directory-entries";
    group.articles.forEach((article,index)=>{ const link=document.createElement("a"); link.className="article-row"; link.href=`article.html?topic=${key}&article=${article.id}&v=20260805-7`; link.innerHTML=`<span class="article-index">${String(index+1).padStart(2,"0")}</span><span><small>${escapeHtml(article.code)}</small><strong>${escapeHtml(article.title)}</strong><em>${escapeHtml(article.description)}</em></span><b>↗</b>`; entries.appendChild(link); });
    if(!group.articles.length){ const empty=document.createElement("p"); empty.className="directory-empty"; empty.textContent=lang==="zh"?"该目录已经建立，文章尚未发布。":"Directory created — articles have not been published yet."; entries.appendChild(empty); }
    section.appendChild(entries); list.appendChild(section);
  });
}

async function renderArticle(){
  const body=document.getElementById("article-content"); if(!body) return;
  const lang=language(),topic=currentTopic(),key=currentTopicKey(),id=new URLSearchParams(location.search).get("article");
  const selected=findArticle(topic,id,lang),fallback=findArticle(topic,id,lang==="zh"?"en":"zh"),article=selected||fallback;
  if(!article){ body.innerHTML=`<div class="empty-state"><span>∅</span><h2>${lang==="zh"?"没有找到这篇文章。":"Article not found."}</h2></div>`; return; }
  document.body.dataset.titleEn=`${article.title} · Charles Wesley`; document.body.dataset.titleZh=`${article.title} · Charles Wesley`; document.title=document.body.dataset.titleEn;
  document.getElementById("article-code").textContent=article.code; document.getElementById("article-title").textContent=article.title; document.getElementById("article-lead").textContent=article.description;
  const back=document.getElementById("topic-back"); back.href=`topic.html?topic=${key}&v=20260805-7`; back.querySelector("span").textContent=lang==="zh"?`返回${topic.title.zh}目录`:`Back to ${topic.title.en}`;
  const source=document.getElementById("article-source"); if(source){ source.href=blobUrl(article.path); source.textContent=lang==="zh"?"在 GitHub 查看原文 ↗":"View source on GitHub ↗"; }
  body.innerHTML=`<div class="article-loading"><span></span>${lang==="zh"?"正在读取 computer-science-notes 仓库…":"Loading from the computer-science-notes repository…"}</div>`;
  try{
    const response=await fetch(rawUrl(article.path)); if(!response.ok) throw new Error(String(response.status));
    const markdown=await response.text();
    const notice=!selected?`<aside class="language-notice">${lang==="zh"?"这篇笔记暂无中文版，当前展示英文原文。":"This note has no English version yet. The Chinese source is displayed."}</aside>`:"";
    body.innerHTML=notice+renderMarkdown(markdown,article.path);
  }catch(error){
    body.innerHTML=`<div class="empty-state"><span>!</span><h2>${lang==="zh"?"暂时无法读取文章":"Unable to load the article"}</h2><p>${lang==="zh"?"可以先通过上方链接在 GitHub 查看原文。":"Use the source link above to open the original note on GitHub."}</p></div>`;
  }
}

function repositorySearchRecords(lang){
  const records=[];
  Object.entries(knowledgeTopics).forEach(([topicKey,topic])=>{
    (topic.groups[lang]||[]).forEach(group=>group.articles.forEach(article=>records.push({topicKey,topic,group:group.name,article})));
  });
  return records;
}

function renderRepositorySearch(){
  const input=document.getElementById("post-search"),section=document.getElementById("repository-search-results"),list=document.getElementById("repository-search-list");
  if(!input||!section||!list) return;
  const lang=language(),query=input.value.trim().toLowerCase(),cards=[...document.querySelectorAll(".knowledge-card")];
  const count=document.getElementById("post-count"),resultCount=document.getElementById("repository-search-count"),empty=document.getElementById("post-empty");
  if(!query){
    cards.forEach(card=>{ card.hidden=false; }); list.textContent=""; section.hidden=true;
    if(count) count.textContent=String(cards.length).padStart(2,"0"); if(empty) empty.hidden=true; return;
  }
  let moduleMatches=0;
  cards.forEach(card=>{ const match=`${card.dataset.search||""} ${card.textContent}`.toLowerCase().includes(query); card.hidden=!match; if(match) moduleMatches+=1; });
  const articleMatches=repositorySearchRecords(lang).filter(({topic,group,article})=>[
    topic.title.en,topic.title.zh,topic.description.en,topic.description.zh,topic.label,group,article.code,article.title,article.description,article.path
  ].join(" ").toLowerCase().includes(query));
  list.textContent="";
  articleMatches.forEach(({topicKey,topic,group,article},index)=>{
    const link=document.createElement("a"); link.className="article-row search-article-row";
    link.href=`article.html?topic=${topicKey}&article=${article.id}&v=20260805-7`;
    link.innerHTML=`<span class="article-index">${String(index+1).padStart(2,"0")}</span><span><small>${escapeHtml(topic.code)} · ${escapeHtml(group)} · ${escapeHtml(article.code)}</small><strong>${escapeHtml(article.title)}</strong><em>${escapeHtml(article.description)}</em></span><b>↗</b>`;
    list.appendChild(link);
  });
  section.hidden=articleMatches.length===0; if(resultCount) resultCount.textContent=String(articleMatches.length).padStart(2,"0");
  const total=moduleMatches+articleMatches.length; if(count) count.textContent=String(total).padStart(2,"0"); if(empty) empty.hidden=total>0;
}

function initRepositorySearch(){
  const input=document.getElementById("post-search"); if(!input) return;
  input.addEventListener("input",renderRepositorySearch); renderRepositorySearch();
}

function renderKnowledgePage(){ renderTopic(); renderArticle(); renderRepositorySearch(); }
document.querySelectorAll("[data-language]").forEach(button=>button.addEventListener("click",()=>queueMicrotask(renderKnowledgePage)));
initRepositorySearch(); renderKnowledgePage();
