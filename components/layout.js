module.exports = {
	main: function (title, body) {
		return `
		<!doctype html>
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<title>WEB1 - ${title}</title>

				<!-- Stylesheets -->
				<link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.css">
				<link rel="stylesheet" type="text/css" href="/assets/css/common_test.css">
				<!-- // Stylesheets -->

				<script type="module" src="/assets/js/common.js"></script>
			</head>
			<body>
				<!-- header -->
				<header class="common2">
					<div class="hello2">
						<!-- <h1 class="logo">
							<a href="_index.html" title="" aria-label=""><small class="fs60">logo</small></a>
						</h1> -->
						<h1 class="logo" aria-label="test">
							<!-- <a href="_index.html" title="test" aria-label="test"></a> -->
						</h1>
			
			
						<!-- <nav class="gnb2" data-target="cardList2">
							<ul class="tabType2" style="--x: 0; --w: 60;">
								<li><button type="button" class="btn on" aria-current="page" data-category="모두">test</button></li>
								<li><button type="button" class="btn" data-category="menu1">menu1</button></li>
								<li><button type="button" class="btn" data-category="menu2">메뉴_menu2</button></li>
								<li><button type="button" class="btn" data-category="menu3">menu3</button></li>
							</ul>
						</nav> -->
			
			
			
						<div class="contact2">
							<a href="tel:010-3469-1323" class="btn icon call" title="전화하기" aria-label="전화하기">
								<i class="icon-svg-phone-01" aria-hidden="true"></i>
								<!-- <span>010.3469.1323</span> -->
							</a>
							<a href="mailto:bghbmh@gmail.com" class="btn icon mail" title="메일보내기" aria-label="메일보내기">
								<i class="icon-svg-mail-01" aria-hidden="true"></i>
								<!-- <span>bghbmh@gmail.com</span> -->
							</a>
							<button type="button" class="btn icon" title="망했네" aria-label="망하는 데" data-ui-action="launch">
								<i class="icon-svg-rocket-02" aria-hidden="true"></i>
							</button>
						</div>
					</div>
			
				</header>
				<!-- // header -->
				<main class="common2">
					<nav class="hashmenu">
						<button type="button" class="btn hash">한글입숨</button>
						<button type="button" class="btn hash">test한글입숨</button>
					</nav>
					<section class="grid cardList2" data-pc-columns="3" data-tablet-columns="2" data-mobile-columns="1">
						<h2 class="hidden">category_0</h2>

						${body}
					</section>
				</main>

				<!--footer-->
				<footer class="common2">
					<div class="copyright">
						ⓒ test
						<span class="contact">
							<a href="tel:010-3469-1323" class="btn icon" aria-label="전화하기"><i class="fa-solid fa-mobile-screen-button"></i></a>
							<a href="mailto:bghbmh@gmail.com" class="btn icon" aria-label="메일보내기"><i class="fa-solid fa-envelope"></i></a>
						</span>
					</div>
				</footer>
				<!-- // footer  -->
				
			</body>
		</html>
		`;
	},
	sub: function (title, body) {
		return `
		<!doctype html>
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<title>WEB1 - ${title}</title>

				<link rel="stylesheet" type="text/css" href="/assets/css/upload.css">
				<script src="/assets/js/common.js"></script>
			</head>
			<body>
				${body}

			
			</body>
		</html>
		`;
	},
	adminMain: function (title, itemList) {
		return `
		<!doctype html>
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<title>mylist - ${title}</title>

				<link rel="stylesheet" type="text/css" href="public/assets/css/bootstrap.css">
				<link rel="stylesheet" type="text/css" href="public/assets/css/upload.css">
				<script type="module" src="public/assets/js/upload.js"></script>
				<script defer="" src="public/assets/fonts/fontawesome/js/all.js"></script>
			</head>
			<body>
				<main class="common">
					<div class="grid itemList testform" data-tablet-columns="2" data-mobile-columns="1">
						<div class="col12 header">
							<button type="button" >삭제</button>
							<a href="/create" >추가</a>
						</div>
						${itemList}
					</div>
				</main>
				
				<div id="alertMsg">!!!알림메시지!!!</div>
			</body>
		</html>
		`;
	}
}