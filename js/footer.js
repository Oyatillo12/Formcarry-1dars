let elSiteFooter = document.querySelector(".site-footer")
let elFooterContainer = document.createElement("div")
let elFooterText = document.createElement("p")
let elFooterList = document.createElement("ul")
let ulFooterMedia = document.createElement("ul")

elSiteFooter.className = "mt-[100px] w-[1112px] mx-auto px-[20px] py-[20px] bg-[#F7F9FC] rounded-[12px]"
elFooterContainer.className = "flex justify-between items-center"

elFooterText.textContent = "formcarry. all rights reserved"
elFooterText.className = "text-[#535479] font-normal text-[13px] leading-6"

let footeLinks = ["Terms of Service", "Privacy Policy"]
footeLinks.forEach(item => {
    let elFooterItem = document.createElement("li")
    let elFooterItemLink = document.createElement("a")

    elFooterItemLink.href = "/"
    elFooterItemLink.textContent = item
    elFooterItemLink.className = "text-[#535479] font-normal text-[13px] leading-6"

    elFooterList.appendChild(elFooterItem)
    elFooterItem.appendChild(elFooterItemLink)
})

let footerMediasImg = ["./images/twitter.svg","./images/facebook.svg","./images/git.svg"]

footerMediasImg.forEach(item => {
    let elFooterMediaItem = document.createElement("li")
    let elFooterMediaItemLink = document.createElement("a")
    let elFooterMediaItemImg = document.createElement("img")

    elFooterMediaItemLink.href = "#"
    elFooterMediaItemImg.src = item
    elFooterMediaItemImg.alt = "Social media img"
    elFooterMediaItemImg.width = "32"
    elFooterMediaItemImg.height = "32"

    ulFooterMedia.appendChild(elFooterMediaItem)
    elFooterMediaItem.appendChild(elFooterMediaItemLink)
    elFooterMediaItemLink.appendChild(elFooterMediaItemImg)
})

elFooterList.className = "flex items-center space-x-[31px]"
ulFooterMedia.className = "flex items-center space-x-[24px]"

elSiteFooter.appendChild(elFooterContainer)
elFooterContainer.append(elFooterText,elFooterList,ulFooterMedia)