var Jobs = [
    {
        "name":"Nexion Solutions",
        "link":"http://nexions.com",
        "img":"http://nexions.com/wp-content/uploads/2018/06/logo.png",
        "type":"Job",
        "date":"Start 2019",
        "desc":"Actual Job"
    },
    {
        "name":"EDUCEM - Centro de Estudios",
        "link":"http://mieducem.mx/",
        "img":"imgs/educem.png",
        "type":"Job",
        "date":"Start 2018 to 2019",
        "desc":"This is my last job, on this job I learned about C# + ASP.NET on my own using web resources and advices from my coworkes. The first month I gotten the task to rebuild a plataform and... I made it. And my leader projects give me one more proyects and... I made it. All my projects was for implements tools for the students and administratives stuffs."
    },
    {
        "name":"El 14 BrewHouse",
        "link":"https://www.facebook.com/The14BrewhouseExpress/",
        "img":"imgs/14logo.png",
        "type":"Job",
        "date":"Start 2015 to 2018",
        "desc":"I was a kind of admin on this place, my leader give the opportunity to develop a sales point and social content on FaceBook, Twitter e Instargam."
    },
    {
        "name":"Tepoli Cerveceria",
        "link":"http://www.tepolicerveceria.com/",
        "img":"https://tepolicerveceria.com/wp-content/uploads/2021/09/cerveza-artesanal-en-guanajuato-1024x229.png",
        "type":"Project",
        "date":"On 2017",
        "desc":"This is my first web, was made using PHP, MySQL, MaterializeCSS (Framework), FontAwesome, Hostgator (Server), Tepoli Cerveceria. This website its about a CraftBeer called Tepoli from Uruapan,Michoacan Mexico."
    },
    {
        "name":"Coadse",
        "link":"http://coadse.com/",
        "img":"imgs/coadse.png",
        "type":"Project",
        "date":"On 2016",
        "desc":"On this proyect with my team we develop a multhitrhead functions to send data from station gas to a DataBase on Mexico City, using Java. Was made it because the customer wants the most quicky the boucher and send it to him email. Team -> Ing.Daniel Herrera Valenzuela y el Ing. Juan Pablo Muñoz Mora using JAVA with threads."
    },
    {
        "name":"Hackathon Open Stack",
        "link":"https://www.facebook.com/HackathonOpenStack/",
        "img":"imgs/teamOS.jpg",
        "type":"Hackathon",
        "date":"On 2015",
        "desc":"My first and my last Hackaton, in this Hackaton we develop a mobile app to help cityzens about the issues from his town, like problems with services like : Water, Streth lightings, Streets holes, Robers, etc. The host tools was OPENSTAK (cloudservices) , MongoDB (Data Base) y Xamarin (Framework) On a live stream by Codigo Facilito I saw this event."
    },
    {
        "name":"The Beerbox Uruapan",
        "link":"https://www.facebook.com/TheBeerBoxUPN",
        "img":"imgs/tbbU.jpg",
        "type":"Job",
        "date":"Start 2013 to 2015",
        "desc":"Thats my first job and I was a kind of admin on this place, my leader give the opportunity to develop a sales point and social content on FaceBook, Twitter e Instargam."
    },
]

function printJobs (array)
{
    array.forEach(element => {
        document.writeln(`
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card shadow-sm p-3 mb-5 bg-white rounded">
                ${typeJobs(element.type)}
                <br>
                <img src="${element.img}" class="m-2 mx-auto img-fluid img-thumbnail" style="width: 250px; height: auto;" alt="...">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="blockquote-footer">
                    <span class="badge badge-pill badge-warning">Date
                        ${element.date}
                    </span>
                </p>
                <p class="card-text">${element.desc}</p>
                <a href="${element.link}" class="btn btn-primary" target="_blank">Refer Links</a>
                </div>
            </div>
        </div>
        `)
    })
}

function typeJobs(type){
    if (type == "Job")
        return `<span class="badge badge-success">${type}</span>`
    if (type == "Project")
        return `<span class="badge badge-info">Side ${type}</span>`
    if (type == "Hackathon")
        return `<span class="badge badge-secondary">${type}</span>`
}
