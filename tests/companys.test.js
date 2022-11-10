const supertest = require("supertest")
const { default: mongoose } = require('mongoose')
const {app,server} = require("../index")

const api = supertest(app)
describe("endPoints",()=>{
    describe("endPoint Size",()=>{
        test("is responded", ()=>{
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
                return {sizeMin:sizeNum, ...company }
            })
            expect(isSorted(mapData,"sizeMin")).toBe(true)
        })
    })
    describe("endPoint foundation",()=>{
        test(" is responded", ()=>{
            api
                .get("/api/v1/companies/foundation")
                .expect(200)
                .expect('content-type', /application\/json/ )
        })
        test("is sorted",async()=>{
            const response =  await api.get("/api/v1/companies/foundation")
            const data = response.body.body
            expect(Array.isArray(data)).toBe(true)
            expect(isSorted(data,"founded")).toBe(true)
        })
    })
    describe("endPoint info",()=>{
        test("is responded", ()=>{
            api
                .get("/api/v1/companies/info")
                .expect(200)
                .expect('content-type', /application\/json/ )
        })
        test("info is correct", async()=>{
                const response =  await api.get("/api/v1/companies/info")
                const data = response.body.body
                expect(Array.isArray(data)).toBe(true)
                expect(data).toHaveLength(3)
    
        })
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