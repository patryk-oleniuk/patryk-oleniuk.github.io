---
title: "Facial Emotion Recognition DNN"
excerpt: "48x48px greyscale face -> Tensorflow DNN -> Emotion Classified. First worked on the Tensorflow model. Second, tried to execute some of the DNN convolutions on the FPGA - and succeeded! Play with my model using you own photo [here](https://share.streamlit.io/patryk-oleniuk/face-emotionz-webapp/dev/app/streamlit_app.py). <br/><img src='/images/emotions.png'>"
collection: portfolio
date: 2017-01-01
---

<img src='/images/emotions.png'>

This page is still missing lots of content. 

In the meanwhile: Play with my model using you own photo [here](https://share.streamlit.io/patryk-oleniuk/face-emotionz-webapp/dev/app/streamlit_app.py) (still working on some features).

The training work code: [https://github.com/patryk-oleniuk/emotion_recognition](https://github.com/patryk-oleniuk/emotion_recognition)

The FPGA code (VERY experimental, based on [this paper](https://dl.acm.org/doi/10.1145/3020078.3021736) ): [https://github.com/patryk-oleniuk/cnn_hw_accelerator](https://github.com/patryk-oleniuk/cnn_hw_accelerator)