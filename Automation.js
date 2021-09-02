const puppeteer = require ('puppeteer');
webscrapping();

function sleep(milliseconds) {
    //function to delay in milliseconds the operation of webscrapping code
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
     if ((new Date().getTime() - start) > milliseconds) {
      break;
     }
    }
   }
function webscrapping(){
    //function to interact with related page
    console.log('start webscrapping');
    var elemnto_prueba = '';
    try {
        (async () => {
        const browser = await puppeteer.launch({
            args: ['--user-agent=<user_agent_string>'],
        });
        const page = await browser.newPage();

        await page.goto('https://www.avianca.com/co/es');
        await page.screenshot({ path: 'aviancainit.jpg'});
        sleep(15000);
        await page.evaluate(() => {
            let elements = document.getElementsByName('pbOrigen');
            for (let element of elements)
                element.click();
        });
        await page.evaluate(() => {
            let elements = document.getElementsByName('pbOrigen');
            for (let element of elements)
                element.click();
        });   
        await page.keyboard.type('Bogotá');
        await page.evaluate(() => {
            let elements = document.getElementsByName('pbDestino');
            for (let element of elements)
                element.click();
        });   
        await page.keyboard.type('Madrid');
        await page.evaluate(() => {
            var elements2 = document.getElementsByName('pbFechaIda');
            console.log('elements2');
            console.log(elements2[0]);
            for (let element of elements2)
                element.click();
        });

        console.log('Web components interaction - ended');

        await page.evaluate( () => {
            window.scrollBy(0, 350);
        });
        await page.screenshot({ path: 'aviancaSearch.jpg'});

        await browser.close();

        })();
    }catch(error){
        console.log('Error en objeto html')
    }
}