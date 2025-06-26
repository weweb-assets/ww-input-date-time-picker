<template>
  <div>
    <DatePicker
      ref="wwDatePicker"
      class="ww-date-time-picker"
      :class="[
        { 'calendar-only': content.enableCalendarOnly },
        content.enableCalendarOnly && content.calendarOnlyFit,
      ]"
      :day-names="customDayNames"
      :model-value="formatedValue"
      @update:model-value="handleSelection"
      :format-locale="formatLocale"
      :format="previewFormat"
      :clearable="false"
      :locale="locale"
      :time-picker="content.dateMode === 'time'"
      :month-picker="content.dateMode === 'month'"
      :year-picker="content.dateMode === 'year'"
      :week-picker="content.dateMode === 'week'"
      :range="content.selectionMode === 'range'"
      :multi-dates="content.selectionMode === 'multi'"
      :multi-dates-limit="
        content.multiDatesLimit ? content.multiDatesLimit : null
      "
      :auto-range="content.rangeMode === 'auto' ? content.autoRange : null"
      :partial-range="
        content.enableCalendarOnly && content.rangeMode === 'free'
          ? true
          : content.rangeMode === 'free'
          ? content.enablePartialRange
          : null
      "
      :min-range="content.rangeMode === 'minmax' ? content.minRange : null"
      :max-range="content.rangeMode === 'minmax' ? content.maxRange : null"
      :multi-calendars="
        content.enableMultiCalendars ? content.multiCalendars : false
      "
      :multi-calendars-solo="content.multiCalendarsSolo"
      :inline="content.enableCalendarOnly"
      :vertical="content.orientation === 'vertical'"
      :enable-time-picker="
        content.dateMode === 'datetime' || content.dateMode === 'time'
      "
      :enable-seconds="content.enableSeconds"
      :is-24="content.use24"
      :autoApply="content.autoApply"
      :close-on-auto-apply="content.closeOnAutoApply"
      :flow="content.enableFlow ? content.flowSteps : null"
      @flow-step="handleFlowStep"
      :timezone="timezone"
      :week-numbers="
        content.weekNumbers === 'none' ? null : content.weekNumbers
      "
      :hide-offset-dates="content.hideOffsetDates"
      :min-date="content.minDate"
      :max-date="content.maxDate"
      :prevent-min-max-navigation="content.preventMinMaxNavigation"
      :start-date="content.startDate"
      :week-start="content.weekStart"
      :ignore-time-validation="content.ignoreTimeValidation"
      :disable-month-year-select="content.disableMonthYearSelect"
      :allowed-dates="content.allowedDates"
      :disabled-dates="content.disabledDates"
      :disabled-week-days="content.disabledWeekDays"
      :no-disabled-range="content.noDisabledRange"
      :model-type="modelType"
      :position="content.menuPosition || 'center'"
      :teleport="
        content.enableCalendarOnly || content.stickedDatePicker ? null : body
      "
      :dpStyle="{ ...themeStyle }"
      :readonly="isReadOnly || isEditing"
      :key="dpKey"
    >
      <template #dp-input="{ value }">
        <wwLayoutItemContext
          :index="0"
          :item="null"
          :data="{ preview: value, value: formatOutputValue(formatedValue) }"
          is-repeat
        >
          <wwLayout path="triggerZone" />
        </wwLayoutItemContext>
      </template>
      <template #action-select>
        <wwElement v-bind="content.actionSelectElement" @click="selectDate" />
      </template>
      <template #left-sidebar v-if="content.enableLeftSidebar">
        <wwLayout path="leftSidebarZone" />
      </template>
      <template #right-sidebar v-if="content.enableRightSidebar">
        <wwLayout path="rightSidebarZone" />
      </template>
    </DatePicker>
    <input
      class="required-handler"
      type="text"
      :required="content.required"
      :value="formatedValue"
    />
  </div>
</template>

<script>
import DatePicker from "./vue-datepicker.js";
import * as DateFnsLocal from "date-fns/locale";
import "./main.css";
import { computed, ref } from "vue";

