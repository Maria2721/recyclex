import { useEffect } from 'react';

export const useDisableBodyScroll = (open) => {
    useEffect(() => {
    let chatIcon = document.querySelector('.app__chatIcon');
    let chatOnline = document.querySelector('.app__chatOnline')

    if (open) {
        document.body.style.paddingRight = `${scrollbarWidth()}px`;
        chatIcon.style.display = 'none';
        chatOnline.style.display = 'none';
        fixBody();
    } else {
        document.body.style.paddingRight = '0px';
        chatIcon.style.display = 'block';
        chatOnline.style.display = 'block';
        releaseBody();
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

let scrollPosition = 0;

const fixBody = () => {
	const body = document.body;

    body.dataset.state = 'fixed';

    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position= 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.width = '100%';
}

const releaseBody = () => {
	const body = document.body;

    body.dataset.state = 'released';

    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}




        