Template.produkty.productlist = function(){
    return Products.find({catName:Session.get('kategoria')});
};
Template.produkty.currency = function(num){
    return  Number(num).toFixed(2) + ' zl';
};
Template.produkt.events({
    'click .addcart':function(evt,tmpl){
        var qty = tmpl.find('.prodqty').value;
        var product = this._id;
        var sessid = Meteor.default_connection._lastSessionId;
        Meteor.call('addToCart',qty,product,sessid);
    }
});
Template.produkty.catnotselected = function(){
    return Session.equals('kategoria',null);
};
Template.produkty.category = function(){
    return Session.get('kategoria');
};
