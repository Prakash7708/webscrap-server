
const express=require('express')
const app=express()
const cors=require('cors')
//app.use(cors());


// const mongoose=require("mongoose")
// const url="mongodb+srv://PRAKASH7708:<>@cluster0.2n5s99z.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(url)
// const db=mongoose.connection;
// db.once("open",()=>{
//     console.log("db connected")
// })
// const mongodb=require('mongodb')
// const mongoClient=mongodb.MongoClient;
// const URL='mongodb://localhost:27017';
app.use(
    cors({
      origin: "*",
    })
  );

app.get("/", (req, res) => {

    res.json(Users)
} )

app.get("/redmi", (req, res) => {
      
        res.json(user2)})


app.get("/realme", (req, res) => {
      
            res.json(user3)
        
        })
app.get("/iphone",(req,res)=>{
    res.json(user4)
})
//   const { q } = req.query;

//   const keys = ["first_name", "last_name", "email"];

//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(q))
//     );
//   };

//   q ? res.json(search(Users).slice(0, 3)) : res.json(Users.slice(0, 3));
// });

const Users = [
    {
      "id": 1,
      "Title": " Nokia",
      "price": 20000,
      "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
      "Finalprice": 18000,
      "ratings":"⭐ ⭐ ⭐ ⭐ ",
    },
    {
        "id": 2,
        "Title": "Realme C1",
        "price": 30000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 25000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 3,
        "Title": "Redmi Y2",
        "price": 10000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 8000,
        "ratings":"⭐ ⭐ ⭐ ",
        
    },
    {
        "id": 4,
        "Title": "Nokia",
        "price": 40000,
        "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
        "Finalprice": 38000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 5,
        "Title": "Redmi C11",
        "price": 60000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 56000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 6,
        "Title": " Nokia",
        "price": 10000,
        "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
        "Finalprice": 9000,
        "ratings":"⭐ ⭐ ⭐ ",
      },
      {
          "id": 7,
          "Title": "Realme C1",
          "price": 20000,
          "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
          "Finalprice": 18000,
          "ratings":"⭐ ⭐ ⭐ ",
      },
      {
          "id": 8,
          "Title": "Redmi Y2",
          "price": 20000,
          "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
          "Finalprice": 18000,
          "ratings":"⭐ ⭐ ⭐ ",
      },
      {
          "id": 9,
          "Title": "Nokia",
          "price": 20000,
          "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
          "Finalprice": 18000,
          "ratings":"⭐ ⭐ ⭐ ",
      },
      {
          "id": 10,
          "Title": "Redmi C11",
          "price": 20000,
          "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
          "Finalprice": 18000,
          "ratings":"⭐ ⭐ ⭐ ",
      },
      {
        "id": 11,
        "Title": "Nokia",
        "price": 20000,
        "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 12,
        "Title": "Redmi C11",
        "price": 20000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    }]

   const user2=[
    {
        "id": 1,
        "Title": "Redmi",
        "price": 20000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 2,
        "Title": "Redmi Y2",
        "price": 20000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 3,
        "Title": "Redmi",
        "price": 20000,
        "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 4,
        "Title": "Redmi C11",
        "price": 20000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
      "id": 5,
      "Title": "Nokia",
      "price": 20000,
      "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
      "Finalprice": 18000,
      "ratings":"⭐ ⭐ ⭐ ",
  },
  {
      "id": 6,
      "Title": "Redmi C11",
      "price": 20000,
      "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
      "Finalprice": 18000,
      "ratings":"⭐ ⭐ ⭐ ",
  }
   ]

   const user3=[
    {
        "id": 1,
        "Title": "Realme",
        "price": 20000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 2,
        "Title": "Realme C2",
        "price": 20000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 3,
        "Title": "Realme",
        "price": 20000,
        "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 4,
        "Title": "Realme",
        "price": 20000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
      "id": 5,
      "Title": "Realme",
      "price": 20000,
      "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
      "Finalprice": 18000,
      "ratings":"⭐ ⭐ ⭐ ",
  },
  {
      "id": 6,
      "Title": "Realme",
      "price": 20000,
      "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
      "Finalprice": 18000,
      "ratings":"⭐ ⭐ ⭐ ",
  }
   ]

   const user4=[
    {
        "id": 1,
        "Title": "Iphone 11",
        "price": 20000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 2,
        "Title": "Iphone 12",
        "price": 20000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 3,
        "Title": "Iphone 7",
        "price": 20000,
        "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
        "id": 4,
        "Title": "Iphone 10",
        "price": 20000,
        "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
        "Finalprice": 18000,
        "ratings":"⭐ ⭐ ⭐ ",
    },
    {
      "id": 5,
      "Title": "Iphone 6",
      "price": 20000,
      "img": "https://i02.appmifile.com/998_operator_in/12/08/2021/3c3be7deaa0112fa9c5c4c0c3e1da35d.png",
      "Finalprice": 18000,
      "ratings":"⭐ ⭐ ⭐ ",
  },
  {
      "id": 6,
      "Title": "Iphone 7",
      "price": 20000,
      "img": "https://i02.appmifile.com/657_operator_in/12/08/2021/2ad5ced412136effef745fe0a83f76fe.png",
      "Finalprice": 18000,
      "ratings":"⭐ ⭐ ⭐ ",
  }
   ]

app.listen(process.env.PORT || 3001);
// app.get("/", (req, res) => {

//     res.json(Users)})

// app.get("/redmi", (req, res) => {
      
//         res.json(user2)})


// app.get("/realme", (req, res) => {
      
//             res.json(user2)
        
//         })
// app.get("/iphone",(req,res)=>{
//     res.json(user3)
//})
//   const { q } = req.query;

//   const keys = ["first_name", "last_name", "email"];

//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(q))
//     );
//   };

//   q ? res.json(search(Users).slice(0, 3)) : res.json(Users.slice(0, 3));
// });

//app.listen(3001);
























// const express=require("express")
// const request=require("request")
// const cors=require('cors')

// // app.use(express.json())
// // app.use(cors({
// //     origin:"*"
// //     // origin:"*" it allows all api requests req
// // }))

// const cheerio=require('cheerio')
// const fs=require('fs')

// var title,release,rating
// var url;
// var json={"title":"","release":"","rating":""}

// const app =express()
// //app.use(express.json())

// app.get('/scrap',(req,res)=>{
//    url="https://www.flipkart.com/search?q=redmi&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
//    request(url,function(error,res,html){
//     var $=cheerio.load(html)
//     //console.log(html)
//     $("._396cs4+_3exPp9").filter(function(){
//         var data=$(this)
//         title=data.attribute().src()
//         console.log(title)
//     })
//    })
// })

// app.listen(3000)


// const cheerio=require('cheerio')
// const axios= require('axios')

// url="https://www.flipkart.com/search?q=redmi&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY"


// async function getData(){

//     try{
//         const response=await axios.get(url)

//         const $=cheerio.load(response.data)
//         const genre=$
//         // let res1=await response.json()
//         // console.log(res1)
//     }catch(error){
//         console.log(error)
//     }
// }

// getData()