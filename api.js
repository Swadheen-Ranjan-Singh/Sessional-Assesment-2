var b=document.getElementById("apibtn");
b.addEventListener("click",fetchData);

function fetchData()
{
    document.getElementById("top-blogs").style.display="block";
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState===4 && xhr.status===200)
        {
            const user=JSON.parse(xhr.responseText);
            console.log(user);
        }
    }
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09",true);
    xhr.send();
}