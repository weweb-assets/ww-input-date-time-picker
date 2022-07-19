<template>
  <DatePicker
      v-if="isReadOnly"
      key="readonly"
      class="ww-date-time-picker"
      v-model="value"
      :masks="masks"
      :color="content.color"
      :is-dark="content.isDarkMode"
      :mode="mode"
      :rows="content.rows"
      :columns="content.columns"
      :locale="locale"
    >
      <template v-slot="{ inputValue }">
        <wwElement
          class="ww-date-time-picker__text"
          v-bind="content.dateElement"
          :wwProps="{ text: inputValue }"
          :states="isReadOnly ? ['readonly'] : []"
        />
      </template>
    </DatePicker>
  <!-- INLINE PICKER -->
  <DatePicker
    v-else-if="content.showOn === 'alwaysVisible'"
    key="alwaysVisible"
    class="ww-date-time-picker"
    v-model="value"
    :masks="masks"
    :color="content.color"
    :is-dark="content.isDarkMode"
    :mode="mode"
    :rows="content.rows"
    :columns="content.columns"
    :locale="locale"
  />

  <!-- SHOW ON CLICK -->
  <DatePicker
    v-else-if="content.showOn === 'click'"
    key="click"
    class="ww-date-time-picker"
    v-model="value"
    :masks="masks"
    :color="content.color"
    :is-dark="content.isDarkMode"
    :mode="mode"
    :rows="content.rows"
    :columns="content.columns"
    :locale="locale"
  >
    <template v-slot="{ inputValue, togglePopover }">
      <wwElement
        class="ww-date-time-picker__text"
        v-bind="content.dateElement"
        :wwProps="{ text: inputValue }"
        @click="isEditing ? null : togglePopover()"
      />
    </template>
  </DatePicker>

  <!-- SHOW ON HOVER -->
  <DatePicker
    v-else-if="content.showOn === 'hover'"
    key="hover"
    class="ww-date-time-picker"
    v-model="value"
    :masks="masks"
    :color="content.color"
    :is-dark="content.isDarkMode"
    :mode="mode"
    :rows="content.rows"
    :columns="content.columns"
    :locale="locale"
  >
    <template v-slot="{ inputValue, inputEvents }">
      <wwElement
        class="ww-date-time-picker__text"
        v-bind="content.dateElement"
        :wwProps="{ text: inputValue }"
        v-on="isEditing ? null : inputEvents"
      />
    </template>
  </DatePicker>
</template>

<script>
import { DatePicker } from "./datepicker.js";
import "v-calendar/dist/style.css";

export default {
  components: {
    DatePicker,
  },
  emits: ["update:content", 'add-state', 'remove-state'],
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
    wwElementState: { type: Object, required: true },
  },
  setup(props) {
    const { value: variableValue, setValue } =
      wwLib.wwVariable.useComponentVariable({
        uid: props.uid,
        name: "value",
        type: "string",
        defaultValue:
          typeof props.content.initValue !== "string" &&
          typeof props.content.initValue !== "object"
            ? new Date().toString()
            : props.content.initValue,
      });

    return { variableValue, setValue };
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue === oldValue) return;
      this.setValue(newValue);
      this.$emit("trigger-event", {
        name: "initValueChange",
        event: { value: newValue },
      });
    },
    "content.initValue"(newValue, oldValue) {
      if (newValue === oldValue) return;
      this.value = newValue;
    },
    "content.selectAlsoTime"(newValue) {
      if (newValue === false) {
        this.$emit("update:content", { onlyTime: false });
      }
    },
    isReadOnly: {
      immediate: true,
      handler(value) {
          if (value) {
              this.$emit('add-state', 'readonly');
          } else {
              this.$emit('remove-state', 'readonly');
          }
      },
    },
  },
  methods: {
    ajustDate(date) {
      if (this.mode === "date") {
        return new Date(new Date(date).setHours(0, 0, 0));
      }

      return date;
    },
  },
  computed: {
    isEditing() {
      /* wwEditor:start */
      return (
        this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION
      );
      /* wwEditor:end */
      // eslint-disable-next-line no-unreachable
      return false;
    },
    value: {
      get() {
        return this.variableValue;
      },
      set(newValue, oldValue) {
        if (newValue === oldValue) return;
        if (newValue.toString()) {
          this.setValue(this.ajustDate(newValue).toString());
        }
      },
    },
    masks() {
      return {
        input: this.content.mask,
      };
    },
    mode() {
      if (this.content.onlyTime) return "time";
      return this.content.selectAlsoTime ? "dateTime" : "date";
    },
    locale() {
      if (this.content.lang === "pageLang") {
        return wwLib.wwLang.lang;
      }

      return this.content.lang;
    },
    isReadOnly() {
          /* wwEditor:start */
          if (this.wwEditorState.isSelected) {
              return this.wwElementState.states.includes('readonly');
          }
          /* wwEditor:end */
          return this.wwElementState.props.readonly === undefined
              ? this.content.readonly
              : this.wwElementState.props.readonly;
      },
  },
};
</script>

<style lang="scss" scoped>
.ww-date-time-picker {
  justify-content: inherit !important;
  width: fit-content !important;
}
</style>
