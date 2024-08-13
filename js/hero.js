let elSiteMain = document.querySelector(".site-main")
let elSectionhero = document.createElement("section")
let elMainContainer = document.createElement("div")
let elHero = document.createElement("div")
let elHeroStrong = document.createElement("strong")
let elHeroTitle = document.createElement("h1")
let elHeroText = document.createElement("p")
let elHeroBtn = document.createElement("button")

elSiteMain.appendChild(elSectionhero)
elSectionhero.appendChild(elMainContainer)
elMainContainer.appendChild(elHero)
elHero.append(elHeroStrong,elHeroTitle,elHeroText,elHeroBtn)

elSectionhero.className = "mt-[80px]"
elMainContainer.className = "w-[800px] px-[24px] mx-auto"
elHero.className = "flex flex-col text-center  items-center"



elHeroStrong.textContent = "COLLECT FORM SUBMISSIONS"
elHeroStrong.className = "block mb-[12px] text-[#1463FF] font-bold text-sm leading-6 tracking-[0.28px]"

elHeroTitle.textContent = "Get email sand messages from your HTML form"
elHeroTitle.className = "mb-[14px] text-[#0E0B3D] font-normal text-[54px] leading-[72px] tracking-[2.56px]"

elHeroText.textContent = "Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps."
elHeroText.className = "mb-[48px] text-[#0E0B3D] font-normal text-[17px] leading-9 tracking-[0.18px]"

elHeroBtn.textContent = "Get Started"
elHeroBtn.className = "w-[143px] py-[12px] text-white text-center bg-[#030122] text-[13px] font-normal leading-6 tracking-[0.28px] rounded-[50px] hover:bg-white border-2 border-solid border-[#030122] hover:text-[#030122] duration-[0.5s]"
