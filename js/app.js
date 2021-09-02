

// function searchBook()
const searchBook = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // write Error message here
    searchingKeyword(searchText);

}

// function - searchingKeyword
const searchingKeyword = async (searchText) => {
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displaySerachResult(data.docs);
        totalResultFound(data.numFound);
      }
      catch (error){
        displayError(error);
      }    
     
}
// function -- display search result 
const displaySerachResult = docs => {
  const searchResult = document.getElementById('search-result');
  // clear data after showing a search result.
  searchResult.textContent = '';  
  
  docs.forEach(book => {
    const coverId = book.cover_i;
    const url = ` https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
    const div = document.createElement("div");
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
      <img src="${url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">Author: ${book.author_name}</p>
        <p class="card-text">First Publish Date: ${book.publish_date}</p>
        <p class="card-text">Publisher: ${book.publisher}</p>
        <p class="card-text">Publish Year: ${book.publish_year}</p>        
      </div>
    </div>       
      `;
      searchResult.appendChild(div);

  });
}
// function - show result nuber 
const totalResultFound =  numOfResult => {
  // used === singn for a comparison
  if (numOfResult === 0){
    const resultNumber = document.getElementById("result-number");
    resultNumber.innerHTML = `
    <h5 class="mx-auto my-8">No result found!</h5>
    `;
    
  }
  else{
    const resultNumber = document.getElementById("result-number");
  resultNumber.innerHTML = `
  <h5 class="mx-auto my-8">Result found: ${numOfResult}</h5>
  `;
  }
  // used === singn for a comparison
  if (numOfResult === 0){
    const resultNum = document.getElementById("result-num");
    resultNum.innerHTML = `
    <h5 class="mx-auto my-8">No result found!</h5>
    `;

  }
  else{
    const resultNum = document.getElementById("result-num");
    resultNum.innerHTML = `
    <h5 class="mx-auto my-8">Result found: ${numOfResult}</h5>
    `;
  }  
}

// displayError function
const displayError = error => {
  document.getElementById("error-message").style.display = 'block';

}






































