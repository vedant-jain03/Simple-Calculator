function getHistory(){
    return document.getElementById("history-val").innerHTML;
}
function printHistory(num)
{
    document.getElementById("history-val").innerHTML=num;
}
function getoutput(){
    return document.getElementById("output-val").innerHTML;
}
function printoutput(num){
    document.getElementById("output-val").innerHTML=num;
}
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
{
    operator[i].addEventListener("click",function(){
        if(this.id=="C")
        {
            printHistory("");
            printoutput("");
        }
        else if(this.id=="CE")
        {
            var output=getoutput().toString();
            output=output.substr(0,output.length-1);
            printoutput(output);
        }
        else{
            var output=getoutput();
            var history=getHistory();
            history=history+output;
            if(this.id=="=")
            {
                var res=eval(history);
                printoutput(res);
                printHistory("");
            }
            else if(this.id=="tofix")
            {
                var res=eval(history);
                printoutput(res.toFixed(2));
                printHistory("");
            }
            else{
                history=history+this.id;
                printHistory(history);
                printoutput("");
            }
        }
    })
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++)
{
    number[i].addEventListener("click",function(){
        var output=getoutput();
        output=output+this.id;
        printoutput(output);
    })
}