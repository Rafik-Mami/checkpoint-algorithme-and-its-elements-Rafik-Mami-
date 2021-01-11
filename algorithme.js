function calculString(){
    let length=0;
    let NBword=0;
    let NBvowels=0;
    let i=0;
    let result=[length,NBword,NBvowels];
    while(str[i]!=".")
    {/*
    if(str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' ||str[i].toLowerCase() == 'e' ||str[i].toLowerCase() == 'u')
    {
        NBvowels++;
        i++;
    }
    */
    if(str[i]==" ")
    {
        NBword++;
        i++;
    }
    else{
        length++;
        i++;
    }
    
    
    }
return result

    }
    let str="Rafik mami has ana time"
    console.log(calculString(str))