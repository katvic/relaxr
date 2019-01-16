var articles = document.querySelectorAll ('article');

for (var i = 0; i < articles.length; i++) {
	(function(){
var toggle = articles[i].querySelector('.toggle');
var para = articles[i].querySelector('.para');
var content = articles[i].querySelector('.para p');
var height = content.clientHeight;

toggle.addEventListener('click', function(){
	if(para.classList.contains('active')) {
        para.style.height = '100px';
        toggle.innerHtml = "Read Less>";
        para.classList.remove('active');

	} else {
        para.style.height = height + 'px';
        toggle.innerHtml = "Read More>";
        para.classList.add('active');
	}
	
	})

})()

}