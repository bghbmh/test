import * as cf from './commonFunction.js';

//import { fileHandler } from "./fileHandler.js";
import * as component from './component.js';
import { SamplePageview } from './SamplePageview.js';
import { ShuttleSpace } from './shuttleSpace.js';
import { Modal } from "./modalType3.js";
// import { dataHandler } from "./dataHandler.js";





document.addEventListener("DOMContentLoaded", () => {

	console.log("DOMContentLoaded ");



	if( document.querySelector("[data-ui-action='launch']" ) )
		document.querySelector("[data-ui-action='launch']" ).addEventListener("click", launchArocket);

});


function launchArocket(e){

	if( !e.target.closest("button") ) return;

	console.log("launch a rocket!! ");
	let filePath = '../data/spacestation.json';
	cf.fileHandler._load( { 
		url: filePath, 
		success : function(request){
			console.log("file - ", request);

			document.querySelector("body").appendChild(new ShuttleSpace(filePath, request));

		},
		error : function(request){
			console.log("err",request.arguments.msg)
		},
		loadType:"item", 
		done: "items" 
	});

}