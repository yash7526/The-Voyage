document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector("form#frmSearch");
    form.onsubmit = function() {
    
    let keyword = encodeURIComponent(this.querySelector("input#keyword").value);
    
     $.ajax({
       url: `./php_curl_file.php?q=${encodeURIComponent(keyword)}`,
       type: 'GET',
       error: (err) => {
         throw new Error(err);
       },
       success: (searchData) => {
         console.log( searchData ); 
       }
     });
    
     return false;
    }
   
 } );