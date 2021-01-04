
export function PostData(){
  
}
export function getSaladData() {
    
    return new Promise((resolve, reject) =>{
        fetch('https://api.jsonbin.io/b/5fe9b716c8f3567b4a1f63cd', {
       method: 'GET'
       })
       .then((response) => response.json())
       .then((res) => {
        resolve(res);
       })
       .catch((error) => {
        reject(error);
       });
       });
    }