import {save_item,delete_item,update_item} from "../model/ItemModel.js"

const item_code_regex = /^I(0[0-9]{2}|[1-9][0-9]{2}|9[0-8][0-9])$/;
const item_description_regex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
const item_price_regex = /^[0-9]+(?:\.[0-9]{1,2})?$/;
const item_qty_regex = /^-?\d+$/;

function item_validate() {
    if (item_code_regex.test($('#Iid').val())) {
        if (item_description_regex.test($('#ItemDesc').val())) {
            if (item_price_regex.test($('#UPrice').val())) {
                if (item_qty_regex.test($('#Qty').val())) {
                    return true;
                } else {
                    alert('Error: Invalid qty input !');
                }
            } else {
                alert('Error: Invalid price input !');
            }
        } else {
            alert('Error: Invalid description input !');
        }
    } else {
        alert('Error: Invalid Item code input !');
    }
    return false;
}


//save item
$("#btnsave").on("click", ()=>{
    console.log(save_item);
    if (item_validate()) {
        const id  = document.getElementById("Iid").value;
        const name  = document.getElementById("ItemDesc").value;
        const price = document.getElementById("UPrice").value;
        const qty = document.getElementById("Qty").value;
        console.log(id +" "+name+ " "+price+" "+qty );
        let item = {
            "item_id" : id,
            "item_name" : name,
            "Item_qty" : qty,
            "Item_price" : price,
        }
        console.log(item)
        save_item(item);
        
    }
});
//delete item
$("#btnDelete").on("click", ()=>{
    if (item_validate()) {
        const id  = document.getElementById("Iid").value;
        const name  = document.getElementById("ItemDesc").value;
        const price = document.getElementById("UPrice").value;
        const qty = document.getElementById("Qty").value;
        console.log(id +" "+name+ " "+price+" "+qty );
        let item = {
            "item_id" : id,
            "item_name" : name,
            "Item_qty" : qty,
            "Item_price" : price,
        }
        console.log(item)
        delete_item(item);
    }
});

//update item
$("#btnUpdate").on("click", ()=>{
    console.log(save_item);
    if (item_validate()) {
        const id  = document.getElementById("Iid").value;
        const name  = document.getElementById("ItemDesc").value;
        const price = document.getElementById("UPrice").value;
        const qty = document.getElementById("Qty").value;
        console.log(id +" "+name+ " "+price+" "+qty );
        let item = {
            "item_id" : id,
            "item_name" : name,
            "Item_qty" : qty,
            "Item_price" : price,
        }
        console.log(item)
        update_item(item);

    }
});


