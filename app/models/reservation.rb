class Reservation < ApplicationRecord
    belongs_to :member, optional: true
end
