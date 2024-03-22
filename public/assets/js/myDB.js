import * as cf from './commonFunction.js';

document.addEventListener("DOMContentLoaded", () => {
	
	console.log("DOMContentLoaded ")
	cf.fileHandler._load( { 
		url: '../0_last/data/test.json', 
		success : function(request){
			
			let html = ``;

			let itemsData = JSON.parse(request.responseText);
			for( let i=0; i<itemsData.length; i++ ){
				html = html + myDBCardType1(itemsData[i]);
			}		
			
			console.log(" request - ", itemsData );

			document.querySelector(".testform").innerHTML += html;

		},
		loadType:"item", 
		done: "items" 
	});




});




function myDBCardType1(item){
	
	//let item = items.find( o => o.id === parseInt(selectedItem) );
	console.log("success - ", item );
	return `
	<div class="col4 item">
		<header class="d-flex">
			<label class="margin-right-auto">
				<input type="checkbox" name="testform">
			</label>

			${item.main ? '<span class="label blue">메인에서 보임</span>' : ''}
			
		</header>
		<div class="cnts grid">
			<div class="col5 " style="background-color: #e9e9e9;">
				<div class="upload fileList type2 w-100per">
					${imgType1(item.img.main)}
				</div>

				<div class="upload fileList type3 w-100per margin-top-1"> <!-- 파일 업로드할때 -->
					${imgType1(item.img.sub)}							
				</div>
					
			</div>

			<div class="col7 d-flex flex-column align-items-start " style="background-color:#eeaacc;">
				<div class="w-100per" data-ui-placeholder>
					<span class="guide">카테고리</span>
					<p>${item.category}</p>
				</div>

				<hr class="w-100per dot">

				<div class="w-100per">
					<span class="guide">test_해시태그</span>
					<p>
						${hashType(item.hash)}
					</p>
				</div>

				<hr class="w-100per dashed">

				<div class="w-100per">
					<span class="guide">제목</span>
					<p>${item.title ? item.title : ''}</p>
				</div>

				<hr class="w-100per dot">

				<div class="w-100per">
					<span class="guide">샘플이름</span>
					<p>${item.sampleName ? item.sampleName : ''}</p>
				</div>

				<hr class="w-100per dot">

				<div class="upload type1 w-100per"> 
					<span class="guide">test_샘플페이지</span>
					<div class="fileList">
					${item.samplePage ? sampleFile(item.samplePage) : ''}
							
					</div>
					
				</div>

				

			</div>
		</div>
		<footer class="">					
			<button type="submit" class="btn" aria-label="수정하기 버튼" title="수정하기 버튼"><i class="fa-solid fa-pen" aria-hidden="true"></i></button>
			<button type="button" class="btn" aria-label="삭제하기 버튼" title="삭제하기 버튼"><i class="fa-solid fa-pen" aria-hidden="true"></i></button>
		</footer>
	</div>
	`;

}


function hashType(hash){

	let html = "";

	for( let i=0; i<hash.length; i++ ){
		html += `<span class="btn hash" data-ui-hash="${hash[i]}">${hash[i]}</span>`;
	}
	return html;
}


function imgType1(item){

	let html='';

	if( Array.isArray(item) ){
		for( let i=0; i<item.length; i++ ){
			html += `
				<figure class="item">
					<img src="${item[i]}">
					<figcaption class="figcaption">
						<dl class="option">
							<dt class="title">sample.png</dt>
							<dd>7.6KB</dd>
						</dl>
					</figcaption>
				</figure>
			`;
		}
		return html;
	}
	return `
		<figure class="item">
			<img src="${item}">
			<figcaption class="figcaption">
				<dl class="option">
					<dt class="title">sample.png</dt>
					<dd>7.6KB</dd>
				</dl>
			</figcaption>
		</figure>
		`;
}


function sampleFile(item){

	let html = "";

	for( let i=0; i<item.length; i++ ){
		html += `
		<figure class="item">
			<img src="${item[i]}">
			<figcaption class="figcaption">
				<dl class="option">
					<dt class="title">${item[i]}</dt>
					<dd>7.6KB</dd>
				</dl>
			</figcaption>
		</figure>
		`;
		
	}
	return html;
}