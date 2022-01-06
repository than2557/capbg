
require('chromedriver');
require('html2canvas');
const { Builder, By, Key, until } = require('selenium-webdriver');
const { createCanvas, loadImage,toDataURL } = require('html2canvas');

const { Builder, By, Key, until } = require('selenium-webdriver');
const html2canvas = require('html2canvas');
const fsp = require('fs').promises;
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

        const findEl = driver.findElement(By.id("chart_container"));
        // await driver.findElement(By.xpath("/html/body/div[15]/div/div[5]")).click();   .
        html2canvas(findEl).then((canvas) => {

            canvas.download = "cmp-image.jpg";
            canvas.href = canvas.toDataURL();
           
        });
        

        //     const link = document.createElement('a');
        //     document.body.appendChild(link);
        //     link.download = "cmp-image.jpg"
        //     link.href = canvas.toDataURL();
        //     link.click();
        //     link.remove();
        // });

    } finally {
        // await driver.quit();
    }
})

();

