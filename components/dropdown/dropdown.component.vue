<template>
  <div class="dropdown">
    <div class="dropdown-trigger" @click.stop="toggleDropdown">
      <ul v-if="selectedItems.length">
        <li v-for="(selectedItem, index) in selectedItems" :key="selectedItem.id" class="selected-item">
          <span>
            {{ selectedItem.text }}
          </span>
          <button :data-unselect-item-id="index" class="unselect-item-button">
            x
          </button>
        </li>
      </ul>
      <span class="dropdown-placeholder" v-else>Select items</span>
      <span class="dropdown-arrow" :class="{ up: showDropdownPanel }">></span>
    </div>
    <ul class="dropdown-panel" v-if="showDropdownPanel">
      <template v-if="panelItems.length">
        <li v-for="(item, index) of panelItems" :key="item.id" class="dropdown-item" @click="selectItem(index)">
          {{ item.text }}
        </li>
      </template>
      <li v-else>No topics available</li>
    </ul>
  </div>
</template>

<script src="./dropdown.component.ts" />
<style src="./dropdown.component.css" />
