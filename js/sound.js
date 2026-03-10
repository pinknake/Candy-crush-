function playSound(freq){

let ctx=new AudioContext()

let osc=ctx.createOscillator()

osc.frequency.value=freq

osc.connect(ctx.destination)

osc.start()

setTimeout(()=>osc.stop(),100)

}
