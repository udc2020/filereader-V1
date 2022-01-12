// Slecet Item dragball 
const dragItem = document.querySelectorAll('.drag-input')



dragItem.forEach(inputElement => {

   const dropPage = inputElement.closest('.drop-page')


   dropPage.addEventListener('dragover', e => {
      e.preventDefault()
      dropPage.classList.add("drop-page-hover")
      document.querySelector('.drag-text').textContent = "Start Uploading ..."
   })
   dropPage.addEventListener("dragleave", e => {
      e.preventDefault()
      dropPage.classList.remove("drop-page-hover")
      document.querySelector('.drag-text').textContent = "Drag Files"
   })
   dropPage.addEventListener("drop", e => {
      e.preventDefault()

      if (e.dataTransfer.files) {
         inputElement.files = e.dataTransfer.files
         goToPriview(e.dataTransfer.files[0])
      }
      dropPage.classList.remove("drop-page-hover")
   })


})




function goToPriview(data) {
   const store = localStorage
   window.location.replace('preview.html')

   store.setItem("data", JSON.stringify({
      name: data.name,
      path: data.path
   }))
}