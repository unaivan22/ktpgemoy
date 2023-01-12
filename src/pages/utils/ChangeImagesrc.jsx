import React from 'react'

export default function ChangeImagesrc() {
window.onload = async () => {
    document.getElementById('imageUpload').addEventListener('change', readURL, true);
    function readURL(){
        const file = document.getElementById("imageUpload").files[0];
        const reader = new FileReader();
        reader.onloadend = function(){
            document.getElementById('avatar').src = "" + reader.result + "";        
        }
        if(file){
            reader.readAsDataURL(file);
        }else{
        }
    }
    }
  return (
    <div className='relative'>
        <input className='absolute top-0 right-0 offPrint' type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
        <label className='offPrint' htmlFor="imageUpload"></label>
        <img id='avatar' className='h-24 w-20 object-cover rounded' src='media/models/hasan.jpg'  />
    </div>
  )
}
