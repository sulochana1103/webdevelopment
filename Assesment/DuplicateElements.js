let a=[1,2,3,2,4,5,1]
let b=[]

for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]===a[j] && !b.includes(a[i])){
            b.push(a[i])
        }
    }
}
console.log(b)