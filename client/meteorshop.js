//konfiguracja iron-router'a
Session.setDefault('kategoria', null);
Router.configure({
    layoutTemplate:'layout',
    yieldTemplates:{
        'produkty':{to:'produkty'},
        'koszyk':{to:'koszyk'},
        'kategoria':{to:'kategoria'}
    }
});
//konfiguracja router mapy
Router.map(function(){
    this.route('/','layout');
    this.route('/produkty', {
        data: function() {
            Session.set('kategoria',this.params.name);
        },
        template:'layout',
        path:'/:name'
    });
});
