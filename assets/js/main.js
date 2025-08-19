function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name


    const name = document.getElementById('profile.name')
    name.innerHTML = profileData.name
    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job
    const location = document.getElementById('profile.location')
    location.innerHTML = profileData.location
    const phone = document.getElementById('profile.phone')
    phone.innerHTML = profileData.name
    const email = document.getElementById('profile.email')
    email.innerHTML = profileData.email
}

function uptadeSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = softSkills

}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()