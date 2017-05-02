# hutmann-performance-test
Performance test for zalando hutmann library

## How to run it
```bash
git clone https://github.com/faolivera/hutmann-performance-test.git
cd hutmann-performance-test
./performance-test.sh
```
results will be saved on docs/ directory


## Some Results

### first run
[Report for default Dispatcher](https://faolivera.github.io/hutmann-performance-test/report_2017-05-0218:16:46/default-dispatcher-report/)
[Report for custom Dispatcher](https://faolivera.github.io/hutmann-performance-test/report_2017-05-0218:16:46/custom-dispatcher-report/)

|Request Time   | Default Dispatcher | Custom Dispatcher|
|-------------  | -------------------| ---------------  |
|   <100 ms     | 9.95%              | 7.15%            | 
|>100ms < 200ms | 10.4%              | 10.3%            | 
|>200ms < 300ms | 9.55%              | 11.05%           | 
|>300ms < 400ms | 7.25%              | 8.94%            |

### second run
[Report for default Dispatcher](https://faolivera.github.io/hutmann-performance-test/report_2017-05-0219:03:40/default-dispatcher-report/)
[Report for custom Dispatcher](https://faolivera.github.io/hutmann-performance-test/report_2017-05-0219:03:40/custom-dispatcher-report/)

|Request Time   | Default Dispatcher | Custom Dispatcher|
|-------------  | -------------------| ---------------|
|   <100 ms     | 14.65%             | 8.75%|
|>100ms < 200ms | 10.95%             | 8.19% |
|>200ms < 300ms | 8.69%              | 9.75% |
|>300ms < 400ms | 5.05%              | 7.74%  | 

### third run
[Report for default Dispatcher](https://faolivera.github.io/hutmann-performance-test/report_2017-05-0219:12:30/default-dispatcher-report/)
[Report for custom Dispatcher](https://faolivera.github.io/hutmann-performance-test/report_2017-05-0219:12:30/custom-dispatcher-report/)

|Request Time   | Default Dispatcher | Custom Dispatcher|
|-------------  | -------------------| ---------------|
|   <100 ms     | 19.65%             | 12.08%|
|>100ms < 200ms | 11.05%             | 6.55%| 
|>200ms < 300ms | 11.55%             | 7.4% |
|>300ms < 400ms | 2.75%              | 6.8%  |
