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

Hello! Welcome to my portfolio page. I'm a generalist software engineer focused on AI/ML adoption and MLOps. As most engineers, I am here to build, fix and improve things. I learn voraciously and execute fast. I get passionate at work, and excited when I see things work as designed + fix if they're <a href="images/bad-software.gif">not</a>. Be it a <text class="tooltip"><a href="">plasma speaker</a> 
  <span class="tooltiptext" style="width: 320px">(build in my parents garage at age 15)</span>
</text>, <text class="tooltip"><a href="">facial emotion recognition</a> 
  <span class="tooltiptext" style="width: 230px">(personal project)</span>
</text> or test software for the <text class="tooltip"><a href="">Large Hadron Collider at CERN</a> 
  <span class="tooltiptext" style="width: 270px">(one of my nerdy-est employers)</span>
</text>. Generally, I like working for R&D and hardware-related software projects. 

</p>



Here's a short summary of what I do professionally (also, check out [my resume](https://patr\k-oleniuk.github.io/cv/)):
- Back-End Software:
  - REST and GraphQL,
  - go (gorilla/mux), python (Flask, Django).
- MLOps & Data Engineering:
  - Docker,
  - Airflow,
  - MLflow, Sagemaker,
  - AWS Suite (S3, EC2, Athena, Flink), Heroku,
  - PostgreSQL, MongoDB,
  - Spark, Koalas, Databricks, Dask.
- Machine Learning & Data Science:
  - pandas, tensorflow / keras, scikit-learn mainly for [supervised learning](images/supervised-learning.png),
  - visulization: plotly, DASH, Streamlit, Bokeh, D3,
  - JavaScript for serving ML models and custom visualisation (project in progress).
- Embedded devices ( Yes, I can blink the <span class="blinking">&#9673;</span> LED and more ):
  - connected sensor networks, embedded &harr; cloud interfaces.
  - embedded C / C++, bootloader (U-Boot), even VHDL/Verilog if needed,



<p style='text-align: justify;'> 
... and many more. I'm used to wearing many hats, and just doing what's needed at the moment, and learning on the job. Speaking about that: I &#x2764; learning new things, as well as  <a href="teaching/">teaching</a> and <a href="talks/">talking</a> about them. 
<br>
<br>
I can speak English, Polish and ~French at work. I am currently learning Chinese and JavaScript.
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