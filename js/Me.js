var soft_skills=[
    {
        "name":"Creativity",
    },
    {
        "name":"Adaptability",
    },
    {
        "name":"Teamwork",
    },
    {
        "name":"Self-Motivation",
    },
    {
        "name":"Ambition",
    },
    {
        "name":"Leadership",
    },
]

var other_things=[
    {
       "text":""
    }
]

var secret=[{
    "text":"I have to say that I have used JavaScript to dynamically display certain parts of my Resume as well as Bootstrap for the styles"
}]

function printMeThings (array)
{
    array.forEach(element => {
        document.writeln(`<span class="badge badge-pill badge-info">${element.name}</span>`)
    });
};

function printText(array)
{
    array.forEach(element => {
        document.writeln(`<div class="">
                            <h4>Secret!!!...</h4>
                            <p class="text-muted">${element.text}</p>
                        </div>`)
    });
};