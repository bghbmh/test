module.exports = {
	viewHtml : function(item) {
		return `
			<article class="cardType2 row-span${item.rowSpan}" data-category="${item.category}">
				<header>
					<h3 aria-label="${item.description ? '' : '제목없음'}">${item.description ? item.description.title : ''}</h3>
					<div class="util">
						${buttonList2(item)}					
					</div>
				</header>

				<div class="main">
					${imageList2(item.image)}
				</div>

				<footer>
				${buttonList3(item)}	
				</footer>
			</article>
		`;
	},
	view: function (items = null) {

		if( !items || !items.length ){
			return `아이템 없음 ${this.create()}`;
		}
		
		//let item = items[0];

		//console.log("cardtype2 made - ", item)

		let html = '';
		items.forEach( item => html += this.viewHtml(item) );

		return html;
	},
	create : function(){
		return '새로 만들기'
	},
	edit : function(){
		return '수정하기';
	}
}




function buttonList2(item){
	//console.log("button item - ", item.sampleName)   ${JSON.stringify(tempImgbox(item))}
	let html='';

	html += `<button type="button" class="btn icon" title="이미지크게보기" aria-label="이미지크게보기" data-ui-util="zoomin" data-ui-target='tempImgbox 함수넣기'><i class="icon-svg-zoom-in" aria-hidden="true"></i></button>`;
	
	
	if( item.sampleName && item.samplePage ){
		html += `<button type="button" class="btn icon" title="샘플페이지보기" aria-label="샘플페이지보기" data-ui-util="preview" data-sample-name="${item.sampleName}" data-sample-page='${JSON.stringify(item.samplePage)}'><i class="icon-svg-monitor-01" aria-hidden="true"></i></button>`;
	}

	return html;
}


function buttonList3(item){
	console.log("button item - ", item.sampleName)
	let html='';

	if( item.description ){
		html += `<button type="button" class="btn icon" title="추가설명있음" aria-label="추가설명있음" data-ui-util="extraInfo" data-ui-target="${item.id}"><i class="icon-svg-message-plus-square" aria-hidden="true"></i></button>`;
	} 
	return html;
}


function imgList2(item, html = ''){
	console.log("imgList2 key - ", item, item.img.main, item.img.sub.length);

	if( !item.img.main && !item.img.sub.length ){	
		html += `<img src="/assets/img/no-img.gif" alt="등록된 이미지가 없습니다">`;
		return html;
	} 

	for( let key in item.img ){
		//console.log("key00000 - ", key)

		switch(key){
			case "main":
				//console.log("key - ", key, item.img.main)
				if( !item.img[key] ) break;
				html += `<img src="${item.img[key]}" alt="${key}이미지">`;
				item.tempImgbox.push(item.img[key]);
				break;
			case "sub":
				item.img.sub.forEach( src => { 
					html += `<img src="${src}"  alt="${key}이미지">`;
					item.tempImgbox.push(src);
				});	
				
				break; 
		}
	}

	return html;
}


function imageList2(items, str = '' ){
	let html = '';
	items.find( o => {

		if( !str ){
			html +=`<img src="assets/img/${o.fileName}" alt="image" aria-hidden="true">`;
		} else if( o.template === str ) {
			html +=`<img src="assets/img/${o.fileName}" alt="image" aria-hidden="true">`;
		}
	});
	return html;
}





// 임시_어디가 더 적절한지 모르겠는데, 일단 여기서 배열로 넣어둠_240318
function tempImgbox(item, html = ''){
	if( !item.tempImgbox ){
		item.tempImgbox = [];	
	}
	
	if( !item.img.main && !item.img.sub.length ){		
		item.tempImgbox.push("../assets/img/no-img.gif");
		return item.tempImgbox;
	} 

	for( let key in item.img ){
		
		switch(key){
			case "main":
				item.tempImgbox.push(item.img.main);
				break;
			case "sub":
				item.img.sub.forEach( src => item.tempImgbox.push(src) );	
				break; 
		}
	}

	//console.log("---tempImgbox - ", item.tempImgbox)

	return item.tempImgbox;
}