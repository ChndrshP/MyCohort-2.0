var d = new Promise(function(resolve) {
    resolve("fo");
});
function callback(){
    console.log(d);
}

d.then(callback);

