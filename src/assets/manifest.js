// Every external image used by the site lives here.
// `npm run assets` downloads each `remote` file into src/assets/<folder>/<key>.<ext>.
// Until a real file exists, a local placeholder from src/assets/placeholders/<key>.svg is used.
const W = 'https://carrerforge.com/wp-content/uploads'

export const manifest = {
  logo:               { folder: 'logo',   alt: 'Careerforge Consulting', remote: `${W}/2024/04/WhatsApp-Image-2026-03-07-at-22.02.58.jpeg` },

  'about-team':       { folder: 'images', alt: 'Careerforge team at work',         remote: `${W}/2025/12/Pics-1.jpg` },
  'service-talent':   { folder: 'images', alt: 'Talent acquisition and placement', remote: `${W}/2025/12/Recruitment-VS-Talent-1.webp` },
  'service-contract': { folder: 'images', alt: 'Contract staffing solutions',      remote: `${W}/2025/12/01-What-Does-Contract-Staffing.webp` },
  'service-profile':  { folder: 'images', alt: 'Profile marketing',                remote: `${W}/2025/12/1698765524893.png` },
  'service-career':   { folder: 'images', alt: 'Career counseling',                remote: `${W}/2025/12/ZrIeuUaF0TcGIuAp_TheImportanceofCareerCounsellingSkillsforHRProfessionals.avif` },
  'service-training': { folder: 'images', alt: 'Employee training programs',       remote: `${W}/2025/12/5G8A8444-2048x1365-1.avif` },
  'service-client':   { folder: 'images', alt: 'Client-centric approach',          remote: `${W}/2025/12/Client-Centric-Approach-body.Bhz1s5Wz_1bJAm6.webp` },
  process:            { folder: 'images', alt: 'Our hiring process',               remote: `${W}/2025/12/78205dbad1fa270025b99062f3de38df622248fb-1024x683-1.jpg` },

  'client-1':         { folder: 'images', alt: 'Client logo',        remote: `${W}/2025/12/download-1.png` },
  'client-amex':      { folder: 'images', alt: 'American Express',   remote: `${W}/2025/12/1200px-American_Express_logo_2018.svg-e1696486592594-300x190-1.png` },
  'client-amplifi':   { folder: 'images', alt: 'ampliFI',            remote: `${W}/2025/12/ampliFI_LS_RGB_color-bug_FINAL-300x194-1.png` },
  'client-att':       { folder: 'images', alt: 'AT&T',               remote: `${W}/2025/12/att.png` },
  'client-cisco':     { folder: 'images', alt: 'Cisco',              remote: `${W}/2025/12/cisco-300x158-1.png` },

  'work-1':           { folder: 'images', alt: 'Engagement photo 1', remote: `${W}/2025/12/78205dbad1fa270025b99062f3de38df622248fb-scaled-1.jpg` },
  'work-2':           { folder: 'images', alt: 'Engagement photo 2', remote: `${W}/2024/04/pic-3.jpg` },
  'work-3':           { folder: 'images', alt: 'Engagement photo 3', remote: `${W}/2024/04/pic-5.jpg` },
}
