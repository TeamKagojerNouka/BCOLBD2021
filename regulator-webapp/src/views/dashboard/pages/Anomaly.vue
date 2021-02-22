<template>
    <v-container id="anomaly" fluid tag="section">
        <v-row>
            <v-col cols="12" md="8">
                <base-material-card
                    v-for="(anomaly, index) in anomalies"
                    :key="index"
                    color="info darken-1"
                >
                    <template v-slot:heading>
                        <div class="display-2 font-weight-regular">
                            {{ anomaly.name }} · {{ anomaly.bank }}
                        </div>

                        <div class="subtitle-1">
                            {{ anomaly.date }}
                        </div>
                    </template>

                    <template v-slot:actions>
                        <v-row>
                            <v-col cols="12">
                                <v-card-actions class="pl-0 pt-0 justify-start">
                                    <v-icon color="#E91E63" class="mr-1"
                                        >mdi-credit-card-minus</v-icon
                                    >
                                    <span>{{ anomaly.credit_given }} Tk</span>

                                    <v-divider
                                        vertical
                                        class="ml-4 mr-2"
                                    ></v-divider>

                                    <v-icon color="success" class="mr-1"
                                        >mdi-cash-multiple</v-icon
                                    >
                                    <span>{{ anomaly.credit_owned }} Tk</span>

                                    <v-divider
                                        vertical
                                        class="ml-4 mr-2"
                                    ></v-divider>

                                    <v-icon color="info" class="mr-1"
                                        >mdi-aspect-ratio</v-icon
                                    >
                                    <span>{{ anomaly.credit_ratio }}</span>
                                </v-card-actions>
                                <v-row class="justify-end">
                                    <v-btn
                                        color="#E91E63"
                                        small
                                        class="font-weight-bold mb-5"
                                    >
                                        <v-icon small class="mr-1"
                                            >mdi-credit-card-search</v-icon
                                        >Investigate
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </v-row>
                    </template>
                </base-material-card>
            </v-col>
            <v-col cols="12" md="4">
                <base-material-card v-for="(bank, index) in banks" :key="index">
                    <template v-slot:heading>
                        <div class="display-2 font-weight-regular">
                            {{ bank.name }}
                        </div>
                    </template>
                    <template v-slot:actions>
                        <v-row>
                            <v-col cols="12">
                                <v-card-actions class="pl-0 pt-0 justify-start">
                                    <v-icon color="#E91E63" class="mr-1"
                                        >mdi-account-alert-outline</v-icon
                                    >
                                    <span>{{ bank.case }}</span>

                                    <v-divider
                                        vertical
                                        class="ml-4 mr-2"
                                    ></v-divider>

                                    <v-icon color="info" class="mr-1"
                                        >mdi-aspect-ratio</v-icon
                                    >
                                    <span>{{ bank.ratio }}</span>
                                    <v-row class="justify-end">
                                        <v-icon color="#E91E63"
                                            >mdi-credit-card-search</v-icon
                                        >
                                    </v-row>
                                </v-card-actions>
                            </v-col>
                        </v-row>
                    </template>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import anomalies from "@/data/anomaly";
import banks from "@/data/bank";

export default {
    data() {
        return {
            anomalies,
            banks,
        };
    },
};
</script>