// const items=document.getElementById("items");
// const newLi=document.createElement('li');
// newLi.textContent="Item 5";
// items.appendChild(newLi);

const list=document.getElementsByClassName("item");
for(let i=0;i<list.length;i++){
    list[i].textContent="Hello World";
}


const itemList = document.getElementById('items');


const listItems = itemList.getElementsByTagName('li');


listItems[4].textContent = 'Updated Item 5';
