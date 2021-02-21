<template>
    <v-container id="anomaly" fluid tag="section">
        <v-row>
            <v-col cols="12" md="8">
                <v-container v-for="(anomaly, index) in anomalies" :key="index">
                    <!-- <base-material-card color="#E91E63"> -->
                    <base-material-card color="info">
                        <template v-slot:heading>
                            <div class="display-2 font-weight-medium">
                                TITLE
                                <!-- {{ anomaly.name }} -->
                            </div>

                            <div class="subtitle-1">subtitle</div>
                        </template>

                        <template v-slot:actions>
                            <v-row>
                                <!-- <v-col cols="5">
                                    <v-chip
                                        v-for="(
                                            keyword, index
                                        ) in anomaly.keywords"
                                        :key="index"
                                        :color="colors[index]"
                                        label
                                        text-color="white"
                                        class="ma-1"
                                        >{{ keyword }}</v-chip
                                    >
                                </v-col> -->
                                <v-col cols="12">
                                    <v-card-actions
                                        class="pl-0 pt-0 justify-start"
                                    >
                                        <v-icon color="#E91E63" class="mr-1"
                                            >mdi-credit-card-minus</v-icon
                                        >
                                        <span>{{ upward_trend }} Tk</span>

                                        <v-divider
                                            vertical
                                            class="ml-4 mr-2"
                                        ></v-divider>

                                        <v-icon color="success" class="mr-1"
                                            >mdi-credit-card-plus</v-icon
                                        >
                                        <span>{{ downward_trend }} Tk</span>

                                        <v-divider
                                            vertical
                                            class="ml-4 mr-2"
                                        ></v-divider>

                                        <v-icon color="info" class="mr-1"
                                            >mdi-aspect-ratio</v-icon
                                        >
                                        <span>{{ ratio }}</span>
                                    </v-card-actions>
                                    <v-row class="justify-end">
                                        <v-btn
                                            color="purple lighten-4"
                                            small
                                            class="text--secondary font-weight-bold mb-5"
                                        >
                                            <v-icon small class="mr-1"
                                                >mdi-details</v-icon
                                            >View Details
                                        </v-btn>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </template>
                    </base-material-card>
                </v-container>
            </v-col>
            <v-col cols="12" md="4">
                <div>column</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import anomalies from "@/data/anomaly";
export default {
    data() {
        return {
            anomalies,
            colors: ["primary", "secondary", "pink", "blue", "purple"],
        };
    },
    computed: {
        upward_trend() {
            return Math.round(Math.random() * 1000000);
        },
        downward_trend() {
            return Math.round(Math.random() * 1000000);
        },
        ratio() {
            return Math.random().toFixed(2);
        },
    },
};
</script>