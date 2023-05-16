const users=[{title: 'POST1'},{title: 'POST2'}];
function createpost(user)
{
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
     users.push(user);
     resolve();
     },1000)
    })
 }
 function updatelastactivitytime(){
   return Promise((resolve,reject)=>{
      setTimeout(()=>{
         users.lastactivitytime=new Date().getTime();
         resolve(users.lastactivitytime);


      },1000)
   })
 }
 function deleteBlog(){
   
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           if(users.length>0){
             const deletedelement= users.pop();
             resolve(deletedelement);
           }
           else
           {
               reject("ERROR");
           }
       },1000)
   })
}
function userUpdatesPost() {
  Promise.all([createpost({ title: 'Post Five', body: 'This is Post Five' }), updatelastactivitytime()])
    .then(([createdpost,lastactivitytime]) => {
      console.log(lastactivitytime);

      deleteBlog()
        .then((deletedElement) => {
          console.log('Post deleted:', deletedElement);
          console.log('New set of posts:', users);
        })
        .catch((error) => {
          console.error('Error deleting post:', error);
        });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

userUpdatesPost();

