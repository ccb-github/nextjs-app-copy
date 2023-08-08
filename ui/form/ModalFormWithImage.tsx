import BlurImage from "#/components/blur-image"
import { useEffect } from "react";

export default function ModalForm(props:{ src: string, desc: string}) {
  useEffect( () => {
    (async () => {
      
      const favDialog = document.getElementById('favDialog') 
      if (favDialog === null || favDialog.querySelector('#downloadBtn') === null) {
        throw new Error('No document find with id' + 'favDialog')
      }
      const confirmBtn = favDialog.querySelector('#downloadBtn')
      //@ts-ignore
      //favDialog.showModal()

      
      // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
      favDialog.addEventListener('close', () => {
        alert("Downloading the image")
      })
    })()
  }, [])
 
	return (
    <dialog id="favDialog" open>
      <form method="dialog">
        <p>
          Download the qrcode image for your need
        </p>
        <div id="qrcode"></div>
        {/* <BlurImage src={props.src} alt={props.desc} width={300} height={300} /> */}
        <div className="w-full flex">
          <button id="downloadBtn" className="flex-1" value="default">
            Download
          </button>
          <button value="cancel" className="flex-1">
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  )
}