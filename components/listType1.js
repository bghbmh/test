module.exports = {
	list: function (filelist) {
		var list = '<ul>';
		var i = 0;
		while (i < filelist.length) {
			list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
			i = i + 1;
		}
		list = list + '</ul>';
		return list;
	}
}