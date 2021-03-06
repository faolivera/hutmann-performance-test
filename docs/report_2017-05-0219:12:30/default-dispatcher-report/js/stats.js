var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1958",
        "ko": "42"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8345",
        "ok": "8345",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1898",
        "ok": "1938",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2252",
        "ok": "2258",
        "ko": "0"
    },
    "percentiles1": {
        "total": "829",
        "ok": "971",
        "ko": "0"
    },
    "percentiles2": {
        "total": "2958",
        "ok": "3002",
        "ko": "0"
    },
    "percentiles3": {
        "total": "7863",
        "ok": "7863",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7935",
        "ok": "7935",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 952,
        "percentage": 48
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 51,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 955,
        "percentage": 48
    },
    "group4": {
        "name": "failed",
        "count": 42,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "181.818",
        "ok": "178",
        "ko": "3.818"
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
        "ok": "962",
        "ko": "38"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "18",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8345",
        "ok": "8345",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3512",
        "ok": "3651",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2135",
        "ok": "2057",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2900",
        "ok": "3000",
        "ko": "0"
    },
    "percentiles2": {
        "total": "4837",
        "ok": "4864",
        "ko": "0"
    },
    "percentiles3": {
        "total": "7914",
        "ok": "7915",
        "ko": "0"
    },
    "percentiles4": {
        "total": "7940",
        "ok": "7940",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13,
        "percentage": 1
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 27,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 922,
        "percentage": 92
    },
    "group4": {
        "name": "failed",
        "count": 38,
        "percentage": 4
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "87.455",
        "ko": "3.455"
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
        "ok": "996",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "4",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "7930",
        "ok": "7930",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "283",
        "ok": "284",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "607",
        "ok": "608",
        "ko": "0"
    },
    "percentiles1": {
        "total": "135",
        "ok": "136",
        "ko": "0"
    },
    "percentiles2": {
        "total": "292",
        "ok": "293",
        "ko": "0"
    },
    "percentiles3": {
        "total": "831",
        "ok": "832",
        "ko": "0"
    },
    "percentiles4": {
        "total": "2908",
        "ok": "2914",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 939,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 24,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 33,
        "percentage": 3
    },
    "group4": {
        "name": "failed",
        "count": 4,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "90.545",
        "ko": "0.364"
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
