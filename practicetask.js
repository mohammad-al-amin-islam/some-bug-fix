const validEmail = () =>{
    const getInput = document.getElementById('input');
    const inputValue = getInput.value;
    getInput.value = "";
    document.getElementById('success-msg').style.display = "none"
    document.getElementById('error-msg').style.display = "none"
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)){
        document.getElementById('success-msg').style.display = "block"
    }
    else{
        document.getElementById('error-msg').style.display = "block"
    }
}