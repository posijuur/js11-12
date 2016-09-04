$(function(){

  var data = {
    title : 'Щербань Глеб Александрович',
    img   : 'img/myfoto.jpg',
    will  : 'Хочу учить фронтенд, потому что:',
        
    why:[
      {key: '♥ Это интересно, видишь свои результаты'},
      {key: '♥ Голова всегда думает'},
      {key: '♥ Не прикован к месту'},
    ],

    titleTelefon : 'Мой контактный телефон ',
    telefon : '+3080665052548',
    myPage : 'Мой профиль в фейсбук',
    linkMypage : 'https://www.facebook.com/profile.php?id=100005782399050',
    linkMypageName : 'моя страничка',
  }; 

  var results = document.querySelector(".js-my-page");
  results.innerHTML = tmpl("temple", data);

});