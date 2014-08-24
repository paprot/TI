Meteor.startup(function(){
    if(Products.find().count() === 0){
      Products.insert({thumb:'1mohm.jpg',name:'Rezystor 1 MOhm',desc:'Rezystor 1 MOhm',price:0.5,catName:'Rezystory'});
      Products.insert({thumb:'15mohm.jpeg',name:'Rezystor 1.5 MOhm',desc:'Rezystor 1.5 MOhm',price:1,catName:'Rezystory'});
      Products.insert({thumb:'1k.jpg',name:'Rezystor 1 kOhm',desc:'Rezystor 1 kOhm',price:1,catName:'Rezystory'});
      Products.insert({thumb:'10pf.jpeg',name:'Kondensator 10 pF',desc:'Kondensator 10 pF',price:2,catName:'Kondensatory'});
      Products.insert({thumb:'bipolarny2.jpg',name:'Tranzystor bipolarny NPN',desc:'Tranzystor bipolarny NPN 15A 100V 90W TO220',price:3,catName:'Tranzystory'});
      Products.insert({thumb:'pnp.jpeg',name:'Tranzystor bipolarny PNP',desc:'BD250C-S BOURNS',price:3,catName:'Tranzystory'});
    }
    if(Categories.find().count() === 0){
    //   var hwid = Categories.insert({name:'HARDWARE'});
        var juid = Categories.insert({name:'Elementy elektroniczne'});
     //   SubCategories.insert({name:'Mods',cat:hwid});
        SubCategories.insert({name:'Rezystory',cat:juid});
        SubCategories.insert({name:'Kondensatory',cat:juid});
        SubCategories.insert({name:'Tranzystory',cat:juid}); 
    }

});
Meteor.methods({
    //delete when live
    removeAll:function(){
        Products.remove({});
        Categories.remove({});
        CartItems.remove({});
    },
    addToCart:function(qty,product,session){
        if(qty > 0){
            CartItems.insert({qty:qty,product:product,sessid:session});
        } else{
            console.log('Nie ma zadnych produktow');
        }

    },
    removeCartItem:function(id){
        CartItems.remove({_id:id});
    }
});
