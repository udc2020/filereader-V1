const {
   default: WebViewer
} = require("@pdftron/webviewer")



const viewerElement = document.getElementById("viewer")
const openFileBtn = document.getElementById("openFile")


let data = localStorage.getItem("data")
data = JSON.parse(data)


new WebViewer({
      path: '../public/',
      initialDoc: data.path
   }, viewerElement)
   .then(instance => {
      instance.disableElements(['downloadButton'])
      const {
         documentViewer,
         annotationManager
      } = instance.Core
    
      openFileBtn.onclick = ()=>{
         window.location.replace('index.html')
      }


   })