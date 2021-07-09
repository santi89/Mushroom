<template>
  <f7-page :page-content="false">
    <f7-navbar title="Mushroom Tabs" back-link="Back" bg-color="teal"></f7-navbar>

    <f7-toolbar tabbar top>
      <f7-link tab-link="#tab-humidity" tab-link-active>Humidity</f7-link>
      <f7-link tab-link="#tab-Temperature">Temperature</f7-link>
    </f7-toolbar>

    <f7-tabs swipeable>
      <!-- tabs1 -->
      <f7-tab id="tab-humidity" class="page-content" tab-active>
        <f7-list>
          <f7-card class="bg-color-teal" title="ON/OFF Manual">
            <f7-list-item >
              <f7-list-input class="col-3" label="ເວລາເປີດ/ປິດ" type="time" outline ></f7-list-input>
              <f7-toggle color="blue"></f7-toggle>
            </f7-list-item>
          </f7-card>
          <!-- Humidity -->
          <f7-card class="bg-color-teal" title="Set Humidity stay at" :padding="false">
            <f7-list-item>
              <f7-list-input floating-label label="Value" type="number" outline></f7-list-input>
              <f7-toggle color="blue"></f7-toggle>
            </f7-list-item>
          </f7-card>
          <!-- time setting -->
          <f7-card class="bg-color-teal" title="Setting Time">
            <f7-list class="list-container" inline-labels>
              <f7-list-input
                class
                label="Start"
                type="time"
                outline
                v-model="setTime.start"
              >
                <!-- :value="setTime.start"
                @input="setTime.start = e.target.value" -->
                <f7-icon icon="demo-list-icon"></f7-icon>
              </f7-list-input>
              <f7-list-input
                class
                label="Worked"
                type="time"
                outline
               v-model="setTime.worked"
              >
                <f7-icon icon="demo-list-icon"></f7-icon>
              </f7-list-input>

              <f7-list-input
                class
                label="Delay"
                type="time"
                outline
                v-model="setTime.delay"
              >
                <f7-icon icon="demo-list-icon"></f7-icon>
              </f7-list-input>
            </f7-list>
            <f7-list-item>
              <span></span>
              <f7-button outline class="bg-color-primary text-color-black">add</f7-button>
            </f7-list-item>
          </f7-card>
          <!-- list timer -->
          <div class="data-table data-table-init card bg-color-teal">
            <!-- Card header -->
            <div class="card-header">
              <!-- Default table header -->
              <div class="data-table-header">
                <!-- Default table title -->
                <div class="data-table-title">List works</div>
                <!-- Default table actions -->
              </div>
              <!-- Selected table header -->
              <div class="data-table-header-selected">
                <!-- Selected table title -->
                <div class="data-table-title-selected text-color-black">
                  <span class="data-table-selected-count"></span> items selected
                </div>
                <!-- Selected table actions -->
                <div class="data-table-actions">
                  <a class="link icon-only">
                    <i class="icon f7-icons if-not-md">trash</i>
                    <i class="icon material-icons md-only">delete</i>
                  </a>
                </div>
              </div>
            </div>

            <div class="card-content">
              <table v-for="(item, index) in setTime" :key="index">
                <tbody class="bg-color-teal">
                  <tr>
                    <th class="checkbox-cell">
                      <label class="checkbox">
                        <input type="checkbox" />
                        <i class="icon-checkbox"></i>
                      </label>
                    </th>
                    <f7-card no-hairlines>
                      <f7-list-item>
                        <f7-list-item outlined>start : {{ item.start }}</f7-list-item>
                        <f7-list-item outlined>work : {{ item.worked }}</f7-list-item>
                      </f7-list-item>
                      <f7-list-item class>
                        <f7-list-item outlined>delay : {{ item.delay }}</f7-list-item>

                        <f7-toggle color="blue"></f7-toggle>
                      </f7-list-item>
                    </f7-card>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- <f7-list>
            <ul>
              <f7-card
                class="bg-color-teal"
                no-hairlines
                :padding="false"
                title="List work time"
              >
                <f7-list-item>
                  <f7-list-tittle outlined>
                    start : {{ setTime.start }}
                  </f7-list-tittle>
                  <f7-list-tittle outlined>
                    work : {{ setTime.work }}</f7-list-tittle
                  >
                </f7-list-item>
                <f7-list-item class="">
                  <f7-list-tittle outlined>
                    delay : {{ setTime.delay }}
                  </f7-list-tittle>

                  <f7-toggle color="blue"></f7-toggle>
                </f7-list-item>
              </f7-card>
            </ul>
          </f7-list>-->
        </f7-list>
      </f7-tab>
      <!-- tabs2 -->
      <f7-tab id="tab-Temperature" class="page-content">
        <f7-list>
          <f7-card class="bg-color-teal" title="ON/OFF Manual">
            <f7-list-item >
              <f7-list-input label="ເວລາເປີດ/ປິດ" type="time" ></f7-list-input>
              <f7-toggle color="blue"></f7-toggle>
            </f7-list-item>
          </f7-card>

          <!-- Humidity -->
          <f7-card class="bg-color-teal" title="Set Humidity stay at" :padding="false">
            <f7-list-item>
              <f7-list-input floating-label label="Value" placeholder="Value" type="number" outline></f7-list-input>
              <f7-toggle color="blue"></f7-toggle>
            </f7-list-item>
          </f7-card>
          <!-- time setting -->
          <f7-card class="bg-color-teal" title="Setting Time">
            <f7-list class="list-container" inline-labels>
              <f7-list-input
                class
                
                label="Start"
                type="time"
                outline
                v-model="setTime.start"
              >
                <!-- <f7-icon
                  icon="demo-list-icon"
                  slot="media"
                ></f7-icon>-->
              </f7-list-input>
              <f7-list-input
                class
                label="work"
                type="time"
                outline
            v-model="setTime.start"

              >
                <!-- <f7-icon icon="demo-list-icon" slot="media">
                </f7-icon-->
                >
              </f7-list-input>
              <f7-list-input
                class
                label="Delay"
                type="time"
                outline
                 v-model="setTime.start"

              >
                <!-- <f7-icon icon="demo-list-icon" slot="media"></f7-icon
                >-->
              </f7-list-input>
            </f7-list>
            <f7-list-item>
              <span></span>
              <f7-button outline class="bg-color-primary text-color-black">add</f7-button>
            </f7-list-item>
          </f7-card>

          <!-- list timer -->
          <f7-block-title></f7-block-title>

          <div class="data-table data-table-init card bg-color-teal">
            <!-- Card header -->
            <div class="card-header">
              <!-- Default table header -->
              <div class="data-table-header">
                <!-- Default table title -->
                <div class="data-table-title">List works</div>
                <!-- Default table actions -->
              </div>
              <!-- Selected table header -->
              <div class="data-table-header-selected">
                <!-- Selected table title -->
                <div class="data-table-title-selected text-color-black">
                  <span class="data-table-selected-count"></span> items selected
                </div>
                <!-- Selected table actions -->
                <div class="data-table-actions">
                  <a class="link icon-only">
                    <i class="icon f7-icons if-not-md">trash</i>
                    <i class="icon material-icons md-only">delete</i>
                  </a>
                </div>
              </div>
            </div>

            <div class="card-content">
              <table v-for="(item, index) in setTime" :key="index">
                <tbody class="bg-color-teal">
                  <tr>
                    <th class="checkbox-cell">
                      <label class="checkbox">
                        <input type="checkbox" />
                        <i class="icon-checkbox"></i>
                      </label>
                    </th>
                    <f7-card no-hairlines>
                      <f7-list-item>
                        <f7-list-item outlined>start : {{ item.start }}</f7-list-item>
                        <f7-list-item outlined>work : {{ item.worked }}</f7-list-item>
                      </f7-list-item>
                      <f7-list-item class>
                        <f7-list-item outlined>delay : {{ item.delay }}</f7-list-item>

                        <f7-toggle color="blue"></f7-toggle>
                      </f7-list-item>
                    </f7-card>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </f7-list>
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      setTime: [
        {
          start: "12:22pm",
          worked: "22am",
          delay: "12mn",
        },
        {
          start: "12pm",
          worked: "22am",
          delay: "12mn",
        },
      ],
      calendarDateTime: "",
    on_off_timeH:"",
    on_off_timeT:"",
    stay_H:"",
    stay_T:"",
    start_H:[],
    worked_H:[],
    delay_H:[],
    start_T:[],
    worked_T:[],
    delay_T:[]

    };
  },

  methods: {},
};
</script>

<style>
.list-container {
  display: grid;
}
</style>
