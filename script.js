const apiKey = '0e5ad6693d134fb1a4f1b82ac1cdbb58aac45d90244847af9d9bf643e4bd9f7e';
const tableBody = document.getElementById(
  'class-actions'
)
const currentPage= document.getElementById(
  'page-number'
)
let nextPagetracker = 0;
let prevPagetracker = 0;



async function getText(pageNumber) {
    const apiUrl = `https://xivapi.com/action?private_key=${apiKey}&page=${pageNumber}&limit=15`;


    let x = await fetch(apiUrl, {
      mode:'cors'
    });
    let y = await x.json();
    nextPagetracker = y.Pagination.PageNext;
    prevPagetracker = y.Pagination.PagePrev;
    console.log (y);
    let template=``;
    for (let item of y.Results){
      template +=  `<tr class="">
      <td class="font-bold text-red-900 ">${item.Name}</td>
      <td class="bg-[#fffceb] "><img class="mx-auto size-10 rounded-md" src="https://xivapi.com/${item.Icon}"></td>
      <td class="bg-[#fffceb] text-red-900 font-bold rounded-md">${item.ID}</td> 
   </tr>`    
    }
    tableBody.innerHTML = template;
    currentPage.innerText = y.Pagination.Page;
  }


function nextPage(){
  if (nextPagetracker) getText(nextPagetracker)
}

function prevPage(){
  if (prevPagetracker) getText(prevPagetracker)
  
}

getText();
  