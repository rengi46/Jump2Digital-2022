const counByType = (data,type)=>{
  //creo un array para poner los valores dentro
    const temporalArray = []
    data.forEach((company)=>{
      //busco si el vañlor esta dentro del array temporal
        const infoType = temporalArray.find(companyType =>  companyType.type === company[type])
        if(infoType === undefined){
          //si no esta lo añado al array
          temporalArray.push({type:company[type], "NºCompanies":1})
        }
        else{
          //si esta aumento el numero de capañias
          infoType.NºCompanies ++
        }
    })
    //devuelvo la array ordenada
    return temporalArray.sort()
  }
  

module.exports = {
    counByType
}