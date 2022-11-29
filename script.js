// name image 

const main = document.createElement('div');
main.setAttribute('class',"main");
const image= document.createElement('div');
image.setAttribute('class',"image");
main.append(image)
const header = document.createElement('div');
header.setAttribute('class',"header");
image.append(header)

const img = document.createElement('img')
img.setAttribute ('src',"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHMU_uEeB8eVTNSEVIby-PVIh6tvGX_RI4w&usqp=CAU")
header.append(img);
const white = document.createElement('div');
white.setAttribute('class',"white");
image.append(white)
const space = document.createElement('span')
white.append(space)
const h1= document.createElement('h1');
h1.innerText = "BRIAN DUDY";
white.append(h1)

const h4= document.createElement('h4');
h4.innerText = "N. Damen Avenue, Chicago 99999 | 099 999 9999 | hello@kickresume.com | www.kickresume.com "
h4.style.marginLeft="20%"
main.append(h4)

// profile
const divide = document.createElement('div');
divide.setAttribute('class',"divide");
main.append(divide)
const leftside = document.createElement('div');
leftside.setAttribute('class',"left");
divide.append(leftside)
const profile = document.createElement('div');
profile.setAttribute('class',"profile");
leftside.append(profile)
const container = document.createElement('div');
container.setAttribute('class',"container");
profile.append(container)
const logo= document.createElement('div');
logo.setAttribute('class',"logo");
container.append(logo)
const i = document.createElement('i');
i.classList.add("fa-solid" , "fa-user")
logo.append(i)
const h2= document.createElement('h2');
h2.innerText = "Profile"
container.append(h2)
const content = document.createElement('div');
content.setAttribute('class',"content");
profile.append(content)
const p = document.createElement('p')
p.innerHTML=`innovative optimized solution seeker. 
Excited to<br/> be at the deployment phase of my new career<br/>
as a web developer. I am ambitious,<br/> adventurous, 
assiduous, animated, and an alliteration adovocate.`
content.append(p)

// skills
const container1 = document.createElement('div');
container1.setAttribute('class',"container1");
leftside.append(container1)
const logo1= document.createElement('div');
logo1.setAttribute('class',"logo");
container1.append(logo1)
const i1 = document.createElement('i');
i1.classList.add("fa-solid" , "fa-flask")
logo1.append(i1)
const skills= document.createElement('h2');
skills.innerText = "skills"
container1.append(skills)
const Technicalskills= document.createElement('h5');
Technicalskills.innerText = "Technical skills"
leftside.append(Technicalskills)
const skills1 = document.createElement('div');
skills1.setAttribute('class',"skills");
leftside.append(skills1)
const content1= document.createElement('div');
content1.setAttribute('class','content' ) 
skills1.append(content1)
content1.innerHTML = `  
 <label>JavaScript</label><br/>
 <label>CSS</label><br/>
 <label>HTML</HTML></label><br/>
 <label>React</label><br/>
 <label>Redux</label><br/>
 <label>Mango</label><br/>
 <label>Deployment</label>` 

 const content2= document.createElement('div');
 content2.setAttribute('class', 'range' ) 
 skills1.append(content2)
 content2.innerHTML = ` <input type="range" /><br/>
 <input type="range" /><br/>
 <input type="range" /><br/>
 <input type="range" /><br/>
 <input type="range" /><br/>
 <input type="range" /><br/>
 <input type="range" />`
 content2.style.paddingLeft="20%"

const Additionalskills= document.createElement('h5');
Additionalskills.innerText = "Additional skills"
leftside.append(Additionalskills)
const skills2 = document.createElement('div');
skills2.setAttribute('class',"skills");
leftside.append(skills2)
const content3= document.createElement('div');
content3.setAttribute('class','content' ) 
skills2.append(content3)
content3.innerHTML = `    <label>Project Management</label><br/> 
<label>Recruitement</label><br/>
<label>Business Developement</label><br/>
<label>Editing</label> <br/>
<label>Fundraising</label> `

 const content4= document.createElement('div');
 content4.setAttribute('class', 'range' ) 
 skills2.append(content4)
 content4.innerHTML = ` <input type="range" /><br/>
 <input type="range" /><br/>
 <input type="range" /><br/>
 <input type="range" /><br/>
 <input type="range" />`

//  work experience1
const work = document.createElement('div');
work.setAttribute('class','container1')
leftside.append(work)
const logo2 = document.createElement('div');
logo2.setAttribute('class',"logo");
work.append(logo2)
const i2 = document.createElement('i');
i2.classList.add("fa-solid" , "fa-briefcase")
logo2.append(i2)
const workexperience= document.createElement('h2');
workexperience.innerText="Work experience"
work.append(workexperience)

const details = document.createElement('div');
leftside.append(details)
const p1 = document.createElement('p')
details.append(p1)
p1.style.paddingTop="2%"
p1.style.paddingLeft="5%"
const span1 = document.createElement('span')
p1.append(span1)
span1.innerHTML=`Event manager <br> C3 Presents,Washington DC`
const span2 = document.createElement('span')
p1.append(span2)
span2.innerHTML="03/2014 - 02\2017"
span2.style.paddingLeft="40%"

