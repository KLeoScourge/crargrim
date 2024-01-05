class PerProduct {
    constructor(pername, perprice, perdesc, perimg){
        this.pername = pername;
        this.perprice = perprice;
        this.perdesc = perdesc;
        this.perimg = perimg;
    }
};
class VehProduct {
    constructor(vehname, vehprice, vehdesc, vehimg){
        this.vehname = vehname;
        this.vehprice = vehprice;
        this.vehdesc = vehdesc;
        this.vehimg = vehimg;
    }
};
class AccProduct {
    constructor(accname, accprice, accdesc, accimg){
        this.accname = accname;
        this.accprice = accprice;
        this.accdesc = accdesc;
        this.accimg = accimg;
    }
};
const perproductos = [new PerProduct('Manilla en cuero con dijes dama', 25000, 'Manilla en cuero', 'Manilla dijes mujer.jpg'), 
                      new PerProduct('Manilla taches cadena en cuero dama', 20000, 'Manilla en cuero', 'Manilla taches cadena mujer.jpg'),
                      new PerProduct('Pechero gótico en cuero mujer', 35000, 'Pechero en cuero', 'Pechero sencillo  mujer.jpg'),
                      new PerProduct('Cinturón gótico en cuero azul dama', 75000, 'Cinturón en cuero', 'Cinturón_gótico_azul_collage.png'),
                      new PerProduct('Manilla en cuero cuadrangular', 20000, 'Manilla en cuero', 'Manilla cudrangular.jpg'),
                      new PerProduct('Pechero sencillo en cuero para hombre', 45000, 'Pechero en cuero', 'Pechero_hombre_collage.png'),
                      new PerProduct('Brazalete Aro en cuero unisex ', 40000, 'Brazalete en cuero', 'Brazalete_aro_grande.jpg')]

const vehproductos = [new VehProduct('Flecos en cuero no cubre manubrio para moto', 130000, 'Flecos en cuero', 'Flecos_manilar_corto.jpg'), 
                      new VehProduct('Banderilla delantera para moto', 30000, 'Banderilla en cuero', 'Banderilla_delantera_moto.jpg'),
                      new VehProduct('Cubre tanque en cuero para moto GN', 90000, 'Cubre tanque en cuero', 'Cubre_tanque_GN.jpg')]               

const accproductos = [new AccProduct('Llavero murciélago en cuero cubre llaves', 20000, 'Llavero en cuero', 'Llavero_murciélago.jpg')]                 
function mostrarPerproductos(){
    console.log('Mostrando Perproductos')
    let Pertexto = '';
    for (const perproducto of perproductos) {
        Pertexto += `<div class="element">
                     <img src="assets/${perproducto.perimg}" style="width: 340px; height: 340px;">
                     <h3>${perproducto.pername}</h3>
                     <h4>$${perproducto.perprice}</h4>
                  </div>`;
    }
    document.getElementById('productosper').innerHTML = Pertexto;
}
function mostrarVehproductos(){
    console.log('Mostrando Vehproductos')
    let Vehtexto = '';
    for (const vehproducto of vehproductos) {
        Vehtexto += `<div class="element">
                     <img src="assets/${vehproducto.vehimg}" style="width: 340px; height: 340px;">
                     <h3>${vehproducto.vehname}</h3>
                     <h4>${vehproducto.vehprice}</h4>
                  </div>`;
    }
    document.getElementById('productosveh').innerHTML = Vehtexto;
}
function mostrarAccproductos(){
    console.log('Mostrando Accproductos')
    let Acctexto = '';
    for (const accproducto of accproductos) {
        Acctexto += `<div class="element">
                     <img src="assets/${accproducto.accimg}" style="width: 340px; height: 340px;">
                     <h3>${accproducto.accname}</h3>
                     <h4>${accproducto.accprice}</h4>
                  </div>`;
    }
    document.getElementById('productosacc').innerHTML = Acctexto;
}
function personales(){
    document.getElementById('ProdPersonales').style.display = '';
    document.getElementById('ProdVehiculares').style.display = 'none';
    document.getElementById('ProdAccesorios').style.display = 'none';
}
function motocicleta(){
    document.getElementById('ProdPersonales').style.display = 'none';
    document.getElementById('ProdVehiculares').style.display = '';
    document.getElementById('ProdAccesorios').style.display = 'none';
}
function accesorios(){
    document.getElementById('ProdPersonales').style.display = 'none';
    document.getElementById('ProdVehiculares').style.display = 'none';
    document.getElementById('ProdAccesorios').style.display = '';
}