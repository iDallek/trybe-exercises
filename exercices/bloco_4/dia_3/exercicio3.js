let n = 6;
let spaceBox = '';
let nBox = '';


for(let i = 1; i < n; i += 1){
  spaceBox = '\xa0'.repeat(n)
}

for(let i = 0; i < n; i += 1){
  spaceBox = spaceBox.substring(1)
  if(spaceBox.length < n){
    spaceBox += '*'
  } 
  console.log(spaceBox);
}
