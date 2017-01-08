import Backbone from 'backbone'

export const TrialModel = Backbone.Model.extend({
    url: function() {
        return 'https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/' + this.id
    },
    defaults: {
        'saved': false
    },
    initialize: function(id) {
        this.id = id
    }
})

export const TrialCollection = Backbone.Collection.extend({
    url: 'https://clinicaltrialsapi.cancer.gov/v1/clinical-trials/',
    model: TrialModel
})