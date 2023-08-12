export class ItemModel{
    constructor(){
        console.log("Item Model");
    }
}

export function save_item(item) {
    let jsonData = JSON.stringify(item);
    let newData = {
        id:item.item_id,
        name:item.item_name,
        qty:item.Item_qty,
        price:item.Item_price
    }
    var setting = {
        url: "http://localhost:8080/Assignment_1/itemController",
        method: "POST",
        timeout: 0,
        headers: {"Content-Type": "application/json"},
        data: JSON.stringify(newData)

    }
    $.ajax(setting).done(function(){
        alert('Done');
    }).fail(()=>{
        alert('fail');
    })
    /*return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http:/localhost:8080/Assignment_1/itemcontroller");
        xhr.setRequestHeader("Content-Type", "application/json");
        console.log("Item Model: " + JSON.stringify(item))
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve = true;
            } else {
                reject(new Error("Failed to save item."));
            }
        };
        xhr.onerror = function () {
            reject(new Error("Network error occurred."));
        };
        xhr.send(JSON.stringify(item));
    })*/
}
export function delete_item(item) {
    console.log(item)
    let jsonData = JSON.stringify(item);
    let newData = {
        id:item.item_id,
        name:item.item_name,
        qty:item.Item_qty,
        price:item.Item_price
    }
    var setting = {
        url: "http://localhost:8080/Assignment_1/itemController",
        method: "DELETE",
        timeout: 0,
        headers: {"Content-Type": "application/json"},
        data: JSON.stringify(newData)

    }
    $.ajax(setting).done(function(){
        alert('Done');
    }).fail(()=>{
        alert('fail');
    })

}
export function update_item(item) {
    let jsonData = JSON.stringify(item);
    let newData = {
        id:item.item_id,
        name:item.item_name,
        qty:item.Item_qty,
        price:item.Item_price
    }
    var setting = {
        url: "http://localhost:8080/Assignment_1/itemController",
        method: "PUT",
        timeout: 0,
        headers: {"Content-Type": "application/json"},
        data: JSON.stringify(newData)

    }
    $.ajax(setting).done(function(){
        alert('Done');
    }).fail(()=>{
        alert('fail');
    })
}


new ItemModel();