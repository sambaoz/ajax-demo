var itcast = {
    getParameter:function(str){
       var str1=str.substring(1)
       var str2=str1.split('&')
       var demo={}
       for(var i=0; i<str2.length;i++ ) {
           
           var str3=str2[i].split('=')
           demo[str3[0]]=str3[1]

       }
       return demo
    }
}