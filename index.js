const handelCategory = async() => {
const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
const data = await response.json()

const tabContainer = document.getElementById('tab-container')


    data.data.forEach(category => {
        
        const div = document.createElement('div')
        div.innerHTML = `
        <a onclick="handleLoad('${category.category_id}')" class="tab bg-gray-300 hover:bg-[#FF1F3D] rounded-sm lg:mr-8">${category.category}</a>
        
        `
        tabContainer.appendChild(div)
    });
}
const handleLoad = async (categoryId) => {
  response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await response.json();
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const cardContainer1 = document.getElementById("drawing");
  cardContainer1.innerHTML = "";

  cardContainer.innerHTML = "";

  const totalData = data.data;
  if (totalData.length === 0) {

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex items-center justify-center mt-12">
      <div class="card w-50 bg-[#FFF] ">
        <figure class="px-24 pt-10">
          <img src="./image/Icon.png" alt=""  />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-4xl font-bold">Oops!! Sorry, There is no <br> content here</h2>
        </div>
      </div>
    </div>
        `;
    cardContainer1.appendChild(div)
  }
     
        
        
        
      const convertSecToTime = (sec) => {
        const second = Math.floor(sec / 3600);
        const hrs = Math.floor(sec % 3600);
        const  mins = Math.floor(hrs / 60);
      
      let  sum = '';
      if(second > 0){
        sum += `${second} hr ${second > 1 ? 's' : ''}`
      };
      if(mins > 0){
        sum += `${mins} hr ${mins > 1 ? 's' : ''}`
      };
      sum += ' ago'
      return sum;
      }
     
      
      data.data.forEach((news) => {
        const div = document.createElement("div");
        div.innerHTML = `
        
        <div class="card card-compact w-72 h-[300px]   mt-6 bg-base-100 shadow-xl">
        
        <figure>
        <div class = "relative">
        <img src="${news?.thumbnail}" alt="Shoes"/>
        </div>
        <div class ="absolute top-[120px] right-6">
        <p>
        ${news?.others?.posted_date? `<div class ="bg-black  px-2 text-white" >${convertSecToTime(news.others.posted_date)}</div>`:''}
        </p>
        </div>
        </figure>
        <div class="card-body">
            <div class="avatar mb-4">
                <div class="w-12 rounded-full">
                  <img src="${news.authors[0].profile_picture}" />
                </div>
                <h1 class="pl-3 text-lg pt-2 font-bold text-black">${news.title}</h1> 
                
                
              </div>
              <div class = "pl-14">
                <div class = "flex">
                <h2 class = "text-gray-500 ">${news.authors[0].profile_name}</h2>
                <span class = "">${news.authors[0].verified? '<img class = "pl-3" src = "image/fi_10629607.png">' : ''}</span>
                
                
                </div>
                
                <p> ${news?.others?.views}  views</p>
              </div>
          
        </div>
      </div>
    

        `
        cardContainer.appendChild(div)
    })

}



handelCategory()
handleLoad(1000)

