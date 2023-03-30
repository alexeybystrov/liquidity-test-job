<template>
  <div>
    <div class="d-flex justify-start">
      <v-pagination v-model="page" :length="paginationLength" />
    </div>

    <v-simple-table>
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header.title"
            :width="header.width"
            class="text-left"
          >
            {{ header.title }}
          </th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in list"
          :key="`${item.name}-${i}`"
          @mouseover="hoveredRowIndex = i"
          @mouseleave="hoveredRowIndex = ''"
        >
          <td v-for="header in headers" :key="header.title">
            {{ item[header.field] }}
          </td>

          <template v-if="hoveredRowIndex === i">
            <td width="8%">
              <v-btn
                elevation="0"
                color="blue"
                small
                plain
                @click="handleEdit(item, i)"
              >
                edit
              </v-btn>
            </td>
            <td width="10%">
              <v-btn
                elevation="0"
                color="error"
                small
                plain
                @click="handleDelete(i)"
              >
                delete
              </v-btn>
            </td>
          </template>
          <template v-else>
            <td width="8%" />
            <td width="10%" />
          </template>
        </tr>
      </tbody>
    </v-simple-table>

    <div class="d-flex mt-4">
      <v-spacer />
      <v-btn elevation="0" color="primary" @click="handleCreate">
        create
      </v-btn>
    </div>
  </div>
</template>

<script>
const ITEMS_PER_PAGE = 10;

export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },

    list: {
      type: Array,
      default: () => [],
    },

    totalCount: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      hoveredRowIndex: '',
      page: 1,
    };
  },

  computed: {
    paginationLength() {
      return Math.ceil(this.totalCount / ITEMS_PER_PAGE);
    },
  },

  watch: {
    page: {
      immediate: true,
      handler(value) {
        this.$emit('changePage', value);
      },
    },
  },

  methods: {
    handleEdit(item, i) {
      this.$emit('edit', item, i);
    },

    handleDelete(i) {
      this.$emit('delete', i);
    },

    handleCreate() {
      this.$emit('create');
    },
  },
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
