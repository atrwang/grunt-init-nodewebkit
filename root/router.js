PlasoManage.Router.map(function () {
    this.route('login', {
        path: '/'
    });
});

PlasoManage.LoginRoute = Ember.Route.extend({
    setupController: function (controller) {
        $('#busy').fadeIn();
        setTimeout(function () {
            controller.loadLoadingName();
            controller.checkNetworkAndUpdata();
            $('#busy').fadeOut();
        }, 20);
    },
    renderTemplate: function () {
        this.render({
            outlet: 'loginContent'
        });
    }
});


