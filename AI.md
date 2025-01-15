---
name: ww-input-date-time-picker
description: The ww-input-date-time-picker component provides a versatile and configurable interface for selecting single or multiple dates and times, supporting various display formats, locales, and selection modes to accommodate diverse user needs.
keywords:
  - date/time picker
  - date range selection
  - time selection
  - multi-date selection
  - locale support
  - timezone configuration
  - 24-hour format
  - custom day names
  - range mode
  - flow feature
---

#### ww-input-date-time-picker

Component Purpose: Renders a date/time picker with various configurations and options for selecting single date, date range, or multiple dates.

Properties:
- formatedValue: string | Date | [Date, Date?] | Date[] - Current value based on variableValue
- readonly: boolean | null - Input read-only state. Default: false
- required: boolean - Input required state. Default: false
- previewFormat: string | null - Display format for selected dates. Default: null
- locale: string - Locale for date picker. Default: wwLib.wwLang.lang
- formatLocale: object - Locale object for date formatting
- timezone: string | null - Timezone for picker. Default: null
- dpKey: string - Key to force re-render
- modelType: "yyyy-MM-dd" | "HH:mm:SS" | "yyyy-MM" | null - Model type for dates
- isReadOnly: boolean - Read-only state
- customDayNames: string[] | null - Custom day names based on locale
- selectionMode: "single" | "range" | "multi" - Selection mode. Default: "single"
- initValueSingle: string | null - Initial single mode value
- initValueRangeStart: string | null - Initial range start value
- initValueRangeEnd: string | null - Initial range end value
- initValueMulti: string[] | null - Initial multi-date values
- multiDatesLimit: number - Max selectable dates in multi mode. Default: 0
- rangeMode: "free" | "auto" | "minmax" - Range selection mode. Default: "free"
- enablePartialRange: boolean - Allow partial range selection. Default: true
- autoRange: number - Auto range days. Default: 1
- minRange: number - Min range days. Default: 2
- maxRange: number - Max range days. Default: 7
- noDisabledRange: boolean - Disable range restrictions. Default: false
- dateMode: "datetime" | "date" | "time" | "month" | "year" - Date/time mode. Default: "datetime"
- enableSeconds: boolean - Enable seconds selection. Default: false
- use24: boolean - Use 24-hour format. Default: false
- enableMultiCalendars: boolean - Enable multiple calendars. Default: false
- multiCalendars: number - Number of calendars. Default: 2
- multiCalendarsSolo: boolean - Independent calendars. Default: false
- orientation: "horizontal" | "vertical" - Picker orientation. Default: "horizontal"
- hideOffsetDates: boolean - Hide offset dates. Default: false
- disableMonthYearSelect: boolean - Disable month/year selection. Default: false
- startDate: string | null - Start date. Default: null
- minDate: string | null - Min selectable date. Default: null
- maxDate: string | null - Max selectable date. Default: null
- preventMinMaxNavigation: boolean - Prevent navigation beyond min/max dates. Default: false
- ignoreTimeValidation: boolean - Ignore time validation. Default: false
- allowedDates: string[] - Allowed dates. Default: []
- disabledDates: string[] - Disabled dates. Default: []
- disabledWeekDays: string[] - Disabled weekdays. Default: []
- weekStart: "0" | "1" | "2" | "3" | "4" | "5" | "6" - Week start day. Default: "1"
- weekNumbers: "none" | "local" | "iso" - Week number display. Default: "none"
- autoApply: boolean - Auto apply selection. Default: false
- closeOnAutoApply: boolean - Close picker on auto apply. Default: true
- enableFlow: boolean - Enable flow feature. Default: false
- flowSteps: string[] - Flow step order. Default: ["month", "year", "calendar", "time", "minutes", "hours", "seconds"]

Children:
- triggerZone: any[] - Trigger zone flexbox acting as button
- actionSelectElement: Object - Select button in action row

Example:
{"tag":"ww-input-date-time-picker","name":"Date & Time picker","props":{"default":{"lang":"pageLang","use24":false,"format":"MMM D, YYYY"}},"children":{"triggerZone":[{"tag":"ww-flexbox","children":{"children":[{"tag":"ww-text","props":{"default":{"text":{"en":{"code":"context.item.data['preview']||\"Select a date\""}}}},{"tag":"ww-icon","props":{"default":{"icon":"icon-calendar","color":"#6E6E6E","fontSize":24}}}]}}]}}

Events:
- change: Triggered when the date selection changes
  Payload: { value: string | { start: string, end: string } | string[] }
  Description: Returns the selected date(s) in ISO format based on selection mode
- initValueChange: Triggered when the initial value changes
  Payload: { value: string | { start: string, end: string } | string[] }
  Description: Returns the new initial value in ISO format

Variables:
- value: Stores the selected date(s)
  Default: Based on initValue computed property (null, {start: null, end: null}, or [])
