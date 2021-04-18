var Control_Versions = [
    {
        "name":"Git",
        "desc":""
    },
    {
        "name":"SVN",
        "desc":""
    }
]

var Lenguajes = [
    {
        "name":"Python",
        "desc":"This is my actual main lenguaje"
    },
    {
        "name":"Bash Scripts",
        "desc":"This is my actual main lenguaje"
    },
    {
        "name":"Java Script",
        "desc":""
    },
    {
        "name":"C#",
        "desc":""
    },
    {
        "name":"Java",
        "desc":""
    },
    {
        "name":"React / React Native",
        "desc":""
    },
    {
        "name":"Wealthview Banking",
        "desc":""
    },
]

var Technologies = [
    {
        "name":"Docker",
        "desc":""
    },
    {
        "name":"Jenkins",
        "desc":""
    },
    {
        "name":"Notion",
        "desc":""
    },
    {
        "name":"Slack",
        "desc":""
    },
    {
        "name":"Unity",
        "desc":""
    },
    {
        "name":"SonarQube",
        "desc":""
    },
]

function printKnowledge (array)
{
    array.forEach(element => {
        document.writeln(`<li>${element.name}</li>`)
        if(element.desc!=""){
            document.writeln(`<ul><li>${element.desc}</li></ul>`)
        }
        
    });
};

