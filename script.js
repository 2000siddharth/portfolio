LottieInteractivity.create({
    mode:"scroll",
    player: "#fifthLottie",
    actions: [
        {
            visibility:[0, 1],
            type: "loop",
            frames: [50, 100]
        }
    ]
});


var elm = document.getElementById('checkbox');
function Hide()
{
    document.getElementById("checkbox").checked = false;
}