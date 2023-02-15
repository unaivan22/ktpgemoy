import React from 'react'
import { IoPrint } from 'react-icons/io5'
import { IoImage } from 'react-icons/io5'
import { GoMarkGithub } from 'react-icons/go'
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import { Walktour } from 'walktour';

export default function FloatBtn() {
  function print(){
    window.print()
  }

  function printimg(){
    html2canvas(document.querySelector("#content")).then(canvas => {
      canvas.toBlob(function(blob){
        window.saveAs(blob, 'export.jpg')
      })
      // document.body.saveAs(canvas);
  });
  }

  // $( "#download" ).on( "click", function() {
  //   html2canvas(document.querySelector("#to_save")).then(canvas => {
  //     canvas.toBlob(function(blob) {
  //       window.saveAs(blob, 'my_image.jpg');
  //     });
  //     });
  // });
  
  const navigate = useNavigate();
  return (
    <div className='fixed bottom-12 right-12 offPrint'>
        <div className='grid grid-cols-2 gap-y-4'>
            <a onClick={() => print()} className="w-18 h-18 rounded-full hover:cursor-pointer shadow-2xl bg-black text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
                <IoPrint size={32} />
                <span className='ml-2'>Save as Pdf</span>
            </a>
            <a onClick={() => printimg()} className="w-18 h-18 rounded-full hover:cursor-pointer shadow-2xl bg-emerald-700 text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
                <IoImage size={32} />
                <span className='ml-2'>Save as Image</span>
            </a>
            <Walktour
              steps={[
                {selector: "#walktour", title: "Edit Text", description: "Tap or click on any text for edit"}
              ]}
            />
        </div>
    </div>
  )
}