---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>


I am a first-year Ph.D. student at the <a href="https://datascience.hku.hk/">HKU Musketeers Foundation Institute of Data Science (HKU-IDS)</a>, as well as HKU-MMLab, The University of Hong Kong, supervised by Prof. <a href="https://xh-liu.github.io/">Xihui Liu</a>.

I received my B.Eng. Degree from the <a href="https://www.uestc.edu.cn/">University of Electronic Science and Technology of China</a> (UESTC) and MPhil Degree from <a href="https://www.cuhk.edu.cn/en">The Chinese University of Hong Kong, Shenzhen</a> (CUHK-Shenzhen), supervised by Prof. <a href="https://scholar.google.com/citations?user=z-rqsR4AAAAJ&hl=zh-CN">Xiaoguang Han</a>. Before joining HKU-IDS, I've spent wonderful time with great minds and interesting friends at <a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a>.

My current research interests lie in the <strong>Multimodal Large Language Models</strong> and <strong>3D Vision and Robotics (Embodied AI)</strong>. I'm open to potential collaborations, feel free to drop me an email if you are interested in.


# 🔥 News
- *2024.06*: &nbsp;🎉🎉 We realse a new task: 3D reasoning grounding and benchmark: ScanReason to examine the 3D understanding ability in the era of Foundation Model.
- *2024.06*: The report of our follow-up work with the most-ever hierarchical grounded language annotations, MMScan, has been released.
- *2024.02*: We will co-organize <a href="https://opendrivelab.com/challenge2024/">Autonomous Grand Challenge</a> in CVPR 2024. Welcome to try the Multi-View 3D Visual Grounding track!
- *2024.02*: &nbsp;🎉🎉 Our EmbodiedScan is accepted by CVPR 2024!


# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><img src='images/2024_eccv_reground3d/scanreason.png' alt="Empowering 3D Visual Grounding with Reasoning Capabilities" loading="lazy" width="90%"></div></div>
<div class='paper-box-text' markdown="1">
  <div class="section-subheading article-title mb-0 mt-0">
    <strong>Empowering 3D Visual Grounding with Reasoning Capabilities</strong>
  </div>
  <div class="article-style">
    <i>Arxiv preprint</i> <br>
    <strong><u>Chenming Zhu</u></strong>,
    <a href="https://tai-wang.github.io/" target="_blank" rel="noopener">Tai Wang</a>,
    <a href="https://zhangwenwei.cn/" target="_blank" rel="noopener">Wenwei Zhang</a>,
    <a href="https://chenkai.site/" target="_blank" rel="noopener">Kai Chen</a>,
    <a href="https://xh-liu.github.io/" target="_blank" rel="noopener">Xihui Liu</a>,
  </div>
  <div class="stream-meta article-metadata"> 
  </div>
  <br>
  <div class="btn-links">
    <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://tai-wang.github.io/embodiedscan/" target="_blank" rel="noopener">
      Project Page
    </a>
    <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://arxiv.org/abs/2312.16170" target="_blank" rel="noopener">
      arXiv
    </a>
  </div>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/mmscan/MMScan_teaser.png' alt="MMScan: A Multi-Modal 3D Scene Dataset with Hierarchical Grounded Language Annotations" loading="lazy" width="90%"></div></div>
<div class='paper-box-text' markdown="1">
  <div class="section-subheading article-title mb-0 mt-0">
    <strong>MMScan: A Multi-Modal 3D Scene Dataset with Hierarchical Grounded Language Annotations</strong>
  </div>
  <div class="article-style">
    <i>Arxiv preprint</i> <br>
    <a href="https://openreview.net/profile?id=~Ruiyuan_Lyu1" target="_blank" rel="noopener">Ruiyuan Lyu</a>*,
    <a href="https://tai-wang.github.io/" target="_blank" rel="noopener">Tai Wang</a>*,
    <a href="https://scholar.google.com/citations?user=-zT1NKwAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener">Jingli Lin</a>*,
    <a href="https://scholar.google.com/citations?user=-zT1NKwAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener">Shuai Yang</a>*,
    <a href="https://scholar.google.com/citations?user=-zT1NKwAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener">Xiaohan Mao</a>,
    <a href="https://scholar.google.com/citations?user=-zT1NKwAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener">Yilun Chen</a>, 
    <a href="https://runsenxu.com/" target="_blank" rel="noopener">Runsen Xu</a>,
    <a href="https://runsenxu.com/" target="_blank" rel="noopener">Haifeng Huang</a>,
    <strong><u>Chenming Zhu</u></strong>,
    <a href="http://dahua.site/" target="_blank" rel="noopener">Dahua Lin</a>,
    <a href="https://oceanpang.github.io/" target="_blank" rel="noopener">Jiangmiao Pang</a>†
  </div>
  <div class="stream-meta article-metadata"> 
  </div>
  <br>
  <div class="btn-links">
    <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://tai-wang.github.io/mmscan/" target="_blank" rel="noopener">
      Project Page
    </a>
    <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://arxiv.org/pdf/2406.09401" target="_blank" rel="noopener">
      arXiv
    </a>
    <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://github.com/OpenRobotLab/EmbodiedScan" target="_blank" rel="noopener">
      Code & Data
    </a>
  </div>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2024</div><img src='images/2024_cvpr_embodiedscan/embodiedscan.gif' alt="EmbodiedScan: A Holistic Multi-Modal 3D Perception Suite Towards Embodied AI" loading="lazy" width="90%"></div></div>
