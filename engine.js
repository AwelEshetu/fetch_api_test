// fetch a text from local file
const getText=()=> {
 let path='/TextFile/random.txt';
fetch(path)  // promise object
.then(res=>{
console.log(`status code ${res.status}, status text ${res.statusText}`);
return res.text() // get it as text file
})  
.then(data=>{
console.log(data);
let text=`<h3>Random Text</h3>
         <p class="card card-body ">${data}</p>
         `;
document.getElementById('outputText').innerHTML=text;

})
.catch(err=>console.log(err));
};
//get some users and display them 
const getUsers=()=>{
let url='https://jsonplaceholder.typicode.com/users';

fetch(url)
.then(res=>{
console.log(`status code ${res.status}, status text ${res.statusText}`);
return res.json();
})
.then(data=>{
console.log(data);
let users=`<h2>Users List</h2>`;
data.forEach(user=>{
users+=`
<ul class="list-group mb-3">
<li class="list-group-item">Name : ${user.name}</li>
<li class="list-group-item">Email : ${user.email}</li>
<li class="list-group-item">Company 
  <ul class="list-group mb-2">		
		<li class="list-group-item">Company Name : ${user.company.name}</li>
		<li class="list-group-item">Company BS : ${user.company.bs}</li>
		<li class="list-group-item">Company Slogan : ${user.company.catchPhrase}</li>

  </ul>
</li>
<li class="list-group-item">Phone number : ${user.phone}</li>

</ul>
<hr>
`;
document.getElementById('outputText').innerHTML=users;
});

})
.catch(err=>console.log(err));

};

//post some comment to an api
const postComment=(e)=>{
e.preventDefault(); // stop submiting it to file
let url='https://jsonplaceholder.typicode.com/comments',
    name=document.getElementById('name').value,
    email=document.getElementById('email').value,
    comment=document.getElementById('comment').value;
fetch(url,{
 method:'POST',
 headers:{
  'Accept':'application/json,text/plain,*/*',
  'Content-type':'application/json'
},
body:JSON.stringify({
 name:name,
 email:email,
 body:comment })
})
.then(res=>{
console.log(`status code ${res.status}, status text ${res.statusText}`);
return res.json();
})
.then(data=>{
console.log(data);
});
};
// event listeners
document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getUsers').addEventListener('click',getUsers);
document.getElementById('addComment').addEventListener('submit',postComment);

