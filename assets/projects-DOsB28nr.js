import{c as s,j as t,r as m}from"./index-DMBw0yHX.js";const j=s("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);const M=s("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);const I=s("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);const T=s("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);const R=s("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),E=[{title:"Source-Free Domain Adaptation for Remote-Sensing Object Detection Using Low-Confidence Pseudo Labels",authors:"Jin Kim, Junyoung Park, Hyunsung Jang, Namkoo Ha, Kwanghoon Sohn",venue:"IEEE Geoscience and Remote Sensing Letters (GRSL)",year:"2025",type:"Journal",citations:8,link:"https://ieeexplore.ieee.org/abstract/document/10949131",github:"",status:"accepted",conferenceMeta:{key:"GRSL",name:"GRSL",logoSrc:"/logos/grsl.png"}},{title:"Enhancing Source-Free Object Detection with Low-Confidence Pseudo Label Distillation",authors:"Ilhoon Yoon, Hyeongjun Kwon, Jin Kim, Junyoung Park, Kwanghoon Sohn",venue:"European Conference on Computer Vision (ECCV)",year:"2024",type:"Conference",citations:41,link:"https://arxiv.org/abs/2407.13524",github:"https://github.com/junia3/LPLD",status:"accepted",conferenceMeta:{key:"ECCV2024",name:"ECCV 2024",logoSrc:"/logos/eccv_2024.png"}},{title:"Layer-wise Auto-Weighting for Non-Stationary Test-Time Adaptation",authors:"Junyoung Park, Jin Kim, Hyeongjun Kwon, Ilhoon Yoon, Kwanghoon Sohn",venue:"IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",year:"2024",type:"Conference",citations:29,link:"https://arxiv.org/pdf/2311.05858.pdf",github:"https://github.com/junia3/LayerwiseTTA",status:"accepted",conferenceMeta:{key:"WACV2024",name:"WACV 2024",logoSrc:"/logos/wacv_2024.png"}}];function c(e){return{logoLight:`/logos/${e}_light.png`,logoDark:`/logos/${e}_dark.png`}}const l={sbs:{name:"Seoul Broadcasting System (SBS)",...c("sbs"),url:"https://www.sbs.ai.kr/mainEng"},yonsei:{name:"Yonsei University",...c("yonsei"),url:"https://www.yonsei.ac.kr"},lignex1:{name:"LIG Nex1",...c("lignex1"),url:"https://www.lignex1.com"},alchera:{name:"Alchera",...c("alchera"),url:"https://www.alchera.ai",wide:!0}};function f(e){return e.toLowerCase().replace(/\s+/g," ").trim()}function v(e){const n=f(e),i=[];return(n.includes("sbs")||n.includes("seoul broadcasting"))&&i.push(l.sbs),n.includes("yonsei")&&i.push(l.yonsei),(n.includes("lig nex1")||n.includes("lig nex-1")||n.includes("lig nex")||n.includes("lignex1")||n.includes("lignex"))&&i.push(l.lignex1),n.includes("alchera")&&i.push(l.alchera),i}function y(e,n){return e.wide?Math.round(n*2.4):n}const h=({aff:e,size:n,disableLinks:i=!1})=>{const[a,o]=m.useState(!1),[r,d]=m.useState(!1);if(a&&r)return null;const u=y(e,n),p=n,g=t.jsxs("span",{className:"inline-flex shrink-0 items-center justify-center",style:{width:u,height:p},children:[!a&&t.jsx("img",{src:e.logoLight,alt:e.name,width:u,height:p,className:"block h-full w-full object-contain dark:hidden",onError:()=>o(!0),loading:"lazy",decoding:"async"}),!r&&t.jsx("img",{src:e.logoDark,alt:e.name,width:u,height:p,className:"hidden h-full w-full object-contain dark:block",onError:()=>d(!0),loading:"lazy",decoding:"async"})]});return!i&&e.url?t.jsx("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center",children:g}):g},D=({text:e,size:n=18,className:i="",disableLinks:a=!1})=>{const o=v(e);return o.length===0?null:o.length===1?t.jsx("span",{className:`inline-flex items-center ${i}`.trim(),children:t.jsx(h,{aff:o[0],size:n,disableLinks:a})}):t.jsx("span",{className:`inline-flex items-center gap-1 ${i}`.trim(),children:o.map((r,d)=>t.jsxs("span",{className:"inline-flex items-center gap-1",children:[d>0&&t.jsx("span",{className:"text-[10px] font-medium text-foreground/40",children:"×"}),t.jsx(h,{aff:r,size:n,disableLinks:a})]},r.name))})},w=`## Overview
Built scene understanding and multimodal retrieval pipelines for broadcast and digital content. The system uses multimodal embeddings and vector search to help retrieve scenes from video archives.

## Role
- Organization: **SBS (AI Technology Research Lab)** — AI Engineer
- Period: Nov. 2024 – Sep. 2025  
- Location: Seoul, Korea  

## Key Contributions

### 1) Video processing pipeline
- Improved per-video processing speed by approximately \`15×\` through GPU-optimized decoding and inference.
- Used \`ffmpeg\`, \`decord\`, and \`OpenCV\` for video preprocessing and sampling.
- Tuned batching and inference flow to keep processing stable across longer videos.

### 2) Retrieval system
- Built scene retrieval pipelines using multimodal embeddings and vector search.
- Used vector databases to index scene embeddings for retrieval.
- Evaluated retrieval quality through qualitative checks and query/result review.

### 3) System integration
- Integrated AI models with APIs and internal media workflow components.
- Collaborated with Geminisoft on migration into NDS (News Digital System), defining API specifications, scene-analysis parameters, database schemas, and validation procedures.
- Used local model serving where useful for query normalization and supporting context generation.

## Technical Stack
- Python, PyTorch, FastAPI
- \`ffmpeg\`, \`decord\`, \`OpenCV\`
- Vector databases such as \`MilvusDB\`
`,b=`## Overview
Built a multilingual subtitle translation framework using LLMs and multimodal LLMs. The framework uses scene descriptions, audio descriptions, cultural cues, and internal metadata to help translations stay closer to the context of each scene.

## Role
- Organization: **SBS (AI Technology Research Lab)** — AI Engineer
- Period: Nov. 2024 – Jun. 2026
- Location: Seoul, Korea

## System Design
- Context assembly from scene descriptions, audio descriptions, cultural cues, and internal metadata.
- Memory support for consistent terminology and entity mentions such as character names and branded terms.
- Asynchronous serving pipeline with \`FastAPI\`, \`Celery\`, and \`Redis\`.
- On-premise model serving path using \`vLLM\` and local models.

## Key Contributions

### 1) Context-aware translation
- Built an LLM/multimodal LLM-based translation framework for subtitle workflows.
- Used scene descriptions, audio descriptions, cultural cues, and internal metadata in prompts.
- Evaluated translation quality in collaboration with Twigfarm through the LetterWorks platform, using quantitative assessments conducted by professional translators.
- Reduced translator-verified word-level errors to below \`5%\`, achieving more than \`2×\` improvement over baseline workflows.

### 2) Serving and integration
- Deployed on-premise serving pipelines with \`FastAPI\`, \`Celery\`, \`Redis\`, \`vLLM\`, and local models.
- Added queueing and asynchronous processing for larger subtitle workloads.
- Iterated on the system through translator feedback and qualitative review.

## Impact
- Helped make subtitle translation workflows easier to evaluate and improve with domain context.
- Provided a practical base for local model serving and internal media workflow integration.
`,k=`## Overview
Researched object detection under severe domain shifts, including infrared/night imagery, weather, blur, and compression artifacts. The work focused on efficient adaptation methods for models used outside their original training distribution.

## Affiliation
- Organization: **LIG Nex1 / Yonsei University**
- Period: Apr. 2023 – Aug. 2024
- Location: Seoul, Korea

## Research Focus
- Domain shifts in infrared/night imagery, adverse weather, blur, noise, compression artifacts, and heterogeneous sensors.
- Efficient adaptation for object detection without relying on heavy retraining.
- Remote-sensing and cross-view settings, including drone videos and satellite imagery.

## Key Contributions

### 1) Efficient Test-Time Adaptation (TTA)
- Proposed efficient **layer-wise continual TTA** without heavy distillation (\`WACV 2024\`).
- Prioritized stability and compute efficiency for practical adaptation workflows.

### 2) Source-Free Domain Adaptation (SFDA)
- Designed **low-confidence pseudo-label refinement** to stabilize SFDA (\`ECCV 2024\`).
- Validated robustness under difficult target distributions without requiring source data access.

### 3) Cross-view generalization in remote sensing (SFDA)
- Expanded robustness research beyond ground-view navigation to remote-sensing settings, including drone video and satellite imagery.
- Validated generalization across diverse modalities and viewpoints under domain shifts (\`GRSL\`).

## Outputs
- Contributed to publications at WACV, ECCV, and IEEE GRSL.
`,S=`## Overview
Developed a blur-detection model that improves reliability of face recognition systems in real-world conditions. The focus was to keep the solution lightweight while maintaining strong practical performance.

## Affiliation
- Organization: **Alchera / Yonsei University**  
- Period: Jul. 2022 – Sep. 2022  
- Location: Seoul, Korea  

## Key Contributions
- Built a synthetic blur-generation and labeling pipeline for supervised training.
- Developed a lightweight blur-detection model to filter low-quality inputs and improve recognition robustness.
- Optimized the model for low-latency \`CPU-only\` mobile deployment.

## Impact
- Improved robustness and usability of downstream face recognition by detecting and handling blurred inputs.
- Enabled efficient deployment paths for resource-constrained environments (mobile / edge).`,L=`## Overview
Building AI systems and models for video face retouching workflows with post-production teams. The work focuses on making the model useful for real editing needs while preserving identity, texture, and visual consistency.

## Affiliation
- Organization: **SBS (AI Technology Research Lab)**
- Period: Feb. 2026 – Present
- Location: Seoul, Korea

## Key Contributions
- Collaborate with post-production teams to understand face retouching needs and evaluation criteria.
- Built synthetic paired-data pipelines using diffusion models and LoRA weights.
- Developed training and validation pipelines for iterative model improvement.
- Evaluate visual consistency, identity preservation, and artifact behavior across video frames.

## Technical Stack
- PyTorch, diffusion models, LoRA
- Face parsing and image/video preprocessing
- Variant-wise validation for model iteration

## Notes
- The project is developed around practical post-production workflows rather than image-only enhancement.
`,A=`## Overview
Developed a video face re-aging system using generative priors to construct training data and trained a video network to maintain temporal consistency while changing facial age.

## Affiliation
- Organization: **SBS (AI Technology Research Lab)**
- Period: Jan. 2025 – Dec. 2025
- Location: Seoul, Korea

## Key Contributions
- Leveraged generative priors to create and curate the training dataset.
- Trained a video face re-aging network with frame-to-frame temporal consistency as a core requirement.
- Built preprocessing, training, and evaluation workflows for continuous facial motion.
- Reviewed consecutive frames to identify flicker and unstable age transformations.
- Supported both aging and de-aging transformations for moving faces in production-oriented workflows.

## Technical Focus
- Generative-prior-based dataset construction
- Video face aging and de-aging
- Temporally consistent network training
- Production-oriented video processing and evaluation

## Demo Notes
The demos pair the original footage with aging and de-aging outputs. Each sample is shown as a continuous clip so temporal behavior can be evaluated across facial expressions and motion.

Production use cases: SBS drama **〈김부장〉** and dating show **〈내남은연애〉**.
`,x=`## Overview
Developing a prompt-based video editing platform through multiple industry and research consortia. The long-term goal is to make advanced video production and post-production capabilities accessible to both professionals and non-professionals through a unified agentic interface.

The platform is being designed to work across heterogeneous environments, combining internally developed AI models, on-premise deployments, and commercial solution APIs behind interoperable tools and workflows.

## Affiliation
- Organization: **SBS (AI Technology Research Lab) / Industry Consortia**
- Period: Mar. 2026 – Present
- Location: Seoul, Korea

## Vision and Scope
- Translate natural-language creative intent into precise, executable video editing workflows.
- Support users with different levels of editing expertise while preserving professional control and review.
- Provide a common integration layer for internal models, on-premise infrastructure, and external commercial services.
- Build reusable foundations that can support multiple consortium projects and evolving production requirements.

## Technical Workstreams

### 1) Agentic editing intelligence
- Develop the task-planning and tool-use capabilities of LLM and multimodal LLM agents.
- Interpret video, audio, text, metadata, and user intent as a shared multimodal editing context.
- Convert high-level prompts into verifiable production and post-production operations.

### 2) Video AI model development
- Develop internal AI models for production and post-production editing tasks.
- Evaluate and extend external research models for production-grade use cases.
- Design model evaluation around visual quality, temporal consistency, controllability, latency, and operational reliability.

### 3) Interoperable tool and model integration
- Expose editing capabilities through MCP servers with consistent interfaces and metadata.
- Integrate on-premise models and commercial solution APIs without coupling workflows to a single provider.
- Standardize capability discovery, input and output contracts, execution status, and error handling across tools.

### 4) Multi-agent orchestration
- Coordinate specialized sub-agents for planning, media understanding, editing, validation, and delivery.
- Define delegation, dependency management, recovery, and human-review boundaries for complex editing requests.
- Maintain traceable execution so that users can inspect and refine the resulting workflow.

### 5) Harness and context engineering
- Build the harness that converts user requests into accurate, executable, and recoverable workflows.
- Manage long-running context across source media, creative decisions, tool outputs, edit history, and user feedback.
- Apply validation, observability, permission controls, and failure recovery throughout the editing lifecycle.

## System Direction
The target architecture separates user intent, agent orchestration, editing tools, and model providers. This allows the system to select the most appropriate internal model, on-premise service, or commercial API for each operation while keeping the user experience and workflow representation consistent.

## Current Phase
The initiative entered active development in March 2026. The initial phase focuses on defining interoperable editing capabilities, agent and MCP architecture, model-development priorities, evaluation criteria, and consortium-level integration requirements.
`,P=[{id:"video-vibe-editor",title:"Prompt-Based Video Vibe Editor",organization:"SBS - AI Technology Research Lab / Industry Consortia",description:"Developing an agentic, prompt-based video editing platform that unifies on-premise AI models and commercial APIs for professional and non-professional creators.",tech:["LLM / Multimodal LLM","Agentic AI","MCP","Multi-Agent Orchestration","Video AI","Harness Engineering","On-Premise Serving","Commercial AI APIs"],kpis:["Prompt-to-edit workflows","Hybrid model ecosystem","Professional and consumer use"],contentMd:x.trim()},{id:"face-retouching",title:"Video Face Retouching",organization:"SBS - AI Technology Research Lab",description:"Building AI systems and models for face retouching workflows with post-production teams, including synthetic paired-data pipelines using diffusion models and LoRA weights.",tech:["Python","PyTorch","DDP","AMP (bf16/fp16)","diffusers","LoRA","Face Parsing","Docker"],kpis:["Post-production workflow","Synthetic paired data","Diffusion + LoRA"],videos:[{src:"/projects/face-retouching/sample-01-compare.mp4",poster:"/projects/face-retouching/sample-01-poster.jpg",title:"Frontal texture",duration:"00:05",aspectRatio:2.881},{src:"/projects/face-retouching/sample-02-compare.mp4",poster:"/projects/face-retouching/sample-02-poster.jpg",title:"Side-angle detail",duration:"00:05",aspectRatio:2.399},{src:"/projects/face-retouching/sample-03-compare.mp4",poster:"/projects/face-retouching/sample-03-poster.jpg",title:"Low-light motion",duration:"00:05",aspectRatio:2.486},{src:"/projects/face-retouching/sample-04-compare.mp4",poster:"/projects/face-retouching/sample-04-poster.jpg",title:"Fine facial detail",duration:"00:05",aspectRatio:2.898},{src:"/projects/face-retouching/sample-05-compare.mp4",poster:"/projects/face-retouching/sample-05-poster.jpg",title:"Natural-light texture",duration:"00:05",aspectRatio:2.464}],contentMd:L.trim()},{id:"face-reaging",title:"Video Face Re-Aging",organization:"SBS - AI Technology Research Lab",description:"Built a video face re-aging system using generative priors to create training data and train a network for temporally consistent age transformation.",tech:["Python","PyTorch","Generative Priors","Temporal Consistency","Video Processing","Dataset Curation"],kpis:["Generative-prior dataset","Temporal consistency","Production deployment"],reagingShowcase:{title:"Aging and de-aging in continuous motion",description:"Independent model demos showing aging and de-aging across continuous facial motion with frame-to-frame consistency.",production:"Model demo · 2025",videos:[{src:"/projects/face-reaging/sample-01.mp4",poster:"/projects/face-reaging/sample-01-poster.jpg",title:"Sample 01",duration:"00:12"},{src:"/projects/face-reaging/sample-02.mp4",poster:"/projects/face-reaging/sample-02-poster.jpg",title:"Sample 02",duration:"00:12"}]},contentMd:A.trim()},{id:"translation-framework",title:"Multilingual Subtitle Translation Framework",organization:"SBS - AI Technology Research Lab",description:"Built an LLM/multimodal LLM-based subtitle translation framework using scene descriptions, audio descriptions, cultural cues, and internal metadata, with on-premise serving pipelines.",tech:["Python","FastAPI","Celery","Redis","vLLM","Hugging Face Transformers"],kpis:["<5% verified word errors",">2× improvement","On-premise serving"],videoShowcase:{src:"/projects/translation-framework/multilingual-grid-demo.mp4",poster:"/projects/translation-framework/multilingual-grid-poster.jpg",title:"One scene, 15 languages",description:"A synchronized view of multilingual subtitle outputs generated from the same source scene and contextual inputs.",duration:"00:17",languages:["Arabic","English","French","German","Indonesian","Italian","Japanese","Korean","Portuguese","Russian","Simplified Chinese","Spanish","Thai","Turkish","Vietnamese"]},contentMd:b.trim()},{id:"scene-retrieval",title:"Scene Understanding & Multimodal Retrieval System",organization:"SBS - AI Technology Research Lab",description:"Built scene retrieval pipelines for broadcast and digital content using multimodal embeddings, vector search, and GPU-optimized video decoding and inference.",tech:["Python","PyTorch","FastAPI","Milvus","vLLM","Ollama","ffmpeg","NVDEC","decord"],kpis:["~15× processing speed","Multimodal embeddings","Vector search"],imageShowcase:{title:"From natural-language query to usable clip",description:"Three retrieval examples spanning visual attributes, actions, and compositional scene descriptions.",images:[{src:"/projects/scene-retrieval/search-interface.png",thumbnail:"/projects/scene-retrieval/search-interface-thumb.webp",alt:"Scene retrieval interface showing a search for a person wearing a red dress, ranked video results, a scene preview, and clip editing controls",title:"Attribute retrieval",caption:"Query: “person wearing a red dress”",resolution:"3012 × 1744"},{src:"/projects/scene-retrieval/action-search.png",thumbnail:"/projects/scene-retrieval/action-search-thumb.webp",alt:"Scene retrieval interface showing a search for a dog eating, ranked archive results, a vertical video preview, and clip editing controls",title:"Action retrieval",caption:"Query: “a dog eating”",resolution:"3160 × 1888"},{src:"/projects/scene-retrieval/compositional-search.png",thumbnail:"/projects/scene-retrieval/compositional-search-thumb.webp",alt:"Scene retrieval interface showing a compositional search for a dog jumping and wagging its tail after seeing a person, ranked archive results, and clip editing controls",title:"Compositional retrieval",caption:"Query: “a dog jumps and wags its tail after seeing a person”",resolution:"3774 × 1902"}]},contentMd:w.trim()},{id:"lightweight-od",title:"Lightweight Domain Adaptation for Object Detection",organization:"LIG Nex1 / Yonsei University",description:"Researched object detection under severe domain shifts including infrared/night imagery, weather, blur, and compression artifacts, with efficient adaptation methods.",tech:["Python","PyTorch","Docker"],kpis:["WACV 2024","ECCV 2024","GRSL"],contentMd:k.trim()},{id:"blur-face",title:"Blurred Face Detection for Secure Face Recognition",organization:"Alchera / Yonsei University",description:"Built a lightweight blur-detection model for degraded face-recognition inputs, with a synthetic blur-generation pipeline and CPU-only inference optimization.",tech:["Python","PyTorch","Docker"],github:"https://github.com/minsu1206/BlurFaceDetection",kpis:["CPU-only inference","Synthetic data pipeline","Lightweight model"],contentMd:S.trim()}],V=Object.fromEntries(P.map(e=>[e.id,e]));export{D as A,j as E,M as G,I as L,T as M,P as a,R as b,V as c,E as p};
