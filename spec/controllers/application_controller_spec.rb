require 'rails_helper'

#Test that expects the user to have a route
RSpec.describe User do
    it {it_expected.to have_db_column :route}
end

#Test that expects the route to have a start and end point
RSpec.describe User do
    it {is_expected.to have_db_column :start}
    it {is_expected.to have_db_column :end}
end

