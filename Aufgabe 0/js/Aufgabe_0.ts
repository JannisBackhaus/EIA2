namespace Aufgabe0_EIA2
{
    function main()  
    {
        var name : string = prompt("Wie darf ich dich nennen?");
        var node : any = document.getElementById("htmlcontent");
        var content: string = "";
        content+= "Moin ";
        content+= name;
        content+= ", hier geht's zu meiner Javascript Datei:";
        console.log(content);
        node.innerHTML = content
    } 
document.addEventListener('DOMContentLoaded',main);
}  