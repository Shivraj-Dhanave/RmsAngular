(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+p+5":function(t,s,e){"use strict";e.r(s),e.d(s,"OrderModule",function(){return N});var r=e("tk/3"),i=e("3Pt+"),o=e("ofXK"),n=e("fXoL"),c=e("1kSV"),b=e("tyNb"),a=e("VGjC");let d=(()=>{class t{constructor(t,s,e){this.modalService=t,this.router=s,this.userService=e,this.Username="",this.firstname="",this.lastname="",this.phone_no=0,this.password="",this.address="",this.city="",this.country="",this.zip=0,this.email="",this.user=null}ngOnInit(){this.getUsers()}getUsers(){const t=""+sessionStorage.customer_id;this.userService.getUserid(t).subscribe(t=>{"success"==t.status&&(this.user=t.data,this.Username=this.user.username,this.firstname=this.user.first_name,this.lastname=this.user.last_name,this.address=this.user.address,this.city=this.user.city,this.country=this.user.country,this.zip=this.user.zip,this.phone_no=this.user.phone_no,this.password=this.user.password,this.email=this.user.email)})}onSave(){this.userService.updateCustomer(this.user.customer_id,this.firstname,this.lastname,this.city,this.country,this.zip,this.phone_no,this.Username,this.password,this.address,this.email).subscribe(s=>{"success"==s.status&&(location.reload(),this.modalService.dismissAll(t))})}}return t.\u0275fac=function(s){return new(s||t)(n.Ib(c.c),n.Ib(b.b),n.Ib(a.a))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-edit-address"]],decls:23,vars:4,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"form-group"],["for",""],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","first","type","text","id","inputAddress",1,"form-control",3,"ngModel","ngModelChange"],["type","number","id","inputZip",1,"form-control",2,"width","100px",3,"ngModel","ngModelChange"],[1,"btn-success",2,"margin-left","10px","margin-top","1px",3,"click"]],template:function(t,s){1&t&&(n.Nb(0,"div",0),n.Nb(1,"div",1),n.Nb(2,"h4"),n.wc(3,"Change address"),n.Mb(),n.Mb(),n.Nb(4,"div",2),n.Nb(5,"div",3),n.Nb(6,"label",4),n.wc(7,"Country"),n.Mb(),n.Nb(8,"input",5),n.Xb("ngModelChange",function(t){return s.country=t}),n.Mb(),n.Mb(),n.Nb(9,"div",3),n.Nb(10,"label",4),n.wc(11,"City"),n.Mb(),n.Nb(12,"input",5),n.Xb("ngModelChange",function(t){return s.city=t}),n.Mb(),n.Mb(),n.Nb(13,"div",3),n.Nb(14,"label"),n.wc(15,"Building name and flat number"),n.Mb(),n.Nb(16,"input",6),n.Xb("ngModelChange",function(t){return s.address=t}),n.Mb(),n.Mb(),n.Nb(17,"div",3),n.Nb(18,"label"),n.wc(19,"Zip"),n.Mb(),n.Nb(20,"input",7),n.Xb("ngModelChange",function(t){return s.zip=t}),n.Mb(),n.Mb(),n.Nb(21,"button",8),n.Xb("click",function(){return s.onSave()}),n.wc(22,"Save"),n.Mb(),n.Mb(),n.Mb()),2&t&&(n.wb(8),n.ec("ngModel",s.country),n.wb(4),n.ec("ngModel",s.city),n.wb(4),n.ec("ngModel",s.address),n.wb(4),n.ec("ngModel",s.zip))},directives:[i.a,i.g,i.h,i.j],styles:[""]}),t})();var u=e("5eHb"),h=e("EVJO");let l=(()=>{class t{constructor(t){this.httpClient=t,this.url="http://localhost:8080/orders"}addtoOrder(t,s,e,r,i,o){return this.httpClient.post(this.url,{customer_id:t,menu_id:s,mname:e,price:r,total_amount:i,quantity:o})}getOrderId(t){return this.httpClient.get(this.url+"/by_cust_id/"+t)}}return t.\u0275fac=function(s){return new(s||t)(n.Ub(r.a))},t.\u0275prov=n.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function m(t,s){if(1&t&&(n.Nb(0,"tr"),n.Nb(1,"td"),n.wc(2),n.Mb(),n.Nb(3,"td",11),n.wc(4),n.Mb(),n.Nb(5,"td",11),n.wc(6),n.Mb(),n.Mb()),2&t){const t=s.$implicit;n.wb(2),n.xc(t.mname),n.wb(2),n.xc(t.quantity),n.wb(2),n.xc(t.total_amount)}}function p(t,s){if(1&t&&(n.Nb(0,"div"),n.wc(1),n.Mb()),2&t){const t=s.$implicit;n.wb(1),n.zc(" ",t.quantity," x ",t.mname," ")}}const g=[{path:"edit-address",component:d},{path:"preview",component:(()=>{class t{constructor(t,s,e,r,i,o){this.toastr=t,this.modalService=s,this.userService=e,this.cartService=r,this.orderService=i,this.router=o,this.address="",this.city="",this.country="",this.zip=0,this.user=null,this.carts=[{}],this.totalAmount=0,this.order=[{}]}ngOnInit(){this.getUsers(),this.getCart()}getUsers(){const t=""+sessionStorage.customer_id;this.userService.getUserid(t).subscribe(t=>{"success"==t.status?(this.user=t.data,this.address=this.user.address,this.city=this.user.city,this.country=this.user.country,this.zip=this.user.zip):console.log(t.error)})}onEdit(){this.modalService.open(d,{size:"lg"})}getCart(){const t=""+sessionStorage.customer_id;this.cartService.getCartItemId(t).subscribe(t=>{if("success"==t.status){this.carts=t.data;for(let t=0;t<this.carts.length;t++)this.totalAmount+=parseFloat(this.carts[t].total_amount)}})}onPlaceOrder(){for(let t=0;t<this.carts.length;t++)this.orderService.addtoOrder(this.user.customer_id,this.carts[t].menu_id,this.carts[t].mname,this.carts[t].price,this.carts[t].total_amount,this.carts[t].quantity).subscribe(t=>{"success"==t.status&&console.log("added item")});this.userService.sendMail(this.user.customer_id).subscribe(t=>{"success"==t.status&&console.log("mail sent")}),this.cartService.deleteCart(this.user.customer_id).subscribe(t=>{"success"==t.status&&console.log("cart deleted")}),this.toastr.success("Order placed successfully"),this.router.navigate(["/home/order/order-history"])}}return t.\u0275fac=function(s){return new(s||t)(n.Ib(u.b),n.Ib(c.c),n.Ib(a.a),n.Ib(h.a),n.Ib(l),n.Ib(b.b))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-preview"]],decls:45,vars:6,consts:[[1,"row"],[1,"col-md-7"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"form-group"],[2,"font-size","20px"],[1,"card-footer"],[1,"btn","btn-lg","btn-danger",3,"click"],[1,"col-md-5"],[1,"table","table-condensed"],[2,"text-align","center"],[4,"ngFor","ngForOf"],["colspan","2"],[2,"text-align","center","font-size","large"],[1,"btn-success","btn-lg","btn-block",3,"click"]],template:function(t,s){1&t&&(n.Nb(0,"h2"),n.wc(1,"Checkout"),n.Mb(),n.Nb(2,"div",0),n.Nb(3,"div",1),n.Nb(4,"div",2),n.Nb(5,"div",3),n.Nb(6,"h4"),n.wc(7,"Delivery address"),n.Mb(),n.Mb(),n.Nb(8,"div",4),n.Nb(9,"h5"),n.wc(10,"Home address"),n.Mb(),n.Nb(11,"div"),n.Nb(12,"div",5),n.Nb(13,"p",6),n.wc(14),n.Mb(),n.Mb(),n.Mb(),n.Jb(15,"br"),n.Mb(),n.Nb(16,"div",7),n.Nb(17,"div"),n.Nb(18,"button",8),n.Xb("click",function(){return s.onEdit()}),n.wc(19,"Edit"),n.Mb(),n.Mb(),n.Mb(),n.Mb(),n.Mb(),n.Nb(20,"div",9),n.Nb(21,"div",2),n.Nb(22,"div",3),n.Nb(23,"h4"),n.wc(24,"Summary"),n.Mb(),n.Mb(),n.Nb(25,"div",4),n.Nb(26,"table",10),n.Nb(27,"thead"),n.Nb(28,"tr"),n.Nb(29,"th"),n.wc(30,"Name"),n.Mb(),n.Nb(31,"th",11),n.wc(32,"Quantity"),n.Mb(),n.Nb(33,"th",11),n.wc(34,"Total Amount"),n.Mb(),n.Mb(),n.Mb(),n.Nb(35,"tbody"),n.uc(36,m,7,3,"tr",12),n.Mb(),n.Nb(37,"tfoot"),n.Nb(38,"tr"),n.Nb(39,"th",13),n.wc(40,"Grand Total"),n.Mb(),n.Nb(41,"th",14),n.wc(42),n.Mb(),n.Mb(),n.Mb(),n.Mb(),n.Nb(43,"button",15),n.Xb("click",function(){return s.onPlaceOrder()}),n.wc(44,"Place Order"),n.Mb(),n.Mb(),n.Mb(),n.Mb(),n.Mb()),2&t&&(n.wb(14),n.Bc("",s.address,",",s.city,",",s.country,"-",s.zip,""),n.wb(22),n.ec("ngForOf",s.carts),n.wb(6),n.xc(s.totalAmount))},directives:[o.i],styles:[""]}),t})()},{path:"order-history",component:(()=>{class t{constructor(t){this.orderService=t,this.orders=[{}],this.totalAmount=0,this.order=[{}]}ngOnInit(){this.getOrders()}getOrders(){const t=""+sessionStorage.customer_id;this.orderService.getOrderId(t).subscribe(t=>{if("success"==t.status){this.orders=t.data;for(let t=0;t<this.orders.length;t++)this.totalAmount+=parseFloat(this.orders[t].total_amount)}})}}return t.\u0275fac=function(s){return new(s||t)(n.Ib(l))},t.\u0275cmp=n.Cb({type:t,selectors:[["app-order-history"]],decls:18,vars:3,consts:[[1,"row",2,"margin-left","20px"],[1,"col-md-4"],[1,"card",2,"width","40rem","margin-top","20px"],[1,"card-header"],[1,"order"],[1,"card-body"],[1,"Total_amount"],[4,"ngFor","ngForOf"]],template:function(t,s){1&t&&(n.Nb(0,"body"),n.Nb(1,"div",0),n.Nb(2,"div",1),n.Nb(3,"div",2),n.Nb(4,"div",3),n.Nb(5,"div",4),n.Nb(6,"strong"),n.wc(7,"Order status: "),n.Mb(),n.wc(8),n.Mb(),n.Mb(),n.Nb(9,"div",5),n.Nb(10,"div",6),n.Nb(11,"strong"),n.wc(12,"Total amount: "),n.Mb(),n.wc(13),n.Mb(),n.Nb(14,"h6"),n.wc(15,"Items"),n.Mb(),n.uc(16,p,2,2,"div",7),n.Mb(),n.Mb(),n.Mb(),n.Jb(17,"div",1),n.Mb(),n.Mb()),2&t&&(n.wb(8),n.xc(s.totalAmount),n.wb(5),n.xc(s.totalAmount),n.wb(3),n.ec("ngForOf",s.orders))},directives:[o.i],styles:["body[_ngcontent-%COMP%]{background-image:url(/assets/delivery.jpg);background-size:600px;background-position:100% 100%;background-repeat:no-repeat;height:580px}"]}),t})()}];let M=(()=>{class t{}return t.\u0275mod=n.Gb({type:t}),t.\u0275inj=n.Fb({factory:function(s){return new(s||t)},imports:[[b.e.forChild(g)],b.e]}),t})(),N=(()=>{class t{}return t.\u0275mod=n.Gb({type:t}),t.\u0275inj=n.Fb({factory:function(s){return new(s||t)},imports:[[o.b,i.b,r.b,M]]}),t})()}}]);