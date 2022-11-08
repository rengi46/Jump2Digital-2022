const supertest = require("supertest")
const { default: mongoose } = require('mongoose')
const {app,server} = require("../index")

const api = supertest(app)

describe("company list",()=>{
    test("endPoint Size is responded", ()=>{
    api
        .get("/api/v1/companies/size")
        .expect(200)
        .expect('content-type', /application\/json/ )
    })
    test("sort is correct", async()=>{
    const response =  await api.get("/api/v1/companies/size")
    const data = response.body.body
    expect(Array.isArray(data)).toBe(true)
    const mapData = data.map((company)=> {
        let sizeNum = null
        if(company.size !==null){
            sizeNum =Number(company.size.split("-")[0])
        }
        return {size:sizeNum, ...company }
    })

    expect(isSorted(mapData,"sizeMin")).toBe(true)

    })
    test("endPoint foundation is responded", ()=>{
    api
        .get("/api/v1/companies/foundation")
        .expect(200)
        .expect('content-type', /application\/json/ )
    })
    test("endPoint info is responded", ()=>{
    api
        .get("/api/v1/companies/info")
        .expect(200)
        .expect('content-type', /application\/json/ )
    })
    afterAll(()=>{
        mongoose.connection.close()
        server.close()
    })
  })


const isSorted = (array,prop) => {
    for ( let index= 0; index < array.length-1; index++)
    {
        if(array[index][prop] > array[index+1][prop]
            && array[index][prop] !== null
            && array[index+1][prop] !== null){
            return false
        }
    };
    return true
}