function enviarMensagem(nome, hora){
    if(hora >= 6 && hora < 12){
        return "Bom dia, acorda pra cuspir " + nome;
    }else if(hora >= 12 && hora < 18){
        return "Hora do cházinho " + nome;
    }else if(hora >=18 || hora < 6){
        return "Vai dormir krl " + nome;
    }
}

console.log(enviarMensagem("Giovana", 20));