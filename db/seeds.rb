Scores.delete_all
Favorites.delete_all
House.delete_all
User.delete_all

i = 1
5.times do
    @user = User.create(
        email: "test#{i}@email.com",
        password: "password",
        name: "test_name#{i}"
        nickname: "test_user_name#{1}"
    )
end

10.times do
    @house = House.create(
        house_name: Faker::Name.last_name,
        address: Faker::Address.street_address,
        avg_candy: Faker::Number.decimal(l_digits: 2),
        avg_scary: Faker::Number.decimal(l_digits: 2)
    )
end