<div class='paper-box-text' markdown="1">
  <div class="section-subheading article-title mb-0 mt-0">
    <strong>EmbodiedScan: A Holistic Multi-Modal 3D Perception Suite Towards Embodied AI</strong>
  </div>
  <div class="article-style">
    <i>IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2024</i> <br>
    <a href="https://tai-wang.github.io/" target="_blank" rel="noopener">Tai Wang</a>*,
    <a href="https://scholar.google.com/citations?user=-zT1NKwAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener">Xiaohan Mao</a>*,
    <strong><u>Chenming Zhu</u></strong>*,
    <a href="https://runsenxu.com/" target="_blank" rel="noopener">Runsen Xu</a>,
    <a href="https://openreview.net/profile?id=~Ruiyuan_Lyu1" target="_blank" rel="noopener">Ruiyuan Lyu</a>,
    <a href="https://openreview.net/profile?id=~Peisen_Li1" target="_blank" rel="noopener">Peisen Li</a>,
    <a href="https://xiao-chen.tech/" target="_blank" rel="noopener">Xiao Chen</a>,
    <a href="https://zhangwenwei.cn/" target="_blank" rel="noopener">Wenwei Zhang</a>,
    <a href="https://chenkai.site/" target="_blank" rel="noopener">Kai Chen</a>,
    <a href="https://tianfan.info/" target="_blank" rel="noopener">Tianfan Xue</a>,
    <a href="https://xh-liu.github.io/" target="_blank" rel="noopener">Xihui Liu</a>,
    <a href="https://www.mvig.org/" target="_blank" rel="noopener">Cewu Lu</a>,
    <a href="http://dahua.site/" target="_blank" rel="noopener">Dahua Lin</a>,
    <a href="https://oceanpang.github.io/" target="_blank" rel="noopener">Jiangmiao Pang</a>†
  </div>
  <div class="stream-meta article-metadata"> 
  </div>
  <br>
  <div class="btn-links">
    <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://tai-wang.github.io/embodiedscan/" target="_blank" rel="noopener">
      Project Page
    </a>
    <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://arxiv.org/abs/2312.16170" target="_blank" rel="noopener">
      arXiv
    </a>
    <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://github.com/OpenRobotLab/EmbodiedScan" target="_blank" rel="noopener">
      Code & Data
    </a>
    <a class="btn btn-outline-primary btn-page-header btn-sm" href="https://mp.weixin.qq.com/s/__cubd_YlvZrTvDHyLI-ow" target="_blank" rel="noopener">
      中文解读
    </a>
  </div>
</div>
</div>



# 📖 Projects
**MMDetection3D: OpenMMLab next-generation platform for general 3D perception. (Github >5k stars 🔥)**<br>
**C0RE MAINTAINER & DEVELOPER**<br>
- MMDetection3D unifies the pipeline and modular design of mono3D, LiDAR-based,and multi-modality
3D object detection.
- It supports state-of-the-art 3D object detectors of different modalities in multiple indoor and outdoor
datasets.
- It builds strong foundations,in a universal framework, for general 3D object detection.

# 🎖 Honors and Awards
- *2023.10* Runner-up of Waymo Camera-Only 3D Detection Challenge, CVPR 2022
- *2017-2018/2018-2019* Excellent Undergraduate Scholarship of UESTC
- *2018* Outstanding Student Award of School of Computer Science and Engineering, UESTC

# 💬  Academic Services
I served as a reviewer for CVPR, ICCV, ECCV, NeurIPS.

# 💻 Internships
- *2021.06 - 2024*, Research Intern, <a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a>, China.
- *2020.08 - 2020.12*, Research Intern, <a href="https://www.shlab.org.cn/">Shanghai AI Laboratory</a>, China.
