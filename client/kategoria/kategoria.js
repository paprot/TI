Template.kategoria.Categories = function(){
    return Categories.find();
};
Template.kategoria.SubCategories = function(){
    return SubCategories.find({cat:this._id});
};
