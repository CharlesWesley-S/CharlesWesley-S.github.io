const knowledgeTopics = {
  programming: {
    code: "CS / 01", label: "FOUNDATION",
    title: { en: "Programming Foundations", zh: "编程基础" },
    description: { en: "Build a reliable mental model of programs before chasing frameworks.", zh: "先建立可靠的程序思维，再去学习框架与工程工具。" },
    articles: [
      { slug:"c-foundations", code:"C / 01", title:{en:"C: memory, values, and control flow",zh:"C：内存、变量与控制流"}, desc:{en:"Understand values, addresses, branches, loops, functions, and why C makes machine behavior visible.",zh:"理解值、地址、分支、循环与函数，以及 C 为什么能让机器行为变得可见。"}, points:{en:["A variable is a typed region of memory.","Pointers store addresses; dereferencing follows an address.","Control flow decides which instructions execute and in what order."],zh:["变量是带有类型的一段内存区域。","指针保存地址，解引用意味着沿地址访问数据。","控制流决定哪些指令执行，以及执行的顺序。"]}, practice:{en:"Write a function that swaps two integers through pointers, then draw the stack frame by hand.",zh:"写一个通过指针交换两个整数的函数，并手动画出它的栈帧。"} },
      { slug:"java-oop", code:"JAVA / 02", title:{en:"Java: objects, interfaces, and responsibility",zh:"Java：对象、接口与职责"}, desc:{en:"Use encapsulation and polymorphism to make changing software easier to reason about.",zh:"用封装与多态降低软件变化时的理解成本。"}, points:{en:["A class defines state, behavior, and invariants.","Interfaces describe capabilities without fixing implementation.","Composition is often clearer than deep inheritance."],zh:["类定义状态、行为与必须保持的约束。","接口描述能力，但不绑定具体实现。","组合通常比层层继承更清晰。"]}, practice:{en:"Model Shape, Circle, and Rectangle; calculate area through one shared interface.",zh:"设计 Shape、Circle 与 Rectangle，并通过统一接口计算面积。"} },
      { slug:"python-thinking", code:"PY / 03", title:{en:"Python: clarity, iteration, and data transformation",zh:"Python：清晰表达、迭代与数据转换"}, desc:{en:"Express an idea quickly while keeping data flow explicit and testable.",zh:"快速表达想法，同时保持数据流清晰并且可测试。"}, points:{en:["Prefer small functions with one visible responsibility.","Comprehensions are useful when the transformation remains readable.","Type hints document intent even in a dynamic language."],zh:["优先编写职责单一的小函数。","当数据转换仍然清晰时，再使用推导式。","即使是动态语言，类型提示也能记录设计意图。"]}, practice:{en:"Read a URL dataset, normalize each row, and return a typed summary without mutating the input.",zh:"读取 URL 数据集，规范化每一行，并在不修改原始输入的情况下返回带类型的摘要。"} }
    ]
  },
  algorithms: {
    code:"CS / 02", label:"ALGORITHM", title:{en:"Algorithms & Data Structures",zh:"算法与数据结构"},
    description:{en:"Turn vague problems into states, operations, invariants, and measurable cost.",zh:"把模糊问题拆成状态、操作、不变量与可衡量的成本。"},
    articles:[
      {slug:"complexity",code:"ALG / 01",title:{en:"Complexity: measuring growth",zh:"复杂度：衡量增长速度"},desc:{en:"Big O compares how time or memory grows as input size increases.",zh:"Big O 比较输入规模增加时，时间或内存如何增长。"},points:{en:["Drop constants when comparing long-run growth.","Worst case is a guarantee, not a prediction of every run.","Space complexity matters when data becomes large."],zh:["比较长期增长时可以忽略常数。","最坏情况是一种保证，并不是每次运行的预测。","当数据变大时，空间复杂度同样重要。"]},practice:{en:"Compare linear search and binary search for 10, 1,000, and 1,000,000 items.",zh:"比较线性搜索和二分搜索在 10、1,000、1,000,000 个元素上的步骤数。"}},
      {slug:"search-sort",code:"ALG / 02",title:{en:"Searching and sorting patterns",zh:"搜索与排序模式"},desc:{en:"Ordering data often turns a hard lookup problem into a predictable process.",zh:"把数据排序，常常能把困难的查找问题变成可预测的过程。"},points:{en:["Binary search requires a monotonic or sorted space.","Stable sorting preserves the order of equal keys.","Choose an algorithm from constraints, not popularity."],zh:["二分搜索需要有序或单调的搜索空间。","稳定排序会保留相同键值元素的先后顺序。","算法选择应该来自约束，而不是流行程度。"]},practice:{en:"Implement binary search and write tests for empty, one-item, duplicate, and missing cases.",zh:"实现二分搜索，并测试空数组、单元素、重复值和目标不存在的情况。"}},
      {slug:"recursion-dp",code:"ALG / 03",title:{en:"Recursion and dynamic programming",zh:"递归与动态规划"},desc:{en:"Represent repeated subproblems once instead of recomputing the same work.",zh:"只表示一次重复子问题，避免反复计算相同工作。"},points:{en:["Every recursion needs a base case and progress toward it.","Memoization caches top-down recursion.","Tabulation builds answers bottom-up."],zh:["递归必须有基本情况，并持续向它推进。","记忆化缓存自顶向下的递归结果。","表格法自底向上构建答案。"]},practice:{en:"Solve Fibonacci recursively, then add memoization and compare call counts.",zh:"先递归求斐波那契数，再加入记忆化并比较函数调用次数。"}}
    ]
  },
  architecture: {
    code:"CS / 03", label:"ARCHITECTURE", title:{en:"Computer Architecture & ARM",zh:"计算机体系结构与 ARM"},
    description:{en:"Follow data from source code through registers, memory, instructions, and calling conventions.",zh:"追踪数据如何从源代码进入寄存器、内存、指令与调用约定。"},
    articles:[
      {slug:"arm-registers",code:"ARM / 01",title:{en:"ARM registers and instruction flow",zh:"ARM 寄存器与指令流"},desc:{en:"Registers are the processor's fastest working storage and give instructions their operands.",zh:"寄存器是处理器最快的工作存储区，为指令提供操作数。"},points:{en:["General registers hold values and addresses.","PC identifies the next instruction; LR supports function return.","Flags record results used by conditional branches."],zh:["通用寄存器保存数值或地址。","PC 指向下一条指令，LR 支持函数返回。","标志位记录结果，并供条件分支使用。"]},practice:{en:"Trace five ARM instructions and record every changed register after each step.",zh:"跟踪五条 ARM 指令，并记录每一步发生变化的寄存器。"}},
      {slug:"memory-addressing",code:"ARM / 02",title:{en:"Memory and addressing modes",zh:"内存与寻址方式"},desc:{en:"Addressing modes describe how an instruction finds the data it needs.",zh:"寻址方式描述一条指令如何找到它需要的数据。"},points:{en:["Load and store instructions move data between registers and memory.","Offsets make arrays and structures efficient to access.","Alignment affects correctness and performance."],zh:["Load 与 Store 指令在寄存器和内存之间移动数据。","偏移量让数组和结构体访问更高效。","内存对齐会影响正确性与性能。"]},practice:{en:"Calculate the address of array[i] for byte, halfword, and word elements.",zh:"分别计算字节、半字与字数组中 array[i] 的地址。"}},
      {slug:"aapcs",code:"ARM / 03",title:{en:"AAPCS and function calls",zh:"AAPCS 与函数调用"},desc:{en:"A calling convention lets separately written functions agree on arguments, results, and saved state.",zh:"调用约定让独立编写的函数对参数、返回值与保存状态达成一致。"},points:{en:["Early registers carry arguments and return values.","Caller-saved and callee-saved registers divide responsibility.","The stack stores spill values, locals, and return context."],zh:["前几个寄存器负责传递参数与返回值。","调用者保存和被调用者保存寄存器划分责任。","栈保存溢出值、局部变量与返回上下文。"]},practice:{en:"Write an ARM function with five arguments and mark where the fifth argument is found.",zh:"编写一个包含五个参数的 ARM 函数，并标出第五个参数所在的位置。"}}
    ]
  },
  systems: {
    code:"CS / 04", label:"SYSTEMS", title:{en:"Systems & Networks",zh:"系统与网络"},
    description:{en:"Understand the operating boundaries between programs, machines, networks, and deployments.",zh:"理解程序、机器、网络与部署环境之间的运行边界。"},
    articles:[
      {slug:"process-memory",code:"SYS / 01",title:{en:"Processes, threads, and virtual memory",zh:"进程、线程与虚拟内存"},desc:{en:"The operating system isolates programs while sharing processors and physical memory.",zh:"操作系统在共享处理器和物理内存的同时隔离不同程序。"},points:{en:["A process owns an address space and resources.","Threads share process memory but have independent execution state.","Virtual memory maps program addresses to physical storage."],zh:["进程拥有地址空间与系统资源。","线程共享进程内存，但有独立执行状态。","虚拟内存把程序地址映射到物理存储。"]},practice:{en:"Inspect a running Python service with ps, top, and /proc; explain what each view reveals.",zh:"使用 ps、top 与 /proc 检查一个 Python 服务，并解释每个视图展示了什么。"}},
      {slug:"tcp-http",code:"NET / 02",title:{en:"From TCP to HTTP",zh:"从 TCP 到 HTTP"},desc:{en:"A web request crosses layers that provide addressing, reliable transport, and application meaning.",zh:"一次 Web 请求会跨越提供寻址、可靠传输与应用语义的不同网络层。"},points:{en:["IP routes packets between networks.","TCP provides ordered, reliable byte streams.","HTTP defines request and response semantics above transport."],zh:["IP 在网络之间路由数据包。","TCP 提供有序、可靠的字节流。","HTTP 在传输层之上定义请求与响应语义。"]},practice:{en:"Use curl -v to inspect DNS, TLS, headers, status, and response timing.",zh:"使用 curl -v 检查 DNS、TLS、请求头、状态码与响应时间。"}},
      {slug:"linux-deploy",code:"OPS / 03",title:{en:"Linux services and reverse proxies",zh:"Linux 服务与反向代理"},desc:{en:"Reliable deployment means controlling processes, ports, logs, permissions, and traffic routing.",zh:"可靠部署意味着正确管理进程、端口、日志、权限与流量转发。"},points:{en:["A service manager supervises long-running processes.","Nginx can terminate TLS and proxy traffic to an application port.","Logs should make failures observable without exposing secrets."],zh:["服务管理器负责监督长期运行的进程。","Nginx 可以终止 TLS，并把流量代理到应用端口。","日志应当让故障可观察，同时不能泄露敏感信息。"]},practice:{en:"Deploy a FastAPI health endpoint behind Nginx and document the request path.",zh:"把 FastAPI 健康检查接口部署到 Nginx 后面，并画出请求路径。"}}
    ]
  },
  backend: {
    code:"CS / 05", label:"DATA", title:{en:"Databases & Backend",zh:"数据库与后端"},
    description:{en:"Design data, APIs, and services so correctness survives real use and change.",zh:"设计能在真实使用与持续变化中保持正确的数据、API 与服务。"},
    articles:[
      {slug:"sql-modeling",code:"DATA / 01",title:{en:"SQL data modeling",zh:"SQL 数据建模"},desc:{en:"A useful schema records entities, relationships, constraints, and the questions the system must answer.",zh:"实用的数据库模式会记录实体、关系、约束，以及系统必须回答的问题。"},points:{en:["Primary keys identify rows; foreign keys preserve relationships.","Normalization reduces duplicated facts.","Indexes speed reads but add write and storage cost."],zh:["主键标识记录，外键维护关系。","规范化减少事实的重复存储。","索引加速读取，但会增加写入与存储成本。"]},practice:{en:"Model users, projects, and tasks, then write one join query and explain its index needs.",zh:"设计用户、项目与任务表，再写一条连接查询并解释它需要哪些索引。"}},
      {slug:"rest-api",code:"API / 02",title:{en:"REST API contracts",zh:"REST API 契约"},desc:{en:"An API is a contract about resources, inputs, outputs, errors, and change over time.",zh:"API 是关于资源、输入、输出、错误与长期演进方式的契约。"},points:{en:["Use nouns for resources and HTTP methods for intent.","Validate at boundaries and return consistent error shapes.","Idempotency matters for retries and automation."],zh:["资源使用名词，操作意图使用 HTTP 方法表达。","在边界处验证数据，并保持错误结构一致。","幂等性对重试和自动化十分重要。"]},practice:{en:"Design create, read, update, and delete endpoints for a note resource, including error responses.",zh:"为笔记资源设计创建、读取、更新、删除接口，并补充错误响应。"}},
      {slug:"fastapi-service",code:"API / 03",title:{en:"Building a FastAPI service",zh:"构建 FastAPI 服务"},desc:{en:"FastAPI combines typed request models, dependency injection, and automatic API documentation.",zh:"FastAPI 把类型化请求模型、依赖注入与自动 API 文档结合在一起。"},points:{en:["Pydantic models validate and document external data.","Dependencies centralize shared concerns such as authentication.","Separate routes, domain logic, and persistence."],zh:["Pydantic 模型验证并记录外部数据。","依赖项集中处理认证等共享关注点。","路由、领域逻辑与数据持久化应当分离。"]},practice:{en:"Create /health and /notes endpoints with validation, tests, and structured logs.",zh:"创建带有验证、测试和结构化日志的 /health 与 /notes 接口。"}}
    ]
  },
  math: {
    code:"CS / 06", label:"LOGIC", title:{en:"Mathematics & Logic",zh:"数学与逻辑"},
    description:{en:"Use mathematical language to state assumptions, prove claims, and reason under uncertainty.",zh:"用数学语言表达假设、证明结论，并在不确定性下进行推理。"},
    articles:[
      {slug:"discrete-logic",code:"MATH / 01",title:{en:"Propositions, sets, and relations",zh:"命题、集合与关系"},desc:{en:"Discrete structures give computer science a precise vocabulary for rules and connections.",zh:"离散结构为计算机科学中的规则与连接提供精确语言。"},points:{en:["A proposition has a truth value.","Sets collect objects; relations describe connections between them.","Quantifiers distinguish some from all."],zh:["命题具有真假值。","集合收集对象，关系描述对象之间的连接。","量词区分“存在”与“所有”。"]},practice:{en:"Translate three English requirements into predicates and identify ambiguous quantifiers.",zh:"把三条自然语言需求翻译成谓词，并找出其中含糊的量词。"}},
      {slug:"proof-methods",code:"MATH / 02",title:{en:"Proof methods for programmers",zh:"程序员需要的证明方法"},desc:{en:"A proof explains why a claim must hold, not only that examples happen to work.",zh:"证明解释结论为什么必然成立，而不只是一些例子碰巧正确。"},points:{en:["Direct proof follows definitions and implications.","Contradiction assumes the opposite and derives impossibility.","Induction proves a base case and a preserving step."],zh:["直接证明沿定义与蕴含关系推进。","反证法假设结论不成立，并推出矛盾。","数学归纳法证明基础情况与保持结论的递推步骤。"]},practice:{en:"Prove that the sum of the first n odd numbers equals n squared.",zh:"证明前 n 个奇数之和等于 n 的平方。"}},
      {slug:"probability",code:"MATH / 03",title:{en:"Probability and conditional reasoning",zh:"概率与条件推理"},desc:{en:"Probability separates uncertainty in the world from uncertainty in our information.",zh:"概率帮助我们区分世界本身的不确定性与信息不足带来的不确定性。"},points:{en:["Conditional probability updates a sample space using evidence.","Independence is a claim that must be justified.","Expected value summarizes long-run weighted outcomes."],zh:["条件概率使用新证据更新样本空间。","独立性是一项需要论证的假设。","期望值概括长期加权结果。"]},practice:{en:"Build a small phishing-alert example and compare base rate, sensitivity, and posterior risk.",zh:"构造一个钓鱼告警例子，比较基础发生率、灵敏度与后验风险。"}}
    ]
  }
};

