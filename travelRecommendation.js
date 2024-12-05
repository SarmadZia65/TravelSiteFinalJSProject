fetch('./travelRecommendation.json')
.then(response=>
  response.json()
)
.then(data=>{
  console.log(data)
  const {countries,temples,beaches} = data;
  // console.log(countries[0].cities[0])
  const filterData=(keyword)=>{
    let Ekeyword=keyword.toLowerCase();
    console.log(Ekeyword)
    if(Ekeyword=='country' || Ekeyword=='countries'){
      return countries
    }
    else if(Ekeyword=='temple' || Ekeyword=='temples'){
      return temples;
    }
    else if(Ekeyword=='beach' || Ekeyword=='beaches'){
      return beaches;
    }
    else{
      return 'Do nothing';
    }
  }
  const displayRecommendations=(filteredData)=>{
    const recommendationsContainer=document.getElementById('results');
    recommendationsContainer.innerHTML='';
      recommendationsContainer.style.display='block';
    // const resultDiv=document.createElement('div')
    // resultDiv.className='result';
    filteredData.forEach(place => {
      const placeDiv=document.createElement('div');
      placeDiv.className='result';
      const img=document.createElement('img')
      img.src=place.imageUrl;
      img.alt = place.name;
      const title=document.createElement('h2');
      title.textContent=place.name;
      const description=document.createElement('p');
      description.textContent=place.description;
      const btnV=document.createElement('button');
      btnV.textContent='View More';
      btnV.className='btnV';
      placeDiv.appendChild(img);
      placeDiv.appendChild(title);
      placeDiv.appendChild(description);
      placeDiv.appendChild(btnV)
      recommendationsContainer.appendChild(placeDiv)
    });
    // if(recommendationsContainer!=''){
    //   recommendationsContainer.style.display='block';
    // }
  }

  const searchbtn=document.getElementById('search-button');
  searchbtn.addEventListener('click',function(){
    const keyword=document.getElementById('searchBar').value;
    const filteredData=filterData(keyword);
    if(filteredData!='Do nothing'){
      displayRecommendations(filteredData);
    }
  })
  const clearBtn=document.getElementById('clbtn');
  clearBtn.addEventListener('click',function(){
    const recommendationsContainer=document.getElementById('results');
    recommendationsContainer.innerHTML='';
    recommendationsContainer.style.display='none';
    const searchI=document.getElementById('searchBar');
    searchI.value=''
  })
})
.catch(error=>
  console.error('Error:', error)
)