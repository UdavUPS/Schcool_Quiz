function addNewCard(logo, name, date, pageName, regHref) {
    let cardBlok = document.querySelector('.main__card-blok');


    let divCont = document.createElement('div');
    divCont.classList.add('main__card-blok__card');

    const img = document.createElement('img');
    img.classList.add('main__card-blok__card__logo');
    img.src = 'images/Sub-logo/' + logo;
    img.alt = 'Предметный квиз';

    const divInfo = document.createElement('div');
    divInfo.classList.add('main__card-blok__card__info');
    
    const h3 = document.createElement('h3');
    h3.classList.add('main__card-blok__card__info__title');

    const a = document.createElement('a');
    a.classList.add('main__card-blok__card__info__title__a');
    a.href = 'pagesOFsubject/'+ pageName + '.html';
    a.innerHTML = name;

    h3.appendChild(a);
    h3.innerHTML = h3.innerHTML + '<p>' + date +'</p>';

    const p = document.createElement('p');
    p.classList.add('main__card-blok__card__info_text');
    p.innerHTML = 'Ссылка на регистрацию: ';

    const aForP = document.createElement('a');
    aForP.classList.add('reg-form');
    aForP.innerHTML = 'Быстрая регистрация';
    aForP.href = regHref;
    p.appendChild(aForP);

    divInfo.appendChild(h3);
    divInfo.appendChild(p);

    divCont.appendChild(img);
    divCont.appendChild(divInfo);

    cardBlok.appendChild(divCont);

    console.log(cardBlok);

}