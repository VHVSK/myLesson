'use strict'

// Отримати масив елементів
const menuLinksWrappers = document.querySelectorAll('[data-line-effect]')

// Якщо є елементи, запускаємо функції
menuLinksWrappers.length ? menuEffect() : null

function menuEffect() {
  menuLinksWrappers.forEach((menuLinksWrapper) => {
    const menuLinks = menuLinksWrapper.querySelectorAll('a')
    // Отримуємо швидкість ефекту (мс)
    const effectSpeed = menuLinksWrapper.dataset.lineEffect
      ? menuLinksWrapper.dataset.lineEffect
      : 240
    // Якщо є пункти меню, запускаємо функцію
    menuLinks.length ? menuEffectItem(menuLinks, effectSpeed) : null
  })

  function menuEffectItem(menuLinks, effectSpeed) {
    // Перелік констант зі стилями різних станів
    const effectTransition = `transition: transform ${effectSpeed}ms ease;`
    const effectHover = 'transform: translate3d(0px, 0%, 0px);'
    const effectTop = 'transform: translate3d(0px, -100%, 0px);'
    const effectBottom = 'transform: translate3d(0px, 100%, 0px);'

    // Перебрати еелементи та додати код в меню, спочатку приховати ефект та показати текст
    menuLinks.forEach((menuLink) => {
      menuLink.insertAdjacentHTML(
        'beforeend',
        `<span style="transform: translate3d(0px, 100%, 0px);" class="hover">
            <span style="transform: translate3d(0px, -100%, 0px);" class="hover__text">${menuLink.textContent}</span> 
       </span>`
      )
      // При винекненні полдій коли переміщеється курсор та відбувається наведення
      // викликати функцію menuLinkActions()
      menuLink.onmouseenter = menuLink.onmouseleave = menuLinkActions
    })

    // Фкнкція подій курсору
    function menuLinkActions(e) {
      // Константи елементів
      const menuLink = e.target
      const menuLinkItem = menuLink.querySelector('.hover')
      const menuLinkText = menuLink.querySelector('.hover__text')

      // Отримаати половину висоти пунку меню
      const menuLinkHeight = menuLink.offsetHeight / 2
      // Отримати позиці. курсору при взаємодії з елементом
      const menuLinkPos =
        e.pageY - (menuLink.getBoundingClientRect().top + scrollY)

      // При наведені курсору
      if (e.type === 'mouseenter') {
        // В залежності від позиції курсору додаємо певні стилі
        menuLinkItem.style.cssText =
          menuLinkPos > menuLinkHeight ? effectBottom : effectTop
        menuLinkText.style.cssText =
          menuLinkPos > menuLinkHeight ? effectTop : effectBottom

        // З певною затримокою змінюємо стилі та відображаємо ефект
        setTimeout(() => {
          menuLinkItem.style.cssText = effectHover + effectTransition
          menuLinkText.style.cssText = effectHover + effectTransition
        }, 5)
      }

      // При переведеннні курсору
      if (e.type === 'mouseleave') {
        // В залежності від позиції курсору додаємо певні стилі
        menuLinkItem.style.cssText =
          menuLinkPos > menuLinkHeight
            ? effectBottom + effectTransition
            : effectTop + effectTransition
        menuLinkText.style.cssText =
          menuLinkPos > menuLinkHeight
            ? effectTop + effectTransition
            : effectBottom + effectTransition
      }
    }
  }
}
