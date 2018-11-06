class Dog < ApplicationRecord
    has_many :reactions

    def get_age
        require 'date'
        today = Date.today
        birthdate = self.dob
        age = today.year - birthdate.year
        age = age - 1 if (
            birthdate.month >  today.month or 
            (birthdate.month >= today.month and birthdate.day > today.day)
        )
        age
    end
end
