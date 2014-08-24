Template.koszyk.cartitems = function(){
    var shopCart = [];
    var cartItems = CartItems.find({});
    var total = 0;

    cartItems.forEach(function(cartitem){
        var item = _.extend(cartitem,{});
        var product = Products.findOne({_id:cartitem.product});
        cartitem.productname = product.name;
        cartitem.price = (Number(product.price) * cartitem.qty);
        total += cartitem.price;
        shopCart.push(cartitem);
    });
    shopCart.subtotal = total;
    shopCart.total = shopCart.subtotal;
    return shopCart;
};

Template.koszyk.currency = function(num){
    return Number(num).toFixed(2) + ' zl';
};
Template.koszyk.events({
    'click .removeci':function(evt,tmpl){
        Meteor.call('removeCartItem',this._id);
    }
});
