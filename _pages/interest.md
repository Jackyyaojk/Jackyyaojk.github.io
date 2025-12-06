---
layout: default
title: "Interests"
permalink: /interests/
author_profile: true
---

# 🧩 Hobbies & Interests

Below are some activities I enjoy during my free time.

<div class="hobby-container">

	<!-- Swimming -->
	<article class="hobby-card">
		<img class="hobby-img" src="{{ '/images/swimming.jpg' | relative_url }}" alt="Swimming">
		<div class="hobby-text">
			<h3 class="hobby-title">🏊 Swimming</h3>
			<p>
				Swimming provides calm, rhythm, and controlled motion — a consistent way to stabilize both mind and body.
			</p>
		</div>
	</article>

	<!-- Singing -->
	<article class="hobby-card">
		<img class="hobby-img" src="{{ '/images/singing.jpg' | relative_url }}" alt="Singing">
		<div class="hobby-text">
			<h3 class="hobby-title">🎤 Singing</h3>
			<p>
				Singing offers a direct emotional outlet. It is an efficient way to release tension through sound.
			</p>
		</div>
	</article>

	<!-- Mahjong -->
	<article class="hobby-card">
		<img class="hobby-img" src="{{ '/images/majiang.jpg' | relative_url }}" alt="Mahjong">
		<div class="hobby-text">
			<h3 class="hobby-title">🀄 Mahjong</h3>
			<p>
				Mahjong integrates pattern recognition, probability, and decision-making into a competitive environment.
			</p>
		</div>
	</article>

	<!-- Skiing -->
	<article class="hobby-card">
		<img class="hobby-img" src="{{ '/images/huaxue.jpg' | relative_url }}" alt="Skiing">
		<div class="hobby-text">
			<h3 class="hobby-title">⛷️ Skiing</h3>
			<p>
				Skiing combines speed, precision, and environmental awareness, producing an efficient physical flow state.
			</p>
		</div>
	</article>

</div>

<style>
/* 外层排版更加紧致 */
.hobby-container {
	display: flex;
	flex-direction: column;
	gap: 26px;
}

/* 卡片更现代 */
.hobby-card {
	display: flex;
	gap: 22px;
	background: #ffffff;
	border-radius: 16px;
	padding: 22px;
	box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	border: 1px solid #f0f0f0;
}

.hobby-card:hover {
	transform: translateY(-3px);
	box-shadow: 0 8px 22px rgba(0, 0, 0, 0.10);
}

/* 图片统一尺寸、美观 */
.hobby-img {
	width: 200px;
	height: 130px;
	object-fit: cover;
	border-radius: 12px;
	box-shadow: 0 3px 10px rgba(0,0,0,0.12);
}

/* 文本更现代 */
.hobby-text {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.hobby-title {
	margin: 0 0 8px 0;
	font-size: 1.25rem;
	font-weight: 600;
}

/* 手机端自动调整 */
@media (max-width: 750px) {
	.hobby-card {
		flex-direction: column;
	}
	.hobby-img {
		width: 100%;
		height: auto;
	}
}
</style>
