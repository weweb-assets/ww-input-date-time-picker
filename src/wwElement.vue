<template>
  <!-- INLINE PICKER -->
  <DatePicker
    v-if="content.showOn === 'alwaysVisible'"
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
  emits: ["update:content"],
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  setup(props) {
    const { value: variableValue, setValue } =
      wwLib.wwVariable.useComponentVariable({
        uid: props.uid,
        name: "value",
        type: "string",
        defaultValue:
          typeof props.content.value !== "string" ||
          typeof props.content.value !== "object"
            ? new Date().toString()
            : props.content.value,
      });

    return { variableValue, setValue };
  },
  watch: {
    value(newValue) {
      if (newValue === this.value) return;
      this.setValue(newValue);
      this.$emit("trigger-event", {
        name: "initValueChange",
        event: { value: newValue },
      });
    },
    "content.initValue"(newValue) {
      if (newValue === this.value) return;
      this.value = newValue;
    },
    "content.selectAlsoTime"(newValue) {
      if (newValue === false) {
        this.$emit("update:content", { onlyTime: false });
      }
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
        if (newValue.toString()) this.setValue(newValue.toString());
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
  },
};
</script>
