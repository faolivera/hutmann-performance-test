var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1950",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8047",
        "ok": "8047",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1802",
        "ok": "1848",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2125",
        "ok": "2132",
        "ko": "0"
    },
    "percentiles1": {
        "total": "651",
        "ok": "774",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2555",
        "ok": "2584",
        "ko": "0"
    },
    "percentiles3": {
        "total": "5578",
        "ok": "6826",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7940",
        "ok": "7941",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 979,
        "percentage": 49
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 37,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 934,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 50,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "181.818",
        "ok": "177.273",
        "ko": "4.545"
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
        "ok": "950",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "28",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8047",
        "ok": "8047",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3228",
        "ok": "3398",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2108",
        "ok": "2025",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2488",
        "ok": "2560",
        "ko": "0"
    },
    "percentiles2": {
        "total": "4949",
        "ok": "4993",
        "ko": "0"
    },
    "percentiles3": {
        "total": "7896",
        "ok": "7897",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7951",
        "ok": "7951",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 30,
        "percentage": 3
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 34,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 886,
        "percentage": 89
    },
    "group4": {
        "name": "failed",
        "count": 50,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "86.364",
        "ko": "4.545"
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
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7947",
        "ok": "7947",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "375",
        "ok": "375",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "719",
        "ok": "719",
        "ko": "-"
    },
    "percentiles1": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "percentiles2": {
        "total": "366",
        "ok": "366",
        "ko": "-"
    },
    "percentiles3": {
        "total": "857",
        "ok": "857",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4745",
        "ok": "4745",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 949,
        "percentage": 95
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 48,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "90.909",
        "ko": "-"
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
