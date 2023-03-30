<template>
  <v-dialog v-model="innerModel" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ title }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.name"
                  :rules="rules"
                  label="Name*"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.gender"
                  :rules="rules"
                  label="Gender*"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.birth_year"
                  :rules="rules"
                  label="Birth year*"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.height"
                  :rules="rules"
                  label="Height*"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.mass"
                  :rules="rules"
                  label="Mass*"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="handleClose"> Close </v-btn>
        <v-btn color="blue darken-1" text @click="handleSave"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },

    title: {
      type: String,
      default: '',
    },

    initialFormData: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      valid: true,
      rules: [(v) => !!v || 'required'],
      form: {
        name: '',
        gender: '',
        birth_year: '',
        height: '',
        mass: '',
      },
    };
  },

  computed: {
    innerModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },

  watch: {
    initialFormData: {
      handler(initialFormData) {
        this.applyInitialFormData(initialFormData);
      },
      immediate: true,
    },
  },

  methods: {
    clearForm() {
      Object.keys(this.form).forEach((element) => {
        this.form[element] = '';
      });
    },

    handleClose() {
      this.$emit('close');
      this.$refs.form?.resetValidation();
      this.clearForm();
    },

    async handleSave() {
      await this.$refs.form.validate();
      if (!this.valid) return;

      this.$emit('save', { ...this.form });
      this.$refs.form?.resetValidation();
      this.clearForm();
    },

    applyInitialFormData(initialFormData) {
      if (!initialFormData) return;
      this.form = { ...initialFormData };
    },
  },
};
</script>
