<template>
  <f7-page>
    <f7-navbar back-link="back" title="Report" theme-teal> </f7-navbar>
    <f7-block-title>List </f7-block-title>
    <f7-card>
      <f7-row class="showDate">
        <div class="col-66">
          <f7-list>
            <f7-list-input
              outline
              label="Pick date start and end"
              placeholder="Pick"
              type="datepicker"
              :value="date"
              @input="date = $event.target.value"
              :calendar-params="{ dateFormat: 'dd M yyyy', rangePicker: true }"
            ></f7-list-input>
          </f7-list>
        </div>
        <div class="col-33 showDate"><f7-button outline>ສະແດງ</f7-button></div>
      </f7-row>
    </f7-card>

    <f7-block strong>
      <f7-area-chart
        tooltip
        axis
        :axis-labels="dates"
        legend
        toggle-datasets
        line-chart
        :format-axis-label="(date) => axisDateFormat.format(date)"
        :format-tooltip-axis-label="(date) => tooltipDateFormat.format(date)"
        :datasets="[
          {
            label: 'Humidity',
            color: '#0f0',
            values: [0, 300, 127, 47],
          },
          {
            label: 'Temperature',
            color: '#00f',
            values: [0, 75, 133, 237],
          },
        ]"
      />
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      member_name: "",
      role: "",
      action: "",
    };
  },
  setup() {
    // helpers data for axis

    const dates = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    for (let i = 0; i < 4; i += 1) {
      dates.push(new Date(year, month - (3 - i)));
    }
    const axisDateFormat = Intl.DateTimeFormat(undefined, {
      date: "numeric",
      month: "short",
      year: "numeric",
    });
    const tooltipDateFormat = Intl.DateTimeFormat(undefined, {
      date: "numeric",
      month: "long",
      year: "numeric",
    });
    return {
      dates,
      axisDateFormat,
      tooltipDateFormat,
    };
  },
};
</script>

<style scoped>
.showDate {
  
  align-items: center;

}
</style>
