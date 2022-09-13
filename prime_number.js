let num=15; 
let count=0;
for(let i=0;i<=num;i++)
{
    if(i%2==0)
    {
        count++;
    }
}
if(count==2)
{
    console.log("Prime number");
}
else{
    console.log("Not prime");
}