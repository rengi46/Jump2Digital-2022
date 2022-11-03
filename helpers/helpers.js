const counByType = (data,type)=>{
    const temporalArray = []
    data.forEach((company)=>{
        const infoType = temporalArray.find(companyType =>  companyType.type === company[type])
        if(infoType === undefined){
          temporalArray.push({type:company[type], "NºCompanies":1})
        }
        else{
          infoType.NºCompanies ++
        }
    })
    return temporalArray.sort()
  }
  

module.exports = {
    counByType
}