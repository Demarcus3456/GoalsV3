if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registeration => {
        console.log("SW Resgistered!");
        console.log("registration");
    }).catch(error => {
        console.log("SW Resgistered Failed!");
        console.log(error);
    });
} 