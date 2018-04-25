When(/^I enter an invalid UIN$/) do 
    fill_in 'UIN', :with => '111'
end

Then(/^I should see a rejection message$/) do
    expect(page).to have_css("div#UIN", :text => "Invalid UIN: 111")
end