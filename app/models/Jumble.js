import { generateId } from "../utils/GenerateId.js"

export class Jumble {

    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.text = data.text

    }

    get JumbleTemplate() {
        return `
        <div class="d-flex justify-content-evenly align-items-center p-3">
                    <button class="btn start-button" onclick="app.JumblesController.startJumble('${this.id}')" type="button">start</button>
                    <p class="mb-0">${this.name}</p>
                    <p class="mb-0">⏲️</p>
                    <p class="mb-0">55 wpm</p>
                </div>
    `
    }

    get ActiveJumbleTemplate() {
        return `
        <div class="jumble-prompt text-center rounded p-3 mb-3">

        <div class="d-flex justify-content-evenly">
          <p>${this.name}</p>
          fastest time: pretty fast
        </div>
        <div>
          <p>${this.text}</p>
        </div>
      </div>
      <form onsubmit="app.JumblesController.submitJumble(event)">


      <div class="form-outline mb-4">
      <label  class="form-label" for="text"></label>
        <textarea name="text" class="form-control" id="text" rows="4"></textarea>
        </div>

    
      <button  type="submit"
        class="btn purple-button btn-block mb-4">
        Send
      </button>
     
    </form>
      </div>
    `
    }

}