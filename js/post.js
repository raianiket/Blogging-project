function edit() {
	var edit  = document.getElementById("edit");
	edit.style.display = "none";
	var save = document.getElementById("save");
	save.style.display = "block";
	// document.body.contentEditable = 'true'; document.designMode='on';
	var blogBodyy = document.getElementById("blogBodyy");
	blogBodyy.contentEditable = true;
	var blogTitleNew = document.getElementById("blogTitleNew");
	blogTitleNew.contentEditable = true;
}
function save() {
	var edit  = document.getElementById("edit");
	edit.style.display = "block";
	var save = document.getElementById("save");
	save.style.display = "none";
	// document.body.contentEditable = 'false'; document.designMode='on';
	var blogBodyy = document.getElementById("blogBodyy");
	blogBodyy.contentEditable = false;
	var blogTitleNew = document.getElementById("blogTitleNew");
	blogTitleNew.contentEditable = false;
}
var i=0;
function like() {
	var like  = document.getElementById("like");
	like.style.display = "none";
	var liked = document.getElementById("liked");
	liked.style.display = "block";
	i++;
	document.getElementById("beforeLike").innerHTML = i+ " person likes this!";
}
var k = 1;
function liked() {
	k++;
	document.getElementById("beforeLike").innerHTML = k+ " person likes this!";
}
var j=0;
var comments = [];
function newComment(){
	var comment = document.getElementById("comment");
	var showComment = document.getElementById("showComment");
	comments.push(comment.value);
	j++;
	comment.value = "";
	showComment.innerHTML = "";
	for (var i = j-1; i >= 0; i--) {
		showComment.innerHTML += "<br/>" + comments[i] + "<br/><br/><hr/>";
	}
}