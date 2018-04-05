When(/^I go to the homepage$/) do 
    visit root_path
end

Then(/^I should see the map$/) do
    expect(page).to have_css('div#googleMap')
end

Then(/^I should see the route$/) do
    expect(page).to have_css('')
end
    
Then(/^I should see the correct "start" and "end" points$/) do
    expect("start").to eq("start-latitude-goes-here")
    expect("end").to eq("end-latitude-goes-here")
end

Then(/^I should see the planned actions$/) do
    expect(page).to have_css('div#turn_by_turn')
end

Then(/^I should see the steps that make correspond to the upcoming route$/) do
    expect(page).to have_css('div#step')
end