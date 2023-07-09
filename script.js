$('input').keypress(function (e) { 
    if(e.which===13){
        add();
    }
});
// add list elemenr
$('button').click(function (e) { 
    add();
});
// mark as completed
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
    saveData()
});
// remove list
$('ul').on('click','span',function(e){
    $(this).parent().remove();
    saveData()
    e.stopPropagation();//stop event bubbeling
});
function add(){
    const text = $('input').val();
    if(text==='') alert("Please enter something");
    else{
        $('ul').append(`<li><span>x</span> ${text}</li>`);
        $('input').val("");
    }
    saveData();
}
function saveData(){
    localStorage.content = $('ul').html();
}
function showTask(){
    $('ul').html(localStorage.content);
}
showTask()