var Band = function(){

Band.prototype.info = function(){
    return 'Nama Band: '+this.name;
}

Band.prototype.add = function(name){
    this.name = name;
}



 
 Band.add('Dewa 19');

console.log(band.info);

};