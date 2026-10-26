---
permalink: /
title: "About"
excerpt: "Software engineer for data, full-stack, and backend around AI. Ex-Netflix AI observability and SpaceX Starlink. Open to ML platform roles."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<p style='text-align: justify;'> 

Heyyy! I'm a software engineer focused on data, full-stack, and other software "around" AI to make it behave. As most engineers, I am here to build, fix and improve things. I get passionate at work, and excited when I see things work as designed + fix if they're <a href="images/bad-software.gif">not</a>.
<br><br>
I was at <a href="/employment/2024-10-01-new-role">Netflix</a> until October 2026. There I led unification of three ML data logging libraries into a single one processing 50M events/sec (~$2M/yr), plus caching that cut unnecessary recompute (~$3M/yr), and built full-stack apps for AI observability. Before that I led fleet management software at <a href="/employment/2021-06-01-spacex">SpaceX / Starlink</a> that scaled 100x on customers (50k→5M+) and 10x on satellites with the fleet. I've also worked at a <a href="/employment/2018-11-01-hyperloop">Hyperloop</a> startup and at <a href="/employment/2015-02-01-cern">CERN</a> (European Org. for Nuclear Research in Geneva).
<br><br>
I'm open to roles in AI observability, ML platform, and data + backend around AI.

</p>

Here are some things I can do (also, check out [my resume](cv/)):

## Highlights

- Unified three ML data logging libraries into one path at 50M events/sec (~$2M/yr), and cut unnecessary recompute with caching (~$3M/yr).
- Built full-stack AI observability apps for features, embeddings, and datasets, including the schema and lineage that make them debuggable.
- Led fleet management software at SpaceX / Starlink that scaled 100x on customers (50k→5M+) and 10x on satellites with the fleet.
- Cut Starlink alert resolution time 5x on a rebuild ingesting 5M events/sec (Java, Flink, C#, Kafka).
- Hardware when that's the actual bug: sensor networks, OTA updates, and basic FPGA. Yes, I can blink the <span class="blinking">&#9673;</span> LED and more.

## Stack

- **Web / services:** Python (Flask, Django, FastAPI), Go, Java, Scala, C# / dotnet, C++, TypeScript, Angular, React. APIs: REST, GraphQL, protobuf, grpc.
- **Data / ML platform:** Metaflow, MLflow, Sagemaker, Kafka, Flink, Spark, Airflow, Databricks, Docker / k8s, AWS (S3, EC2, Athena), PostgreSQL, MongoDB, CockroachDB, Elasticsearch, Datomic.
- **ML / LLMs:** pandas, tensorflow / keras, scikit-learn, mainly for [supervised learning](images/supervised-learning.png). Viz: plotly, DASH, Streamlit, Bokeh, D3. Evals and observability (Braintrust, Arize), agent frameworks, OpenTelemetry collectors / SDKs.
- **Embedded:** connected sensor networks, embedded &harr; cloud interfaces, embedded C / C++, bootloader (U-Boot) and OTA, basic VHDL/Verilog on Xilinx and Altera (SoC drivers and DMAs), oscilloscope, logic analyzer, and PCB debug.



<p style='text-align: justify;'> 
... and some more. I'm used to wearing many hats, and just doing what's needed at the moment, and learning on the job. Speaking about that: I &#x2764; learning new things, as well as  <a href="teaching/">teaching</a> and <a href="talks/">talking</a> about them. 
<br>
<br>
At work I can speak English, Polish and ~French. After work, I can (sometimes) succeed at communicating in basic German, Italian, Russian. I am currently learning Chinese and JavaScript.
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