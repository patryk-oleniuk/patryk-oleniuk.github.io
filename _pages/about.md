---
permalink: /
title: "About"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<p style='text-align: justify;'> 

Heyyy! I'm a software engineering lead, currently focused on the intersection of data(sci/eng), full-stack and hardware. As most engineers, I am here to build, fix and improve things. I get passionate at work, and excited when I see things work as designed + fix if they're <a href="images/bad-software.gif">not</a>.
<br>
Be it a <text class="tooltip"><a href="portfolio/2008-wave-electricity">water-waves electricity generator</a> 
  <span class="tooltiptext" style="width: 320px">(build in my parents garage at age 15)</span>
</text>, <text class="tooltip"><a href="portfolio/2017-facial-emotion-dnn">facial emotion recognition DNN</a> 
  <span class="tooltiptext" style="width: 260px">(one of my personal projects)</span>
</text> or test software for the <text class="tooltip"><a href="/employment/2015-02-01-cern">Large Hadron Collider at CERN</a> 
  <span class="tooltiptext" style="width: 270px">(one of my nerdiest employers)</span>
</text>.

</p>

Here's a bullet-list summary of what I can do (also, check out [my resume](cv/)):
- Back-End Software:
  - REST and GraphQL,
  - go (gorilla/mux), python (Flask, Django, FastAPI),
  - C# / dotnet,
  - Java (Flink).
- Front-End Software:
  - Typescript, Angular, React
- MLOps & Data Engineering:
  - Docker / k8s,
  - Kafka / ASW SQS,
  - MLflow, Sagemaker,
  - AWS Suite (S3, EC2, Athena, Flink), Heroku, Netlify,
  - PostgreSQL, MongoDB, CockroachDB, 
  - Spark, Koalas, Databricks, Dask.
- Machine Learning & Data Science:
  - pandas, tensorflow / keras, scikit-learn mainly for [supervised learning](images/supervised-learning.png),
  - visulization: plotly, DASH, Streamlit, Bokeh, D3,
- Hardware / Embedded Software ( Yes, I can blink the <span class="blinking">&#9673;</span> LED and more ):
  - connected sensor networks, embedded &harr; cloud interfaces,
  - embedded C / C++, bootloader (U-Boot), e.g. OTA Software Update systems or camera interfaces,
  - basic VHDL/Verilog on Xilinx and Altera, including SoC drivers and DMAs,
  - basic electrical measurements (Oscilloscope, Logic Analyzer) & PCB debugging.



<p style='text-align: justify;'> 
... and many more. I'm used to wearing many hats, and just doing what's needed at the moment, and learning on the job. Speaking about that: I &#x2764; learning new things, as well as  <a href="teaching/">teaching</a> and <a href="talks/">talking</a> about them. 
<br>
<br>
At work I can speak English, Polish and ~French. After work, I can (sometimes) succeed to communiate in basic German, Italian, Russian. I am currently learning Chinese and JavaScript.
<br>
</p> 


<style>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 105%;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.blinking{
	animation:blinkingText 1.8s infinite;
}
@keyframes blinkingText{
	0%{		color: #000f;	}
	49%{	color: #0006;	}
	50%{	color: #0006;	}
	99%{	color: #0006;	}
	100%{	color: #000f;	}
}
</style>