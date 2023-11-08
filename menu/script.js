const menusection=document.querySelector ('.menu');
const menuitems=[
    { name:'item-1',price:'$10.99'},
    { name:'item-2',price:'$12.99'},
    { name:'item-3',price:'$8.99' },
];
menuitems.foreach(item=> {
 const menuitem=document.createelement('div');
 menuitem.item.classname='menu-item',
 menusection.appendChild(menuitem);
});