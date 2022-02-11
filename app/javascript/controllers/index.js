// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import {
  application
} from "./application"

import TurboController from "./turbo_controller"
import MarqueeController from "./marquee_controller"
import MatchController from "./match_controller"
import LikeController from "./like_controller"
application.register("turbo", TurboController)
application.register("marquee", MarqueeController)
application.register("match", MatchController)
application.register("like", LikeController)