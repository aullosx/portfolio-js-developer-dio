
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/aullosx/portfolio-js-developer-dio/refs/heads/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}