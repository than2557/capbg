

require('chromedriver');
require('html2canvas');
document.writeln("<script type='text/javascript' src='node_modules/jquery/dist/jquery.min.js'></script>");
const { Builder, By, Key, until } = require('selenium-webdriver');
const { createCanvas, loadImage,toDataURL } = require('html2canvas');

let html ='';


(async function test() {
    let driver = await new Builder().forBrowser('chrome').build()
    try {

     

        await driver.get("https://172.23.31.1/php/login.php");
        await driver.manage().window().maximize();
        await driver.findElement(By.id("details-button")).click();
        await driver.findElement(By.id("proceed-link")).click();
        await driver.findElement(By.id("user")).sendKeys("nocservice");
        await driver.findElement(By.id("passwd")).sendKeys("NOCpwd2020+");
        await driver.findElement(By.id("submit")).click();
        await driver.wait(until.elementLocated(By.id("monitor_img")), 70000);
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/table/tbody/tr[1]/td/table/tbody/tr/td[2]/table/tbody/tr/td[4]")).click();
        await driver.findElement(By.xpath("/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/div[1]/div/div/div/div/div/div/ul/div/li[4]/ul/li[3]/div/a/span")).click();

        await driver.get("https://172.23.31.1/?#monitor::ABP12::monitor/app-scope/threat-monitor");

      

        // var script = document.createElement('script');
        // script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
        // script.type = 'text/javascript';
        // document.getElementsByTagName('head')[0].appendChild(script);


     html += ' <div class="button"><button id="capture" type="button" onclick="saveAsImage()">Capture</button></div>';
     $('#monitor_img').append(html);
     var cap = await driver.findElement(By.id('capture'));
        cap.click();

        function saveAsImage() {
            const findEl = document.getElementById('chart_container')
            html2canvas(findEl).then((canvas) => {
                const link = document.createElement('a')
                document.body.appendChild(link)
                link.download = "cmp-image.jpg"
                link.href = canvas.toDataURL()
                link.click()
                link.remove()
            })
        }
     
    } finally {
        // await driver.quit();
    }
})

();

