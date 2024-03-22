
	// 키다운이나 포커스 들어갔을때 라벨 이동하는거, input에 required 속성 없을 떄 인터렉션 넣을방법, 구글 로그인 보고 참고하기, 예전에 만들어둔 파일 찾아보기 
	window.URL = window.URL || window.webkitURL;

	const fileSelect = document.getElementById("fileSelect"),
		fileElem = document.getElementById("fileElem"),
		fileList = document.getElementById("fileList");
	
	
		document.querySelector(".testform").addEventListener("click", e => {
	
			let t = e.target.closest('[type]') || e.target.closest('[name]');
	
			if( !t ) return;
	
			//console.log("click elem : ", t.type," - ", t);
	
			switch(t.type){
				case "file":				
	
					if( t.dataset.listener === "change" ) return;
	
					if( t.closest('[data-ui-template]').dataset.uiTemplate == "image" ){
						t.addEventListener( "change", function() {
							console.log( "이미지 업로드 type2 - ", t.files );
							//[...uploadImageType2(t.files).children].forEach(ch => t.closest('[data-ui-template]').parentNode.querySelector(".fileList").appendChild(ch));
	
							[...uploadImageType2(t.files).children].forEach(ch => t.closest(".fileList").insertBefore(ch,t.parentNode));
	
							// 삭제는 나중에하고 우선은 안보이게만 처리
							t.parentNode.style.display = "none";
							t.dataset.listener = 'change';
								
						}, false);
					} else if( t.closest('[data-ui-template]').dataset.uiTemplate == "list" ){
						console.log( "----11111 type1 - ", typeof t );
	
						t.addEventListener( "change", function() {
							console.log( "22222 type1 - ", t.files );
	
							[...uploadImageType2(t.files).children].forEach(ch => t.closest('[data-ui-template]').parentNode.querySelector(".fileList").appendChild(ch));
	
							// 임시_리스너 한번만 붙이게, 추가 임시 설정함
							t.dataset.listener = 'change';
								
						}, false);
						//setTimeout(() => {console.log("this is the third message") }, 1000) ;
						
					} else if( t.closest('[data-ui-template]').dataset.uiTemplate == "imagelist" ){
						console.log( "----11111 type1 - ", typeof t );
	
						t.addEventListener( "change", function() {
							console.log( "22222 type1 - ", t.files );
	
							[...uploadImageType2(t.files).children].forEach(ch => t.closest(".fileList").insertBefore(ch,t.parentNode));
	
							// 임시_리스너 한번만 붙이게, 추가 임시 설정함
							t.dataset.listener = 'change';
								
						}, false);
						//setTimeout(() => {console.log("this is the third message") }, 1000) ;
						
					}
				break;
				case "submit":
					//console.log(" file - ", t);
	
					//showError(t.closest(".item").querySelector(".cnts").querySelectorAll('input'));
	
					let testData = {};
					t.closest(".item")
					.querySelectorAll('input')
					.forEach( input => {
						//console.log( input , " - ",input.type, input.name, input.checked );
	
						switch(input.type){
							case "text":
							case "number":
								testData[input.name] = input.value;
								break;
							case "checkbox":
							case "radio":
								testData[input.name] = input.checked;
								break;
							case "file":
								testData[input.name] = [];
								let aa = input.parentNode.parentNode.querySelector(".fileList").children;
								for( let i=0; i<aa.length; i++ ){
									console.log( "gggg - ", input.parentNode.parentNode.querySelector(".fileList"),  aa[i].dataset );
									testData[input.name].push(aa[i].dataset);
								}
								break;
							default:
								break;
						}
	
					});
	
					t.closest(".item").querySelectorAll('select').forEach( select => testData[select.name] = select.value );
	
					console.log( t.type , " - ",JSON.stringify(testData) ); //JSON.stringify(testData)
	
				break;
			}
	
			// switch(e.type){
			// 	case "click":
			// 		fileSelect.addEventListener( "change", function (e) {
			// 			console.log("fileSelect - ", e, this.querySelector("[type='file']").files)
			// 			uploadImageType2(this.querySelector("[type='file']").files)
						
			// 		}, false);
			// 	break;
			// 	default:
			// 		console.log(" no type ");
			// 	break;
			// }
			
		});
	
	
		function showError(obj) {
	
			console.log(typeof obj, " - ", obj)
	
			obj.forEach( input => console.log( input , " - ",input.type, input.name, input.checked ))
	
			if (email.validity.valueMissing) {
				// If the field is empty,
				// display the following error message.
				emailError.textContent = "You need to enter an email address.";
			} else if (email.validity.typeMismatch) {
				// If the field doesn't contain an email address,
				// display the following error message.
				emailError.textContent = "Entered value needs to be an email address.";
			} else if (email.validity.tooShort) {
				// If the data is too short,
				// display the following error message.
				emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
			}
	
			// Set the styling appropriately
			emailError.className = "error active";
		}
	
	
		function uploadImageType2(files) {
	
			console.log("handleFiles - ", files)
			let html = CreateElement( { tag : "div", class:"html-template" } );
	
			if (!files.length) {
				html.innerHTML = `<label id="fileSelect" class="btn" data-ui-action="load" data-ui-placeholder="파일을 선택하세요test" aria-label="파일 선택 버튼" title="파일 선택 버튼">
								<input type="file" accept="image/*">
								<i class="fa-solid fa-plus" aria-hidden="true"></i>
							</label>`;
			} else {
				
				
				for (let i = 0; i < files.length; i++) {
					const figure = CreateElement( { tag : "figure", class:'item' } );
					// fileNew.appendChild(figure);
					figure.dataset.fileName = files[i].name;
					figure.dataset.fileSize = files[i].size;
	
					const img = CreateElement( { tag : "img", class:'uploading', src: `${window.URL.createObjectURL(files[i])}`, title:`${files[i].name}`, "aria-label":`${files[i].name}`, alt:`${files[i].name}` } );				
					img.onload = function () {
						window.URL.revokeObjectURL(this.src);
					};
					figure.appendChild(img);
	
					const figcaption = CreateElement( { tag : "figcaption", class:'figcaption'} );
					figcaption.innerHTML =`
						<dl class="option">
							<dt class="title">${files[i].name}</dt><dd>${returnFileSize(files[i].size)}</dd>
						</dl>`;				
	
					figcaption.innerHTML += `
					<div class="ctrl">
						<button type="button" class="btn" title="파일 삭제 버튼" aria-label="파일 삭제 버튼"><i class="fa-solid fa-xmark"></i></button>
						<!-- button type="button" class="btn" title="파일 수정 버튼" aria-label="파일 수정 버튼"><i class="fa-solid fa-pen" aria-hidden="true"></i></button -->
					</div>`;
	
					figure.appendChild(figcaption);
					html.appendChild(figure);
				}
	
				
			}
	
			return html;
		}
	
		function dragenter(e) {
			e.stopPropagation();
			e.preventDefault();
		}
	
		function dragover(e) {
			e.stopPropagation();
			e.preventDefault();
		}
	
		function drop(e) {
			e.stopPropagation();
			e.preventDefault();
	
			const dt = e.dataTransfer;
			const files = dt.files;
	
			uploadImageType2(files);
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
	
		function CreateElement(attributes = {}) { // { tag : "div", class: "sample", ...} 
			if (!attributes.hasOwnProperty("tag")) return alert("no Tag, require the Tag");
	
			let tag = document.createElement(attributes.tag);
			for (let prop in attributes) {
				if (prop == "tag") continue;
				tag.setAttribute(prop, attributes[prop]);
			}
			return tag;
		}
		