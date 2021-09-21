type appSyncEvent = {
    info: {
        fileName: string
    }
    argrument: {
        title: string
    }
}



exports.handler = async (event: appSyncEvent) => {

    const notesArray =["note1" , "note2", "note3"]

    switch(event.info.fileName){
        case "notes":
            return notesArray;
        case "customNote":
            return event.argrument.title;
        default:
            return null;
    }

}