import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JumblesController } from "./controllers/JumblesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { MainJumbleView } from "./views/MainJumbleView.js";


export const router = [
  {
    path: '',
    controller: JumblesController,
    view: MainJumbleView
    // view: null
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]