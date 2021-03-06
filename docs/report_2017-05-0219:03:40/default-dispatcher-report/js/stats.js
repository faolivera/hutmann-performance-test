var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1934",
        "ko": "66"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "7918",
        "ok": "7918",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1884",
        "ok": "1949",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2304",
        "ok": "2316",
        "ko": "0"
    },
    "percentiles1": {
        "total": "745",
        "ok": "1063",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2585",
        "ok": "2714",
        "ko": "0"
    },
    "percentiles3": {
        "total": "7818",
        "ok": "7820",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7903",
        "ok": "7903",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 936,
        "percentage": 47
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 39,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 959,
        "percentage": 48
    },
    "group4": {
        "name": "failed",
        "count": 66,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "181.818",
        "ok": "175.818",
        "ko": "6"
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
        "ok": "939",
        "ko": "61"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "16",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "7918",
        "ok": "7918",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3411",
        "ok": "3632",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2296",
        "ok": "2193",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2483",
        "ok": "2606",
        "ko": "0"
    },
    "percentiles2": {
        "total": "5025",
        "ok": "5202",
        "ko": "0"
    },
    "percentiles3": {
        "total": "7871",
        "ok": "7878",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7908",
        "ok": "7908",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 23,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 903,
        "percentage": 90
    },
    "group4": {
        "name": "failed",
        "count": 61,
        "percentage": 6
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "85.364",
        "ko": "5.545"
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
        "ok": "995",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "7896",
        "ok": "7896",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "358",
        "ok": "360",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "827",
        "ok": "828",
        "ko": "0"
    },
    "percentiles1": {
        "total": "157",
        "ok": "158",
        "ko": "0"
    },
    "percentiles2": {
        "total": "296",
        "ok": "296",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1705",
        "ok": "1706",
        "ko": "0"
    },
    "percentiles4": {
        "total": "4474",
        "ok": "4498",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 923,
        "percentage": 92
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 16,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 56,
        "percentage": 6
    },
    "group4": {
        "name": "failed",
        "count": 5,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "90.455",
        "ko": "0.455"
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
