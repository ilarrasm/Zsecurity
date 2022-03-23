$.getJSON("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,ETC,ZIL,TONCOIN,SHIB,RVN,LTC,ERG,XMR&tsyms=USD", function(datos){
    $.each(datos, (index, item)=>{
        let storeValue = JSON.parse(item.USD)
        console.log(index, item.USD)
        if(storeValue < item.USD){
            $(`#${index}`).append(item.USD + "  USD")
            console.log("store es mayor que precio")
        }
        else if(storeValue == item.USD){
            $(`#${index}`).append(item.USD + "  USD")
            console.log("store es igual que precio")
        }   
        else if(storeValue > item.USD){
            $(`#${index}`).append(item.USD + "  USD")
            console.log("store es menor que precio")
        }else{
            console.log("nones")
        }
    })
})
