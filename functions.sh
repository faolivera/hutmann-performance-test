TMP_REPORT_FILE="/tmp/hutman_performance_test"


function runPerformanceTest {
    APP_DIR=$1
    PORT=$2
    REQUESTS=$3
    DURATION=$4
    CONF_FILE=$5
    TEST_NAME=$6
    
    startServer $APP_DIR $PORT $CONF_FILE
    runGatling $PORT $REQUESTS $DURATION $TEST_NAME
    stopServer $APP_DIR
}

function startServer {
    echo "Starting sever"
    APP_DIR=$1
    PORT=$2
    CONF_FILE=$3

    $APP_DIR/bin/hutmann-performance-test -Dconfig.resource=$CONF_FILE -Dplay.crypto.secret=top_secret -Dhttp.port=$PORT &

    echo "Waiting fot server to start up"
    
    until $(curl --output /dev/null --silent --head --fail http://localhost:$PORT); do
        printf '.'
      	sleep 1
    done
}

function stopServer {
    echo "Stopping server"
    APP_DIR=$1
    kill $(cat $APP_DIR/RUNNING_PID)
}

function runGatling {
    echo "Running gatling (tail -f $TMP_REPORT_FILE)"
    PORT=$1
    REQUESTS=$2
    DURATION=$3
    TEST_NAME=$4
    sbt gatling:test -Dtest.port=$PORT -Dtest.requests=$REQUESTS -Dtest.duration=$DURATION -Dtest.name=$TEST_NAME > /tmp/hutman_performance_test
}

function getLastReportFile {
    OUTPUT_LINE=$(cat $TMP_REPORT_FILE | grep "Please open the following file: ")
    OUTPUT_FILE="${OUTPUT_LINE/Please open the following file: /}"

    echo $OUTPUT_FILE
}

