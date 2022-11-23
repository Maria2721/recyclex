import { useEffect } from 'react';

export const useDisableBodyScroll = (open) => {
    useEffect(() => {
    let chatIcon = document.querySelector('.app__chatIcon');
    let chatOnline = document.querySelector('.app__chatOnline')

    if (open) {
        document.body.style.paddingRight = `${scrollbarWidth()}px`;
        chatIcon.style.display = 'none';
        chatOnline.style.display = 'none';
        document.body.style.overflow = 'hidden';
        // fixBody();
    } else {
        document.body.style.paddingRight = '0px';
        chatIcon.style.display = 'block';
        chatOnline.style.display = 'block';
        document.body.style.removeProperty('overflow');
        // releaseBody();
    }
}, [open]);
};

//Функция расчитывает и возвращает  шируну скроллбара
const scrollbarWidth = () => {
	//Отключить полосы прокрутки в теле
	document.body.style.overflow = 'hidden';
	var width = document.body.clientWidth;
 
	// Полоса прокрутки
	document.body.style.overflow = 'scroll';
 
	width -= document.body.clientWidth;
 
	// IE в стандартном режиме
	if(!width) width = document.body.offsetWidth-document.body.clientWidth;
 
	// восстановить исходные настройки
	document.body.style.overflow = '';
 
	return width;
}

// let scrollPosition = 0;

// const fixBody = () => {
// 	const body = document.body;

//     body.dataset.state = 'fixed';

//     scrollPosition = window.pageYOffset;
//     Object.assign(document.body.style, {
//         top: `-${scrollPosition}px`,
//         width: '100%',
//         overflow: 'hidden',
//         position:'fixed',
//     })
// }

// const releaseBody = () => {
// 	const body = document.body;

//     body.dataset.state = 'released';

//     body.style.removeProperty('overflow');
//     body.style.removeProperty('position');
//     body.style.removeProperty('top');
//     body.style.removeProperty('width');
//     window.scrollTo(0, scrollPosition);
// }




        