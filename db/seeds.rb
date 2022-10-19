Score.delete_all
Favorite.delete_all
House.delete_all
User.delete_all


5.times do |i|
    puts i
    @user = User.create(
        email: "test#{i}@email.com",
        image: Faker::Avatar::image,
        password: "password",
        name: "test_name#{i}",
        nickname: "test_user_name#{i}"
    )
    i++

    5.times do
        cities = [ "Lehi", "Provo", "Salt Lake City"]
        @house = House.create(
            house_name: Faker::Name.last_name,
            address: Faker::Address.street_address,
            city: cities.sample,
            img: Faker::Avatar::image,
            avg_candy: Faker::Number.decimal(l_digits: 1),
            avg_scary: Faker::Number.decimal(l_digits: 1)
        )
    end
end