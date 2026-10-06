import Swal from 'sweetalert2'
let appVersion = '1.0.0.2'


let handleCacheBusting = async () =>{
    let previousVersion = localStorage.getItem('version')

    if(!previousVersion){
        Swal.fire({title : "Update available" ,text : "A new version of the app has been released, please reload to get the latest changes." , confirmButtonText : "Reload" ,
        position : 'top-right' ,
        allowOutsideClick: false , 
        iconHtml : `<svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="#ff9966" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg>`,
      iconColor : '#ffffff',
      confirmButtonColor : "#0097B2"

    
    }).then((result)=>{
            if(result.isConfirmed){
                localStorage.clear()
                localStorage.setItem("version" , appVersion)
                window.location.reload()
            }
        })
    }
    else if(previousVersion !== appVersion){
        Swal.fire({title : "Update available" ,text : "A new version of the app has been released, please reload to get the latest changes." , confirmButtonText : "Reload" ,
        position : 'top-right' ,
        allowOutsideClick: false , 
        iconHtml : `<svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="#ff9966" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg>`,
      iconColor : '#ffffff',
      confirmButtonColor : "#0097B2"



    }).then((result)=>{
            if(result.isConfirmed){
                localStorage.clear()
                localStorage.setItem("version" , appVersion)
                window.location.reload()
            }
        })
    }
    else{
        return null
    }


}

export default handleCacheBusting