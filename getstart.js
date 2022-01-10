

require('chromedriver');
require('html2canvas');

const { Builder, By, Key, until } = require('selenium-webdriver');
const { createCanvas, loadImage,toDataURL,html2canvas } = require('html2canvas');
// import html2canvas from 'html2canvas';
// const { jquery } = require('jquery');


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
        
        // await driver.wait(until.elementsLocated(By.id("highcharts-3")),100000).isEnabled();
     
        // await driver.findElement(By.id("ext-gen218")).click();
        // await driver.wait(until.elementLocated(By.id("chart_container_parent")),70000);
   
        await driver.wait(until.elementsLocated(By.id("ext-gen218")),70000);
        await driver.wait(until.elementlocation(By.xpath("/html/body/div[2]/div/div[2]/div/div/div/div[2]/div/div/div/div[2]/div[1]/div/svg/g[5]/g[1]/rect[11]")),70000);
        await driver.findElement(By.id("ext-gen218")).isEnabled();
        // await driver.findElement(By.id("ext-gen218")).click();
        
        await  driver.takeScreenshot().then(
            function(image) {
                require('fs').writeFileSync('captured_image_3.png', image, 'base64');
            }
        );
      
        // var chart = await driver.findElement(By.id("highcharts-6"));
        // await driver.wait(until.elementLocated(By.xpath("/html/body/div[2]/div/div[2]/div/div/div/div[2]/div/div/div/div[1]/div/table/tbody/tr/td[1]/table/tbody/tr/td[13]/table/tbody/tr[2]/td[2]/em/button")), 70000);
    

    } finally {
        // await driver.quit();
    }   
})

();


