---
layout: page
title: "My Semester in Spain"
---

<script setup>
import { data as posts } from './posts.data.mjs'
</script>

<style>
.home-header {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 3rem;
}
.home-header h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.home-header p {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem auto;
}

.grid-item {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 1;
  text-decoration: none !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.grid-item:hover img {
  transform: scale(1.05);
}

.grid-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  padding: 2rem 1rem 1rem 1rem;
  color: white;
  display: flex;
  flex-direction: column;
}

.grid-overlay h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
}
.grid-overlay span {
  font-size: 0.85rem;
  opacity: 0.8;
  margin-top: 4px;
}
</style>

<div class="home-header">
  <h1>My Semester in Spain</h1>
  <p>A collection of memories, photos, and stories from 2015 to 2016.</p>
</div>

<div class="photo-grid">
  <a v-for="post in posts" :key="post.url" :href="post.url" class="grid-item">
    <img v-if="post.cover_image" :src="`/images/${post.cover_image}`" alt="Cover" loading="lazy" />
    <div class="grid-overlay">
      <h3>{{ post.title }}</h3>
      <span>{{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}</span>
    </div>
  </a>
</div>
