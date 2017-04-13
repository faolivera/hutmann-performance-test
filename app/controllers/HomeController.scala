package controllers

import javax.inject._

import play.api._
import play.api.libs.json.Json
import play.api.mvc._
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class HomeController @Inject()(
  configuration: Configuration,
  implicit val ec: ExecutionContext
) extends Controller {

  val jsonString = getJsonString

  def index = Action.async {
    Logger.info(s"index: out future ${Thread.currentThread().getName}")
    Future {
      Logger.info(s"index: in future ${Thread.currentThread().getName}")
      Ok("Running!")
    }
  }

  def parseJson = Action.async {
    Logger.info(s"parseJson: out future ${Thread.currentThread().getName}")
    Future {
      Logger.info(s"parseJson: in future ${Thread.currentThread().getName}")
      Ok(Json.parse(jsonString))
    }
  }

  def parseJsonFromDisk = Action.async {
    Logger.info(s"parseJsonFromDisk: out future ${Thread.currentThread().getName}")
    Future {
      Logger.info(s"parseJsonFromDisk: in future ${Thread.currentThread().getName}")
      Ok(Json.parse(getJsonString))
    }
  }


  def getJsonString = {
    val resourceStream = getClass.getResourceAsStream(configuration.underlying.getString("json.file"))
    scala.io.Source.fromInputStream(resourceStream).getLines.mkString
  }
}
