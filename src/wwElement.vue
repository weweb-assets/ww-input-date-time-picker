<template>
  <div>
    <!-- SHOW ON CLICK -->
    <DatePicker
      uid="demo"
      ref="dp"
      class="ww-date-time-picker"
      :model-value="formatedValue"
      @update:model-value="handleSelection"
      :format="content.format"
      :clearable="content.clearable"
      :locale="locale"
      :time-picker="content.dateMode === 'time'"
      :month-picker="content.dateMode === 'month'"
      :year-picker="content.dateMode === 'year'"
      :week-picker="content.dateMode === 'week'"
      :range="content.selectionMode === 'range'"
      :multi-dates="content.selectionMode === 'multi'"
      :multi-dates-limit="content.multiDatesLimit ? content.multiDatesLimit : null"
      :auto-range="content.rangeMode === 'auto' ? content.autoRange : null"
      :partial-range="content.rangeMode === 'free' ? content.enablePartialRange : null"
      :min-range="content.rangeMode === 'minmax' ? content.minRange : null"
      :max-range="content.rangeMode === 'minmax' ? content.maxRange : null"
      :multi-calendars="content.enableMultiCalendars ? content.multiCalendars : false"
      :multi-calendars-solo="content.multiCalendarsSolo"
      :inline="content.enableCalendarOnly"
      :vertical="content.orientation === 'vertical'"
      :enable-time-picker="content.dateMode === 'datetime' || content.dateMode === 'time'"
      :enable-seconds="content.enableSeconds"
      :is-24="content.use24"
      :dark="content.useDarkMode"
      :autoApply="content.autoApply"
      :close-on-auto-apply="content.closeOnAutoApply"
      :flow="content.enableFlow ? content.flowSteps : null"
      :timezone="timezone"
      :week-numbers="content.weekNumbers === 'none' ? null : content.weekNumbers"
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
      :model-type="content.dateMode === 'time' ? 'HH:mm:SS' : content.dateMode === 'month' ? 'yyyy-M' : null"
      :utc="content.dateMode === 'datetime'"
      :placeholder="content.placeholder"
      :teleport="content.enableCalendarOnly ? null : body"
      :dpStyle="{...themeStyle}"
      :key="'is-calendar-only-' + content.enableCalendarOnly"
    >
      <template #dp-input="{ value }">
        <wwLayoutItemContext :index="0" :item="null" :data="value" is-repeat>
          <wwLayout path="triggerZone" />
        </wwLayoutItemContext>
      </template>
      <template #clear-icon="{ clear }">
        <wwElement v-bind="content.clearIconElement" @click.stop="clear"/>
      </template>
      <template #action-select>
        <wwElement v-bind="content.actionSelectElement" @click="selectDate"/>
      </template>
      <template #action-preview="{ value }">
        <wwElement v-bind="content.actionPreviewElement" :wwProps="{ text: value }" />
      </template>
    </DatePicker>
  </div>
</template>

<script>
import DatePicker from './vue-datepicker.js';
import './main.css'
import { computed, ref } from 'vue';

