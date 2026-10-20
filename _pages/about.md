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

Heyyy! I'm a software engineer focused on data, full-stack, and other software "around" AI to make it behave. As most engineers, I am here to build, fix and improve things. I get passionate at work, and excited when I see things work as designed + fix if they're <a href="images/bad-software.gif">not</a>.
<br><br>
At <a href="/employment/2024-10-01-new-role">Netflix</a>, I led unification of three ML data logging libraries into a single one processing 50M events/sec, resulting in $5M/yr savings, and built full-stack apps for AI observability. Before that I led fleet management software at <a href="/employment/2021-06-01-spacex">SpaceX / Starlink</a> that scaled 1000x with the fleet. I've also worked at a <a href="/employment/2018-11-01-hyperloop">Hyperloop</a> startup and at <a href="/employment/2015-02-01-cern">CERN</a> (European Org. for Nuclear Research in Geneva).

</p>

Here are some things i can do (also, check out [my resume](cv/)):
- Full stack / web software:
  - Python (Flask, Django, FastAPI), Go, Java, Scala, C# / dotnet, C++,
  - APIs: REST, GraphQL, protobuf, grpc,
  - Typescript, Angular, React.
- MLOps & Data Engineering:
  - Metaflow, MLflow, Sagemaker,
  - Kafka, Flink, Spark, Airflow, Databricks,
  - Docker / k8s,
  - AWS (S3, EC2, Athena),
  - PostgreSQL, MongoDB, CockroachDB, Elasticsearch, Datomic.
- Machine Learning & Data Science:
  - pandas, tensorflow / keras, scikit-learn mainly for [supervised learning](images/supervised-learning.png),
  - visulization: plotly, DASH, Streamlit, Bokeh, D3,
- LLMs:
  - evals and observability (Braintrust, Arize),
  - agent frameworks,
  - OpenTelemetry collectors / SDKs.
- Hardware / Embedded Software ( Yes, I can blink the <span class="blinking">&#9673;</span> LED and more ):
  - connected sensor networks, embedded &harr; cloud interfaces,
  - embedded C / C++, bootloader (U-Boot), e.g. OTA Software Update systems,
  - basic VHDL/Verilog on Xilinx and Altera, including SoC drivers and DMAs,
  - basic electrical measurements (Oscilloscope, Logic Analyzer) & PCB debugging.



<p style='text-align: justify;'> 
... and some more. I'm used to wearing many hats, and just doing what's needed at the moment, and learning on the job. Speaking about that: I &#x2764; learning new things, as well as  <a href="teaching/">teaching</a> and <a href="talks/">talking</a> about them. 
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