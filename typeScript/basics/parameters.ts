function add(num1: any, num2?: any){
    if (num2!=undefined){
        console.log(num1+num2);
    }
    else
    {
        console.log(num1);
    }  
}

add(3,undefined);

interface Testuser {
    userid: number;
    name: string;
}

class Superuser implements Testuser{
    userid=5;
    name="suriya";
}

interface Testradar {
    radarid: number;
    radarname: string;
}

interface randomuser extends Testradar{

}