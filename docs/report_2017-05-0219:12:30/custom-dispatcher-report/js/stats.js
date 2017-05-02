var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1956",
        "ko": "44"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "5",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8744",
        "ok": "8744",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2299",
        "ok": "2351",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2640",
        "ok": "2647",
        "ko": "0"
    },
    "percentiles1": {
        "total": "796",
        "ok": "892",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3717",
        "ok": "3771",
        "ko": "0"
    },
    "percentiles3": {
        "total": "7940",
        "ok": "7948",
        "ko": "0"
    },
    "percentiles4": {
        "total": "8263",
        "ok": "8263",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 959,
        "percentage": 48
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 51,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 946,
        "percentage": 47
    },
    "group4": {
        "name": "failed",
        "count": 44,
        "percentage": 2
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "166.667",
        "ok": "163",
        "ko": "3.667"
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
        "ok": "961",
        "ko": "39"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "21",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8744",
        "ok": "8744",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4195",
        "ok": "4366",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2448",
        "ok": "2343",
        "ko": "0"
    },
    "percentiles1": {
        "total": "3540",
        "ok": "3735",
        "ko": "0"
    },
    "percentiles2": {
        "total": "5826",
        "ok": "5893",
        "ko": "0"
    },
    "percentiles3": {
        "total": "8024",
        "ok": "8025",
        "ko": "0"
    },
    "percentiles4": {
        "total": "8405",
        "ok": "8406",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 20,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 31,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 910,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 39,
        "percentage": 4
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "83.333",
        "ok": "80.083",
        "ko": "3.25"
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
        "ok": "5",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8112",
        "ok": "8112",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "404",
        "ok": "406",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "873",
        "ok": "874",
        "ko": "0"
    },
    "percentiles1": {
        "total": "247",
        "ok": "248",
        "ko": "0"
    },
    "percentiles2": {
        "total": "412",
        "ok": "413",
        "ko": "0"
    },
    "percentiles3": {
        "total": "820",
        "ok": "821",
        "ko": "0"
    },
    "percentiles4": {
        "total": "5446",
        "ok": "5474",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 939,
        "percentage": 94
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 20,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 36,
        "percentage": 4
    },
    "group4": {
        "name": "failed",
        "count": 5,
        "percentage": 1
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "83.333",
        "ok": "82.917",
        "ko": "0.417"
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
