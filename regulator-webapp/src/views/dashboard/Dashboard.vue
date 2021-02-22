<template>
    <v-container id="dashboard" fluid tag="section">
        <v-row>
            <v-col cols="12" lg="4">
                <base-material-chart-card
                    :data="emailsSubscriptionChart.data"
                    :options="emailsSubscriptionChart.options"
                    :responsive-options="
                        emailsSubscriptionChart.responsiveOptions
                    "
                    color="#E91E63"
                    hover-reveal
                    type="Bar"
                >
                    <template v-slot:reveal-actions>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn
                                    v-bind="attrs"
                                    color="info"
                                    icon
                                    v-on="on"
                                >
                                    <v-icon color="info"> mdi-refresh </v-icon>
                                </v-btn>
                            </template>

                            <span>Refresh</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn v-bind="attrs" light icon v-on="on">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>

                            <span>Change Date</span>
                        </v-tooltip>
                    </template>

                    <h4 class="card-title font-weight-light mt-2 ml-2">
                        Total Credit Given
                    </h4>

                    <p class="d-inline-flex ml-2 mt-1">In units of 1000Tk</p>

                    <template v-slot:actions>
                        <v-icon class="mr-1" small> mdi-clock-outline </v-icon>
                        <span class="caption grey--text font-weight-light"
                            >Last 7 days</span
                        >
                    </template>
                </base-material-chart-card>
            </v-col>

            <v-col cols="12" lg="4">
                <base-material-chart-card
                    :data="dailySalesChart.data"
                    :options="dailySalesChart.options"
                    color="success"
                    hover-reveal
                    type="Bar"
                >
                    <template v-slot:reveal-actions>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn
                                    v-bind="attrs"
                                    color="info"
                                    icon
                                    v-on="on"
                                >
                                    <v-icon color="info"> mdi-refresh </v-icon>
                                </v-btn>
                            </template>

                            <span>Refresh</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn v-bind="attrs" light icon v-on="on">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>

                            <span>Change Date</span>
                        </v-tooltip>
                    </template>

                    <h4 class="card-title font-weight-light mt-2 ml-2">
                        Total Credit Paid Back
                    </h4>

                    <p class="d-inline-flex ml-2 mt-1">In units of 1000Tk</p>

                    <template v-slot:actions>
                        <v-icon class="mr-1" small> mdi-clock-outline </v-icon>
                        <span class="caption grey--text font-weight-light"
                            >Last 7 days</span
                        >
                    </template>
                </base-material-chart-card>
            </v-col>

            <v-col cols="12" lg="4">
                <base-material-chart-card
                    :data="dataCompletedTasksChart.data"
                    :options="dataCompletedTasksChart.options"
                    hover-reveal
                    color="info"
                    type="Line"
                >
                    <template v-slot:reveal-actions>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn
                                    v-bind="attrs"
                                    color="info"
                                    icon
                                    v-on="on"
                                >
                                    <v-icon color="info"> mdi-refresh </v-icon>
                                </v-btn>
                            </template>

                            <span>Refresh</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn v-bind="attrs" light icon v-on="on">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>

                            <span>Change Date</span>
                        </v-tooltip>
                    </template>

                    <h3 class="card-title font-weight-light mt-2 ml-2">
                        Credit Ratio
                    </h3>

                    <p class="d-inline-flex ml-2 mt-1">
                        Credit taken / credit rating
                    </p>

                    <template v-slot:actions>
                        <v-icon class="mr-1" small> mdi-clock-outline </v-icon>
                        <span class="caption grey--text font-weight-light"
                            >Last 7 days</span
                        >
                    </template>
                </base-material-chart-card>
            </v-col>

            <v-col cols="12" sm="6" lg="4">
                <base-material-stats-card
                    color="#E91E63"
                    icon="mdi-credit-card-minus"
                    title="Credit Given"
                    value="Tk 12,45,525"
                    sub-icon="mdi-clock"
                    sub-text="Last 24 hours"
                />
            </v-col>

            <v-col cols="12" sm="6" lg="4">
                <base-material-stats-card
                    color="primary"
                    icon="mdi-credit-card-plus"
                    title="Credit Paid Back"
                    value="Tk 4,23,685"
                    sub-icon="mdi-clock"
                    sub-text="Last 24 hours"
                />
            </v-col>

            <v-col cols="12" sm="6" lg="4">
                <base-material-stats-card
                    color="info"
                    icon="mdi-aspect-ratio"
                    title="Credit Ratio"
                    value="0.67"
                    sub-icon="mdi-clock"
                    sub-text="Last 24 hours"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "DashboardDashboard",

    data() {
        return {
            dailySalesChart: {
                data: {
                    labels: ["M", "T", "W", "T", "F", "S", "S"],
                    series: [[123, 278, 78, 178, 234, 189, 389]],
                },
                options: {
                    lineSmooth: this.$chartist.Interpolation.cardinal({
                        tension: 0,
                    }),
                    low: 0,
                    high: 500, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                    chartPadding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
            dataCompletedTasksChart: {
                data: {
                    labels: ["M", "T", "W", "T", "F", "S", "S"],
                    series: [[0.5, 0.44, 1.32, 1.78, 0.55, 1.45, 0.32]],
                },
                options: {
                    lineSmooth: this.$chartist.Interpolation.cardinal({
                        tension: 0,
                    }),
                    low: 0,
                    high: 2, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                    chartPadding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    },
                },
            },
            emailsSubscriptionChart: {
                data: {
                    labels: ["M", "T", "W", "T", "F", "S", "S"],
                    series: [[542, 443, 320, 780, 553, 453, 326]],
                },
                options: {
                    lineSmooth: this.$chartist.Interpolation.cardinal({
                        tension: 0,
                    }),
                    low: 0,
                    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                    chartPadding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    },
                },
                responsiveOptions: [
                    [
                        "screen and (max-width: 640px)",
                        {
                            seriesBarDistance: 5,
                            axisX: {
                                labelInterpolationFnc: function (value) {
                                    return value[0];
                                },
                            },
                        },
                    ],
                ],
            },
        };
    },

    methods: {
        complete(index) {
            this.list[index] = !this.list[index];
        },
    },
};
</script>
