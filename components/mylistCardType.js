module.exports = {
	viewHtml : function(item) {
		return `
		<div class="col4 item">
			<header class="d-flex">
				<label class="margin-right-auto"><input type="checkbox"></label>
				<span class="label">메인노출</span>
			</header>

			<div class="cnts grid">
				<div class="col5 ">

					<div class="upload fileList type2 w-100per">
							
							<figure>
								<img src="/assets/img/contents/sample.png">
								<figcaption>
									<div class="option">
										<span>7.6KB</span>
									</div>
									<!-- 
									<div class="ctrl">
										<button type="button" class="btn" title="파일 삭제 버튼" aria-label="파일 삭제 버튼"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
										<button type="button" class="btn" title="파일 수정 버튼" aria-label="파일 수정 버튼"><i class="fa-solid fa-pen" aria-hidden="true"></i></button>
									</div>	
									-->
								</figcaption>
							</figure>												
							
					</div>

					<div class="upload fileList type3 w-100per margin-top-1"> <!-- 파일 업로드할때 -->
						
						<figure class="item">
							<img src="/assets/img/contents/sample.png">
							<figcaption class="figcaption">sample.png
								<dl class="option">
									<dt class="title">sample.png</dt>
									<dd>7.6KB</dd>
								</dl>
								<!-- 
								<div class="ctrl">
									<button type="button" class="btn" title="파일 삭제 버튼" aria-label="파일 삭제 버튼"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
									<button type="button" class="btn" title="파일 수정 버튼" aria-label="파일 수정 버튼"><i class="fa-solid fa-pen" aria-hidden="true"></i></button>
								</div>	
								-->
							</figcaption>
						</figure>
							
					</div>
						
				</div>

				<div class="col7 d-flex flex-column align-items-start gap3">
					
					<div class="w-100per">
						<span class="guide">카테고리</span>
						<div>hash2</div>
					</div>

					<div class="upload type1 w-100per"> <!-- 파일 업로드할때 -->
						<span class="guide">test_선택파일</span>
						
						<div class="fileList">
							
							<figure class="item">
								<img src="../../../m/assets/img/main/sample.png">
								<figcaption class="figcaption">sample.png
									<dl class="option">
										<dt class="title">sample.png</dt>
										<dd>7.6KB</dd>
									</dl>
									<!--
									<div class="ctrl">
										<button type="button" class="btn" title="파일 삭제 버튼" aria-label="파일 삭제 버튼"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
										<button type="button" class="btn" title="파일 수정 버튼" aria-label="파일 수정 버튼"><i class="fa-solid fa-pen" aria-hidden="true"></i></button>
									</div>
									-->	
								</figcaption>
							</figure>
							
						</div>
						
					</div>

					<div class="w-100per">
						<span class="guide">test_샘플이름</span>
						<div>hash2</div>
					</div>

					<div class="w-100per">
						<span class="guide">test_guideTitle</span>
						<div>hash2</div>
					</div>
				</div>
			</div>			
			
			<footer class="">					
				<button type="submit" class="btn"><i class="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i>수정</button>
			</footer>
		</div>
		`;
	},
	view: function (items = null) {

		if( !items || !items.length ){
			return `아이템 없음 ${this.create()}`;
		}
		
		//let item = items[0];

		//console.log("cardtype2 made - ", item)

		let html = '';
		console.log("list check -", items)
		items.forEach( item => html += this.viewHtml(item) );

		return html;
	},
	edit : function(){
		return '수정하기';
	},
	create: function () {
		return `
		<div class="col4 item">
		<header class="d-flex">
			<label class="margin-left-auto" title="메인에 보이게 할지말지 선택하는 버튼">
				<span class="">선택하기</span>
				<input type="checkbox" data-ui-action="toggle" name="mainopen">
			</label>
		</header>

		<div class="cnts grid">
			<div class="col5 ">

				<div class="upload fileList type2 w-100per">
					<label class="btn" data-ui-placeholder="파일을 선택하세요test">
						
						<input type="file" name="image" data-ui-template="main" accept="image/*" aria-label="파일을 선택하세요" title="파일을 선택하세요">
						<i class="fa-solid fa-plus" aria-hidden="true"></i>
					</label>

				</div>

				<div class="upload fileList type3 w-100per margin-top-1"> <!-- 파일 업로드할때 -->
					<label class="btn" data-ui-placeholder="파일을 선택하세요_testTest">	
						<input type="file" name="image" data-ui-template="sub" accept="image/*" aria-label="파일을 선택하세요" title="파일을 선택하세요" multiple> <!-- multiple -->	
						<i class="fa-regular fa-image" aria-hidden="true"></i>
					</label>

				</div>
					
			</div>

			<div class="col7 d-flex flex-column align-items-start gap3">
				<label class="w-100per">	
					<span class="guide">test_titlexxx</span>						
					<input type="text" placeholder="" name="title" value="선택하세요_testTest" required >
				</label>

				<label class="w-100per">	
					<span class="guide">test_123456</span>						
					<input type="text" placeholder="" name="title" required >
				</label>

				<label class="w-100per">	
					<span class="guide">test_select</span>						
					<select name="category">
						<option value="default">카테고리</option>
						<option value="ca11">ca11</option>
						<option value="ca22">ca22</option>
					</select>
				</label>

				<div class="upload type1 w-100per"> <!-- 파일 업로드할때 -->
					<span class="guide">test_파일을 선택하세요</span>
					<label class="btn" data-ui-template="list" data-ui-placeholder="">	
						<input type="file" name="samplepage" aria-label="파일을 선택하세요" title="파일을 선택하세요" multiple> <!-- multiple -->	
						<i class="fa-solid fa-paperclip" aria-hidden="true"></i>
					</label>

					<div class="fileList">
						
					</div>
					
				</div>

				<label class="w-100per">
					<span class="guide">test_guideTitle</span>
					<span class="error" aria-live="polite"></span>
					<input type="text" placeholder="test_샘플이름" name="samplename" required>
				</label>

				<label class="w-100per">
					<select name="c1234">
						<option value="default">카테고리</option>
						<option value="ca11">ca11</option>
						<option value="ca22">ca22</option>
					</select>
				</label>
			</div>
		</div>			
		
		<footer class="">					
			<button type="submit" class="btn"><i class="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i>저장</button>
		</footer>
	</div>		
		`;
	},
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