export default {
  components: {
    DatePicker,
  },
  emits: ["update:content", 'add-state', 'remove-state', 'trigger-event'],
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
      props.content.selectionMode === 'single' ? props.content.initValueSingle : 
      props.content.selectionMode === 'range' ? {start: props.content.initValueRangeStart, end: props.content.initValueRangeEnd} : 
      Array.isArray(props.content.initValueMulti) ? props.content.initValueMulti : []
    )
    const { value: variableValue, setValue } =
      wwLib.wwVariable.useComponentVariable({
        uid: props.uid,
        name: "value",
        defaultValue: initValue,
      });
    const body = wwLib.getFrontDocument().body

    const dp = ref();

    const selectDate = () => {
      dp.value.selectDate();
    }

    return { variableValue, setValue, body, initValue, selectDate };
  },
  watch: {
    "initValue"(newValue, oldValue) {
      if (JSON.stringify(newValue) === JSON.stringify(oldValue)) return;
      this.setValue(newValue);
      this.$emit("trigger-event", {
        name: "initValueChange",
        event: { value: newValue },
      });
    },
    /* wwEditor:start */
    "content.selectionMode"(value) {
      this.setValue(null)
      if (value === 'range' && ['week'].includes(this.content.dateMode)) this.$emit('update:content:effect', { dateMode: 'datetime'});
      else if (value === 'multi' && !['datetime', 'date'].includes(this.content.dateMode)) this.$emit('update:content:effect', { dateMode: 'datetime'});
      this.setValue(this.initialValue)
    },
    "content.dateMode"() {
      this.setValue(this.initialValue)
    },
    /* wwEditor:end */
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
    formatedValue() {
      return this.formatInputValue(this.variableValue)
    },
    locale() {
      if (this.content.lang === "pageLang") {
        return wwLib.wwLang.lang;
      }

      return this.content.lang;
    },
    timezone() {
      if(!this.content.timezone || this.content.timezone === 'locale') return null
      return this.content.timezone
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
    themeStyle() {
      return {
        // COLORS
        '--dp-background-color': this.content.themeBackgroundColor,
        '--dp-text-color': this.content.themeTextColor,
        '--dp-hover-color': this.content.themeHoverColor,
        '--dp-hover-text-color':this.content.themeHoverTextColor,
        '--dp-hover-icon-color': this.content.themeHoverIconColor,
        '--dp-primary-color': this.content.themePrimaryColor,
        '--dp-primary-text-color': this.content.themePrimaryTextColor,
        '--dp-secondary-color': this.content.themeSecondaryColor,
        '--dp-border-color': this.content.themeBorderColor,
        '--dp-menu-border-color:': this.content.themeMenuBorderColor,
        '--dp-border-color-hover': this.content.themeBorderHoverColor,
        '--dp-disabled-color': this.content.themeDisabledColor,
        '--dp-scroll-bar-background': this.content.themeScrollBarBackgroundColor,
        '--dp-scroll-bar-color': this.content.themeMScrollBarColor,
        '--dp-success-color': this.content.themeSuccessColor,
        '--dp-success-color-disabled':this.content.themeSuccessDisabledColor,
        '--dp-icon-color': this.content.themeIconColor,
        '--dp-danger-color': this.content.themeDangerColor,
        '--dp-highlight-color': this.content.themeHighlightColor,
        // GENERAL
        '--dp-font-family': this.content.themeFontFamily,
        '--dp-border-radius': this.content.themeBorderRadius,
        '--dp-cell-border-radius': this.content.themeCellBorderRadius,
        '--dp-font-size': this.content.themeFontSize,
        '--dp-preview-font-size': this.content.themePreviewFontSize,
        '--dp-time-font-size': this.content.themeTimeFontSize,
        '--dp-cell-size': this.content.themeCellSize,
        '--dp-cell-padding': this.content.themeCellPadding,
        '--dp-menu-min-width': this.content.themeMenuMinWidth,
      }
    }
  },
  methods: {
    handleSelection(value) {
      console.log('handleSelection', value)
      const newValue = this.formatOutputValue(value)
      if (JSON.stringify(this.variableValue) === JSON.stringify(newValue)) return
      this.setValue(newValue);
    },
    formatInputValue(value) {
      console.log('formatInputValue', value)
      if (!value) return null
      else if (this.content.selectionMode === 'single') return value
      else if (this.content.selectionMode === 'range') return [value.start, value.end]
      else if (this.content.selectionMode === 'multi') return value
    },
    formatOutputValue(value) {
      console.log('formatOutputValue', value)
      if (!value) return null
      else if (this.content.selectionMode === 'single') return value
      else if (this.content.selectionMode === 'range') return {start: value[0], end: value[1]}
      else if (this.content.selectionMode === 'multi') return value
    },
    getTestEvent() {
      const fakeDate = new Date().toISOString()
      if (this.content.selectionMode === 'single') return {value: fakeDate}
      else if (this.content.selectionMode === 'range') return {value: {start: fakeDate, end: fakeDate}}
      else if (this.content.selectionMode === 'multi') return {value: [fakeDate, fakeDate, fakeDate]}
    }
  },
};
</script>
