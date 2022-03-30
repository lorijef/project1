const APIKEY = "LQdXhDIH9sPa12BFcZ6e3DdCWhREyOG2LY3fBNMQ";
$('#img-form').on('submit',function (){
    event.preventDefault();
    var from = $('#form').val();
    var to = $('#to').val();
    const dates = getDatesBetweenDates(new Date(from), new Date(to));
    var html = '';
    $.each(dates,function (key,val){
        $.ajax({
            url:`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formatDate(val)}&api_key=${APIKEY}`,
            method:'GET',
            async: false,
            success:function (data){
                data.photos = data.photos.slice(0,1);
                console.log(data)
                $.each(data.photos,function (newKey,newVal){
                    html +=`<div class="col-lg-3 col-12"><img src="${newVal.img_src}"><p>${formatDate(val)}</p></div>`;
                });
            },
            error:function (error){
                console.log(error)
            }
        });
    });
    $('.image').html(html);
})

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function getDatesBetweenDates(startDate, endDate){
    let dates = []
    const theDate = new Date(startDate)
    while (theDate < endDate) {
        dates = [...dates, new Date(theDate)]
        theDate.setDate(theDate.getDate() + 1)
    }
    dates = [...dates, endDate]
    return dates;
}




