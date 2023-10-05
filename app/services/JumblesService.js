import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js";
import { EventEmitter } from "../utils/EventEmitter.js";
import { Pop } from "../utils/Pop.js";

class JumblesService {

    startJumble(jumbleId) {
        // console.log('did the id make it to service?', jumbleId)
        let activeJumble = AppState.jumbles.find(jumble => jumble.id == jumbleId)
        // console.log('active ', activeJumble);
        AppState.activeJumble = activeJumble
        // console.log('appstate jumble', AppState.activeJumble);

    }

    submitJumble(submittedText) {
        if (AppState.activeJumble.text !== submittedText) {
            Pop.error('spelll rite looser')

            return
        }
        Pop.success('you did it')
    }

    createNewJumble(newJumble) {
        // console.log('he made it', newJumble);
        const newNewJumble = new Jumble(newJumble)
        AppState.jumbles.push(newNewJumble)
        // console.log('jumbles', AppState.jumbles);
        AppState.emit('jumbles')
    }

}

export const jumblesService = new JumblesService