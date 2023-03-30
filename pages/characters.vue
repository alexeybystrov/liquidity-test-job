<template>
  <div>
    <div>Сharacters</div>

    <List
      v-if="list.length"
      :headers="headers"
      :list="list"
      :total-count="totalCount"
      @changePage="setCharactersByPage"
      @create="handleCreate"
      @edit="handleEdit"
      @delete="deleteCharacter"
    />

    <Form
      v-model="isShowEditForm"
      :initial-form-data="itemToBeEdited.item"
      title="Edit"
      @close="closeEditForm"
      @save="handleSaveEditForm"
    />

    <Form
      v-model="isShowCreateForm"
      title="Create"
      @close="closeCreateForm"
      @save="handleSaveCreateForm"
    />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      headers: [
        { title: 'Name', field: 'name', width: '42%' },
        { title: 'Gender', field: 'gender', width: '12%' },
        { title: 'Birth year', field: 'birth_year', width: '10%' },
        { title: 'Height', field: 'height', width: '10%' },
        { title: 'Mass', field: 'mass', width: '8%' },
      ],
      isShowCreateForm: false,
      isShowEditForm: false,
      itemToBeEdited: {
        item: {},
        i: '',
      },
    };
  },

  computed: {
    ...mapState('characters', ['list', 'totalCount']),
  },

  watch: {
    page: {
      immediate: true,
      handler(value) {
        this.setCharactersByPage(value);
      },
    },
  },

  methods: {
    ...mapMutations('characters', [
      'editCharacter',
      'deleteCharacter',
      'addCharacter',
    ]),
    ...mapActions('characters', ['setCharactersByPage']),

    clearItemToBeEdited() {
      this.itemToBeEdited = {
        item: {},
        i: '',
      };
    },

    handleEdit(item, i) {
      this.itemToBeEdited = {
        item,
        i,
      };
      this.isShowEditForm = true;
    },

    closeEditForm() {
      this.isShowEditForm = false;
      this.clearItemToBeEdited();
    },

    handleSaveEditForm(item) {
      this.editCharacter({ payload: item, i: this.itemToBeEdited.i });
      this.closeEditForm();
    },

    handleCreate() {
      this.isShowCreateForm = true;
    },

    closeCreateForm() {
      this.isShowCreateForm = false;
    },

    handleSaveCreateForm(data) {
      this.addCharacter(data);
      this.closeCreateForm();
    },
  },
};
</script>
