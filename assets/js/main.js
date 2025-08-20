
function updateprofileInfo (profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href= `mailto:${profileData.email}`

}

function uptadeSoftSkills(profileData){

    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skills => `<li>${skills}</li>`).join('')
}   

function uptadeHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skills => `<li><img src="${skills.logo}" alt="${skills.name}" title="${skills.name}"></li>`).join('')
}


function uptadeLanguages (profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(lenguage =>  `<li> ${lenguage}</li>`).join('')

}

function uptadeProjects (profileData){
    const projects = document.getElementById('profile.portfolio')
    projects.innerHTML = profileData.portfolio.map(project => 
        `
        <li>
            <h3 ${project.github ? 'class="title github"' : ''}>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>
        `).join('')
}

function updateExperience (profileData){
    const professionalExperiences = document.getElementById('professionalExperience')
    professionalExperiences.innerHTML = profileData.professionalExperience.map(experience => 
        `<li>
            <h3 class="title "> ${experience.name}</h3>
            <p class="period">${experience.period}</p>
            <p>${experience.description}</p>

        </li>
        `).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateprofileInfo(profileData)
    uptadeSoftSkills(profileData)
    uptadeHardSkills(profileData)
    uptadeLanguages(profileData)
    uptadeProjects(profileData)
    updateExperience(profileData)

})()