const list = document.createElement('div');
list.setAttribute('class',"content")
leftside.append(list)
list.innerHTML=`<ul style="padding-left: 5%;" >
<li> Lead and execute all phase of event planning <br/>
and production spanning committee<br/> recruitement. training, vendor relationships<br/>
and on-site facilities  </li>
<li>Brought new business to the organization<br/> through relentles networking and stewardship<br/>
    which helped he company win the bid for the<br/> State Department Summit on the Middle East<br/>
    and, the companies largest civic event to date,<br/> the United State of Women
</li>
<li> Exercise fiscal control over budget creation,<br/> tracking and reporting.
     Collaborate with <br/>employees at all organizational levels to<br/> advance cohesive operation.
</li>
</ul>`

// right side
// work experience 2
const rightside = document.createElement('div');
rightside.setAttribute('class',"right");
divide.append(rightside)
const work1 = document.createElement('div');
work1.setAttribute('class',"container1");
rightside.append(work1)
const logo3 = document.createElement('div');
logo3.setAttribute('class',"logo");
work1.append(logo3)
const i3 = document.createElement('i');
i3.classList.add("fa-solid" , "fa-briefcase")
logo3.append(i3)
const workexperience1= document.createElement('h2');
workexperience1.innerText="Work experience"
work1.append(workexperience1)
const p2 = document.createElement('p')
rightside.append(p2)
p2.innerHTML=`<span style="font-weight: bolder;padding-top:2%;">
Community relationship Manager</span> <br/> Gay & Lesbian Elder Housing, Los Angels`
const span3 = document.createElement('span')
p2.append(span3)
span3.innerHTML="06/2011 - 01\2014"
span3.style.paddingLeft="15%"
p2.style.paddingTop="2%"
p2.style.paddingLeft="7%"


const list1 = document.createElement('div');
list1.setAttribute('class',"content")
rightside.append(list1)
list1.innerHTML=`  <ul style="padding-left: 5%;">
<li>Arranging presentat ons and pitch deck.</li>
<li>Designing a PR plan and establishing <br/> important focus point.</li>
<li>Designing creating and managing content <br/> across multible communication platforms</li>
<li>Building relationships with key media players.</li>
</ul>`

// education

const education = document.createElement('div');
education.setAttribute('class',"container1");
rightside.append(education)
const logo4 = document.createElement('div');
logo4.setAttribute('class',"logo");
education.append(logo4)
const i4 = document.createElement('i');
i4.classList.add("fa-solid" , "fa-graduation-cap")
logo4.append(i4)
const education1= document.createElement('h2');
education1.innerText="Education"
education.append(education1)
const p3 = document.createElement('p')
rightside.append(p3)
p3.innerHTML=`<span style="font-weight: bolder;">Engineering Immersion Program</span>
<br/>Thinkful,Chicago,IL`
const span4 = document.createElement('span')
p3.append(span4)
span4.innerHTML="11/2018 - 06\2018"
span4.style.paddingLeft="40%"
p3.style.paddingTop="2%"
p3.style.paddingLeft="7%"
const p4 = document.createElement('p')
rightside.append(p4)
p4.innerHTML=`Project-focused intensive program with emphasis on Mongo,Express,<br/> React, and JavaScript
(MERN) tecnical stack.`
p4.style.paddingTop="2%"
p4.style.paddingLeft="7%"

const list2 = document.createElement('div');
list2.setAttribute('class',"content")
rightside.append(list2)
list2.innerHTML=` <ul style="padding-left: 5%;">
<li>Developed a fullstack web application,<br/>"RenewU", using React that allows
    users to <br/>explore various aspects of mediation.User's<br/> progress is stored on a backend
     created using <br/>Node and MongoDB
</li>
<li>Developed a language learning app, "Foodie Phonetics" <br/>using spaced repetirions and a<br/> linked 
    list data structure.React was used <br/>to create the front end components while<br/> Node and 
    Mongo were used to <br/>create a backend that stores user data.
</li>
<li>Developed a concierge app, "Pley", for <br/>individuals looking for curated suggestions<br/> when
    visiting a new place.React was<br/> used to developevthe front end which <br/>includes real-time chat,
    drag and <br/>drop and variety of advanced features. <br/>The backend, built using Node, Expres,<br/>
    and Mongo, takes advantage of well <br/>developed restful API, Geospatial searching,and <br/>user
    authentication with JWT.
</li> 
</ul>`
 
// end
const BA  = document.createElement('div');
rightside.append(BA)
const english = document.createElement('p')
BA.append(english)
english.innerHTML=`<span style="font-weight: bolder;">B.A English</span>
<br/>Univercity of California, Los Angels `
const date = document.createElement('span')
english.append(date)
date.innerHTML="11/2018-06\2018"
date.style.paddingLeft="30%"
english.style.paddingTop="2%"
english.style.paddingLeft="7%"


const body = document.querySelector('body')
body.append(main)


