var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2000",
        "ok": "1899",
        "ko": "101"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "15",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10500",
        "ok": "10500",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2632",
        "ok": "2772",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3116",
        "ok": "3136",
        "ko": "0"
    },
    "percentiles1": {
        "total": "937",
        "ok": "1072",
        "ko": "0"
    },
    "percentiles2": {
        "total": "4442",
        "ok": "4673",
        "ko": "0"
    },
    "percentiles3": {
        "total": "9578",
        "ok": "9605",
        "ko": "0"
    },
    "percentiles4": {
        "total": "10045",
        "ok": "10048",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 870,
        "percentage": 44
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 113,
        "percentage": 6
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 916,
        "percentage": 46
    },
    "group4": {
        "name": "failed",
        "count": 101,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "142.857",
        "ok": "135.643",
        "ko": "7.214"
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
        "ok": "902",
        "ko": "98"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "28",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "10500",
        "ok": "10500",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4813",
        "ok": "5336",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3109",
        "ok": "2815",
        "ko": "0"
    },
    "percentiles1": {
        "total": "4434",
        "ok": "4867",
        "ko": "0"
    },
    "percentiles2": {
        "total": "7356",
        "ok": "7536",
        "ko": "0"
    },
    "percentiles3": {
        "total": "9891",
        "ok": "9931",
        "ko": "0"
    },
    "percentiles4": {
        "total": "10111",
        "ok": "10123",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 16,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 870,
        "percentage": 87
    },
    "group4": {
        "name": "failed",
        "count": 98,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "71.429",
        "ok": "64.429",
        "ko": "7"
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
        "ok": "997",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "15",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "8962",
        "ok": "8962",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "452",
        "ok": "454",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "495",
        "ok": "495",
        "ko": "0"
    },
    "percentiles1": {
        "total": "328",
        "ok": "328",
        "ko": "0"
    },
    "percentiles2": {
        "total": "538",
        "ok": "539",
        "ko": "0"
    },
    "percentiles3": {
        "total": "1170",
        "ok": "1172",
        "ko": "0"
    },
    "percentiles4": {
        "total": "1878",
        "ok": "1878",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 854,
        "percentage": 85
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 97,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 46,
        "percentage": 5
    },
    "group4": {
        "name": "failed",
        "count": 3,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "71.429",
        "ok": "71.214",
        "ko": "0.214"
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