function knowledgeLanguage(){ return localStorage.getItem("cw-language") === "zh" ? "zh" : "en"; }
function topicFromUrl(){ return knowledgeTopics[new URLSearchParams(location.search).get("topic")] || knowledgeTopics.programming; }

function renderTopic(){
  const list=document.getElementById("article-directory"); if(!list) return;
  const lang=knowledgeLanguage(), topic=topicFromUrl(), params=new URLSearchParams(location.search), key=params.get("topic")||"programming";
  document.body.dataset.titleEn=`${topic.title.en} · Charles Wesley`; document.body.dataset.titleZh=`${topic.title.zh} · Charles Wesley`;
  document.title=lang==="zh"?document.body.dataset.titleZh:document.body.dataset.titleEn;
  document.getElementById("topic-code").textContent=topic.code; document.getElementById("topic-label").textContent=topic.label;
  document.getElementById("topic-title").textContent=topic.title[lang]; document.getElementById("topic-description").textContent=topic.description[lang];
  document.getElementById("directory-count").textContent=String(topic.articles.length).padStart(2,"0"); list.textContent="";
  topic.articles.forEach((article,index)=>{ const link=document.createElement("a"); link.className="article-row reveal visible"; link.href=`article.html?topic=${key}&article=${article.slug}&v=20260805-5`; link.innerHTML=`<span class="article-index">${String(index+1).padStart(2,"0")}</span><span><small>${article.code}</small><strong>${article.title[lang]}</strong><em>${article.desc[lang]}</em></span><b>↗</b>`; list.appendChild(link); });
}