export default {
  components: {
    DatePicker,
  },
  emits: ["update:content", "add-state", "remove-state", "trigger-event"],
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
    wwElementState: { type: Object, required: true },
  },
  setup(props) {
    const initValue = computed(() =>
      props.content.selectionMode === "single"
        ? props.content.initValueSingle || null
        : props.content.selectionMode === "range"
        ? {
            start: props.content.initValueRangeStart || null,
            end: props.content.initValueRangeEnd || null,
          }
        : Array.isArray(props.content.initValueMulti)
        ? props.content.initValueMulti
        : []
    );
    const { value: variableValue, setValue } =
      wwLib.wwVariable.useComponentVariable({
        uid: props.uid,
        name: "value",
        defaultValue: initValue,
      });

    const body = wwLib.getFrontDocument().body;

    const wwDatePicker = ref(null);
    const selectDate = () => {
      wwDatePicker.value.selectDate();
    };

    return {
      variableValue,
      setValue,
      body,
      initValue,
      wwDatePicker,
      selectDate,
    };
  },
  watch: {
    initValue(newValue, oldValue) {
      if (JSON.stringify(newValue) === JSON.stringify(oldValue)) return;
      this.setValue(newValue);
      this.$emit("trigger-event", {
        name: "initValueChange",
        event: { value: newValue },
      });
    },
    /* wwEditor:start */
    "content.selectionMode"(value) {
      this.setValue(null);
      if (
        value === "multi" &&
        !["datetime", "date"].includes(this.content.dateMode)
      )
        this.$emit("update:content:effect", { dateMode: "datetime" });
      this.setValue(this.initialValue);
    },
    "content.dateMode"() {
      this.setValue(this.initialValue);
    },
    async dpKey() {
      if (this.content.enableCalendarOnly) return;
      await this.$nextTick();
      this.wwDatePicker.openMenu();
    },
    "wwEditorState.isSelected"(value) {
      if (!this.isEditing || !value || this.content.enableCalendarOnly) return;
      this.wwDatePicker.openMenu();
    },
    /* wwEditor:end */
    isReadOnly: {
      immediate: true,
      handler(value) {
        if (value) {
          this.$emit("add-state", "readonly");
        } else {
          this.$emit("remove-state", "readonly");
        }
      },
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
    /* https://github.com/date-fns/date-fns/blob/main/docs/unicodeTokens.md */
    previewFormat() {
      const format =
        this.content.format === "custom"
          ? this.content.customFormat
          : this.content.format;
      if (!format) return null;
      return format.replace(/Y/g, "y").replace(/D/g, "d").replace(/A/g, "a");
    },
    formatedValue() {
      console.log(
        "🔍 formatedValue - variableValue:",
        this.variableValue,
        typeof this.variableValue
      );
      const value = this.formatInputValue(this.variableValue);
      console.log(
        "🔍 formatedValue - after formatInputValue:",
        value,
        typeof value
      );

      // Ensure we don't pass invalid values to the DatePicker
      if (value === null || value === undefined) {
        console.log("🔍 formatedValue - returning null (null/undefined)");
        return null;
      }

      // For arrays (range/multi), ensure all items are valid
      if (Array.isArray(value)) {
        console.log("🔍 formatedValue - processing array:", value);
        const validItems = value.filter((item) => {
          if (item === null || item === undefined || item === "") return false;
          if (typeof item === "string" || item instanceof Date) return true;
          // For numbers, ensure they're valid timestamps (reasonable range)
          if (typeof item === "number") {
            return item > 946684800000 && item < 4102444800000; // 2000-2100 range
          }
          return false;
        });
        console.log("🔍 formatedValue - validItems after filter:", validItems);
        const result = validItems.length > 0 ? validItems : null;
        console.log("🔍 formatedValue - returning array result:", result);
        return result;
      }

      // For single values, ensure it's a valid type
      if (typeof value === "string" || value instanceof Date) {
        console.log(
          "🔍 formatedValue - returning valid single value:",
          value,
          typeof value
        );
        return value;
      }

      // For numbers, ensure they're valid timestamps
      if (typeof value === "number") {
        if (value > 946684800000 && value < 4102444800000) {
          // 2000-2100 range
          console.log("🔍 formatedValue - returning valid timestamp:", value);
          return value;
        } else {
          console.log("🔍 formatedValue - rejecting invalid timestamp:", value);
        }
      }

      console.log(
        "🔍 formatedValue - returning null (invalid type):",
        value,
        typeof value
      );
      return null;
    },
    locale() {
      if (this.content.lang === "pageLang") {
        return wwLib.wwLang.lang;
      }

      return this.content.lang;
    },
    formatLocale() {
      try {
        return DateFnsLocal[this.locale];
      } catch (e) {
        return "en";
      }
    },
    timezone() {
      if (!this.content.timezone || this.content.timezone === "locale")
        return null;
      return this.content.timezone;
    },
    dpKey() {
      return (
        this.content.selectionMode +
        "-" +
        this.content.dateMode +
        "-" +
        (this.content.menuPosition || "center") +
        (this.content.enableCalendarOnly ? "-only" : "") +
        (this.content.enableRightSidebar ? "-rightside" : "") +
        (this.content.enableLeftSidebar ? "-leftside" : "")
      );
    },
    modelType() {
      if (this.content.dateMode === "date") return "yyyy-MM-dd";
      if (this.content.dateMode === "time") return "HH:mm:SS";
      if (this.content.dateMode === "month") return "yyyy-MM";
      return null;
    },
    isReadOnly() {
      /* wwEditor:start */
      if (this.wwEditorState.isSelected) {
        return this.wwElementState.states.includes("readonly");
      }
      /* wwEditor:end */
      return this.wwElementState.props.readonly === undefined
        ? this.content.readonly
        : this.wwElementState.props.readonly;
    },
    customDayNames() {
      if (this.locale == "ar") {
        /*
                    Sun - أحد (Ahad)
                    Mon - إثن (Ithn)
                    Tue - ثلاث (Thulath)
                    Wed - أربع (Arba')
                    Thu - خمس (Khams)
                    Fri - جمعة (Jumu'ah)
                    Sat - سبت (Sabt)
                */
        const arDayList = ["أحد", "إثن", "ثلاث", "أربع", "خمس", "جمعة", "سبت"];
        const weekStartIndex = this.content.weekStart; // 0 to 6
        return arDayList
          .slice(weekStartIndex)
          .concat(arDayList.slice(0, weekStartIndex));
      }
      return null;
    },
    themeStyle() {
      return {
        // COLORS
        "--dp-background-color": this.content.themeBackgroundColor,
        "--dp-text-color": this.content.themeTextColor,
        "--dp-hover-color": this.content.themeHoverColor,
        "--dp-hover-text-color": this.content.themeHoverTextColor,
        "--dp-hover-icon-color": this.content.themeHoverIconColor,
        "--dp-primary-color": this.content.themePrimaryColor,
        "--dp-primary-text-color": this.content.themePrimaryTextColor,
        "--dp-secondary-color": this.content.themeSecondaryColor,
        "--dp-border-color": this.content.themeBorderColor,
        "--dp-menu-border-color": this.content.themeMenuBorderColor,
        "--dp-border-color-hover": this.content.themeBorderHoverColor,
        "--dp-disabled-color": this.content.themeDisabledColor,
        "--dp-scroll-bar-background":
          this.content.themeScrollBarBackgroundColor,
        "--dp-scroll-bar-color": this.content.themeMScrollBarColor,
        "--dp-success-color": this.content.themeSuccessColor,
        "--dp-success-color-disabled": this.content.themeSuccessDisabledColor,
        "--dp-icon-color": this.content.themeIconColor,
        "--dp-danger-color": this.content.themeDangerColor,
        "--dp-highlight-color": this.content.themeHighlightColor,
        // GENERAL
        "--dp-font-family": this.content.themeFontFamily || "unset",
        "--dp-border-radius": this.content.themeBorderRadius,
        "--dp-cell-border-radius": this.content.themeCellBorderRadius,
        "--dp-font-size": this.content.themeFontSize,
        "--dp-preview-font-size": this.content.themePreviewFontSize,
        "--dp-time-font-size": this.content.themeTimeFontSize,
        "--dp-cell-size": this.content.themeCellSize,
        "--dp-cell-padding": this.content.themeCellPadding,
        "--dp-menu-min-width": this.content.themeMenuMinWidth,
      };
    },
  },
  methods: {
    handleSelection(value) {
      console.log("🎯 handleSelection - received value:", value, typeof value);
      if (this.content.dateMode === "datetime" && value) {
        console.log("🎯 handleSelection - datetime mode, processing...");
        value = Array.isArray(value)
          ? value.map((date) => (date ? date.toISOString() : null))
          : value.toISOString();
        console.log("🎯 handleSelection - after datetime processing:", value);
      }
      const newValue = this.formatOutputValue(value);
      console.log("🎯 handleSelection - after formatOutputValue:", newValue);
      if (JSON.stringify(this.variableValue) === JSON.stringify(newValue))
        return;
      this.setValue(newValue);
      this.$emit("trigger-event", {
        name: "change",
        event: { value: newValue },
      });
    },
    formatInputValue(value) {
      console.log("📝 formatInputValue - input:", value, typeof value);
      if (!value) {
        console.log("📝 formatInputValue - returning null (falsy value)");
        return null;
      } else if (this.content.selectionMode === "single") {
        console.log("📝 formatInputValue - single mode, returning:", value);
        return value;
      } else if (this.content.selectionMode === "range") {
        console.log(
          "📝 formatInputValue - range mode, value.start:",
          value.start,
          "value.end:",
          value.end
        );
        if (!value.start && !value.end) {
          console.log(
            "📝 formatInputValue - range mode, returning null (no start/end)"
          );
          return null;
        }
        const result = [value.start || null, value.end || null].filter(
          (item) => item !== null && item !== ""
        );
        console.log("📝 formatInputValue - range mode, returning:", result);
        return result;
      } else if (this.content.selectionMode === "multi") {
        console.log("📝 formatInputValue - multi mode, returning:", value);
        return value;
      }
    },
    formatOutputValue(value) {
      if (!value) return null;
      else if (this.content.selectionMode === "single") return value;
      else if (this.content.selectionMode === "range")
        return { start: value[0], end: value[1] };
      else if (this.content.selectionMode === "multi") return value;
    },
    clearValue() {
      const clearValue =
        this.content.selectionMode === "single"
          ? null
          : this.content.selectionMode === "range"
          ? {
              start: null,
              end: null,
            }
          : [];
      this.setValue(clearValue);
    },
    handleFlowStep(value) {
      this.setValue(value);
      this.$emit("trigger-event", {
        name: "flowStep",
        event: { value: value },
      });
    },
    openMenu() {
      this.wwDatePicker.openMenu();
    },
    closeMenu() {
      this.$nextTick(() => {
        this.wwDatePicker.closeMenu();
      });
    },
    /* wwEditor:start */
    getTestEvent() {
      let fakeDate = new Date().toISOString();
      if (this.content.dateMode === "month") fakeDate = "2023-03";
      if (this.content.dateMode === "year") fakeDate = "2023";
      if (this.content.dateMode === "time") fakeDate = "01:25:00";
      if (this.content.selectionMode === "single") return { value: fakeDate };
      else if (this.content.selectionMode === "range")
        return { value: { start: fakeDate, end: fakeDate } };
      else if (this.content.selectionMode === "multi")
        return { value: [fakeDate, fakeDate, fakeDate] };
    },
    /* wwEditor:end */
  },
};
</script>

<style>
.dp__action_row {
  width: 100% !important;
}
</style>

<style lang="scss" scoped>
:deep(.calendar-only.stretch) .dp__outer_menu_wrap {
  width: 100% !important;
}
.calendar-only.center {
  justify-content: center;
}
.required-handler {
  opacity: 0;
  width: 100%;
  height: 0;
  position: absolute;
  pointer-events: none;
}
</style>
