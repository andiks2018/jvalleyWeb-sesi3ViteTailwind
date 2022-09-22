import axios from "axios";
import Navbar from "../components/Navbar";
const app = document.getElementById('app');
export default function Home(){
    //ubah document title
    document.title= "Home Page";
    //mendapatkan document title
    axios.get("http://localhost:3000/blogs?_sort=id&_order=desc") 
    .then((res)=>{
        app.innerHTML += Navbar();
        res.data.forEach((e)=>{
            app.innerHTML +=`
                <a href="/details?id=${e.id}" class="bg-white p-6 
                flex flex-col rounded-md my-6 max-w-[700px] shadow-md">
                <div class="bg-white p-6 flex flex-col 
                rounded-md my-6 max-w-[700px] shadow-md">
                    <h1 class="text-2xl">${e.judul}</h1>
                    <small>${e.author}</small>
                    <img src="${e.img}" alt="${e.judul}" 
                    class="h-[280px] object-cover my-4 rounded-lg" />
                    <p>${e.content}</p>
                <div>
            `
        })
    })
    .catch((err)=>{
        console.error(err);
    })
}


//     // ubah document title
//     document.title = "Home Page";

//     axios.get('http://localhost:3000/blogs')
//     .then(res => {
//         app.innerHTML += Navbar()
//         res.data.forEach((e)=>{
//             app.innerHTML += `
//                 <div class="flex flex-col gap-4 max-w-[900px] bg-white shadow-md p-6 my-4 mx-auto">
//                     <h1>${e.judul}</h1>
//                     <small>${e.author}</small>
//                     <img src="${e.img}" alt="${e.judul}" class="w-full h-[280px] object-cover"/>
//                     <p>${e.content}</p>
//                 </div>
//             `
//         })
//     })
// }