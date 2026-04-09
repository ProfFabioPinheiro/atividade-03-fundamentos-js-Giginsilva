//vp=valor produto
//vtd=valor taxa deconto
function usarDesconto(vp, vtd){
    let vDecimaldesconto = vtd/100;
    let valorAplicado = vp - (vp*vDecimaldesconto);

    console.log(vp, vp*vDecimaldesconto, valorAplicado);
}

usarDesconto(100, 20);
