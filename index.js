const RPA = require('@autoclickpro/rpa');

const rpa = RPA.createRpa({
    dbg: true
});

(async () => {

    while (true) {
        const message = pickMessage()
        await write(message)
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

})()

function pickMessage() {
    const messages = [
        "🔴 GEORGESCU VREA AFARA DIN UE SI NATO",
        "🔴 FARA NATO VOM FI ATACATI DE RUSIA",
        "🔴 FARA UE VOM AJUNGE SARACI"
    ]

    const randomIndex = Math.floor(Math.random() * messages.length);

    return messages[randomIndex]
}

async function write(message) {

    const textBoxPos = {
        x: -308,
        y: 1060
    }
    
    const sendButtonPos = {
        x: -61,
        y: 1075
    }
    
    await rpa.click(textBoxPos);

    await rpa.typewrite(message);

    await new Promise(resolve => setTimeout(resolve, 500));

    await rpa.click(sendButtonPos);
}