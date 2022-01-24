document.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        const bnt = document.querySelector("#send")
        bnt.click();
    }
    
})
