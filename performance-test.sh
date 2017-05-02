 #!/bin/bash 
source ./functions.sh

PORT=9000
REQUESTS=1000
DURATION=5

UNPACK_DIR="/tmp"
APP_VERSION="hutmann-performance-test-1.0-SNAPSHOT"
APP_DIR=$UNPACK_DIR/$APP_VERSION

echo "Compiling and unpacking application"
sbt dist > /dev/null
unzip ./target/universal/$APP_VERSION.zip -d $UNPACK_DIR > /dev/null


echo "Running performance test for custom dispatcher"
runPerformanceTest $APP_DIR $PORT $REQUESTS $DURATION "customDispatcher.conf" "CustomDispatcherTest"

CUSTOM_REPORT=$(getLastReportFile)


echo "waiting 2 seconds"
sleep 2

echo "Running performance test for default dispatcher"
runPerformanceTest $APP_DIR $PORT $REQUESTS $DURATION "application.conf" "DefaultDispatcherTest"

DEFAULT_REPORT=$(getLastReportFile)

echo "Default dispatcher report: $DEFAULT_REPORT"
echo "Custom dispatcher report: $CUSTOM_REPORT"

REPORT_DIR=./docs/report_$(date +%Y-%m-%d%H:%M:%S)
mkdir -p $REPORT_DIR

DEFAULT_DIR=$(dirname "${DEFAULT_REPORT}")
CUSTOM_DIR=$(dirname "${CUSTOM_REPORT}")

cp -r $DEFAULT_DIR $REPORT_DIR/default-dispatcher-report
cp -r $CUSTOM_DIR $REPORT_DIR/custom-dispatcher-report

rm -rf $APP_DIR
