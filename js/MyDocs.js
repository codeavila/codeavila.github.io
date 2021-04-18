var Docs = [
    {
        "title":"Talk Python",
        "link":'https://github.com/dev-euab/Python_Talk'
    },
    {
        "title":"JavaScript Notes",
        "link":'https://github.com/dev-euab/JavaScript'
    },
    {
        "title":"MongoDB Notes",
        "link":'https://github.com/dev-euab/MongoDB'
    },
    {
        "title":"CRUD ASP C#",
        "link":'https://github.com/dev-euab/CRUD-ASP.NET-C-'
    },
    {
        "title":"Switf Manual (20%)",
        "link":'https://github.com/dev-euab/xcode_switf_manual'
    },
    {
        "title":"Basic SVN Commands",
        "link":'https://github.com/dev-euab/Basic_SVN_Commands'
    },

]

function printDocs (array)
{
    array.forEach(element => {
        document.writeln(`<li><a href="${element.link}" target="_blank">${element.title}</a></li>`)
    });
};