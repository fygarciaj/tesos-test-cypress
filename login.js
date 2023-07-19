const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Cambia a 'true' si no deseas ver la ventana del navegador durante la prueba.
  const page = await browser.newPage();

  try {
    // Abre la página de inicio de sesión
    await page.goto('https://www.tesosterpel.com/Authorization/Home/Login', {
      waitUntil: 'networkidle0',
    });

    // Ingresa las credenciales y envía el formulario
    await page.type('#Username', '77171435');
    await page.type('#Password', '0090');
    await page.click('#btnLogin');

    // Espera a que la página de inicio de la aplicación cargue después del inicio de sesión
    await page.waitForNavigation({ waitUntil: 'networkidle0' });

    // Aquí puedes agregar más código para realizar otras pruebas en la página de inicio de la aplicación.

    console.log('Prueba de inicio de sesión exitosa.');

    // Cierra el navegador al finalizar la prueba
    await browser.close();
  } catch (error) {
    console.error('Error durante la prueba:', error);
    await browser.close();
  }
})();
