


require('chromedriver');
require('html2canvas');


const { Builder, By, Key, until,WebElement } = require('selenium-webdriver');
const { createCanvas, loadImage,toDataURL,html2canvas } = require('html2canvas');
const { jquery,$} = require('jquery');
const sharp = require('sharp');
const console = require('console');
// const {screen}  = require('screen.js');


// const { createCanvas } = require('canvas');
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
        
        await driver.sleep(5000);
    //    await driver.findElement(By.id('monitor')).click();
    await driver.findElement(By.xpath("/html/body/div[1]/div/div/table/tbody/tr[1]/td/table/tbody/tr/td[2]/table/tbody/tr/td[4]")).click();
        
  
     await driver.get("https://172.23.31.1/?#monitor::ABP12::monitor/app-scope/threat-monitor");
   
        await driver.sleep(5000);
     

    } finally {
        
   
        await  driver.takeScreenshot().then(
            function(image) {
                require('fs').writeFileSync('chart.png', image, 'base64');
            }
        );

    
var _left = 0;
var _top  = 0;
var _width = 0;
var _height = 0;

        _left = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/div/div[2]/div[1]/div/svg/rect")).getRect().x;
  
        _top = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/div/div[2]/div[1]/div/svg/rect")).getRect().y;
   
        _width = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/div/div[2]/div[1]/div/svg/rect")).getRect().width;
               
        _height = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div[2]/div/div/div[2]/div/div/div/div[2]/div[1]/div/svg/rect")).getRect().height;

        console.log();
        await driver.sleep(4000);

        sharp('chart.png').extract({left:parseInt(_left),top:parseInt(_top),width:parseInt(_width),height:parseInt(_height)}).toFile('chartcrop.png');
        // sharp('chart.png').extract({ left: parseInt(_left), top: parseInt(_top), width: parseInt(_width), height: parseInt(_height) })
        // .toFile('image_crop.png').then(function (new_file_info) {
        //     console.log("Image cropped and saved");
        // })
        // .catch(function (err) {
        //     if (err) console.log(err);
        // });
        
    }   
})

();


        