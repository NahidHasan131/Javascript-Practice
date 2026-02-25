let str = "bangladesh";

let letterFrequency = {};

for(let i = 0; i<str.length; i++){
    letterFrequency[str[i]] = (letterFrequency[str[i]] || 0) + 1;
}
console.log(letterFrequency); 




