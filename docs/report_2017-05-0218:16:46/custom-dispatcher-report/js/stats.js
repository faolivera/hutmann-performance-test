var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1979",
        "ko": "21"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "7",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "9099",
        "ok": "9099",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2342",
        "ok": "2367",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2507",
        "ok": "2508",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1050",
        "ok": "1113",
        "ko": "0"
    },
    "percentiles2": {
        "total": "4073",
        "ok": "4104",
        "ko": "0"
    },
    "percentiles3": {
        "total": "6949",
        "ok": "6952",
        "ko": "0"
    },
    "percentiles4": {
        "total": "8688",
        "ok": "8689",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 950,
        "percentage": 48
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 48,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 981,
        "percentage": 49
    },
    "group4": {
        "name": "failed",
        "count": 21,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "164.917",
        "ko": "1.75"
    }
},
contents: {
"req_basic-request-e30ea": {
        type: "REQUEST",
        name: "basic request",
path: "basic request",
pathFormatted: "req_basic-request-e30ea",
stats: {
    "name": "basic request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "980",
        "ko": "20"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "21",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "9099",
        "ok": "9099",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4344",
        "ok": "4432",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2080",
        "ok": "2005",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4041",
        "ok": "4091",
        "ko": "0"
    },
    "percentiles2": {
        "total": "5732",
        "ok": "5746",
        "ko": "0"
    },
    "percentiles3": {
        "total": "8420",
        "ok": "8422",
        "ko": "0"
    },
    "percentiles4": {
        "total": "8804",
        "ok": "8819",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 10,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 959,
        "percentage": 96
    },
    "group4": {
        "name": "failed",
        "count": 20,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "83.333",
        "ok": "81.667",
        "ko": "1.667"
    }
}
    },"req_parse-json-from-d70ae": {
        type: "REQUEST",
        name: "parse json from memory",
path: "parse json from memory",
pathFormatted: "req_parse-json-from-d70ae",
stats: {
    "name": "parse json from memory",
    "numberOfRequests": {
        "total": "1000",
        "ok": "999",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "7",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "5925",
        "ok": "5925",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "340",
        "ok": "340",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "479",
        "ok": "479",
        "ko": "0"
    },
    "percentiles1": {
        "total": "243",
        "ok": "243",
        "ko": "0"
    },
    "percentiles2": {
        "total": "372",
        "ok": "372",
        "ko": "0"
    },
    "percentiles3": {
        "total": "848",
        "ok": "848",
        "ko": "0"
    },
    "percentiles4": {
        "total": "2175",
        "ok": "2175",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 939,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 38,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 22,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "83.333",
        "ok": "83.25",
        "ko": "0.083"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
