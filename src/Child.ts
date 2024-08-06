


process.on('message',(data: number) => {
       console.log('child process received data',data)
       for(let i = 0 ; i < data; i++){

       }
       
       if(process.send)
           process.send('ok')
});