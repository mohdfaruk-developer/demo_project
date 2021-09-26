let count=1
    function change()
    {
        // alert(count)
        var arr=["image/img1.jpg","image/img2.jpg","image/img3.jpg","image/win pic.png"]
        let image=document.getElementById("mg").src=arr[count]
        count++
        if(count>=4)
            count=0
    }