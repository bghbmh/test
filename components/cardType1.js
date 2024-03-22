
export function cardType1(item){
	
	//let item = items.find( o => o.id === parseInt(selectedItem) );
	//console.log("success - ", item );
	return `
	<div class="col4 item">
		<header class="d-flex">
			<label class="margin-right-auto">
				<input type="checkbox" name="testform">
			</label>

			${item.main ? '<span class="label blue">메인에서 보임</span>' : ''}
			
		</header>
		<div class="cnts grid">
			<div class="col5 " >
				<div class="upload fileList type2 w-100per">
					${imageType1(item.image, "main")}
				</div>

				<div class="upload fileList type3 w-100per margin-top-1"> <!-- 파일 업로드할때 -->
					${imageType1(item.image, "sub")}							
				</div>
					
			</div>

			<div class="col7 d-flex flex-column align-items-start ">
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

function imageType1(items, str = '' ){
	let html = '';
	items.find( o => {

		if( !str ){
			html += imageType1_html(o);
		} else if( o.template === str ) {
			html += imageType1_html(o);
		}
	});
	return html;
}


function imageType1_html(o){
	return `<figure class="item">
				<img src="public/assets/img/contents/${o.fileName}">
				<figcaption class="figcaption">
					<dl class="option">
						<dt class="title">${o.fileName}</dt>
						<dd>${returnFileSize(o.fileSize)}</dd>
					</dl>
				</figcaption>
			</figure>`;
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


function returnFileSize(number) {
	if (number < 1024) {
		return number + "bytes";
	} else if (number >= 1024 && number < 1048576) {
		return (number / 1024).toFixed(1) + "KB";
	} else if (number >= 1048576) {
		return (number / 1048576).toFixed(1) + "MB";
	}
}

function hashType(hash){

	let html = "";

	for( let i=0; i<hash.length; i++ ){
		html += `<button type="button" class="btn hash" data-ui-hash="${hash[i]}">${hash[i]}</button>`;
	}
	return html;
}