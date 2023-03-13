export default {
  editor: {
    label: {
      en: "Date picker",
    },
    customStylePropertiesOrder: [
      "lang",
      "format",
      "customFormat",
      "orientation",
      "menuPosition",
      "enableCalendarOnly",
      ["enableLeftSidebar", "enableRightSidebar"],
      [
        "themeFontFamily",
        "themeFontSize",
        "themePreviewFontSize",
        "themeTimeFontSize",
        "themeBorderRadius",
        "themeCellBorderRadius",
        "themeCellSize",
        "themeCellPadding",
        "themeMenuMinWidth",
      ],
      [
        "themeBackgroundColor",
        "themeTextColor",
        "themeHoverColor",
        "themeHoverTextColor",
        "themeHoverIconColor",
        "themePrimaryColor",
        "themePrimaryTextColor",
        "themeSecondaryColor",
        "themeBorderColor",
        "themeMenuBorderColor",
        "themeBorderHoverColor",
        "themeDisabledColor",
        "themeScrollBarBackgroundColor",
        "themeScrollBarColor",
        "themeSuccessColor",
        "themeSuccessDisabledColor",
        "themeIconColor",
        "themeDangerColor",
        "themeHighlightColor",
      ],
    ],
    customSettingsPropertiesOrder: [
      "selectionMode",
      [
        "initValueSingle",
        "initValueRangeStart",
        "initValueRangeEnd",
        "initValueMulti",
        "multiDatesLimit",
        "rangeMode",
        "autoRange",
        "enablePartialRange",
        "minRange",
        "maxRange",
        "noDisabledRange",
      ],
      "dateMode",
      [
        "timezone",
        "enableSeconds",
        "use24",
        "enableMultiCalendars",
        "multiCalendars",
        "multiCalendarSolo",
      ],
      [
        "startDate",
        "minDate",
        "maxDate",
        "preventMinMaxNavigation",
        "ignoreTimeValidation",
        "allowedDates",
        "disabledDates",
        "disabledWeekDays",
      ],
      ["autoApply", "closeOnAutoApply", "closeOnScroll"],
      ["weekStart", "weekNumbers", "hideOffsetDates", "disableMonthYearSelect"],
      "enableFlow",
      ["flowHint", "flowSteps"],
    ],
    bubble: {
      icon: "calendar",
    },
  },
  triggerEvents: [
    {
      name: "change",
      label: { en: "On change" },
      event: { value: "2023-03-02T14:54:54.727Z" },
      getTestEvent: "getTestEvent",
    },
    {
      name: "initValueChange",
      label: { en: "On init value change" },
      event: { value: "2023-03-02T14:54:54.727Z" },
      getTestEvent: "getTestEvent",
    },
  ],
  properties: {
    initValueSingle: {
      label: {
        en: "Init value",
      },
      type: "Text",
      defaultValue: null,
      bindable: true,
      section: "settings",
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: 'A string ISO date: `"2021-03-11T10:11:20.000+00:00"`',
      },
      /* wwEditor:end */
      hidden: (content) => content.selectionMode !== "single",
    },
    initValueRangeStart: {
      label: {
        en: "Init value start",
      },
      type: "Text",
      defaultValue: null,
      bindable: true,
      section: "settings",
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: 'A string ISO date: `"2021-03-11T10:11:20.000+00:00"`',
      },
      /* wwEditor:end */
      hidden: (content) => content.selectionMode !== "range",
    },
    initValueRangeEnd: {
      label: {
        en: "Init value end",
      },
      type: "Text",
      defaultValue: null,
      bindable: true,
      section: "settings",
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: 'A string ISO date: `"2021-03-11T10:11:20.000+00:00"`',
      },
      /* wwEditor:end */
      hidden: (content) => content.selectionMode !== "range",
    },
    initValueMulti: {
      label: {
        en: "Init value",
      },
      type: "Array",
      defaultValue: null,
      bindable: true,
      section: "settings",
      /* wwEditor:start */
      bindingValidation: {
        type: "array",
        tooltip:
          'An array containing string ISO date: `"2021-03-11T10:11:20.000+00:00"`',
      },
      /* wwEditor:end */
      hidden: (content) => content.selectionMode !== "multi",
    },
    enableCalendarOnly: {
      label: { en: "Calendar only", fr: "Calendrier seul" },
      type: "OnOff",
      defaultValue: false,
    },
    enableLeftSidebar: {
      label: { en: "Left sidebar" },
      type: "OnOff",
      defaultValue: false,
      hidden: (content) => content.enableCalendarOnly,
    },
    enableRightSidebar: {
      label: { en: "Right sidebar" },
      type: "OnOff",
      defaultValue: false,
      hidden: (content) => content.enableCalendarOnly,
    },
    menuPosition: {
      label: {
        en: "Menu position",
        fr: "Menu position",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "center", label: { en: "Center" } },
          { value: "left", label: { en: "Left" } },
          { value: "right", label: { en: "Right" } },
        ],
      },
      defaultValue: "center",
    },
    selectionMode: {
      label: {
        en: "Selection",
        fr: "Selection",
      },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "single", label: { en: "Single" } },
          { value: "range", label: { en: "Range" } },
          { value: "multi", label: { en: "Multi dates" } },
        ],
      },
      defaultValue: "single",
    },
    dateMode: {
      label: {
        en: "Mode",
        fr: "Mode",
      },
      type: "TextSelect",
      section: "settings",
      options: (content) => {
        return {
          options: [
            {
              value: "datetime",
              label: { en: "Datetime" },
              support: ["single", "range", "multi"],
            },
            {
              value: "date",
              label: { en: "Date" },
              support: ["single", "range", "multi"],
            },
            {
              value: "time",
              label: { en: "Time" },
              support: ["single", "range"],
            },
            {
              value: "month",
              label: { en: "Month" },
              support: ["single", "range"],
            },
            {
              value: "year",
              label: { en: "Year" },
              support: ["single", "range"],
            },
          ].filter((opt) => opt.support.includes(content.selectionMode)),
        };
      },
      defaultValue: "datetime",
    },
    enableSeconds: {
      label: { en: "Enable seconds", fr: "Activer les secondes" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      hidden: (content) => !["datetime", "time"].includes(content.dateMode),
    },
    use24: {
      label: { en: "24h mode", fr: "Mode 24h" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      hidden: (content) => !["datetime", "time"].includes(content.dateMode),
    },
    multiDatesLimit: {
      label: {
        en: "Multi dates limit",
      },
      type: "Number",
      section: "settings",
      defaultValue: 0,
      hidden: (content) => content.selectionMode !== "multi",
    },
    enableMultiCalendars: {
      label: { en: "Multi calendars", fr: "Calendriers multiple" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      hidden: (content) =>
        content.selectionMode !== "range" ||
        !["datetime", "date", "week"].includes(content.dateMode),
    },
    multiCalendars: {
      label: {
        en: "Calendars number",
      },
      type: "Number",
      section: "settings",
      defaultValue: 2,
      options: {
        min: 2,
        max: 4,
        step: 1,
      },
      hidden: (content) => !content.enableMultiCalendars,
    },
    multiCalendarsSolo: {
      label: { en: "Independant calendars", fr: "Calendriers indépendants" },
      type: "OnOff",
      section: "settings",
      defaultValue: false,
      hidden: (content) => !content.enableMultiCalendars,
    },
    rangeMode: {
      label: { en: "Range mode", fr: "Range mode" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "free", label: { en: "Free" } },
          { value: "auto", label: { en: "Auto" } },
          { value: "minmax", label: { en: "Min Max" } },
        ],
      },
      bindable: true,
      defaultValue: "free",
      hidden: (content) => content.selectionMode !== "range",
    },
    enablePartialRange: {
      label: { en: "Partial range", fr: "Range partiel" },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
      hidden: (content) =>
        content.selectionMode !== "range" || content.rangeMode !== "free",
    },
    autoRange: {
      label: {
        en: "Auto range days",
      },
      type: "Number",
      section: "settings",
      bindable: true,
      defaultValue: 1,
      hidden: (content) =>
        content.selectionMode !== "range" || content.rangeMode !== "auto",
    },
    minRange: {
      label: {
        en: "Min range days",
      },
      type: "Number",
      section: "settings",
      bindable: true,
      defaultValue: 2,
      hidden: (content) =>
        content.selectionMode !== "range" || content.rangeMode !== "minmax",
    },
    maxRange: {
      label: {
        en: "Max range days",
      },
      type: "Number",
      section: "settings",
      bindable: true,
      defaultValue: 7,
      hidden: (content) =>
        content.selectionMode !== "range" || content.rangeMode !== "minmax",
    },
    orientation: {
      label: {
        en: "Orientation",
        fr: "Orientation",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "horizontal", label: { en: "Horizontal" } },
          { value: "vertical", label: { en: "Vertical" } },
        ],
      },
      defaultValue: "horizontal",
    },
    timezone: {
      label: {
        en: "Timezone",
        fr: "Fuseau horaire",
      },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "locale", label: { en: "Locale" } },
          { value: "Pacific/Midway", label: { en: "Pacific/Midway" } }, // -11
          { value: "America/Adak", label: { en: "America/Adak" } }, // -10,
          { value: "Pacific/Gambier", label: { en: "Pacific/Gambier" } }, // -9
          {
            value: "America/Los_Angeles",
            label: { en: "America/Los_Angeles" },
          }, // -8
          { value: "America/Denver", label: { en: "America/Denver" } }, // -7
          { value: "America/Chicago", label: { en: "America/Chicago" } }, // -6
          { value: "America/New_York", label: { en: "America/New_York" } }, // -5
          { value: "America/Santiago", label: { en: "America/Santiago" } }, // -4
          { value: "America/Sao_Paulo", label: { en: "America/Sao_Paulo" } }, // -3
          { value: "America/Noronha", label: { en: "America/Noronha" } }, // -2
          {
            value: "Atlantic/Cape_Verde",
            label: { en: "Atlantic/Cape_Verde" },
          }, // -1
          { value: "UTC", label: { en: "UTC" } }, // utc
          { value: "Europe/Brussels", label: { en: "Europe/Brussels" } }, //+1
          { value: "Africa/Cairo", label: { en: "Africa/Cairo" } }, // +2
          { value: "Europe/Minsk", label: { en: "Europe/Minsk" } }, // +3
          { value: "Europe/Moscow", label: { en: "Europe/Moscow" } }, // +4
          { value: "Asia/Tashkent", label: { en: "Asia/Tashkent" } }, // +5
          { value: "Asia/Dhaka", label: { en: "Asia/Dhaka" } }, // +6
          { value: "Asia/Novosibirsk", label: { en: "Asia/Novosibirsk" } }, // +7
          { value: "Australia/Perth", label: { en: "Australia/Perth" } }, // +8
          { value: "Asia/Tokyo", label: { en: "Asia/Tokyo" } }, // +9
          { value: "Australia/Hobart", label: { en: "Australia/Hobart" } }, // +10
          { value: "Asia/Vladivostok", label: { en: "Asia/Vladivostok" } }, // +11
          { value: "Pacific/Auckland", label: { en: "Pacific/Auckland" } }, // +12
        ],
      },
      defaultValue: "locale",
      bindable: true,
      hidden: (content) => !["datetime"].includes(content.dateMode),
    },
    enableFlow: {
      label: { en: "Flow", fr: "Flow" },
      type: "OnOff",
      bindable: true,
      section: "settings",
      defaultValue: false,
      hidden: (content) => content.enableMultiCalendars,
    },
    flowHint: {
      label: {
        en: "Hint",
        fr: "Hint",
      },
      type: "Info",
      options: {
        text: { en: "Order the flow steps" },
      },
      section: "settings",
      editorOnly: true,
      hidden: (content) => !content.enableFlow,
    },
    flowSteps: {
      label: {
        en: "Steps",
        fr: "Steps",
      },
      type: "Array",
      section: "settings",
      options: {
        item: {
          type: "Text",
        },
        movable: true,
        getItemLabel(_, index) {
          return `Step ${index + 1}`;
        },
      },
      defaultValue: [
        "month",
        "year",
        "calendar",
        "time",
        "minutes",
        "hours",
        "seconds",
      ],
      hidden: (content) => !content.enableFlow,
    },
    readonly: {
      label: { en: "Read only", fr: "Lecture seule" },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
      hidden: (content, sidePanelContent, boundProps, wwProps) =>
        !!(wwProps && wwProps.readonly !== undefined),
    },
    lang: {
      label: {
        en: "Lang",
        fr: "Lang",
      },
      type: "TextSelect",
      options: () => {
        const options = wwLib.wwWebsiteData
          .getCurrentPage()
          .langs.map((lang) => ({
            value: lang,
            label: { en: lang },
          }));

        options.unshift({ value: "pageLang", label: "Page lang" });

        return { options };
      },
      defaultValue: "pageLang",
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: 'A string that defines the lang: `"en" | "es" | "fr"`',
      },
      /* wwEditor:end */
    },
    format: {
      label: {
          en: 'Format',
          fr: 'Format',
      },
      type: 'TextSelect',
      options: {
          options: [
              { value: 'DD/MM/YYYY', label: { en: 'DD/MM/YYYY' } },
              { value: 'MMMM D, YYYY', label: { en: 'MMMM D, YYYY' } },
              { value: 'MMM D, YYYY', label: { en: 'MMM D, YYYY' } },
              { value: 'h:mm A', label: { en: 'h:mm A' } },
              { value: 'h:mm:ss A', label: { en: 'h:mm:ss A' } },
              {
                  value: 'MMM D, YYYY h:mm A',
                  label: { en: 'MMM D, YYYY h:mm A' },
              },
          ],
      },
      defaultValue: 'DD/MM/YYYY',
    },
    customFormat: {
        label: { en: 'Custom Format', fr: 'Custom Format' },
        type: 'Text',
        options: {
            placeholder: 'MMMM D, YYYY h:mm A',
        },
        bindable: true,
        /* wwEditor:start */
        bindingValidation: {
          type: "string",
          tooltip: 'A string following unicode rules: `"MM/dd/yyyy HH:mm"` [See unicode format](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)',
        },
        /* wwEditor:end */
        defaultValue: '',
    },
    autoApply: {
      label: {
        en: "Auto apply",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    closeOnAutoApply: {
      label: {
        en: "Close on auto apply",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: true,
    },
    closeOnScroll: {
      label: {
        en: "Close on page scroll",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    weekNumbers: {
      label: { en: "Week numbers" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "none", label: { en: "None" } },
          { value: "local", label: { en: "Local" } },
          { value: "iso", label: { en: "ISO" } },
        ],
      },
      bindable: true,
      defaultValue: "none",
    },
    weekStart: {
      label: { en: "Week start" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "0", label: { en: "Sunday" } },
          { value: "1", label: { en: "Monday" } },
          { value: "2", label: { en: "Tuesday" } },
          { value: "3", label: { en: "Wednesday" } },
          { value: "4", label: { en: "Thursday" } },
          { value: "5", label: { en: "Friday" } },
          { value: "6", label: { en: "Saturday" } },
        ],
      },
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: 'A string from "0" to "6" for the day of the week, "0" is Sunday',
      },
      /* wwEditor:end */
      bindable: true,
      defaultValue: "1",
    },
    hideOffsetDates: {
      label: {
        en: "Hide offset dates",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    minDate: {
      label: {
        en: "Min date",
      },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: null,
    },
    maxDate: {
      label: {
        en: "Max date",
      },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: null,
    },
    preventMinMaxNavigation: {
      label: {
        en: "Prevent min/max navigation",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    ignoreTimeValidation: {
      label: {
        en: "Ignore time validation",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    startDate: {
      label: {
        en: "Start date",
      },
      type: "Text",
      section: "settings",
      bindable: true,
      defaultValue: null,
    },
    disableMonthYearSelect: {
      label: {
        en: "Disable month/year select",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
    },
    allowedDates: {
      label: {
        en: "Allowed dates",
      },
      type: "Array",
      section: "settings",
      options: {
        item: {
          type: "Text",
          defaultValue: "2023-03-06",
        },
      },
      bindable: true,
      defaultValue: [],
    },
    disabledDates: {
      label: {
        en: "Disabled dates",
      },
      type: "Array",
      section: "settings",
      options: {
        item: {
          type: "Text",
          defaultValue: "2023-03-06",
        },
      },
      bindable: true,
      defaultValue: [],
    },
    disabledWeekDays: {
      label: {
        en: "Disabled week days",
      },
      type: "Array",
      section: "settings",
      options: {
        item: {
          type: "TextSelect",
          options: {
            options: [
              { value: "0", label: { en: "Sunday" } },
              { value: "1", label: { en: "Monday" } },
              { value: "2", label: { en: "Tuesday" } },
              { value: "3", label: { en: "Wednesday" } },
              { value: "4", label: { en: "Thursday" } },
              { value: "5", label: { en: "Friday" } },
              { value: "6", label: { en: "Saturday" } },
            ],
          },
        },
      },
      /* wwEditor:start */
      bindingValidation: {
        type: "string",
        tooltip: 'A string from "0" to "6" for the day of the week, "0" is Sunday',
      },
      /* wwEditor:end */
      bindable: true,
      defaultValue: [],
    },
    noDisabledRange: {
      label: {
        en: "No disabled range",
      },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false,
      hidden: (content) => content.selectionMode !== "range",
    },
    /* ==== THEMING ==== */
    themeFontFamily: {
      type: "FontFamily",
      label: {
        en: "Font family",
      },
      responsive: true,
    },
    themeBorderRadius: generateThemeSizingConfig("Border radius", 4, 20),
    themeCellBorderRadius: generateThemeSizingConfig(
      "Cell border radius",
      4,
      20
    ),
    themeFontSize: generateThemeSizingConfig("Font size", 16, 48),
    themePreviewFontSize: generateThemeSizingConfig(
      "Preview font size",
      13,
      48
    ),
    themeTimeFontSize: generateThemeSizingConfig("Time font size", 32, 48),
    themeMenuMinWidth: generateThemeSizingConfig("Menu min width", 250, 300),
    themeCellSize: generateThemeSizingConfig("Cell size", 35, 100),
    themeCellPadding: generateThemeSizingConfig("Cell padding", 5, 32),
    themeBackgroundColor: generateThemeColorConfig(
      "Background Color",
      "#ffffff"
    ),
    themeTextColor: generateThemeColorConfig("Text Color", "#212121"),
    themeHoverColor: generateThemeColorConfig("Hover Color", "#f3f3f3"),
    themeHoverTextColor: generateThemeColorConfig(
      "Hover Text Color",
      "#212121"
    ),
    themeHoverIconColor: generateThemeColorConfig(
      "Hover Icon Color",
      "#959595"
    ),
    themePrimaryColor: generateThemeColorConfig("Primary Color", "#1976d2"),
    themePrimaryTextColor: generateThemeColorConfig(
      "Primary Text Color",
      "#f8f5f5"
    ),
    themeSecondaryColor: generateThemeColorConfig("Secondary Color", "#c0c4cc"),
    themeBorderColor: generateThemeColorConfig("Border Color", "#ddd"),
    themeMenuBorderColor: generateThemeColorConfig("Menu Border Color", "#ddd"),
    themeBorderHoverColor: generateThemeColorConfig(
      "Border Hover Color",
      "#aaaeb7"
    ),
    themeDisabledColor: generateThemeColorConfig("Disabled Color", "#f6f6f6"),
    themeScrollBarBackgroundColor: generateThemeColorConfig(
      "Scrollbar background Color",
      "#f3f3f3"
    ),
    themeScrollBarColor: generateThemeColorConfig("Scrollbar Color", "#959595"),
    themeSuccessColor: generateThemeColorConfig("Success Color", "#76d275"),
    themeSuccessDisabledColor: generateThemeColorConfig(
      "Success Disabled Color",
      "#a3d9b1"
    ),
    themeIconColor: generateThemeColorConfig("Icon Color", "#959595"),
    themeDangerColor: generateThemeColorConfig("Danger Color", "#ff6f60"),
    themeHighlightColor: generateThemeColorConfig(
      "Highlight Color",
      "#1976d219"
    ),
    triggerZone: {
      hidden: true,
      defaultValue: [
        {
          isWwObject: true,
          type: "ww-text",
          state: {
            name: "Date input",
          },
        },
      ],
      navigator: {
        group: "Trigger",
      },
    },
    leftSidebarZone: {
      hidden: true,
      defaultValue: [],
      navigator: {
        group: "Left Sidebar",
      },
    },
    rightSidebarZone: {
      hidden: true,
      defaultValue: [],
      navigator: {
        group: "Right Sidebar",
      },
    },

    actionSelectElement: {
      hidden: true,
      defaultValue: {
        isWwObject: true,
        type: "ww-button",
        state: {
          name: "Select button",
        },
        content: { default: { text: "Select" } },
      },
      navigator: {
        group: "Actions",
      },
    },
  },
};

function generateThemeColorConfig(label, defaultValue) {
  return {
    label: {
      en: label,
    },
    type: "Color",
    defaultValue: defaultValue,
    bindable: true,
    responsive: true,
    state: true,
  };
}

function generateThemeSizingConfig(label, defaultValue, max) {
  return {
    type: "Length",
    label: {
      en: label,
    },
    bindable: true,
    options: {
      unitChoices: [{ value: "px", label: "px", min: 1, max }],
    },
    responsive: true,
    defaultValue: defaultValue + "px",
  };
}
