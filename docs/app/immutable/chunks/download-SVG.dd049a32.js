function a(n,r){if(!n)return"";let o=new XMLSerializer().serializeToString(n);o=`<?xml version="1.0" standalone="no"?>\r
`+o;const t=new Blob([o],{type:"image/svg+xml;charset=utf-8"}),l=URL.createObjectURL(t),e=document.createElement("a");e.href=l,e.download=`${r}`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}export{a as d};
