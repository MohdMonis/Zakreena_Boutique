function CTC() {
    var dt = new Date();
    var h = dt.getHours()
    if ((h >= 10) && (h <= 18)) {
        alert("call is connecting")
        return true;
    } else {
        alert("Call timing is between 10 AM  to 6 PM")
        return false;
    }
}
document.querySelector("#nrgt>i").addEventListener("click", () => {
    document.querySelector("#nb").style.display = "flex"
})
document.querySelector("#nb").addEventListener("click", () => {
    document.querySelector("#nb").style.display = "none"
})
document.querySelector("#circle").addEventListener("click", (dk) => {
    document.querySelector("#main-container").style.overflow = "hidden"


    if (dk.target.id === "top-profile-pic") {
        document.querySelector(".fullprofile").style.filter = "blur(0px)"
        document.querySelector(".fullprofile").style.display = "initial"
        document.querySelector("#founder").style.display = "initial"
        document.querySelector("#co-founder").style.display = "none"
    } else if (dk.target.id === "btm-profile-pic") {
        document.querySelector(".fullprofile").style.display = "initial"
        document.querySelector("#founder").style.display = "none"
        document.querySelector("#co-founder").style.display = "initial"
    }
})
document.querySelector("i.ri-close-line").addEventListener("click", () => {
    document.querySelector(".fullprofile").style.display = "none"
    document.querySelector("#main-container").style.overflow = "scroll"
})