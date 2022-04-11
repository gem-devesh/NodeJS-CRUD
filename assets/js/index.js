$("#update_user").submit(function(event){
    event.preventDefault();

    var arr = $("#update_user").serializeArray()
    var data = {}

    $.map(arr, function(n,i){
        data[n['name']] = n['value']
    })
    console.log(data)
    var id = data.id

    var request = {
        "url" : 'http://localhost:3000/api/users?id=' + id,
        "method":"PUT",
        "data":data
    }

    console.log(request);

    $.ajax(request).done(function(response){
        alert("Update Success")
    })
})


if(window.location.pathname == '/') {
    $onDelete = $(".table tbody td a.delete")
    $onDelete.click(function() {
        var id = $(this).attr("data-id")
        console.log(id);
        var request = {
            "url" : 'http://localhost:3000/api/users?id=' + id,
            "method":"DELETE"
        }

        console.log(request);

        if(confirm("Confirm Delete")){
            $.ajax(request).done(function(response){
                alert("Delete Success")
                location.reload()
            })
        }
    })
}