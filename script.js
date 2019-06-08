$(document).ready(() => {
    $("#f-search").click(function(){

      condition();//calling condition function and get data function subsequently
   
});
});//end of document ready
    
let condition=()=>{
      if($("#title").val() == "" || $("#year").val() == ""){
            alert(`please enter value.`)
        }
        else {
           t= $("#title").val()
           y= $("#year").val()
           console.log(t,y)
        }

        getdata();//calling get data function and render movies function susequently
    
}; //end of condition function   

let getdata = ()=>{
    console.log("sending request")
    $.ajax({
        type:'GET',
        dataType:'json',
        async:true,
        url:'https://www.omdbapi.com/?apikey=6d232f28&t='+t+'&y='+y,

        success :renderMovies,
        error:(data)=>{
            alert("request recieving error")
        },
    });
};//end of getdata function


  let renderMovies=(movies)=>{
    console.log(movies);
      var tbody= $("#show-data table");
      var tbody1= $("#poster table");
      tbody.empty();//need to clear the screen when the user search for secondtime.. 
      tbody1.empty();//to check out the working first search one movie (when the result is updated),directly search for another movies..the first movie info will be wiped out and second movies info will be dispalyed
      
    let temprow = `

<table class="table-fluid table-condensed" style="background-color: whitesmoke";>
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Actors</th>
      <th scope="col">Plot</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>${movies.Title}</td>
      <td>${movies.Actors}</td>
      <td>${movies.Plot}</td>
    </tr>
  </tbody>
</table>
`
let postwall= `<table class="table-fluid table-condensed" style="margin-left:5%;style="background-color: whitesmoke"">
  <thead>
    <tr>
      <th scope="col">Poster</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td><img class="img-fluid" style="border:solid 4px green;" src="${movies.Poster}"></td>
    </tr>
  </tbody>
</table>

`
    var title=movies.Title  
    var Actors=movies.Actors
    var plot=movies.Plot
    var poster=movies.Poster 
    
    $('#show-data').append(temprow)
    $('#poster').append(postwall)  
      
  };//end of rendermovies function