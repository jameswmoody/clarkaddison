class Reaction < ApplicationRecord
    validates :dog_id, numericality: { less_than_or_equal_to: 10,  only_integer: true }
    belongs_to :dog

    def dog_name
      self.dog.name
    end
end
