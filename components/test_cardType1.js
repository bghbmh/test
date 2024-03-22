module.exports = {
	view: function (items = null) {

		if( !items || !items.length ){
			return `아이템 없음 ${this.create()}`;
		}
		
		let item = items[0];

		let html = `
			<div class="col4 item">
				<header class="d-flex">
					<label class="margin-left-auto" title="메인에 보이게 할지말지 선택하는 버튼">
						<span class="">선택하기</span>
						<input type="checkbox" data-ui-action="toggle" name="mainopen" ${item.mainopen ? "checked" : ''}>
					</label>
				</header>
			
				<div class="cnts grid">
					<div class="col5 ">
			
						<div class="upload fileList type2 w-100per">
							${imageList("main", item.image)}
						</div>
			
						<div class="upload fileList type3 w-100per margin-top-1"> <!-- 파일 업로드할때 -->
							${imageList("sub", item.image)}
						</div>
							
					</div>
			
					<div class="col7 d-flex flex-column align-items-start gap3">
						<label class="w-100per">	
							<span class="guide">test_titlexxx</span>						
							${item.category}
						</label>
					</div>
				</div>			
				
				<footer class="">					
					<button type="submit" class="btn"><i class="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i>저장</button>
				</footer>

			</div>
		`;
		return html;
	},
	create : function(){
		return '새로 만들기'
	},
	edit : function(){
		return '수정하기';
	}
}




function init(){

}





function imageList(str, items){
	let html = '';
	items.find( o => {
		if( o.template === str ) html +=`<img src="assets/img/${o.fileName}" alt="image" aria-hidden="true">`;
	});
	return html;
}

function testFileinfo(fileinfo){
	let t = {};
	for(let key in fileinfo ) t[key] = fileinfo[key];
	return t;
}