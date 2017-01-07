import Backbone from 'backbone'

export const TrialModel = Backbone.Model.extend({
    url: 'https://clinicaltrialsapi.cancer.gov/v1/clinical-trials'
})

export const TrialCollection = Backbone.Collection.extend({
    url: 'https://clinicaltrialsapi.cancer.gov/v1/clinical-trials'
})