for(var i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i);
    },i*1000)
}

/* Here we are expecting a output like 1 2 3 4 5 but it executes 6 6 6 6 6 this is because of we are using var (it is global scoped) so the variable is shared
across the complete loop it does not creates any instance. 

Similarly For loop is synchronous block so the javascript add it to the main thread and the setTimeout is a asynchronous operation it moves the asynchronous 
code to the event loop

So when this synchronous block execution completes then only asynchronous will execute the synchronous will end only when the loop stops

At the time loop ends the i=6 thats why the loop ends So the asynchronous will execute the i which is 6 thats all. 


This can be changed via putting var to let this makes the variable block scoped so everytime the new instance creating for i variable so it will print 1 2 3 4 5*/