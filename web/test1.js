async function show(params) {
    let d = document.querySelector(".articlecontent").innerHTML

    var w = await fetch("http://192.168.10.6:800", {
        method: "post",
        mode: "cors",
        body: JSON.stringify({
            text: d
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const d1 = await w.json()
    console.log(d1)
}
show()