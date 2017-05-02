package performance


import io.gatling.core.Predef._
import io.gatling.http.Predef._
import concurrent.duration._

class BasicSimulation extends Simulation {

  val port = System.getProperty("test.port")
  val httpConf = http.baseURL(s"http://localhost:$port")
  val users = System.getProperty("test.requests").toInt
  val duration = System.getProperty("test.duration").toInt
  val scenarioName = System.getProperty("test.name")

  val basicScenario = scenario(scenarioName)
    .exec(http("basic request").get("/"))
    .exec(http("parse json from memory").get("/parse-json"))
  //.exec(http("parse json from disk").get("/parse-json-from-disk"))

  setUp(
    basicScenario.inject(rampUsers(users) over duration.seconds)
  ).protocols(httpConf)
}
