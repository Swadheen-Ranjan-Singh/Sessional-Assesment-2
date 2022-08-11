var b=document.getElementById("apibtn");
b.addEventListener("click",fetchData);

function rng(min, max)
{
    return Math.floor(Math.random() * (max - min) ) + min;
}

function fetchData()
{
    document.getElementById("top-blogs").style.display="block";
    const xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState===4 && xhr.status===200)
        {
            const user=JSON.parse(xhr.responseText);
            loadData(user);

        }
    }
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09",true);
    xhr.send();
}

function loadData(user)
{
    blogsec=document.getElementById("blogsec");
    for(var data of user)
    {
        var a=rng(1,3), b=rng(1,9),c=rng(5,50);

        var t=data.title.split(" ");
        for(var i=0;i<t.length;i++)
            t[i]=t[i].charAt(0).toUpperCase() + t[i].slice(1);
        t=t.join(" ");

        const blog=`
        <div class="p-4 lg:w-1/3">
        <div
          class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Blog</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">${t}</h1>
          <p class="leading-relaxed mb-3">${data.body}</p>
          <a class="text-indigo-500 inline-flex items-center">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span
              class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>${a}.${b}K
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                stroke-linejoin="round" viewBox="0 0 24 24">
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                </path>
              </svg>${c}
            </span>
          </div>
        </div>
      </div>`
      blogsec.innerHTML+=blog;
    }
}