function renderArticle(){
  const body=document.getElementById("article-content"); if(!body) return;
  const lang=knowledgeLanguage(), topic=topicFromUrl(), params=new URLSearchParams(location.search), key=params.get("topic")||"programming";
  const article=topic.articles.find(item=>item.slug===params.get("article"))||topic.articles[0];
  document.body.dataset.titleEn=`${article.title.en} · Charles Wesley`; document.body.dataset.titleZh=`${article.title.zh} · Charles Wesley`; document.title=lang==="zh"?document.body.dataset.titleZh:document.body.dataset.titleEn;
  document.getElementById("article-code").textContent=article.code; document.getElementById("article-title").textContent=article.title[lang]; document.getElementById("article-lead").textContent=article.desc[lang];
  const back=document.getElementById("topic-back"); back.href=`topic.html?topic=${key}&v=20260805-5`; back.querySelector("span:last-child").textContent=lang==="zh"?`返回${topic.title.zh}目录`:`Back to ${topic.title.en}`;
  body.innerHTML=`<section><p class="mono-label">// ${lang==="zh"?"核心概念":"CORE CONCEPT"}</p><p>${article.desc[lang]}</p></section><section><h2>${lang==="zh"?"关键要点":"Key points"}</h2><ul>${article.points[lang].map(point=>`<li>${point}</li>`).join("")}</ul></section><aside class="post-callout"><span>${lang==="zh"?"练习任务":"Practice mission"}</span><p>${article.practice[lang]}</p></aside>`;
}

function renderKnowledgePage(){ renderTopic(); renderArticle(); }
document.querySelectorAll("[data-language]").forEach(button=>button.addEventListener("click",()=>queueMicrotask(renderKnowledgePage)));
renderKnowledgePage();
