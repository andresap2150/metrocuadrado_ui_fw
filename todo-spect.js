describe('Metro cuadradro Calculator test', function() {
  it('should redirect to login', function() {
    browser.get('https://www.metrocuadrado.com/calculadora-credito-hipotecario-vivienda/');
    element(by.css('#main-nav > ul.nav.navbar-nav.navbar-right.hidden-xs.hidden-sm > li.item_alt.has_sublevel_alt.usuario_opciones_alt.loginBody > a')).click();

    expect(browser.getCurrentUrl()).toEqual('https://www.metrocuadrado.com/cas/login?service=https%3A%2F%2Fwww.metrocuadrado.com%2Fmetrocuadrado-personal-account%2Flogin%2Fcas');
  });
});