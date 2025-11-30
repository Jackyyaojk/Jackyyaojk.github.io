---
layout: default
title: "Publications"
permalink: /publications/
author_profile: true
---

# 📝 Periodical Publications 
<!-- 2023sustainablity -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Sustainablity</div><img src='{{ "/images/Sustainablity.png" | relative_url }}' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Model-Based Reinforcement Learning Method for Microgrid Optimization Scheduling](https://www.mdpi.com/2071-1050/15/12/9235)

**Jinke Yao**, Jiachen Xu, Ning Zhang, Yajuan Guan

[**Project**](https://github.com/Jackyyaojk/BoatController.git) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A model-based reinforcement learning algorithm is used to optimize microgrid scheduling. During training, the learned networks assist Monte Carlo Tree Search (MCTS) in accumulating game history and updating network parameters. This process yields optimal scheduling strategies and a simulated environmental dynamics model. A microgrid simulator is developed, incorporating HVAC, photovoltaic, and energy storage systems for the simulation.
</div>
</div>

# 📖 Conference Publications 
<!-- 2025 IECON -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IECON 2025</div><img src='{{ "/images/IECON2025.png" | relative_url }}' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Progressive Domain Transfer Learning for Contact-rich Hand-Tool-Environment Interaction](https://ieeexplore.ieee.org/document/11221264)

**Jinke Yao**, Wenxin Zhu, Yilin Lang, Qinyuan Ren

[**Project**](https://github.com/Jackyyaojk/BoatController.git) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- High-dimensional states and complex contacts hinder modeling and cross-domain transfer in dexterous hand tool use. We propose a Progressive Generative Representation (PGR) that embeds observations into a low-dimensional latent space for contact-rich feature extraction and domain adaptation. Coupled with model-based optimal control and latent dynamics learned via temporal-difference training, it produces effective manipulation policies. In simulated ultrasonic inspection, the method achieves accurate tracking, strong robustness to stiffness and friction shifts, and recovers source-domain performance with only ten rollout updates.
</div>
</div>

<!-- 2024 ITSC -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ITSC 2024</div><img src='{{ "/images/ITSC2024.png" | relative_url }}' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Shared Control Approach for Steering Assistance via Online Learning](https://ieeexplore.ieee.org/document/10919709)

Yilin Lang, Zhaoyang Li, **Jinke Yao**, Xinwei Shen, Haijin Yao, Qinyuan Ren

[**Project**](https://github.com/Jackyyaojk/BoatController.git) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Steering assistance systems aim to improve safety and reduce driver workload, but inadequate prediction of driver behavior can cause human–vehicle conflict. This paper proposes a shared-control framework that learns driver behavior online using a Gaussian Process (GP) model and integrates it into an MPC for smooth, accurate steering. An adaptive authority allocation strategy, guided by the prediction trust level, adjusts control sharing in real time. Lane-keeping experiments demonstrate that online driver modeling and adaptive authority allocation significantly reduce tracking error and enhance steering smoothness.
</div>
</div>

<!-- 2024 Robio -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ROBIO 2024</div><img src='{{ "/images/ROBIO2024.jpg" | relative_url }}' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Bio-Inspired Fuzzy Sliding Mode Based Cruise Control of USV with Model Uncertainty](https://ieeexplore.ieee.org/document/10907674)

**Jinke Yao**, Huiyuan Bai, Yilin Lang, Qinyuan Ren

[**Project**](https://github.com/Jackyyaojk/BoatController.git) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
Model uncertainty makes USV control difficult, and although SMC is robust, it suffers from strong chattering. This paper proposes a dual-loop Predictive Fuzzy SMC (PFSMC) that adaptively tunes control parameters. An outer-loop MPC provides smooth virtual velocities, while a fuzzy-enhanced SMC adjusts the sliding surface and reaching law in real time. Simulations on a USV cruising task show that PFSMC achieves accurate, robust tracking with significantly reduced chattering.
</div>
</div>

<!-- 2024 Cis-ram -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CIS-RAM 2024</div><img src='{{ "/images/CISRAM2024.png" | relative_url }}' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Confidence-based Allocation Approach for USV Trajectory Tracking via Human-Robot Co-Driving](https://ieeexplore.ieee.org/abstract/document/10673172)

**Jinke Yao**, Yingying Shao, Qinyuan Ren

[**Project**](https://github.com/Jackyyaojk/BoatController.git) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A Human-Robot Co-driving framework to achieve the human-in-the loop control is proposed in our work. A nonlinear Model Predictive Control (MPC) framework with nominal dynamic model will be solved for optimal tracking accuracy. And a confidence-based dynamic authority allocation method considering temporal stochastic driver model enable the flexible and efficient shared control. 
</div>
</div>

<!-- 2024ICCA -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCA 2024</div><img src='{{ "/images/ICCA2024.png" | relative_url }}' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Model Predictive Control Approach for USV Autonomous Cruising via Disturbance Learning](https://ieeexplore.ieee.org/abstract/document/10591898)

Maotong Cheng, **Jinke Yao**, Qinyuan Ren

[**Project**](https://github.com/Jackyyaojk/BoatController.git) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- A learning-based model predictive control (MPC) approach for USV course-keeping subject to disturbances and uncertainties. A relatively simplified dynamics model is augmented by a long short term memory (LSTM) residual model, which can capture complicated hydrodynamics effect and eliminate model mismatch. 
</div>
</div>