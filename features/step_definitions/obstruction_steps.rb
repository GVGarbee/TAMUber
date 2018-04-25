When(/^The cart stops$/) do 
    visit root_path
end

Then(/^I should see a rejection message$/) do
    expect(page).to have_css("div#obstacle", :text => "Cart is obstructed")
end