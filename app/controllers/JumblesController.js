import { AppState } from "../AppState.js";
import { jumblesService } from "../services/JumblesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawJumbles() {
    const jumbles = AppState.jumbles
    // console.log('jumbles', jumbles)
    let content = ''
    jumbles.forEach(jumble => content += jumble.JumbleTemplate)
    setHTML('insertJumble', content)
}

function _activeJumble() {
    const ActiveJumble = AppState.activeJumble
    // console.log(ActiveJumble);
    setHTML('startJumble', ActiveJumble.ActiveJumbleTemplate)
}

export class JumblesController {
    constructor() {
        AppState.on('jumbles', _drawJumbles)
        _drawJumbles()
    }

    startJumble(jumbleId) {
        jumblesService.startJumble(jumbleId)
        _activeJumble()
    }

    submitJumble(event) {

        try {
            event.preventDefault()
            const form = event.target
            const eventData = getFormData(form)
            // console.log('data', eventData.text);
            if (AppState.activeJumble.text !== eventData.text) {
                Pop.error('spelll rite looser')

                return
            }
            Pop.success('you did it')
            setHTML('startJumble', '')
            form.reset()
        }
        catch (error) {
            console.error('something we wrong', error)
        }
    }

    createNewJumble(event) {
        try {

            event.preventDefault()
            // console.log('working');
            const form = event.target
            const eventData = getFormData(form)
            console.log('data', eventData);
            jumblesService.createNewJumble(eventData)
            form.reset()
        }
        catch (error) {
            Pop.error('error', error)
        }
    }


}
