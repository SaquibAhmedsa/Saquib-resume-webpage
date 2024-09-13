window.onload=function(){
    alert('Page Loaded Sucessfully')
}

window.onbeforeunload=function(){
    console.log('Before unload');
    return "Are you u want to leave this page";
}