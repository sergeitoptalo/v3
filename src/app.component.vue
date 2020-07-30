<template>
  <div id="app">
    <nav class="header-navigation">
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" src="./app.component.ts" />
<style src="../styles/main.css" />
