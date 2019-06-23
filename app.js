var friends = ["RT", "CHAND", "SOUND", "SUGU", "RANJU"];
function writeSong(name){
    console.log(name+":");
    for (n=5; n>0; n--){
        if (n>1){
            console.log (n +" lines of code in the file, "+n + " lines of code; "+ name +" strikes one out, clears it all out, "+(n-1)+" lines of code in the file, ");
        }
        else {
            console.log (n +" lines of code in the file, "+n + " lines of code; "+ name +" strikes one out, clears it all out, "+ "no more lines of code in the file ");
        } 
    }
}
for (i=0; i<friends.length; i++){
    writeSong(friends[i]);
}