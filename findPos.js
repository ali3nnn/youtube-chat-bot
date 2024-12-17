const RPA = require('@autoclickpro/rpa');

const rpa = RPA.createRpa({
    dbg: true
});

(async () => {

    while (true) {
        await printPosition()
    }

})()

async function printPosition() {
    while (true) {
        const mousePosition = await rpa.getMouse()
        console.log(mousePosition)
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}