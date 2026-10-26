---
permalink: /
title: "About"
excerpt: "Engineer for data, AI tooling, and backend. Ex-Netflix and SpaceX Starlink fleet software. Open to data, AI tooling, backend, and fleet roles."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<p style='text-align: justify;'> 

Heyyy! I'm a software engineer focused on data, full-stack, and other software "around" AI to make it behave. As most engineers, I am here to build, fix and improve things. I get passionate at work, and excited when I see things work as designed + fix if they're <a href="images/bad-software.gif">not</a>.
<br><br>
I was at <a href="/employment/2024-10-01-new-role">Netflix</a> until October 2026. I worked on analytics and operations software for AI components, and helped prepare Netflix for a fleet of millions of agents.
<br><br>
Before that I led fleet management software at <a href="/employment/2021-06-01-spacex">SpaceX / Starlink</a> that scaled 100x on customers (50k <span class="growth-arrow">&#8594;</span> 5M+) and 10x on satellites with the fleet.
<br><br>
I'm open to new roles in data, AI tooling, backend, and fleet operations.

</p>

Here are some things I can do (also, check out [my resume](cv/)):

## Highlights

- Led fleet management software at <a href="/employment/2021-06-01-spacex">SpaceX / Starlink</a> that scaled 100x on customers (50k <span class="growth-arrow">&#8594;</span> 5M+) and 10x on satellites with the fleet.
- Analytics and operations software for <a href="/employment/2024-10-01-new-role">Netflix</a> AI components. Helped prepare Netflix for a fleet of millions of agents.
- Unified free ML logging libraries into one path, saving ~$5M/year. Lots of ML data streaming with Flink, Kafka, Parquet, and Spark SQL.
- Also a background in electronics and robotics, and yes, I can blink the <span class="blinking">&#9673;</span> LED.

## Stack

- **Web / services:** Python (Flask, Django, FastAPI), Go, Java, Scala, C# / dotnet, C++, TypeScript, Angular, React. APIs: REST, GraphQL, protobuf, grpc.
- **Data / ML platform:** Metaflow, MLflow, Sagemaker, Kafka, Flink, Spark / Spark SQL, Parquet, Airflow, Databricks, Docker / k8s, AWS (S3, EC2, Athena), PostgreSQL, MongoDB, CockroachDB, Elasticsearch, Datomic.
- **AI:** pandas, tensorflow / keras, scikit-learn, mainly for [supervised learning](images/supervised-learning.png). Viz: plotly, DASH, Streamlit, Bokeh, D3. Evals, feature drift, feature store. Arize, Braintrust, OpenTelemetry collectors / SDKs.
- **Embedded:** connected sensor networks, embedded &harr; cloud interfaces, embedded C / C++, bootloader (U-Boot) and OTA, basic VHDL/Verilog on Xilinx and Altera (SoC drivers and DMAs), oscilloscope, logic analyzer, and PCB debug.



<p style='text-align: justify;'> 
... and some more. I'm used to wearing many hats, and just doing what's needed at the moment, and learning on the job. Speaking about that: I &#x2764; learning new things, as well as  <a href="teaching/">teaching</a> and <a href="talks/">talking</a> about them. 
<br>
<br>
At work I can speak English, Polish and ~French. After work, I can (sometimes) succeed at communicating in basic German, Italian, Russian. I am apparently learning Chinese and <a href="https://www.destroyallsoftware.com/talks/wat">JavaScript</a>.
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
	animation: blinkingText 1.8s infinite;
	-webkit-animation: blinkingText 1.8s infinite;
	transition: none;
	-webkit-transition: none;
}
@keyframes blinkingText{
	0%{		color: #000f;	}
	49%{	color: #0006;	}
	50%{	color: #0006;	}
	99%{	color: #0006;	}
	100%{	color: #000f;	}
}
.growth-arrow{
	font-family: Arial, Helvetica, sans-serif;
	font-variant-emoji: text;
	font-style: normal;
}
</style>