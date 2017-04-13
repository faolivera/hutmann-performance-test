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

echo "Running performance test for default dispatcher"
runPerformanceTest $APP_DIR $PORT $REQUESTS $DURATION "application.conf"

DEFAULT_REPORT=$(getLastReportFile)

echo "Running performance test for custom dispatcher"
runPerformanceTest $APP_DIR $PORT $REQUESTS $DURATION "customDispatcher.conf"

CUSTOM_REPORT=$(getLastReportFile)


echo "Default dispatcher report: $DEFAULT_REPORT"
echo "Custom dispatcher report: $CUSTOM_REPORT"


rm -rf $APP_DIR