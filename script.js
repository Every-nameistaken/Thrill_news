async function searchNews() {
    let card = document.querySelector("#newsSearchOutput");
    let input = document.getElementById("input").value;
    let key = "dtrCdW1I41g8T3twWiZ6coT4-jTgmAlWOnJ2ln79i81r-7gW";
    let url = `https://api.currentsapi.services/v1/search?keywords=${input}&language=en&apiKey=${key}`; 

    let option = {
        mode: "no-cors"
    }
    let res = await fetch(url)
    .then(await function(res) {
        return res.json();
    })
    .then(function (data){
        let {news} = data;
        card.innerHTML = "";
        for(let i in news){
           
            let {title,author,image,published,url} = news[i];
            if(image == "" || image == null){
                image = "https://placehold.co/200x200";
            }
          card.innerHTML += `
          <div class=" mx-auto lg:max-w-7xl mt-3 "> 
        <div class="max-w-7xl mx-auto px-5 mb-3">
            <div class="mt-6">
                <div
                    class=" bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                        <img class="rounded-t-lg px-5 py-2"  src="${image}" alt="">
        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
                            </a>
                            <div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">${published}</div>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Author: ${author}</p>
                            <a href="${url}"
                                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more...
                                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                </div>
    
            </div>
        </div>
        </div>
          `; 
        }

    })
    .catch(err => console.log(err.message))


    
}

async function fetchNews() {
let card = document.getElementById("latestNewsOutput");

let key = "dtrCdW1I41g8T3twWiZ6coT4-jTgmAlWOnJ2ln79i81r-7gW";
let lan = "en"
let url = `https://api.currentsapi.services/v1/latest-news?language=${lan}&apiKey=${key}`;
let option = {
    mode:"no-cors"
}
let response = await fetch(url)
.then(function(response) {
    
    return response.json()
})
.then(function(data) {
    let {news} = data;
    
card.innerHTML = "";

    for(let i in news){
       
        let {title,author,image,published,url} = news[i];
        if(image == ""){
            image = "https://placehold.co/200x200";
        }
      card.innerHTML += `
      <div class=" mx-auto lg:max-w-7xl mt-3"> 
	<div class="max-w-7xl mx-auto px-5 mb-3 ">
		<div class="mt-6">
			<div
				class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
				<a href="#">
					<img class="rounded-t-lg px-5 py-2 h-50" height:"50"  src="${image}" alt="">
    </a>
					<div class="p-5">
						<a href="#">
							<h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
						</a>
						<div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">${published}</div>
						<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Author: ${author}</p>
						<a href="${url}"
							class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Read more...
							<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"></path>
							</svg>
						</a>
					</div>
			</div>

		</div>
	</div>
    </div>
      `; 
    }
})
  .catch(err => console.log(err.message))

}
fetchNews()