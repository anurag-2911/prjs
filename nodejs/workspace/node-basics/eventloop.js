function PrintSomething() {
    console.log('print something');
    console.log('first statement');
    setTimeout(()=>{
        console.log('second statement');
    },5000);
    console.log('third statement');
}

module.exports = {PrintSomething};
