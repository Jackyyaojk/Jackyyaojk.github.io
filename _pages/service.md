---
layout: default
title: "Student & Social Work"
permalink: /service/
author_profile: true
---

# 🎓 Student & Social Work

<div class="service-cards">
  <article class="service-card" data-gallery="1">
    <h3 class="service-title">Executive Chair — Student Union</h3>
    <p class="service-org">School of Information Science and Engineering, Northeastern University</p>
    <p class="service-desc">Led student-union activities, coordinated inter-department events, and represented students in faculty meetings.</p>
  </article>
</div>

<!-- 轮播 1 -->
<section class="photo-carousel" aria-label="Photos — Executive Chair">
  <div class="carousel-track-wrapper">
    <div class="carousel-track">
      <figure class="carousel-slide"><img src="{{ '/images/service_1.png' | relative_url }}" alt="service_1"></figure>
      <figure class="carousel-slide"><img src="{{ '/images/service_2.jpg' | relative_url }}" alt="service_2"></figure>
      <figure class="carousel-slide"><img src="{{ '/images/service_3.jpg' | relative_url }}" alt="service_3"></figure>
      <figure class="carousel-slide"><img src="{{ '/images/service_4.jpg' | relative_url }}" alt="service_4"></figure>
      <figure class="carousel-slide"><img src="{{ '/images/service_5.jpg' | relative_url }}" alt="service_5"></figure>
      <figure class="carousel-slide"><img src="{{ '/images/service_6.jpg' | relative_url }}" alt="service_6"></figure>
    </div>
  </div>
  <button type="button" class="carousel-btn prev" aria-label="Previous slide">‹</button>
  <button type="button" class="carousel-btn next" aria-label="Next slide">›</button>
  <div class="carousel-dots"></div>
</section>

<!-- 卡片 2 -->
<article class="service-card" data-gallery="2">
  <h3 class="service-title">Class Monitor & Youth League Branch Secretary</h3>
  <p class="service-org">Class Industrial Intelligence II, College of Control Science and Engineering, Zhejiang University</p>
  <p class="service-desc">Managed class affairs and academic organization, organized study groups and class-level activities, and served as the class's youth league representative.</p>
</article>

<!-- 轮播 2 -->
<section class="photo-carousel" aria-label="Photos — Class Monitor">
  <div class="carousel-track-wrapper">
    <div class="carousel-track">
      <figure class="carousel-slide"><img src="{{ '/images/banzhang_1.jpg' | relative_url }}" alt="banzhang_1"></figure>
      <figure class="carousel-slide"><img src="{{ '/images/banzhang_2.jpg' | relative_url }}" alt="banzhang_2"></figure>
      <figure class="carousel-slide"><img src="{{ '/images/banzhang_3.jpg' | relative_url }}" alt="banzhang_3"></figure>
      <figure class="carousel-slide"><img src="{{ '/images/banzhang_4.jpg' | relative_url }}" alt="banzhang_4"></figure>
      <figure class="carousel-slide"><img src="{{ '/images/banzhang_5.jpg' | relative_url }}" alt="banzhang_5"></figure>
    </div>
  </div>
  <button type="button" class="carousel-btn prev" aria-label="Previous slide">‹</button>
  <button type="button" class="carousel-btn next" aria-label="Next slide">›</button>
  <div class="carousel-dots"></div>
</section>

<style>
/* ========== 卡片通用：与 publication 同档 ========== */
.service-cards{margin-bottom:28px;}
.service-card{
    background:#fff;
    border-radius:14px;
    box-shadow:0 4px 14px rgba(0,0,0,.06);
    padding:22px 26px;
    margin-bottom:24px;
    position:relative;
}
.service-title{
    font-size:19px;
    font-weight:600;
    color:#0a3d62;
    margin:0 0 6px;
}
.service-org{
    font-size:14.5px;
    color:#555;
    margin:0 0 10px;
}
.service-desc{
    font-size:14.5px;
    line-height:1.65;
    color:#2e3a45;
    margin:0;
}

/* ========== 轮播容器 ========== */
.photo-carousel{
    position:relative;
    margin-bottom:40px;
    overflow:hidden;
    border-radius:12px;
    box-shadow:0 3px 10px rgba(0,0,0,.12);
    background:#f5f7fa;
}
.carousel-track-wrapper{overflow:hidden;}
.carousel-track{
    display:flex;
    transition:transform .35s ease;
}
.carousel-slide{
    flex:0 0 100%;
    line-height:0;
}
.carousel-slide img{
    width:100%;
    height:auto;
    display:block;
    object-fit:contain;   /* 完整图，不裁剪 */
}

/* 按钮 */
.carousel-btn{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    background:rgba(255,255,255,.85);
    border:none;
    width:36px;
    height:36px;
    border-radius:50%;
    font-size:22px;
    color:#1e90ff;
    cursor:pointer;
    box-shadow:0 2px 6px rgba(0,0,0,.15);
    z-index:2;
}
.carousel-btn.prev{left:12px;}
.carousel-btn.next{right:12px;}
.carousel-btn:hover{background:#fff;}

/* 指示点 */
.carousel-dots{
    position:absolute;
    bottom:10px;
    left:50%;
    transform:translateX(-50%);
    display:flex;
    gap:6px;
}
.carousel-dots::before{
    content:'';
    display:block;
    width:8px;
    height:8px;
    background:#fff;
    border-radius:50%;
    opacity:.6;
}
.carousel-dots.dot-1::before{box-shadow:0 0 0 2px #1e90ff;}
.carousel-dots.dot-2::before{box-shadow:0 0 0 2px #1e90ff;}
.carousel-dots.dot-3::before{box-shadow:0 0 0 2px #1e90ff;}
.carousel-dots.dot-4::before{box-shadow:0 0 0 2px #1e90ff;}
.carousel-dots.dot-5::before{box-shadow:0 0 0 2px #1e90ff;}
.carousel-dots.dot-6::before{box-shadow:0 0 0 2px #1e90ff;}

/* ========== 小屏 ========== */
@media(max-width:800px){
    .service-card{padding:18px 20px;}
    .carousel-btn{width:32px;height:32px;font-size:20px;}
}
.photo-carousel{
  background:transparent !important;
  box-shadow:none !important;
}
</style>

<script>
/* 简单轮播脚本（无依赖）*/
document.querySelectorAll('.photo-carousel').forEach(car=>{
  const track = car.querySelector('.carousel-track');
  const slides= track.children;
  const dots  = car.querySelector('.carousel-dots');
  let idx = 0;
  const tot = slides.length;
  function go(){
    track.style.transform = `translateX(-${idx*100}%)`;
    dots.className='carousel-dots dot-'+(idx+1);
  }
  car.querySelector('.next').addEventListener('click',()=>{idx=(idx+1)%tot;go();});
  car.querySelector('.prev').addEventListener('click',()=>{idx=(idx-1+tot)%tot;go();});
  go();
});
</script>