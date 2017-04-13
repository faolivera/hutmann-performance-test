name := """hutmann-performance-test"""
organization := "org.github.faolivera"

version := "1.0-SNAPSHOT"


val gatlingVersion = "2.2.4"

lazy val root = (project in file("."))
  .enablePlugins(PlayScala, GatlingPlugin)
  .settings(libraryDependencies ++= Seq(
    filters,
    "org.scalatestplus.play" %% "scalatestplus-play" % "2.0.0" % Test,
    "io.gatling" % "gatling-test-framework" % gatlingVersion % Test,
    "io.gatling.highcharts" % "gatling-charts-highcharts" % gatlingVersion % Test
  ))

scalaVersion := "2.11.8"


scalaSource in Gatling := baseDirectory.value / "/test"
// Adds additional packages into Twirl
//TwirlKeys.templateImports += "org.github.faolivera.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "org.github.faolivera.binders._"
