let elSiteHeader = document.querySelector(".site-header")
let elContainer = document.createElement("div")
let elHeader = document.createElement("div")
let elHeaderLogoLink = document.createElement("a")
let elHeaderLogoImg = document.createElement("img")
let elHeaderList = document.createElement("ul")
let elHeaderBtnwrapper = document.createElement("div")
let elBtnLogin = document.createElement("a")
let elBtnSignup = document.createElement("a")

elSiteHeader.className = "py-[28px] bg-white shadow-2xl rounded-2xl"

let linksHeader = ["FAQ", "Docs", "Integrations", "Pricing"]

linksHeader.forEach(item => {
    let elHeaderItem = document.createElement("li")
    let elHeaderItemLink = document.createElement("a")

    elHeaderItemLink.className = "text-[#535479] text-sm font-normal leading-6 tracking-[0.14px] hover:opacity-70 hover:underline"
    elHeaderItemLink.href = "/"
    elHeaderItemLink.textContent = item

    elHeaderList.appendChild(elHeaderItem)
    elHeaderItem.appendChild(elHeaderItemLink)
})

elBtnLogin.textContent = "Login"
elBtnSignup.textContent = "Sign up"
elBtnLogin.href = "/"
elBtnSignup.href = "/"
elBtnLogin.className ="text-[#535479] text-sm font-normal leading-6 tracking-[0.14px] hover:underline"
elBtnSignup.className ="w-[100px] py-[7px] text-center text-white text-sm font-normal leading-4 tracking-[0.14px] rounded-[40px] bg-[#0E0B3D] border-2 border-solid border-[#0E0B3D] hover:bg-white hover:text-[#0E0B3D] duration-[0.5s]"


elContainer.className = "w-[1280px] px-[24px] mx-auto"
elHeader.className = "flex items-center justify-between"
elHeaderList.className = "flex items-center gap-[44px]"
elHeaderBtnwrapper.className = "flex items-center gap-[32px]"
elHeaderLogoLink.href = "/"
elHeaderLogoLink.className = "inline-block"
elHeaderLogoImg.src = "./images/formcarry..svg"
elHeaderLogoImg.alt = "SIte logo img"
elHeaderLogoImg.width = "157"
elHeaderLogoImg.height = "24"

elSiteHeader.appendChild(elContainer)
elContainer.appendChild(elHeader)
elHeader.append(elHeaderLogoLink,elHeaderList,elHeaderBtnwrapper)
elHeaderLogoLink.appendChild(elHeaderLogoImg)
elHeaderBtnwrapper.append(elBtnLogin,elBtnSignup)

