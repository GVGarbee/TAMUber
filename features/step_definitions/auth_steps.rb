When(/^I enter a valid UIN$/) do 
    fill_in 'UIN', :with => '333'
end

Then(/^I should see my user info$/) do
    expect(page).to have_css('img#studentPic')
    expect(page).to have_css('div#studentName', :text => 'Bob Jones')
    expect(page).to have_css('div#UIN', :text => '333')
end

Then(/^I should see the driver info$/) do
    expect(page).to have_css('div#driverName', :text => 'Driver')
end