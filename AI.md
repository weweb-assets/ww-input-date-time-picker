---
name: ww-input-date-time-picker
description: A versatile date/time picker component supporting single date, date ranges, and multiple date selections with extensive configuration options.
keywords: [date picker, time picker, date range, multi-date, calendar, timezone, locale]
---

#### ww-input-date-time-picker

***Purpose:***
Renders a configurable date/time picker interface that supports various selection modes (single date, date range, multiple dates) with extensive customization options for display formats, locales, and selection behaviors.

***Features:***
- Multiple selection modes (single, range, multi-date)
- Customizable date/time formats and locales
- Timezone support
- Flow-based selection process
- Range selection with min/max constraints
- Custom day names and week start
- Multiple calendar views
- Auto-apply and partial range options

***Properties:***
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

***Slots:***
- triggerZone: (array of elements) - Flexbox container that serves as the clickable trigger for opening the date picker. This slot MUST be defined with at least one element inside to create the clickable interface that opens the calendar view. Typically contains a stylized div with selected date(s) or a placeholder text and a calendar icon.
- actionSelectElement: (element) ww-button - Button element that appears at the bottom of the calendar popup for confirming/selecting the date. This slot MUST be defined to provide users with a way to apply their date selection when autoApply is set to false. Typically contains a button with a "Select date" label.

***Exposed Variables:***
- value: Selected value (single mode) or array of selected values (multiple mode). Access using variables['current_element_uid-value']

***Events:***
- change: Triggered when the date selection changes. Payload: { value: string | { start: string, end: string } | string[] }
- initValueChange: Triggered when the initial value changes. Payload: { value: string | { start: string, end: string } | string[] }

***Internal Context:***
- context.item.data?.value: Selected value (single mode) or array of selected values (multiple mode)
- context.item.data?.preview: Display format of the selected value(s)

***Example:***
<elements>
{"uid":"input-date-time-picker","tag":"ww-input-date-time-picker","name":"Date Picker","props":{"default":{"lang":"pageLang","use24":false,"format":"MMM D, YYYY","dateMode":"date","maxRange":7,"minRange":2,"readonly":false,"required":true,"timezone":"locale","autoApply":true,"autoRange":1,"flowSteps":["month","year","calendar","time","minutes","hours","seconds"],"rangeMode":"free","weekStart":"1","enableFlow":false,"weekNumbers":"none","customFormat":"","menuPosition":"center","advancedDates":false,"enableSeconds":false,"selectionMode":"single","themeCellSize":"35px","themeFontSize":"16px","advancedColors":false,"advancedStyles":false,"multiCalendars":2,"themeIconColor":"#959595","themeTextColor":"#212121","calendarOnlyFit":"stretch","hideOffsetDates":false,"multiDatesLimit":0,"noDisabledRange":false,"themeHoverColor":"#f3f3f3","closeOnAutoApply":true,"themeBorderColor":"#ddd","themeCellPadding":"5px","themeDangerColor":"#ff6f60","enableLeftSidebar":false,"stickedDatePicker":false,"themeBorderRadius":"4px","themeMenuMinWidth":"250px","themePrimaryColor":"#1976d2","themeSuccessColor":"#76d275","themeTimeFontSize":"32px","enableCalendarOnly":false,"enablePartialRange":true,"enableRightSidebar":false,"multiCalendarsSolo":false,"themeDisabledColor":"#f6f6f6","themeHighlightColor":"#1976d219","themeHoverIconColor":"#959595","themeHoverTextColor":"#212121","themeScrollBarColor":"#959595","themeSecondaryColor":"#c0c4cc","enableMultiCalendars":false,"ignoreTimeValidation":false,"themeBackgroundColor":"#ffffff","themeMenuBorderColor":"#ddd","themePreviewFontSize":"13px","themeBorderHoverColor":"#aaaeb7","themeCellBorderRadius":"4px","themePrimaryTextColor":"#f8f5f5","disableMonthYearSelect":false,"preventMinMaxNavigation":false,"themeSuccessDisabledColor":"#a3d9b1","themeScrollBarBackgroundColor":"#f3f3f3"}},"styles":{"default":{"width":"300px","backgroundColor":"transparent"}},"slots":{"triggerZone":[{"uid":"date-input-trigger"}],"actionSelectElement":{"uid":"select-date-button"}}}

{"uid":"date-input-trigger","tag":"ww-div","name":"Date Input Trigger","states":[{"id":"_wwHover","label":"hover"}],"styles":{"default":{"width":"100%","border":"1px solid #ddd","cursor":"pointer","display":"flex","padding":"8px 12px","transition":"all 0.2s ease","borderRadius":"6px","backgroundColor":"white","columnGap":"8px","alignItems":"center"},"_wwHover_default":{"display":"flex","boxShadow":"0 0 0 1px #1976d2","borderColor":"#1976d2"}},"slots":{"children":[{"uid":"data-input-trigger-icon"},{"uid":"data-input-trigger-text"}]}}

{"uid":"data-input-trigger-icon","tag":"ww-icon","name":"Calendar Icon","states":[{"id":"_wwHover","label":"hover"}],"props":{"default":{"icon":"fas fa-calendar","color":"#959595","fontSize":"16"}},"styles":{"default":{"flex":"0 0 auto"}}}

{"uid":"data-input-trigger-text","tag":"ww-text","name":"Date Text","states":[{"id":"_wwHover","label":"hover"}],"props":{"default":{"tag":"p","text":{"en":{"js":"return context.item.data?.['preview'] || 'Select a date'"}}}},"styles":{"default":{"width":"100%","color":"#212121","fontSize":"14px"}}}

{"uid":"select-date-button","tag":"ww-button","props":{"default":{"text":"Select date","disabled":false,"buttonType":"button"}}}
</elements>
